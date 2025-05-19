import os
from flask import Flask, render_template, request, jsonify, redirect, url_for
from dotenv import load_dotenv
from pathlib import Path

# Add the project root to the Python path
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

# Import database modules
from src.db.database import db
from src.db.crud import db_manager
from src.db.vector_store import vector_store

# Load environment variables
load_dotenv()

# Create Flask app
app = Flask(__name__)

# Configure SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///signal_evidence_library.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db.init_app(app)

# Create database tables if they don't exist
with app.app_context():
    db.create_all()

# Routes
@app.route('/')
def index():
    # Get all domains and roles for navigation
    domains = db_manager.get_all_domains()
    roles = db_manager.get_all_roles()
    
    # Get statistics
    stats = db_manager.get_statistics()
    
    return render_template('index.html', 
                          domains=domains,
                          roles=roles,
                          stats=stats)

@app.route('/domain/<domain_id>')
def domain(domain_id):
    # Get all domains and roles for navigation
    domains = db_manager.get_all_domains()
    roles = db_manager.get_all_roles()
    
    # Get domain details
    domain = db_manager.get_domain_by_id(domain_id)
    
    if not domain:
        return redirect(url_for('index'))
    
    # Get recommendations for this domain
    page = int(request.args.get('page', 1))
    result = db_manager.get_all_recommendations(domain_id=domain_id, page=page)
    recommendations = result['recommendations']
    pagination = result['pagination']
    
    return render_template('domain.html', 
                          domain=domain,
                          recommendations=recommendations,
                          pagination=pagination,
                          domains=domains,
                          roles=roles)

@app.route('/role/<role_id>')
def role(role_id):
    # Get all domains and roles for navigation
    domains = db_manager.get_all_domains()
    roles = db_manager.get_all_roles()
    
    # Get role details
    role = db_manager.get_role_by_id(role_id)
    
    if not role:
        return redirect(url_for('index'))
    
    # Get recommendations for this role
    page = int(request.args.get('page', 1))
    result = db_manager.get_all_recommendations(role_id=role_id, page=page)
    recommendations = result['recommendations']
    pagination = result['pagination']
    
    return render_template('role.html', 
                          role=role,
                          recommendations=recommendations,
                          pagination=pagination,
                          domains=domains,
                          roles=roles)

@app.route('/search')
def search():
    # Get all domains and roles for navigation
    domains = db_manager.get_all_domains()
    roles = db_manager.get_all_roles()
    
    # Get search parameters
    query = request.args.get('query', '')
    search_type = request.args.get('type', 'text')  # 'text' or 'semantic'
    page = int(request.args.get('page', 1))
    
    # Initialize empty results
    recommendations = []
    pagination = {'page': page, 'per_page': 10, 'total': 0, 'pages': 0}
    
    if query:
        if search_type == 'semantic':
            # Semantic search using vector store
            search_results = vector_store.search(query, top_k=20)
            
            # Get full recommendation details
            rec_ids = [result['id'] for result in search_results]
            recommendations = []
            for rec_id in rec_ids:
                rec = db_manager.get_recommendation_by_id(rec_id)
                if rec:
                    recommendations.append(rec)
            
            # Simple pagination
            total = len(recommendations)
            start_idx = (page - 1) * 10
            end_idx = start_idx + 10
            recommendations = recommendations[start_idx:end_idx]
            pagination = {
                'page': page,
                'per_page': 10,
                'total': total,
                'pages': (total + 10 - 1) // 10
            }
        else:
            # Text search using database
            result = db_manager.text_search(query, page=page, per_page=10)
            recommendations = result['recommendations']
            pagination = result['pagination']
    
    return render_template('search.html', 
                          query=query,
                          search_type=search_type,
                          recommendations=recommendations,
                          pagination=pagination,
                          domains=domains,
                          roles=roles)

@app.route('/document/<rec_id>')
def document(rec_id):
    # Get all domains and roles for navigation
    domains = db_manager.get_all_domains()
    roles = db_manager.get_all_roles()
    
    # Get recommendation details
    recommendation = db_manager.get_recommendation_by_id(rec_id)
    
    if not recommendation:
        return redirect(url_for('index'))
    
    return render_template('document.html', 
                          recommendation=recommendation,
                          domains=domains,
                          roles=roles)

# API Routes
@app.route('/api/recommendations', methods=['GET'])
def api_recommendations():
    # Get filter parameters
    domain_id = request.args.get('domain_id', '')
    role_id = request.args.get('role_id', '')
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 20))
    
    # Get recommendations based on filters with pagination
    result = db_manager.get_all_recommendations(
        domain_id=domain_id if domain_id else None,
        role_id=role_id if role_id else None,
        page=page,
        per_page=per_page
    )
    
    return jsonify(result)

@app.route('/api/recommendations/<rec_id>', methods=['GET'])
def api_recommendation(rec_id):
    recommendation = db_manager.get_recommendation_by_id(rec_id)
    
    if not recommendation:
        return jsonify({'error': 'Recommendation not found'}), 404
    
    return jsonify(recommendation)

@app.route('/api/search', methods=['GET'])
def api_search():
    # Get search parameters
    query = request.args.get('query', '')
    search_type = request.args.get('type', 'text')  # 'text' or 'semantic'
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 20))
    
    if not query:
        return jsonify({'error': 'Query parameter is required'}), 400
    
    if search_type == 'semantic':
        # Semantic search using vector store
        search_results = vector_store.search(query, top_k=per_page * 2)
        
        # Get full recommendation details
        rec_ids = [result['id'] for result in search_results]
        recommendations = []
        for rec_id in rec_ids:
            rec = db_manager.get_recommendation_by_id(rec_id)
            if rec:
                recommendations.append(rec)
        
        # Simple pagination
        total = len(recommendations)
        start_idx = (page - 1) * per_page
        end_idx = start_idx + per_page
        recommendations = recommendations[start_idx:end_idx]
        
        return jsonify({
            'recommendations': recommendations,
            'pagination': {
                'page': page,
                'per_page': per_page,
                'total': total,
                'pages': (total + per_page - 1) // per_page
            }
        })
    else:
        # Text search using database
        result = db_manager.text_search(query, page=page, per_page=per_page)
        return jsonify(result)

@app.route('/api/domains', methods=['GET'])
def api_domains():
    domains = db_manager.get_all_domains()
    return jsonify(domains)

@app.route('/api/roles', methods=['GET'])
def api_roles():
    roles = db_manager.get_all_roles()
    return jsonify(roles)

@app.route('/api/statistics', methods=['GET'])
def api_statistics():
    stats = db_manager.get_statistics()
    return jsonify(stats)

# Required for deployment
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
