"""
Database models for the Signal Evidence Library.
"""

from sqlalchemy import Column, Integer, String, Text, ForeignKey, Float, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

Base = declarative_base()

class Domain(Base):
    """Domain model representing clinical areas."""
    __tablename__ = 'domains'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    slug = Column(String(50), unique=True)
    
    recommendations = relationship("Recommendation", back_populates="domain")
    
    def __repr__(self):
        return f"<Domain(id={self.id}, name='{self.name}')>"


class Role(Base):
    """Role model representing healthcare worker types."""
    __tablename__ = 'roles'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    slug = Column(String(50), unique=True)
    
    recommendations = relationship("Recommendation", back_populates="role")
    
    def __repr__(self):
        return f"<Role(id={self.id}, name='{self.name}')>"


class Recommendation(Base):
    """Recommendation model representing evidence-based clinical guidance."""
    __tablename__ = 'recommendations'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    domain_id = Column(Integer, ForeignKey('domains.id'))
    role_id = Column(Integer, ForeignKey('roles.id'))
    recommendation_text = Column(Text, nullable=False)
    implementation_guidance = Column(Text)
    expected_outcomes = Column(Text)
    evidence_level = Column(String(10))
    citation_authors = Column(Text)
    citation_title = Column(Text)
    citation_journal = Column(Text)
    citation_year = Column(Integer)
    citation_doi = Column(String(100))
    target_population = Column(Text)
    cost_effectiveness = Column(Text)
    
    # Vector embedding for semantic search
    embedding = Column(Text)
    
    # Relationships
    domain = relationship("Domain", back_populates="recommendations")
    role = relationship("Role", back_populates="recommendations")
    
    def __repr__(self):
        return f"<Recommendation(id={self.id}, title='{self.title}')>"


def get_db():
    """Get database session."""
    engine = create_engine('sqlite:///data/signal_evidence.db')
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    return Session()


def init_db():
    """Initialize database with schema."""
    engine = create_engine('sqlite:///data/signal_evidence.db')
    Base.metadata.create_all(engine)
    return engine
