#!/usr/bin/env python3
"""
Automated Literature Monitoring System for Waymark Population Health Protocols

This system monitors PubMed and other sources for new evidence relevant to
existing protocols and identifies opportunities for new protocol development.

Author: Sanjay Basu MD PhD
Affiliations: Waymark, University of California San Francisco
"""

import requests
import json
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional, Tuple
import logging
import time
import re
from urllib.parse import quote
import feedparser
import hashlib

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class PubMedMonitor:
    """Monitors PubMed for new literature relevant to protocols."""
    
    def __init__(self, email: str = "research@waymarkcare.com"):
        """Initialize PubMed monitor with email for API access."""
        self.base_url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
        self.email = email
        self.api_key = None  # Optional: set API key for higher rate limits
        
        # Search strategies for different domains
        self.search_strategies = {
            "diabetes": {
                "terms": [
                    "diabetes mellitus AND (self-management OR self-care OR education)",
                    "diabetes AND (community health worker OR care coordinator)",
                    "diabetes AND (medication adherence OR glycemic control)",
                    "diabetes AND (population health OR care management)"
                ],
                "filters": ["systematic review", "randomized controlled trial", "clinical guideline"]
            },
            "hypertension": {
                "terms": [
                    "hypertension AND (blood pressure monitoring OR self-monitoring)",
                    "hypertension AND (community health worker OR care coordinator)",
                    "hypertension AND (medication adherence OR lifestyle intervention)",
                    "hypertension AND (population health OR care management)"
                ],
                "filters": ["systematic review", "randomized controlled trial", "clinical guideline"]
            },
            "heart_failure": {
                "terms": [
                    "heart failure AND (self-care OR self-management)",
                    "heart failure AND (care coordination OR care transitions)",
                    "heart failure AND (medication adherence OR monitoring)",
                    "heart failure AND (population health OR care management)"
                ],
                "filters": ["systematic review", "randomized controlled trial", "clinical guideline"]
            },
            "medication_adherence": {
                "terms": [
                    "medication adherence AND (intervention OR program)",
                    "medication adherence AND (pharmacy technician OR pharmacist)",
                    "medication adherence AND (chronic disease OR population health)",
                    "medication adherence AND (community health worker OR care coordinator)"
                ],
                "filters": ["systematic review", "randomized controlled trial", "clinical guideline"]
            },
            "care_transitions": {
                "terms": [
                    "care transitions AND (hospital discharge OR readmission)",
                    "care transitions AND (care coordinator OR case manager)",
                    "care transitions AND (intervention OR program)",
                    "transitional care AND (population health OR care management)"
                ],
                "filters": ["systematic review", "randomized controlled trial", "clinical guideline"]
            },
            "mental_health": {
                "terms": [
                    "mental health AND (community health worker OR peer support)",
                    "depression AND (care management OR population health)",
                    "anxiety AND (intervention OR self-management)",
                    "mental health AND (primary care OR integrated care)"
                ],
                "filters": ["systematic review", "randomized controlled trial", "clinical guideline"]
            },
            "social_determinants": {
                "terms": [
                    "social determinants of health AND intervention",
                    "health equity AND (community health worker OR care coordinator)",
                    "social determinants AND (population health OR care management)",
                    "health disparities AND (intervention OR program)"
                ],
                "filters": ["systematic review", "randomized controlled trial", "clinical guideline"]
            }
        }
    
    def search_pubmed(self, query: str, days_back: int = 30, max_results: int = 100) -> List[Dict[str, Any]]:
        """
        Search PubMed for articles published in the last N days.
        
        Args:
            query: Search query string
            days_back: Number of days to look back
            max_results: Maximum number of results to return
            
        Returns:
            List of article metadata dictionaries
        """
        # Calculate date range
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        # Format dates for PubMed
        date_filter = f"{start_date.strftime('%Y/%m/%d')}:{end_date.strftime('%Y/%m/%d')}[pdat]"
        
        # Construct search query with date filter
        full_query = f"({query}) AND {date_filter}"
        
        # Step 1: Search for article IDs
        search_url = f"{self.base_url}/esearch.fcgi"
        search_params = {
            "db": "pubmed",
            "term": full_query,
            "retmax": max_results,
            "retmode": "xml",
            "email": self.email,
            "tool": "waymark_literature_monitor"
        }
        
        if self.api_key:
            search_params["api_key"] = self.api_key
        
        try:
            logger.info(f"Searching PubMed: {query}")
            response = requests.get(search_url, params=search_params)
            response.raise_for_status()
            
            # Parse XML response
            root = ET.fromstring(response.content)
            id_list = root.find(".//IdList")
            
            if id_list is None:
                logger.warning(f"No results found for query: {query}")
                return []
            
            pmids = [id_elem.text for id_elem in id_list.findall("Id")]
            
            if not pmids:
                logger.info(f"No new articles found for query: {query}")
                return []
            
            logger.info(f"Found {len(pmids)} articles for query: {query}")
            
            # Step 2: Fetch article details
            return self._fetch_article_details(pmids)
            
        except requests.RequestException as e:
            logger.error(f"Error searching PubMed: {e}")
            return []
        except ET.ParseError as e:
            logger.error(f"Error parsing PubMed response: {e}")
            return []
    
    def _fetch_article_details(self, pmids: List[str]) -> List[Dict[str, Any]]:
        """Fetch detailed information for a list of PMIDs."""
        if not pmids:
            return []
        
        # Batch fetch article details
        fetch_url = f"{self.base_url}/efetch.fcgi"
        fetch_params = {
            "db": "pubmed",
            "id": ",".join(pmids),
            "retmode": "xml",
            "email": self.email,
            "tool": "waymark_literature_monitor"
        }
        
        if self.api_key:
            fetch_params["api_key"] = self.api_key
        
        try:
            response = requests.get(fetch_url, params=fetch_params)
            response.raise_for_status()
            
            # Parse XML response
            root = ET.fromstring(response.content)
            articles = []
            
            for article_elem in root.findall(".//PubmedArticle"):
                article_data = self._parse_article_xml(article_elem)
                if article_data:
                    articles.append(article_data)
            
            return articles
            
        except requests.RequestException as e:
            logger.error(f"Error fetching article details: {e}")
            return []
        except ET.ParseError as e:
            logger.error(f"Error parsing article details: {e}")
            return []
    
    def _parse_article_xml(self, article_elem: ET.Element) -> Optional[Dict[str, Any]]:
        """Parse article XML element into structured data."""
        try:
            # Extract PMID
            pmid_elem = article_elem.find(".//PMID")
            pmid = pmid_elem.text if pmid_elem is not None else None
            
            # Extract basic article info
            article_info = article_elem.find(".//Article")
            if article_info is None:
                return None
            
            # Title
            title_elem = article_info.find(".//ArticleTitle")
            title = title_elem.text if title_elem is not None else "No title"
            
            # Abstract
            abstract_elem = article_info.find(".//Abstract/AbstractText")
            abstract = abstract_elem.text if abstract_elem is not None else ""
            
            # Authors
            authors = []
            author_list = article_info.find(".//AuthorList")
            if author_list is not None:
                for author_elem in author_list.findall("Author"):
                    last_name = author_elem.find("LastName")
                    first_name = author_elem.find("ForeName")
                    if last_name is not None:
                        author_name = last_name.text
                        if first_name is not None:
                            author_name = f"{first_name.text} {author_name}"
                        authors.append(author_name)
            
            # Journal
            journal_elem = article_info.find(".//Journal/Title")
            journal = journal_elem.text if journal_elem is not None else "Unknown journal"
            
            # Publication date
            pub_date_elem = article_info.find(".//PubDate")
            pub_year = None
            if pub_date_elem is not None:
                year_elem = pub_date_elem.find("Year")
                if year_elem is not None:
                    pub_year = int(year_elem.text)
            
            # Publication types
            pub_types = []
            pub_type_list = article_elem.find(".//PublicationTypeList")
            if pub_type_list is not None:
                for pub_type_elem in pub_type_list.findall("PublicationType"):
                    pub_types.append(pub_type_elem.text)
            
            # DOI
            doi = None
            article_id_list = article_elem.find(".//ArticleIdList")
            if article_id_list is not None:
                for article_id_elem in article_id_list.findall("ArticleId"):
                    if article_id_elem.get("IdType") == "doi":
                        doi = article_id_elem.text
                        break
            
            return {
                "pmid": pmid,
                "title": title,
                "abstract": abstract,
                "authors": authors,
                "journal": journal,
                "publication_year": pub_year,
                "publication_types": pub_types,
                "doi": doi,
                "pubmed_url": f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/" if pmid else None
            }
            
        except Exception as e:
            logger.error(f"Error parsing article XML: {e}")
            return None
    
    def monitor_all_domains(self, days_back: int = 7) -> Dict[str, List[Dict[str, Any]]]:
        """Monitor all protocol domains for new literature."""
        results = {}
        
        for domain, strategy in self.search_strategies.items():
            logger.info(f"Monitoring domain: {domain}")
            domain_results = []
            
            for term in strategy["terms"]:
                # Add publication type filters
                for pub_filter in strategy["filters"]:
                    filtered_term = f"{term} AND {pub_filter}[pt]"
                    articles = self.search_pubmed(filtered_term, days_back=days_back, max_results=20)
                    domain_results.extend(articles)
                    
                    # Rate limiting - PubMed allows 3 requests per second
                    time.sleep(0.4)
            
            # Remove duplicates based on PMID
            seen_pmids = set()
            unique_results = []
            for article in domain_results:
                if article["pmid"] and article["pmid"] not in seen_pmids:
                    seen_pmids.add(article["pmid"])
                    unique_results.append(article)
            
            results[domain] = unique_results
            logger.info(f"Found {len(unique_results)} unique articles for {domain}")
        
        return results

class GuidelineMonitor:
    """Monitors clinical guidelines and professional organization updates."""
    
    def __init__(self):
        """Initialize guideline monitor."""
        self.guideline_sources = {
            "ADA": {
                "name": "American Diabetes Association",
                "rss_url": "https://diabetesjournals.org/care/rss/current.xml",
                "keywords": ["diabetes", "glycemic", "insulin", "metformin"]
            },
            "AHA": {
                "name": "American Heart Association",
                "rss_url": "https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=circ",
                "keywords": ["hypertension", "heart failure", "cardiovascular", "blood pressure"]
            },
            "CDC": {
                "name": "Centers for Disease Control and Prevention",
                "rss_url": "https://tools.cdc.gov/api/v2/resources/media/rss.rss",
                "keywords": ["population health", "chronic disease", "prevention"]
            }
        }
    
    def monitor_guidelines(self, days_back: int = 30) -> Dict[str, List[Dict[str, Any]]]:
        """Monitor guideline sources for updates."""
        results = {}
        cutoff_date = datetime.now() - timedelta(days=days_back)
        
        for source_id, source_info in self.guideline_sources.items():
            logger.info(f"Monitoring guidelines from {source_info['name']}")
            
            try:
                feed = feedparser.parse(source_info["rss_url"])
                relevant_updates = []
                
                for entry in feed.entries:
                    # Parse publication date
                    pub_date = None
                    if hasattr(entry, 'published_parsed') and entry.published_parsed:
                        pub_date = datetime(*entry.published_parsed[:6])
                    elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                        pub_date = datetime(*entry.updated_parsed[:6])
                    
                    # Check if recent enough
                    if pub_date and pub_date < cutoff_date:
                        continue
                    
                    # Check relevance based on keywords
                    title = entry.get('title', '').lower()
                    summary = entry.get('summary', '').lower()
                    content = f"{title} {summary}"
                    
                    is_relevant = any(keyword in content for keyword in source_info['keywords'])
                    
                    if is_relevant:
                        relevant_updates.append({
                            "title": entry.get('title', ''),
                            "summary": entry.get('summary', ''),
                            "link": entry.get('link', ''),
                            "published": pub_date.isoformat() if pub_date else None,
                            "source": source_info['name']
                        })
                
                results[source_id] = relevant_updates
                logger.info(f"Found {len(relevant_updates)} relevant updates from {source_info['name']}")
                
            except Exception as e:
                logger.error(f"Error monitoring {source_info['name']}: {e}")
                results[source_id] = []
        
        return results

class LiteratureAnalyzer:
    """Analyzes new literature for relevance to existing protocols."""
    
    def __init__(self):
        """Initialize literature analyzer."""
        self.relevance_keywords = {
            "high_priority": [
                "systematic review", "meta-analysis", "randomized controlled trial",
                "clinical guideline", "best practice", "evidence-based"
            ],
            "intervention_types": [
                "community health worker", "care coordinator", "case manager",
                "peer support", "self-management", "care management",
                "population health", "care transitions"
            ],
            "outcome_measures": [
                "readmission", "emergency department", "hospitalization",
                "medication adherence", "glycemic control", "blood pressure",
                "quality of life", "cost-effectiveness", "mortality"
            ]
        }
    
    def analyze_relevance(self, article: Dict[str, Any], protocol_domains: List[str]) -> Dict[str, Any]:
        """
        Analyze article relevance to protocol domains.
        
        Args:
            article: Article metadata
            protocol_domains: List of protocol domains to check against
            
        Returns:
            Relevance analysis results
        """
        title = article.get("title", "").lower()
        abstract = article.get("abstract", "").lower()
        content = f"{title} {abstract}"
        
        # Calculate relevance scores
        relevance_score = 0
        matched_keywords = []
        
        # High priority study types
        for keyword in self.relevance_keywords["high_priority"]:
            if keyword in content:
                relevance_score += 3
                matched_keywords.append(keyword)
        
        # Intervention types
        for keyword in self.relevance_keywords["intervention_types"]:
            if keyword in content:
                relevance_score += 2
                matched_keywords.append(keyword)
        
        # Outcome measures
        for keyword in self.relevance_keywords["outcome_measures"]:
            if keyword in content:
                relevance_score += 1
                matched_keywords.append(keyword)
        
        # Domain-specific relevance
        domain_matches = []
        for domain in protocol_domains:
            domain_keywords = domain.lower().replace("_", " ").split()
            if any(keyword in content for keyword in domain_keywords):
                domain_matches.append(domain)
                relevance_score += 2
        
        # Publication type bonus
        pub_types = article.get("publication_types", [])
        if any("systematic review" in pt.lower() for pt in pub_types):
            relevance_score += 5
        elif any("randomized controlled trial" in pt.lower() for pt in pub_types):
            relevance_score += 4
        elif any("guideline" in pt.lower() for pt in pub_types):
            relevance_score += 3
        
        return {
            "relevance_score": relevance_score,
            "matched_keywords": list(set(matched_keywords)),
            "domain_matches": domain_matches,
            "priority": "high" if relevance_score >= 8 else "medium" if relevance_score >= 4 else "low",
            "recommendation": self._generate_recommendation(article, relevance_score, domain_matches)
        }
    
    def _generate_recommendation(self, article: Dict[str, Any], score: int, domains: List[str]) -> str:
        """Generate recommendation for article follow-up."""
        if score >= 8:
            if domains:
                return f"High priority: Review for potential updates to {', '.join(domains)} protocols"
            else:
                return "High priority: Review for potential new protocol development"
        elif score >= 4:
            if domains:
                return f"Medium priority: Consider for {', '.join(domains)} protocol enhancement"
            else:
                return "Medium priority: Monitor for emerging evidence trends"
        else:
            return "Low priority: Archive for future reference"

class LiteratureReportGenerator:
    """Generates reports from literature monitoring results."""
    
    def __init__(self):
        """Initialize report generator."""
        pass
    
    def generate_weekly_report(self, 
                             pubmed_results: Dict[str, List[Dict[str, Any]]],
                             guideline_results: Dict[str, List[Dict[str, Any]]],
                             protocol_domains: List[str]) -> Dict[str, Any]:
        """Generate weekly literature monitoring report."""
        analyzer = LiteratureAnalyzer()
        
        # Analyze PubMed results
        analyzed_articles = []
        for domain, articles in pubmed_results.items():
            for article in articles:
                analysis = analyzer.analyze_relevance(article, protocol_domains)
                analyzed_articles.append({
                    "article": article,
                    "analysis": analysis,
                    "domain": domain
                })
        
        # Sort by relevance score
        analyzed_articles.sort(key=lambda x: x["analysis"]["relevance_score"], reverse=True)
        
        # Generate summary statistics
        total_articles = len(analyzed_articles)
        high_priority = len([a for a in analyzed_articles if a["analysis"]["priority"] == "high"])
        medium_priority = len([a for a in analyzed_articles if a["analysis"]["priority"] == "medium"])
        
        # Generate domain summary
        domain_summary = {}
        for domain in protocol_domains:
            domain_articles = [a for a in analyzed_articles if domain in a["analysis"]["domain_matches"]]
            domain_summary[domain] = {
                "total_articles": len(domain_articles),
                "high_priority": len([a for a in domain_articles if a["analysis"]["priority"] == "high"]),
                "top_articles": domain_articles[:3]  # Top 3 most relevant
            }
        
        # Count guideline updates
        total_guidelines = sum(len(updates) for updates in guideline_results.values())
        
        report = {
            "report_date": datetime.now().isoformat(),
            "summary": {
                "total_articles_found": total_articles,
                "high_priority_articles": high_priority,
                "medium_priority_articles": medium_priority,
                "guideline_updates": total_guidelines
            },
            "high_priority_articles": [a for a in analyzed_articles if a["analysis"]["priority"] == "high"][:10],
            "domain_summary": domain_summary,
            "guideline_updates": guideline_results,
            "recommendations": self._generate_action_items(analyzed_articles, guideline_results)
        }
        
        return report
    
    def _generate_action_items(self, 
                              analyzed_articles: List[Dict[str, Any]], 
                              guideline_results: Dict[str, List[Dict[str, Any]]]) -> List[str]:
        """Generate actionable recommendations from monitoring results."""
        action_items = []
        
        # High priority articles
        high_priority_articles = [a for a in analyzed_articles if a["analysis"]["priority"] == "high"]
        if high_priority_articles:
            action_items.append(f"Review {len(high_priority_articles)} high-priority articles for protocol updates")
        
        # Domain-specific recommendations
        domain_counts = {}
        for article in analyzed_articles:
            for domain in article["analysis"]["domain_matches"]:
                domain_counts[domain] = domain_counts.get(domain, 0) + 1
        
        for domain, count in sorted(domain_counts.items(), key=lambda x: x[1], reverse=True)[:3]:
            if count >= 3:
                action_items.append(f"Consider updating {domain} protocols based on {count} new articles")
        
        # Guideline updates
        for source, updates in guideline_results.items():
            if updates:
                action_items.append(f"Review {len(updates)} guideline updates from {source}")
        
        return action_items

def main():
    """Main function for literature monitoring."""
    logger.info("Starting literature monitoring process")
    
    # Initialize monitors
    pubmed_monitor = PubMedMonitor()
    guideline_monitor = GuidelineMonitor()
    report_generator = LiteratureReportGenerator()
    
    # Define protocol domains
    protocol_domains = [
        "diabetes", "hypertension", "heart_failure", "medication_adherence",
        "care_transitions", "mental_health", "social_determinants"
    ]
    
    # Monitor PubMed
    logger.info("Monitoring PubMed for new literature")
    pubmed_results = pubmed_monitor.monitor_all_domains(days_back=7)
    
    # Monitor guidelines
    logger.info("Monitoring clinical guidelines")
    guideline_results = guideline_monitor.monitor_guidelines(days_back=30)
    
    # Generate report
    logger.info("Generating literature monitoring report")
    report = report_generator.generate_weekly_report(
        pubmed_results, guideline_results, protocol_domains
    )
    
    # Save report
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    report_filename = f"literature_monitoring_report_{timestamp}.json"
    
    with open(report_filename, 'w') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Literature monitoring report saved to {report_filename}")
    
    # Print summary
    print(f"\nLiterature Monitoring Summary:")
    print(f"Total articles found: {report['summary']['total_articles_found']}")
    print(f"High priority articles: {report['summary']['high_priority_articles']}")
    print(f"Guideline updates: {report['summary']['guideline_updates']}")
    print(f"\nAction items:")
    for item in report['recommendations']:
        print(f"- {item}")

if __name__ == "__main__":
    main()

