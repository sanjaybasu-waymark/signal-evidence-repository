import os
import json
from typing import List, Dict, Any, Optional
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

from src.db.models import Domain, Role, Recommendation, Citation

# Load environment variables
load_dotenv()

# Database connection
DB_URI = os.getenv('DATABASE_URL', 'sqlite:///signal_evidence_library.db')
engine = create_engine(DB_URI)
SessionLocal = sessionmaker(bind=engine)

class DatabaseManager:
    """Database manager for CRUD operations on recommendations"""
    
    def __init__(self):
        self.engine = engine
        self.SessionLocal = SessionLocal
    
    def get_session(self) -> Session:
        """Get a new database session"""
        return self.SessionLocal()
    
    # Domain operations
    def get_all_domains(self) -> List[Dict[str, Any]]:
        """Get all domains with recommendation counts"""
        session = self.get_session()
        try:
            domains = session.query(Domain).all()
            return [domain.to_dict() for domain in domains]
        finally:
            session.close()
    
    def get_domain_by_id(self, domain_id: str) -> Optional[Dict[str, Any]]:
        """Get a domain by ID"""
        session = self.get_session()
        try:
            domain = session.query(Domain).filter(Domain.id == domain_id).first()
            return domain.to_dict() if domain else None
        finally:
            session.close()
    
    # Role operations
    def get_all_roles(self) -> List[Dict[str, Any]]:
        """Get all roles with recommendation counts"""
        session = self.get_session()
        try:
            roles = session.query(Role).all()
            return [role.to_dict() for role in roles]
        finally:
            session.close()
    
    def get_role_by_id(self, role_id: str) -> Optional[Dict[str, Any]]:
        """Get a role by ID"""
        session = self.get_session()
        try:
            role = session.query(Role).filter(Role.id == role_id).first()
            return role.to_dict() if role else None
        finally:
            session.close()
    
    # Recommendation operations
    def get_all_recommendations(self, 
                               domain_id: Optional[str] = None,
                               role_id: Optional[str] = None,
                               page: int = 1,
                               per_page: int = 20) -> Dict[str, Any]:
        """Get all recommendations with optional filtering and pagination"""
        session = self.get_session()
        try:
            query = session.query(Recommendation)
            
            # Apply filters
            if domain_id:
                query = query.filter(Recommendation.domain_id == domain_id)
            
            if role_id:
                query = query.join(Recommendation.roles).filter(Role.id == role_id)
            
            # Get total count for pagination
            total = query.count()
            
            # Apply pagination
            recommendations = query.offset((page - 1) * per_page).limit(per_page).all()
            
            return {
                'recommendations': [rec.to_dict() for rec in recommendations],
                'pagination': {
                    'page': page,
                    'per_page': per_page,
                    'total': total,
                    'pages': (total + per_page - 1) // per_page
                }
            }
        finally:
            session.close()
    
    def get_recommendation_by_id(self, rec_id: str) -> Optional[Dict[str, Any]]:
        """Get a recommendation by ID"""
        session = self.get_session()
        try:
            recommendation = session.query(Recommendation).filter(Recommendation.id == rec_id).first()
            return recommendation.to_dict() if recommendation else None
        finally:
            session.close()
    
    def create_recommendation(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Create a new recommendation"""
        session = self.get_session()
        try:
            # Extract basic recommendation data
            recommendation = Recommendation(
                id=data.get('id'),
                title=data.get('title'),
                domain_id=data.get('domain_id'),
                recommendation_text=data.get('recommendation'),
                rationale=data.get('rationale'),
                expected_outcome=data.get('expected_outcome'),
                implementation_notes=data.get('implementation_notes'),
                priority_level=data.get('priority_level', 'medium'),
                evidence_level=data.get('evidence_level')
            )
            
            # Add roles
            for role_id in data.get('role_ids', []):
                role = session.query(Role).filter(Role.id == role_id).first()
                if role:
                    recommendation.roles.append(role)
            
            # Add citations
            for citation_data in data.get('citations', []):
                citation = Citation(
                    recommendation_id=recommendation.id,
                    authors=citation_data.get('authors'),
                    title=citation_data.get('title'),
                    journal=citation_data.get('journal'),
                    year=citation_data.get('year'),
                    doi=citation_data.get('doi'),
                    url=citation_data.get('url')
                )
                session.add(citation)
            
            session.add(recommendation)
            session.commit()
            
            return recommendation.to_dict()
        except Exception as e:
            session.rollback()
            raise e
        finally:
            session.close()
    
    def update_recommendation(self, rec_id: str, data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Update an existing recommendation"""
        session = self.get_session()
        try:
            recommendation = session.query(Recommendation).filter(Recommendation.id == rec_id).first()
            
            if not recommendation:
                return None
            
            # Update basic fields
            if 'title' in data:
                recommendation.title = data['title']
            if 'domain_id' in data:
                recommendation.domain_id = data['domain_id']
            if 'recommendation' in data:
                recommendation.recommendation_text = data['recommendation']
            if 'rationale' in data:
                recommendation.rationale = data['rationale']
            if 'expected_outcome' in data:
                recommendation.expected_outcome = data['expected_outcome']
            if 'implementation_notes' in data:
                recommendation.implementation_notes = data['implementation_notes']
            if 'priority_level' in data:
                recommendation.priority_level = data['priority_level']
            if 'evidence_level' in data:
                recommendation.evidence_level = data['evidence_level']
            
            # Update roles if provided
            if 'role_ids' in data:
                # Clear existing roles
                recommendation.roles = []
                
                # Add new roles
                for role_id in data['role_ids']:
                    role = session.query(Role).filter(Role.id == role_id).first()
                    if role:
                        recommendation.roles.append(role)
            
            # Update citations if provided
            if 'citations' in data:
                # Delete existing citations
                session.query(Citation).filter(Citation.recommendation_id == rec_id).delete()
                
                # Add new citations
                for citation_data in data['citations']:
                    citation = Citation(
                        recommendation_id=rec_id,
                        authors=citation_data.get('authors'),
                        title=citation_data.get('title'),
                        journal=citation_data.get('journal'),
                        year=citation_data.get('year'),
                        doi=citation_data.get('doi'),
                        url=citation_data.get('url')
                    )
                    session.add(citation)
            
            # Update version
            recommendation.version = str(float(recommendation.version) + 0.1)
            
            session.commit()
            return recommendation.to_dict()
        except Exception as e:
            session.rollback()
            raise e
        finally:
            session.close()
    
    def delete_recommendation(self, rec_id: str) -> bool:
        """Delete a recommendation"""
        session = self.get_session()
        try:
            recommendation = session.query(Recommendation).filter(Recommendation.id == rec_id).first()
            
            if not recommendation:
                return False
            
            # Delete associated citations
            session.query(Citation).filter(Citation.recommendation_id == rec_id).delete()
            
            # Delete the recommendation
            session.delete(recommendation)
            session.commit()
            return True
        except Exception as e:
            session.rollback()
            raise e
        finally:
            session.close()
    
    # Search operations
    def text_search(self, query: str, page: int = 1, per_page: int = 20) -> Dict[str, Any]:
        """Perform a basic text search on recommendations"""
        session = self.get_session()
        try:
            # Basic text search using LIKE
            search_query = f"%{query}%"
            base_query = session.query(Recommendation).filter(
                (Recommendation.title.ilike(search_query)) |
                (Recommendation.recommendation_text.ilike(search_query)) |
                (Recommendation.rationale.ilike(search_query))
            )
            
            # Get total count for pagination
            total = base_query.count()
            
            # Apply pagination
            recommendations = base_query.offset((page - 1) * per_page).limit(per_page).all()
            
            return {
                'recommendations': [rec.to_dict() for rec in recommendations],
                'pagination': {
                    'page': page,
                    'per_page': per_page,
                    'total': total,
                    'pages': (total + per_page - 1) // per_page
                }
            }
        finally:
            session.close()
    
    # Statistics
    def get_statistics(self) -> Dict[str, Any]:
        """Get library statistics"""
        session = self.get_session()
        try:
            total_recommendations = session.query(Recommendation).count()
            domains_count = session.query(Domain).count()
            roles_count = session.query(Role).count()
            
            return {
                'total_recommendations': total_recommendations,
                'domains_covered': domains_count,
                'professional_roles': roles_count
            }
        finally:
            session.close()

# Create a singleton instance
db_manager = DatabaseManager()
