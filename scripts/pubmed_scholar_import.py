import os
import json
import requests
import argparse
from bs4 import BeautifulSoup
import time
import re
from scholarly import scholarly
from datetime import datetime

def search_pubmed(query, max_results=50):
    """
    Search PubMed and return structured results
    """
    base_url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
    
    # First get the IDs of matching articles
    search_url = f"{base_url}esearch.fcgi?db=pubmed&term={query}&retmax={max_results}&retmode=json"
    response = requests.get(search_url)
    search_results = response.json()
    
    if 'esearchresult' not in search_results or 'idlist' not in search_results['esearchresult']:
        print(f"No results found for query: {query}")
        return []
    
    id_list = search_results['esearchresult']['idlist']
    
    # Then fetch details for each article
    articles = []
    for pmid in id_list:
        fetch_url = f"{base_url}efetch.fcgi?db=pubmed&id={pmid}&retmode=xml"
        response = requests.get(fetch_url)
        soup = BeautifulSoup(response.content, 'xml')
        
        # Extract article details
        try:
            title = soup.find('ArticleTitle').text
            abstract = soup.find('AbstractText')
            abstract = abstract.text if abstract else ""
            
            # Extract authors
            author_list = soup.find_all('Author')
            authors = []
            for author in author_list:
                last_name = author.find('LastName')
                fore_name = author.find('ForeName')
                if last_name and fore_name:
                    authors.append(f"{last_name.text} {fore_name.text}")
            
            # Extract journal info
            journal = soup.find('Journal')
            journal_title = journal.find('Title').text if journal and journal.find('Title') else ""
            year = soup.find('PubDate').find('Year')
            year = year.text if year else ""
            
            # Extract DOI
            article_id_list = soup.find_all('ArticleId')
            doi = ""
            for article_id in article_id_list:
                if article_id.get('IdType') == 'doi':
                    doi = article_id.text
            
            articles.append({
                'title': title,
                'abstract': abstract,
                'authors': ", ".join(authors),
                'journal': journal_title,
                'year': year,
                'doi': doi,
                'pmid': pmid,
                'url': f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/"
            })
            
            # Be nice to the API
            time.sleep(1)
            
        except Exception as e:
            print(f"Error processing article {pmid}: {e}")
    
    return articles

def search_google_scholar(query, max_results=20):
    """
    Search Google Scholar and return structured results
    """
    articles = []
    search_query = scholarly.search_pubs(query)
    
    count = 0
    for result in search_query:
        if count >= max_results:
            break
            
        try:
            # Get full publication info
            pub = scholarly.fill(result)
            
            # Extract relevant fields
            title = pub.get('bib', {}).get('title', "")
            abstract = pub.get('bib', {}).get('abstract', "")
            authors = pub.get('bib', {}).get('author', [])
            authors = ", ".join(authors) if isinstance(authors, list) else authors
            journal = pub.get('bib', {}).get('journal', "")
            year = pub.get('bib', {}).get('pub_year', "")
            url = pub.get('pub_url', "")
            
            articles.append({
                'title': title,
                'abstract': abstract,
                'authors': authors,
                'journal': journal,
                'year': year,
                'doi': "",  # Scholar doesn't reliably provide DOI
                'url': url
            })
            
            count += 1
            # Be nice to Google Scholar to avoid blocking
            time.sleep(2)
            
        except Exception as e:
            print(f"Error processing Scholar result: {e}")
            time.sleep(5)  # Wait longer if there's an error
    
    return articles

def convert_to_recommendation_format(articles, domain_id, role_id, evidence_level="B"):
    """
    Convert article data to recommendation format
    """
    recommendations = []
    
    for article in articles:
        # Create a basic recommendation from the article
        title = article['title']
        abstract = article['abstract']
        
        # Generate implementation guidance from abstract
        implementation_guidance = f"Based on the research: {abstract[:200]}..." if abstract else "Implementation guidance to be determined based on full text review."
        
        # Generate scientific rationale
        scientific_rationale = f"According to {article['authors']} ({article['year']}): {abstract[:150]}..." if abstract else "Scientific rationale to be determined based on full text review."
        
        # Create citation
        citation = {
            'authors': article['authors'],
            'title': article['title'],
            'journal': article['journal'],
            'year': article['year'] if article['year'] else datetime.now().year,
            'doi': article['doi'],
            'url': article['url']
        }
        
        recommendation = {
            'title': title,
            'content': abstract[:500] + "..." if len(abstract) > 500 else abstract,
            'implementation_guidance': implementation_guidance,
            'scientific_rationale': scientific_rationale,
            'expected_outcomes': "Outcomes to be determined based on full text review.",
            'domain_id': domain_id,
            'role_id': role_id,
            'evidence_level': evidence_level,
            'citations': [citation]
        }
        
        recommendations.append(recommendation)
    
    return recommendations

def save_recommendations(recommendations, output_dir, domain_name, role_name):
    """
    Save recommendations to a JSON file
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{domain_name}_{role_name}_{timestamp}.json"
    filepath = os.path.join(output_dir, filename)
    
    with open(filepath, 'w') as f:
        json.dump(recommendations, f, indent=2)
    
    print(f"Saved {len(recommendations)} recommendations to {filepath}")
    return filepath

def main():
    parser = argparse.ArgumentParser(description='Generate recommendations from PubMed and Google Scholar')
    parser.add_argument('--query', required=True, help='Search query')
    parser.add_argument('--domain_id', required=True, type=int, help='Domain ID')
    parser.add_argument('--domain_name', required=True, help='Domain name')
    parser.add_argument('--role_id', required=True, type=int, help='Role ID')
    parser.add_argument('--role_name', required=True, help='Role name')
    parser.add_argument('--max_results', type=int, default=20, help='Maximum number of results per source')
    parser.add_argument('--output_dir', default='data/raw/batch_imports', help='Output directory')
    parser.add_argument('--source', choices=['pubmed', 'scholar', 'both'], default='both', help='Search source')
    
    args = parser.parse_args()
    
    all_articles = []
    
    if args.source in ['pubmed', 'both']:
        print(f"Searching PubMed for: {args.query}")
        pubmed_articles = search_pubmed(args.query, args.max_results)
        print(f"Found {len(pubmed_articles)} articles on PubMed")
        all_articles.extend(pubmed_articles)
    
    if args.source in ['scholar', 'both']:
        print(f"Searching Google Scholar for: {args.query}")
        scholar_articles = search_google_scholar(args.query, args.max_results)
        print(f"Found {len(scholar_articles)} articles on Google Scholar")
        all_articles.extend(scholar_articles)
    
    # Convert to recommendation format
    recommendations = convert_to_recommendation_format(all_articles, args.domain_id, args.role_id)
    
    # Save to file
    save_recommendations(recommendations, args.output_dir, args.domain_name, args.role_name)

if __name__ == "__main__":
    main()
