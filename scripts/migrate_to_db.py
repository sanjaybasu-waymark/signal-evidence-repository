import os
import json
import sys
from datetime import datetime
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Add the project root to the Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Import the database models
from src.db.models import db, Domain, Role, Recommendation, Citation

# Load environment variables
load_dotenv()

# Configuration
DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'data')
PROCESSED_DATA_PATH = os.path.join(DATA_DIR, 'processed')

# Database connection
DB_URI = os.getenv('DATABASE_URL', 'sqlite:///signal_evidence_library.db')
engine = create_engine(DB_URI)
Session = sessionmaker(bind=engine)

def create_tables():
    """Create all database tables"""
    from src.db.models import db
    db.metadata.create_all(engine)
    print("Database tables created successfully")

def load_json_file(file_path):
    """Load a JSON file and return its contents"""
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return None

def migrate_domains(session):
    """Migrate domain data from JSON to database"""
    try:
        domain_index = load_json_file(os.path.join(PROCESSED_DATA_PATH, 'domain_index.json'))
        if not domain_index:
            print("Domain index not found or empty")
            return
        
        domains_created = 0
        for domain_id, domain_data in domain_index.items():
            # Skip if not a proper domain object
            if not isinstance(domain_data, dict) or 'name' not in domain_data:
                continue
                
            domain = Domain(
                id=domain_id,
                name=domain_data.get('name', ''),
                description=domain_data.get('description', '')
            )
            session.add(domain)
            domains_created += 1
        
        session.commit()
        print(f"Migrated {domains_created} domains")
    except Exception as e:
        session.rollback()
        print(f"Error migrating domains: {e}")

def migrate_roles(session):
    """Migrate role data from JSON to database"""
    try:
        role_index = load_json_file(os.path.join(PROCESSED_DATA_PATH, 'role_index.json'))
        if not role_index:
            print("Role index not found or empty")
            return
        
        roles_created = 0
        for role_id, role_data in role_index.items():
            # Skip if not a proper role object
            if not isinstance(role_data, dict) or 'name' not in role_data:
                continue
                
            role = Role(
                id=role_id,
                name=role_data.get('name', ''),
                description=role_data.get('description', '')
            )
            session.add(role)
            roles_created += 1
        
        session.commit()
        print(f"Migrated {roles_created} roles")
    except Exception as e:
        session.rollback()
        print(f"Error migrating roles: {e}")

def migrate_recommendations(session):
    """Migrate recommendation data from JSON to database"""
    try:
        master_index = load_json_file(os.path.join(PROCESSED_DATA_PATH, 'master_index.json'))
        if not master_index or 'recommendations' not in master_index:
            print("Master index not found or empty")
            return
        
        recommendations_created = 0
        citations_created = 0
        
        for rec_id in master_index['recommendations']:
            rec_file = os.path.join(PROCESSED_DATA_PATH, f"{rec_id}.json")
            rec_data = load_json_file(rec_file)
            
            if not rec_data:
                print(f"Could not load recommendation {rec_id}")
                continue
            
            # Parse the date if it's a string
            last_updated = rec_data.get('last_updated', datetime.utcnow().strftime('%Y-%m-%d'))
            if isinstance(last_updated, str):
                try:
                    last_updated = datetime.strptime(last_updated, '%Y-%m-%d')
                except ValueError:
                    last_updated = datetime.utcnow()
            
            # Create recommendation
            recommendation = Recommendation(
                id=rec_id,
                title=rec_data.get('title', ''),
                domain_id=rec_data.get('domain', {}).get('id'),
                recommendation_text=rec_data.get('recommendation', ''),
                rationale=rec_data.get('rationale', ''),
                expected_outcome=rec_data.get('expected_outcome', ''),
                implementation_notes=rec_data.get('implementation_notes', ''),
                priority_level=rec_data.get('priority_level', 'medium'),
                evidence_level=rec_data.get('evidence', {}).get('level', ''),
                last_updated=last_updated,
                version=rec_data.get('version', '1.0')
            )
            
            # Add roles
            for role_data in rec_data.get('roles', []):
                role_id = role_data.get('id')
                if role_id:
                    role = session.query(Role).filter_by(id=role_id).first()
                    if role:
                        recommendation.roles.append(role)
            
            # Add citations
            for citation_data in rec_data.get('evidence', {}).get('citations', []):
                citation = Citation(
                    recommendation_id=rec_id,
                    authors=citation_data.get('authors', ''),
                    title=citation_data.get('title', ''),
                    journal=citation_data.get('journal', ''),
                    year=citation_data.get('year', ''),
                    doi=citation_data.get('doi', ''),
                    url=citation_data.get('url', '')
                )
                session.add(citation)
                citations_created += 1
            
            session.add(recommendation)
            recommendations_created += 1
            
            # Commit every 10 recommendations to avoid large transactions
            if recommendations_created % 10 == 0:
                session.commit()
                print(f"Processed {recommendations_created} recommendations so far...")
        
        session.commit()
        print(f"Migrated {recommendations_created} recommendations with {citations_created} citations")
    except Exception as e:
        session.rollback()
        print(f"Error migrating recommendations: {e}")

def run_migration():
    """Run the full migration process"""
    print("Starting database migration...")
    
    # Create a session
    session = Session()
    
    try:
        # Create tables
        create_tables()
        
        # Migrate data
        migrate_domains(session)
        migrate_roles(session)
        migrate_recommendations(session)
        
        print("Migration completed successfully!")
    except Exception as e:
        print(f"Migration failed: {e}")
    finally:
        session.close()

if __name__ == "__main__":
    run_migration()
