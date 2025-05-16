import os
import json
from typing import Dict, List, Optional, Union

# Define the base data models
class Citation:
    def __init__(
        self,
        authors: str,
        title: str,
        journal: str,
        year: int,
        doi: Optional[str] = None,
        url: Optional[str] = None
    ):
        self.authors = authors
        self.title = title
        self.journal = journal
        self.year = year
        self.doi = doi
        self.url = url
    
    def to_dict(self) -> Dict:
        return {
            "authors": self.authors,
            "title": self.title,
            "journal": self.journal,
            "year": self.year,
            "doi": self.doi,
            "url": self.url
        }
    
    @classmethod
    def from_dict(cls, data: Dict) -> 'Citation':
        return cls(
            authors=data.get("authors", ""),
            title=data.get("title", ""),
            journal=data.get("journal", ""),
            year=data.get("year", 0),
            doi=data.get("doi"),
            url=data.get("url")
        )


class Evidence:
    def __init__(
        self,
        level: str,
        citations: List[Citation]
    ):
        self.level = level
        self.citations = citations
    
    def to_dict(self) -> Dict:
        return {
            "level": self.level,
            "citations": [citation.to_dict() for citation in self.citations]
        }
    
    @classmethod
    def from_dict(cls, data: Dict) -> 'Evidence':
        return cls(
            level=data.get("level", "C"),
            citations=[Citation.from_dict(citation) for citation in data.get("citations", [])]
        )


class Entity:
    def __init__(
        self,
        id: str,
        name: str
    ):
        self.id = id
        self.name = name
    
    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "name": self.name
        }
    
    @classmethod
    def from_dict(cls, data: Dict) -> 'Entity':
        return cls(
            id=data.get("id", ""),
            name=data.get("name", "")
        )


class Recommendation:
    def __init__(
        self,
        id: str,
        title: str,
        domain: Entity,
        subdomain: Optional[Entity] = None,
        roles: List[Entity] = None,
        priority_level: str = "medium",
        recommendation: str = "",
        rationale: str = "",
        expected_outcome: str = "",
        evidence: Optional[Evidence] = None,
        implementation_notes: str = "",
        last_updated: str = "",
        version: str = "1.0"
    ):
        self.id = id
        self.title = title
        self.domain = domain
        self.subdomain = subdomain
        self.roles = roles or []
        self.priority_level = priority_level
        self.recommendation = recommendation
        self.rationale = rationale
        self.expected_outcome = expected_outcome
        self.evidence = evidence or Evidence("C", [])
        self.implementation_notes = implementation_notes
        self.last_updated = last_updated
        self.version = version
    
    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "title": self.title,
            "domain": self.domain.to_dict(),
            "subdomain": self.subdomain.to_dict() if self.subdomain else None,
            "roles": [role.to_dict() for role in self.roles],
            "priority_level": self.priority_level,
            "recommendation": self.recommendation,
            "rationale": self.rationale,
            "expected_outcome": self.expected_outcome,
            "evidence": self.evidence.to_dict(),
            "implementation_notes": self.implementation_notes,
            "last_updated": self.last_updated,
            "version": self.version
        }
    
    @classmethod
    def from_dict(cls, data: Dict) -> 'Recommendation':
        return cls(
            id=data.get("id", ""),
            title=data.get("title", ""),
            domain=Entity.from_dict(data.get("domain", {"id": "", "name": ""})),
            subdomain=Entity.from_dict(data.get("subdomain", {"id": "", "name": ""})) if data.get("subdomain") else None,
            roles=[Entity.from_dict(role) for role in data.get("roles", [])],
            priority_level=data.get("priority_level", "medium"),
            recommendation=data.get("recommendation", ""),
            rationale=data.get("rationale", ""),
            expected_outcome=data.get("expected_outcome", ""),
            evidence=Evidence.from_dict(data.get("evidence", {"level": "C", "citations": []})),
            implementation_notes=data.get("implementation_notes", ""),
            last_updated=data.get("last_updated", ""),
            version=data.get("version", "1.0")
        )


class RecommendationStore:
    def __init__(self, data_dir: str):
        self.data_dir = data_dir
        self.processed_dir = os.path.join(data_dir, "processed")
        os.makedirs(self.processed_dir, exist_ok=True)
    
    def save_recommendation(self, recommendation: Recommendation) -> None:
        """Save a recommendation to the store"""
        file_path = os.path.join(self.processed_dir, f"{recommendation.id}.json")
        with open(file_path, 'w') as f:
            json.dump(recommendation.to_dict(), f, indent=2)
    
    def get_recommendation(self, recommendation_id: str) -> Optional[Recommendation]:
        """Get a recommendation by ID"""
        file_path = os.path.join(self.processed_dir, f"{recommendation_id}.json")
        if not os.path.exists(file_path):
            return None
        
        with open(file_path, 'r') as f:
            data = json.load(f)
        
        return Recommendation.from_dict(data)
    
    def list_recommendations(self) -> List[str]:
        """List all recommendation IDs"""
        recommendations = []
        for filename in os.listdir(self.processed_dir):
            if filename.endswith('.json'):
                recommendations.append(filename[:-5])  # Remove .json extension
        return recommendations
    
    def search_by_domain(self, domain_id: str) -> List[Recommendation]:
        """Search recommendations by domain ID"""
        results = []
        for recommendation_id in self.list_recommendations():
            recommendation = self.get_recommendation(recommendation_id)
            if recommendation and recommendation.domain.id == domain_id:
                results.append(recommendation)
        return results
    
    def search_by_role(self, role_id: str) -> List[Recommendation]:
        """Search recommendations by role ID"""
        results = []
        for recommendation_id in self.list_recommendations():
            recommendation = self.get_recommendation(recommendation_id)
            if recommendation and any(role.id == role_id for role in recommendation.roles):
                results.append(recommendation)
        return results
    
    def search_by_priority(self, priority_level: str) -> List[Recommendation]:
        """Search recommendations by priority level"""
        results = []
        for recommendation_id in self.list_recommendations():
            recommendation = self.get_recommendation(recommendation_id)
            if recommendation and recommendation.priority_level == priority_level:
                results.append(recommendation)
        return results
