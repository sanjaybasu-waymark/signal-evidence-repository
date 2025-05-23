"""
Main application file for the Signal Evidence Library.
"""

import os
from flask import Flask, render_template, request, redirect, url_for, jsonify
from src.api.endpoints import api
from src.db.models import init_db

def create_app():
    """Create and configure the Flask application."""
    app = Flask(__name__, 
                static_folder='src/web/static',
                template_folder='src/web/templates')
    
    # Register blueprints
    app.register_blueprint(api, url_prefix='/api')
    
    # Initialize database
    init_db()
    
    # Routes
    @app.route('/')
    def index():
        """Render the main page."""
        return render_template('index.html')
    
    @app.route('/recommendations')
    def recommendations():
        """Render the recommendations page."""
        domain_id = request.args.get('domain_id', type=int)
        role_id = request.args.get('role_id', type=int)
        return render_template('recommendations.html', domain_id=domain_id, role_id=role_id)
    
    @app.route('/recommendation/<int:recommendation_id>')
    def recommendation_detail(recommendation_id):
        """Render the recommendation detail page."""
        return render_template('recommendation_detail.html', recommendation_id=recommendation_id)
    
    @app.route('/search')
    def search():
        """Render the search page."""
        query = request.args.get('q', '')
        return render_template('search.html', query=query)
    
    @app.route('/about')
    def about():
        """Render the about page."""
        return render_template('about.html')
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0', port=5000)
