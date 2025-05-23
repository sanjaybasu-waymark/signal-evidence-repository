"""
Script to migrate data to database.
"""

import os
import sys
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.db.models import Base, Domain, Role, Recommendation
from config.domains import DOMAINS
from config.roles import ROLES

def get_db():
    """Get database session."""
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    
    engine = create_engine('sqlite:///data/signal_evidence.db')
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    return Session()

def init_db():
    """Initialize database with schema and seed data."""
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    
    engine = create_engine('sqlite:///data/signal_evidence.db')
    Base.metadata.create_all(engine)
    
    # Create session
    Session = sessionmaker(bind=engine)
    session = Session()
    
    # Seed domains
    for domain_data in DOMAINS:
        domain = session.query(Domain).filter_by(id=domain_data['id']).first()
        if not domain:
            domain = Domain(
                id=domain_data['id'],
                name=domain_data['name'],
                description=domain_data['description'],
                slug=domain_data['slug']
            )
            session.add(domain)
    
    # Seed roles
    for role_data in ROLES:
        role = session.query(Role).filter_by(id=role_data['id']).first()
        if not role:
            role = Role(
                id=role_data['id'],
                name=role_data['name'],
                description=role_data['description'],
                slug=role_data['slug']
            )
            session.add(role)
    
    session.commit()
    return engine

def import_batch(json_file, session):
    """Import batch of recommendations from JSON file."""
    if not os.path.exists(json_file):
        print(f"File not found: {json_file}")
        return 0
    
    with open(json_file, 'r') as f:
        data = json.load(f)
    
    count = 0
    for item in data:
        try:
            # Check if recommendation already exists
            existing = session.query(Recommendation).filter_by(title=item['title']).first()
            if existing:
                print(f"Recommendation already exists: {item['title']}")
                continue
            
            # Create new recommendation
            recommendation = Recommendation(
                title=item['title'],
                domain_id=item['domain_id'],
                role_id=item['role_id'],
                recommendation_text=item['recommendation_text'],
                implementation_guidance=item.get('implementation_guidance', ''),
                expected_outcomes=item.get('expected_outcomes', ''),
                evidence_level=item.get('evidence_level', ''),
                citation_authors=item['citation_authors'],
                citation_title=item['citation_title'],
                citation_journal=item.get('citation_journal', ''),
                citation_year=item['citation_year'],
                citation_doi=item.get('citation_doi', ''),
                target_population=item.get('target_population', ''),
                cost_effectiveness=item.get('cost_effectiveness', '')
            )
            
            session.add(recommendation)
            count += 1
            
        except Exception as e:
            print(f"Error importing recommendation: {e}")
            continue
    
    session.commit()
    return count

if __name__ == "__main__":
    print("Initializing database...")
    init_db()
    
    # Check if batch import file is provided
    if len(sys.argv) > 1:
        json_file = sys.argv[1]
        print(f"Importing recommendations from {json_file}...")
        session = get_db()
        count = import_batch(json_file, session)
        print(f"Imported {count} recommendations.")
    else:
        print("No batch import file provided. Database initialized with domains and roles only.")
