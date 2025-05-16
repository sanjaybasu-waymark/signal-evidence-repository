import os
import json
import re
import requests
from typing import List, Dict, Any, Optional
from datetime import datetime

from ..db.models import Recommendation, Entity, Evidence, Citation

class ContentProcessor:
    """
    Process peer-reviewed literature into structured knowledge units
    """
    def __init__(self, data_dir: str):
        self.data_dir = data_dir
        self.raw_dir = os.path.join(data_dir, "raw")
        os.makedirs(self.raw_dir, exist_ok=True)
    
    def process_literature(self, content: str, metadata: Dict[str, Any]) -> Recommendation:
        """
        Process literature content into a structured recommendation
        
        Args:
            content: The text content of the literature
            metadata: Metadata about the literature including domain, roles, etc.
        
        Returns:
            A structured Recommendation object
        """
        # Generate a unique ID
        recommendation_id = f"{metadata['domain_id']}_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        
        # Create domain and roles entities
        domain = Entity(
            id=metadata["domain_id"],
            name=metadata["domain_name"]
        )
        
        roles = []
        for role in metadata.get("roles", []):
            roles.append(Entity(
                id=role["id"],
                name=role["name"]
            ))
        
        # Create citation
        citations = []
        for citation_data in metadata.get("citations", []):
            citations.append(Citation(
                authors=citation_data.get("authors", ""),
                title=citation_data.get("title", ""),
                journal=citation_data.get("journal", ""),
                year=citation_data.get("year", 2023),
                doi=citation_data.get("doi"),
                url=citation_data.get("url")
            ))
        
        evidence = Evidence(
            level=metadata.get("evidence_level", "B"),
            citations=citations
        )
        
        # Create recommendation
        recommendation = Recommendation(
            id=recommendation_id,
            title=metadata.get("title", ""),
            domain=domain,
            subdomain=Entity(
                id=metadata.get("subdomain_id", ""),
                name=metadata.get("subdomain_name", "")
            ) if metadata.get("subdomain_id") else None,
            roles=roles,
            priority_level=metadata.get("priority_level", "medium"),
            recommendation=metadata.get("recommendation", ""),
            rationale=metadata.get("rationale", ""),
            expected_outcome=metadata.get("expected_outcome", ""),
            evidence=evidence,
            implementation_notes=metadata.get("implementation_notes", ""),
            last_updated=datetime.now().isoformat(),
            version="1.0"
        )
        
        return recommendation
    
    def extract_from_pubmed(self, pubmed_id: str) -> Dict[str, Any]:
        """
        Extract metadata from PubMed API
        
        Args:
            pubmed_id: The PubMed ID of the article
        
        Returns:
            Metadata dictionary
        """
        # This is a simplified version for the prototype
        # In a real implementation, this would use the PubMed API
        
        # Simulate API call
        try:
            # For the prototype, we'll just return dummy data
            return {
                "authors": "Smith J, Johnson A, Williams B",
                "title": f"Sample article from PubMed ID {pubmed_id}",
                "journal": "Journal of Evidence-Based Medicine",
                "year": 2023,
                "doi": f"10.1000/example-{pubmed_id}",
                "url": f"https://pubmed.ncbi.nlm.nih.gov/{pubmed_id}/"
            }
        except Exception as e:
            print(f"Error extracting from PubMed: {e}")
            return {}
    
    def save_raw_content(self, content: str, filename: str) -> str:
        """
        Save raw content to the raw directory
        
        Args:
            content: The content to save
            filename: The filename to use
        
        Returns:
            The path to the saved file
        """
        file_path = os.path.join(self.raw_dir, filename)
        with open(file_path, 'w') as f:
            f.write(content)
        return file_path
