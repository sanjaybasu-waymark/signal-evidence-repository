"""
Data processing pipeline for the Signal Evidence Library.
"""

import json
import os
import re
from src.db.models import get_db, Recommendation, Domain, Role

def process_raw_recommendation(raw_data):
    """
    Process raw recommendation data into structured format.
    
    Args:
        raw_data (dict): Raw recommendation data
        
    Returns:
        dict: Processed recommendation data
    """
    # Validate required fields
    required_fields = ['title', 'domain_id', 'role_id', 'recommendation_text', 
                      'citation_authors', 'citation_title', 'citation_year']
    
    for field in required_fields:
        if field not in raw_data or not raw_data[field]:
            raise ValueError(f"Missing required field: {field}")
    
    # Validate recommendation text length (2-3 sentences)
    rec_text = raw_data['recommendation_text']
    sentences = re.split(r'[.!?]+', rec_text)
    sentences = [s.strip() for s in sentences if s.strip()]
    
    if len(sentences) < 2 or len(sentences) > 4:
        raise ValueError(f"Recommendation text must be 2-3 sentences. Current: {len(sentences)}")
    
    # Validate citation year (prefer 2020-2024)
    year = int(raw_data['citation_year'])
    if year < 2019:
        print(f"Warning: Citation year {year} is older than recommended (2019+)")
    
    # Validate evidence level
    if 'evidence_level' in raw_data:
        if raw_data['evidence_level'] not in ['A', 'B', 'C']:
            raise ValueError("Evidence level must be A, B, or C")
    
    # Return processed data
    return raw_data


def import_recommendations_from_json(json_file):
    """
    Import recommendations from JSON file into database.
    
    Args:
        json_file (str): Path to JSON file
        
    Returns:
        int: Number of recommendations imported
    """
    if not os.path.exists(json_file):
        raise FileNotFoundError(f"File not found: {json_file}")
    
    with open(json_file, 'r') as f:
        data = json.load(f)
    
    session = get_db()
    count = 0
    
    for item in data:
        try:
            # Process and validate
            processed = process_raw_recommendation(item)
            
            # Check if recommendation already exists
            existing = session.query(Recommendation).filter(
                Recommendation.title == processed['title']
            ).first()
            
            if existing:
                print(f"Recommendation already exists: {processed['title']}")
                continue
            
            # Create new recommendation
            recommendation = Recommendation(
                title=processed['title'],
                domain_id=processed['domain_id'],
                role_id=processed['role_id'],
                recommendation_text=processed['recommendation_text'],
                implementation_guidance=processed.get('implementation_guidance', ''),
                expected_outcomes=processed.get('expected_outcomes', ''),
                evidence_level=processed.get('evidence_level', ''),
                citation_authors=processed['citation_authors'],
                citation_title=processed['citation_title'],
                citation_journal=processed.get('citation_journal', ''),
                citation_year=processed['citation_year'],
                citation_doi=processed.get('citation_doi', ''),
                target_population=processed.get('target_population', ''),
                cost_effectiveness=processed.get('cost_effectiveness', '')
            )
            
            session.add(recommendation)
            count += 1
            
        except Exception as e:
            print(f"Error processing recommendation: {e}")
            continue
    
    session.commit()
    return count


def export_recommendations_to_json(output_file, domain_id=None, role_id=None):
    """
    Export recommendations from database to JSON file.
    
    Args:
        output_file (str): Path to output JSON file
        domain_id (int, optional): Filter by domain ID
        role_id (int, optional): Filter by role ID
        
    Returns:
        int: Number of recommendations exported
    """
    session = get_db()
    
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
            'citation_doi': rec.citation_doi,
            'target_population': rec.target_population,
            'cost_effectiveness': rec.cost_effectiveness
        })
    
    # Write to file
    with open(output_file, 'w') as f:
        json.dump(result, f, indent=2)
    
    return len(result)
