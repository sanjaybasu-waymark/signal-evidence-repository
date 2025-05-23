"""
API endpoints for the Signal Evidence Library.
"""

from flask import Blueprint, jsonify, request
from src.db.models import get_db, Recommendation, Domain, Role

api = Blueprint('api', __name__)

@api.route('/recommendations', methods=['GET'])
def get_recommendations():
    """Get all recommendations or filter by domain and role."""
    session = get_db()
    
    # Get query parameters
    domain_id = request.args.get('domain_id', type=int)
    role_id = request.args.get('role_id', type=int)
    
    # Build query
    query = session.query(Recommendation)
    
    if domain_id:
        query = query.filter(Recommendation.domain_id == domain_id)
    
    if role_id:
        query = query.filter(Recommendation.role_id == role_id)
    
    # Execute query
    recommendations = query.all()
    
    # Format results
    result = []
    for rec in recommendations:
        result.append({
            'id': rec.id,
            'title': rec.title,
            'domain_id': rec.domain_id,
            'role_id': rec.role_id,
            'recommendation_text': rec.recommendation_text,
            'implementation_guidance': rec.implementation_guidance,
            'expected_outcomes': rec.expected_outcomes,
            'evidence_level': rec.evidence_level,
            'citation_authors': rec.citation_authors,
            'citation_title': rec.citation_title,
            'citation_journal': rec.citation_journal,
            'citation_year': rec.citation_year,
            'citation_doi': rec.citation_doi
        })
    
    return jsonify(result)


@api.route('/recommendations/<int:recommendation_id>', methods=['GET'])
def get_recommendation(recommendation_id):
    """Get a specific recommendation by ID."""
    session = get_db()
    
    recommendation = session.query(Recommendation).filter(Recommendation.id == recommendation_id).first()
    
    if not recommendation:
        return jsonify({'error': 'Recommendation not found'}), 404
    
    result = {
        'id': recommendation.id,
        'title': recommendation.title,
        'domain_id': recommendation.domain_id,
        'role_id': recommendation.role_id,
        'recommendation_text': recommendation.recommendation_text,
        'implementation_guidance': recommendation.implementation_guidance,
        'expected_outcomes': recommendation.expected_outcomes,
        'evidence_level': recommendation.evidence_level,
        'citation_authors': recommendation.citation_authors,
        'citation_title': recommendation.citation_title,
        'citation_journal': recommendation.citation_journal,
        'citation_year': recommendation.citation_year,
        'citation_doi': recommendation.citation_doi,
        'target_population': recommendation.target_population,
        'cost_effectiveness': recommendation.cost_effectiveness
    }
    
    return jsonify(result)


@api.route('/domains', methods=['GET'])
def get_domains():
    """Get all domains."""
    session = get_db()
    
    domains = session.query(Domain).all()
    
    result = []
    for domain in domains:
        result.append({
            'id': domain.id,
            'name': domain.name,
            'description': domain.description,
            'slug': domain.slug
        })
    
    return jsonify(result)


@api.route('/roles', methods=['GET'])
def get_roles():
    """Get all roles."""
    session = get_db()
    
    roles = session.query(Role).all()
    
    result = []
    for role in roles:
        result.append({
            'id': role.id,
            'name': role.name,
            'description': role.description,
            'slug': role.slug
        })
    
    return jsonify(result)


@api.route('/search', methods=['GET'])
def search_recommendations():
    """Search recommendations by query string."""
    session = get_db()
    
    query_string = request.args.get('q', '')
    
    if not query_string:
        return jsonify({'error': 'Query parameter "q" is required'}), 400
    
    # Simple text search (would be replaced with vector search in production)
    recommendations = session.query(Recommendation).filter(
        Recommendation.recommendation_text.like(f'%{query_string}%') |
        Recommendation.title.like(f'%{query_string}%')
    ).all()
    
    result = []
    for rec in recommendations:
        result.append({
            'id': rec.id,
            'title': rec.title,
            'domain_id': rec.domain_id,
            'role_id': rec.role_id,
            'recommendation_text': rec.recommendation_text,
            'evidence_level': rec.evidence_level
        })
    
    return jsonify(result)
