import os
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Text, Integer, ForeignKey, Table, DateTime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

# Association tables for many-to-many relationships
recommendation_role = Table(
    'recommendation_role',
    db.metadata,
    Column('recommendation_id', String(50), ForeignKey('recommendations.id'), primary_key=True),
    Column('role_id', String(50), ForeignKey('roles.id'), primary_key=True)
)

class Domain(db.Model):
    __tablename__ = 'domains'
    
    id = Column(String(50), primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    
    # Relationships
    recommendations = relationship("Recommendation", back_populates="domain")
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'recommendation_count': len(self.recommendations)
        }

class Role(db.Model):
    __tablename__ = 'roles'
    
    id = Column(String(50), primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    
    # Relationships
    recommendations = relationship("Recommendation", 
                                  secondary=recommendation_role,
                                  back_populates="roles")
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'recommendation_count': len(self.recommendations)
        }

class Citation(db.Model):
    __tablename__ = 'citations'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    recommendation_id = Column(String(50), ForeignKey('recommendations.id'))
    authors = Column(Text)
    title = Column(Text, nullable=False)
    journal = Column(String(255))
    year = Column(String(4))
    doi = Column(String(100))
    url = Column(String(255))
    
    # Relationships
    recommendation = relationship("Recommendation", back_populates="citations")
    
    def to_dict(self):
        return {
            'id': self.id,
            'authors': self.authors,
            'title': self.title,
            'journal': self.journal,
            'year': self.year,
            'doi': self.doi,
            'url': self.url
        }

class Recommendation(db.Model):
    __tablename__ = 'recommendations'
    
    id = Column(String(50), primary_key=True)
    title = Column(String(255), nullable=False)
    domain_id = Column(String(50), ForeignKey('domains.id'))
    recommendation_text = Column(Text, nullable=False)
    rationale = Column(Text)
    expected_outcome = Column(Text)
    implementation_notes = Column(Text)
    priority_level = Column(String(20))
    evidence_level = Column(String(20))
    last_updated = Column(DateTime, default=datetime.utcnow)
    version = Column(String(10), default="1.0")
    
    # Relationships
    domain = relationship("Domain", back_populates="recommendations")
    roles = relationship("Role", 
                        secondary=recommendation_role,
                        back_populates="recommendations")
    citations = relationship("Citation", back_populates="recommendation")
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'domain': self.domain.to_dict() if self.domain else None,
            'roles': [role.to_dict() for role in self.roles],
            'recommendation': self.recommendation_text,
            'rationale': self.rationale,
            'expected_outcome': self.expected_outcome,
            'implementation_notes': self.implementation_notes,
            'priority_level': self.priority_level,
            'evidence': {
                'level': self.evidence_level,
                'citations': [citation.to_dict() for citation in self.citations]
            },
            'last_updated': self.last_updated.strftime('%Y-%m-%d'),
            'version': self.version
        }
