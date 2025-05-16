from flask import Flask, render_template, request, jsonify
import requests
import os
import json

app = Flask(__name__, template_folder='templates', static_folder='static')

# Configuration
API_URL = os.getenv("API_URL", "http://localhost:8000")

@app.route('/')
def index():
    """Render the main page"""
    return render_template('index.html')

@app.route('/browse')
def browse():
    """Render the browse page"""
    # Get query parameters
    domain_id = request.args.get('domain_id')
    role_id = request.args.get('role_id')
    priority_level = request.args.get('priority_level')
    page = request.args.get('page', 1, type=int)
    
    # Build API URL
    url = f"{API_URL}/browse"
    params = {}
    if domain_id:
        params['domain_id'] = domain_id
    if role_id:
        params['role_id'] = role_id
    if priority_level:
        params['priority_level'] = priority_level
    params['page'] = page
    
    # Call API
    response = requests.get(url, params=params)
    data = response.json()
    
    # Get domains and roles for filters
    domains_response = requests.get(f"{API_URL}/domains")
    domains = domains_response.json().get('domains', [])
    
    roles_response = requests.get(f"{API_URL}/roles")
    roles = roles_response.json().get('roles', [])
    
    return render_template(
        'browse.html',
        recommendations=data.get('recommendations', []),
        total=data.get('total', 0),
        page=data.get('page', 1),
        page_size=data.get('page_size', 10),
        domains=domains,
        roles=roles,
        selected_domain=domain_id,
        selected_role=role_id,
        selected_priority=priority_level
    )

@app.route('/search')
def search():
    """Render the search page"""
    # Get query parameters
    query = request.args.get('query', '')
    
    if not query:
        return render_template('search.html', recommendations=[], query='')
    
    # Call API
    response = requests.post(
        f"{API_URL}/query",
        json={"query": query, "top_k": 10}
    )
    data = response.json()
    
    return render_template(
        'search.html',
        recommendations=data.get('recommendations', []),
        query=query
    )

@app.route('/document/<recommendation_id>')
def document(recommendation_id):
    """Render a specific document"""
    # Call API
    response = requests.get(f"{API_URL}/document/{recommendation_id}")
    
    if response.status_code != 200:
        return render_template('error.html', message="Document not found"), 404
    
    recommendation = response.json()
    
    return render_template('document.html', recommendation=recommendation)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
