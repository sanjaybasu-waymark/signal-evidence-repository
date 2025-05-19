import os
import json
from typing import Dict, List, Optional, Union
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Integer, ForeignKey, Table, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

# Import the db instance from database.py
from .database import db

# Define the SQLAlchemy ORM models
class Domain(db.Model):
    __tablename__ = 'domains'
    
    id = Column(String(50), primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    
    # Relationships
    recommendations = relationship("Recommendation", back_populates="domain")
    
    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description
        }

class Role(db.Model):
    __tablename__ = 'roles'
    
    id = Column(String(50), primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    
    # Relationships
    recommendations = relationship("Recommendation", secondary="recommendation_role", back_populates="roles")
    
    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description
        }

# Association table for recommendation-role many-to-many relationship
recommendation_role = Table(
    'recommendation_role',
    db.metadata,
    Column('recommendation_id', String(100), ForeignKey('recommendations.id'), primary_key=True),
    Column('role_id', String(50), ForeignKey('roles.id'), primary_key=True)
)

class Citation(db.Model):
    __tablename__ = 'citations'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    recommendation_id = Column(String(100), ForeignKey('recommendations.id'), nullable=False)
    authors = Column(Text, nullable=True)
    title = Column(Text, nullable=False)
    journal = Column(String(255), nullable=True)
    year = Column(String(10), nullable=True)
    doi = Column(String(255), nullable=True)
    url = Column(String(255), nullable=True)
    
    # Relationships
    recommendation = relationship("Recommendation", back_populates="citations")
    
    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "authors": self.authors,
            "title": self.title,
            "journal": self.journal,
            "year": self.year,
            "doi": self.doi,
            "url": self.url
        }

class Recommendation(db.Model):
    __tablename__ = 'recommendations'
    
    id = Column(String(100), primary_key=True)
    title = Column(String(255), nullable=False)
    domain_id = Column(String(50), ForeignKey('domains.id'), nullable=False)
    recommendation_text = Column(Text, nullable=False)
    rationale = Column(Text, nullable=True)
    expected_outcome = Column(Text, nullable=True)
    implementation_notes = Column(Text, nullable=True)
    priority_level = Column(String(20), nullable=True)
    evidence_level = Column(String(20), nullable=True)
    last_updated = Column(String(20), nullable=True)
    version = Column(String(10), nullable=True)
    
    # Relationships
    domain = relationship("Domain", back_populates="recommendations")
    roles = relationship("Role", secondary="recommendation_role", back_populates="recommendations")
    citations = relationship("Citation", back_populates="recommendation", cascade="all, delete-orphan")
    
    def to_dict(self) -> Dict:
        return {
            "id": self.id,
            "title": self.title,
            "domain": self.domain.to_dict() if self.domain else None,
            "roles": [role.to_dict() for role in self.roles],
            "recommendation": self.recommendation_text,
            "rationale": self.rationale,
            "expected_outcome": self.expected_outcome,
            "implementation_notes": self.implementation_notes,
            "priority_level": self.priority_level,
            "evidence_level": self.evidence_level,
            "last_updated": self.last_updated,
            "version": self.version,
            "citations": [citation.to_dict() for citation in self.citations]
        }

# Legacy RecommendationStore class for compatibility with vector_store.py
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
        
        # Create a session
        from .database import db
        session = db.session
        
        # Query the recommendation from the database
        return session.query(Recommendation).filter(Recommendation.id == recommendation_id).first()
    
    def list_recommendations(self) -> List[str]:
        """List all recommendation IDs"""
        from .database import db
        session = db.session
        recommendations = session.query(Recommendation.id).all()
        return [rec[0] for rec in recommendations]
    
    def search_by_domain(self, domain_id: str) -> List[Recommendation]:
        """Search recommendations by domain ID"""
        from .database import db
        session = db.session
        return session.query(Recommendation).filter(Recommendation.domain_id == domain_id).all()
    
    def search_by_role(self, role_id: str) -> List[Recommendation]:
        """Search recommendations by role ID"""
        from .database import db
        session = db.session
        return session.query(Recommendation).join(Recommendation.roles).filter(Role.id == role_id).all()
