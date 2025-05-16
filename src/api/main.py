from fastapi import FastAPI, Query, HTTPException, Path
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import os
import json

from ..db.models import RecommendationStore, Recommendation
from ..db.vector_store import VectorStore

# Initialize the API
app = FastAPI(
    title="Signal Evidence Library API",
    description="API for accessing the Signal Evidence Library",
    version="0.1.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize stores
data_dir = os.getenv("DATA_DIR", os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "data"))
recommendation_store = RecommendationStore(data_dir)
vector_store = VectorStore(data_dir)

# Define API models
class QueryRequest(BaseModel):
    query: str
    top_k: int = 5
    domain_id: Optional[str] = None
    role_id: Optional[str] = None
    priority_level: Optional[str] = None

class QueryResponse(BaseModel):
    recommendations: List[Dict[str, Any]]
    query: str

class BrowseResponse(BaseModel):
    recommendations: List[Dict[str, Any]]
    total: int
    page: int
    page_size: int

# Define API endpoints
@app.get("/")
async def root():
    return {"message": "Welcome to the Signal Evidence Library API"}

@app.post("/query", response_model=QueryResponse)
async def query(request: QueryRequest):
    """
    Query the evidence library using natural language
    """
    # Search vector store
    recommendation_ids = vector_store.search(request.query, request.top_k)
    
    # Get recommendations
    recommendations = []
    for recommendation_id in recommendation_ids:
        recommendation = recommendation_store.get_recommendation(recommendation_id)
        if recommendation:
            # Apply filters if specified
            if request.domain_id and recommendation.domain.id != request.domain_id:
                continue
            if request.role_id and not any(role.id == request.role_id for role in recommendation.roles):
                continue
            if request.priority_level and recommendation.priority_level != request.priority_level:
                continue
            
            recommendations.append(recommendation.to_dict())
    
    return {
        "recommendations": recommendations,
        "query": request.query
    }

@app.get("/browse", response_model=BrowseResponse)
async def browse(
    domain_id: Optional[str] = None,
    role_id: Optional[str] = None,
    priority_level: Optional[str] = None,
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100)
):
    """
    Browse recommendations with optional filters
    """
    # Get all recommendation IDs
    all_ids = recommendation_store.list_recommendations()
    
    # Apply filters
    filtered_ids = all_ids
    
    if domain_id:
        domain_recommendations = recommendation_store.search_by_domain(domain_id)
        filtered_ids = [r.id for r in domain_recommendations if r.id in filtered_ids]
    
    if role_id:
        role_recommendations = recommendation_store.search_by_role(role_id)
        filtered_ids = [r.id for r in role_recommendations if r.id in filtered_ids]
    
    if priority_level:
        priority_recommendations = recommendation_store.search_by_priority(priority_level)
        filtered_ids = [r.id for r in priority_recommendations if r.id in filtered_ids]
    
    # Paginate
    total = len(filtered_ids)
    start_idx = (page - 1) * page_size
    end_idx = start_idx + page_size
    page_ids = filtered_ids[start_idx:end_idx]
    
    # Get recommendations
    recommendations = []
    for recommendation_id in page_ids:
        recommendation = recommendation_store.get_recommendation(recommendation_id)
        if recommendation:
            recommendations.append(recommendation.to_dict())
    
    return {
        "recommendations": recommendations,
        "total": total,
        "page": page,
        "page_size": page_size
    }

@app.get("/document/{recommendation_id}")
async def get_document(recommendation_id: str = Path(..., description="The ID of the recommendation")):
    """
    Get a specific recommendation by ID
    """
    recommendation = recommendation_store.get_recommendation(recommendation_id)
    if not recommendation:
        raise HTTPException(status_code=404, detail="Recommendation not found")
    
    return recommendation.to_dict()

@app.get("/domains")
async def list_domains():
    """
    List all available domains
    """
    # This would typically come from a configuration file or database
    # For the prototype, we'll return a hardcoded list based on the PRD
    domains = [
        {"id": "diabetes", "name": "Diabetes"},
        {"id": "hypertension", "name": "Hypertension"},
        {"id": "asthma", "name": "Asthma"},
        {"id": "copd", "name": "COPD"},
        {"id": "heart_failure", "name": "Heart Failure"},
        {"id": "depression", "name": "Depression"},
        {"id": "anxiety", "name": "Anxiety"},
        {"id": "substance_use", "name": "Substance Use Disorders"},
        {"id": "housing", "name": "Housing"},
        {"id": "food_security", "name": "Food Security"},
        {"id": "transportation", "name": "Transportation"}
    ]
    return {"domains": domains}

@app.get("/roles")
async def list_roles():
    """
    List all available roles
    """
    # This would typically come from a configuration file or database
    # For the prototype, we'll return a hardcoded list based on the PRD
    roles = [
        {"id": "nurse", "name": "Nurse Care Manager"},
        {"id": "social_worker_clinical", "name": "Social Worker (Clinical/Therapy)"},
        {"id": "social_worker_nonclinical", "name": "Social Worker (Non-Clinical)"},
        {"id": "pharmacist", "name": "Clinical Pharmacist"},
        {"id": "pharmacy_tech", "name": "Pharmacy Technician"},
        {"id": "chw", "name": "Community Health Worker"},
        {"id": "care_coordinator", "name": "Care Coordinator"}
    ]
    return {"roles": roles}
