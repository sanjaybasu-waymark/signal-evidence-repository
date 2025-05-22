import os
import json
from typing import List, Dict, Any, Optional
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, or_
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
            result = []
            for domain in domains:
                domain_dict = domain.to_dict()
                # Count recommendations for this domain
                count = session.query(func.count(Recommendation.id)).filter(
                    Recommendation.domain_id == domain.id
                ).scalar()
                domain_dict['recommendation_count'] = count
                result.append(domain_dict)
            return result
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
            result = []
            for role in roles:
                role_dict = role.to_dict()
                # Count recommendations for this role
                count = session.query(func.count(Recommendation.id)).join(
                    Recommendation.roles
                ).filter(Role.id == role.id).scalar()
                role_dict['recommendation_count'] = count
                result.append(role_dict)
            return result
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
    def get_all_recommendations(
        self, 
        domain_id: Optional[str] = None,
        role_id: Optional[str] = None,
        page: int = 1,
        per_page: int = 20
    ) -> Dict[str, Any]:
        """Get all recommendations with optional filtering and pagination"""
        session = self.get_session()
        try:
            query = session.query(Recommendation)
            
            # Apply filters
            if domain_id:
                query = query.filter(Recommendation.domain_id == domain_id)
            
            if role_id:
                query = query.join(Recommendation.roles).filter(Role.id == role_id)
            
            # Get total count
            total = query.count()
            
            # Apply pagination
            query = query.limit(per_page).offset((page - 1) * per_page)
            
            # Execute query
            recommendations = query.all()
            
            # Calculate pagination info
            pages = (total + per_page - 1) // per_page
            
            return {
                'recommendations': [rec.to_dict() for rec in recommendations],
                'pagination': {
                    'page': page,
                    'per_page': per_page,
                    'total': total,
                    'pages': pages
                }
            }
        finally:
            session.close()
    
    def get_recommendation_by_id(self, recommendation_id: str) -> Optional[Dict[str, Any]]:
        """Get a recommendation by ID"""
        session = self.get_session()
        try:
            recommendation = session.query(Recommendation).filter(Recommendation.id == recommendation_id).first()
            return recommendation.to_dict() if recommendation else None
        finally:
            session.close()
    
    def text_search(
        self, 
        query: str,
        page: int = 1,
        per_page: int = 20
    ) -> Dict[str, Any]:
        """Search recommendations by text"""
        session = self.get_session()
        try:
            # Create search pattern
            search_pattern = f"%{query}%"
            
            # Build query
            db_query = session.query(Recommendation).filter(
                or_(
                    Recommendation.title.ilike(search_pattern),
                    Recommendation.recommendation_text.ilike(search_pattern),
                    Recommendation.rationale.ilike(search_pattern),
                    Recommendation.expected_outcome.ilike(search_pattern)
                )
            )
            
            # Get total count
            total = db_query.count()
            
            # Apply pagination
            db_query = db_query.limit(per_page).offset((page - 1) * per_page)
            
            # Execute query
            recommendations = db_query.all()
            
            # Calculate pagination info
            pages = (total + per_page - 1) // per_page
            
            return {
                'recommendations': [rec.to_dict() for rec in recommendations],
                'pagination': {
                    'page': page,
                    'per_page': per_page,
                    'total': total,
                    'pages': pages
                }
            }
        finally:
            session.close()
    
    def get_statistics(self) -> Dict[str, Any]:
        """Get statistics about the recommendations database"""
        session = self.get_session()
        try:
            total_recommendations = session.query(func.count(Recommendation.id)).scalar()
            domain_counts = session.query(
                Domain.id, 
                Domain.name, 
                func.count(Recommendation.id)
            ).outerjoin(
                Recommendation, 
                Domain.id == Recommendation.domain_id
            ).group_by(Domain.id).all()
            
            role_counts = session.query(
                Role.id,
                Role.name,
                func.count(Recommendation.id)
            ).outerjoin(
                Recommendation.roles
            ).group_by(Role.id).all()
            
            return {
                'total_recommendations': total_recommendations,
                'domains': [
                    {'id': d[0], 'name': d[1], 'count': d[2]}
                    for d in domain_counts
                ],
                'roles': [
                    {'id': r[0], 'name': r[1], 'count': r[2]}
                    for r in role_counts
                ]
            }
        finally:
            session.close()

# Create a database manager instance
db_manager = DatabaseManager()
