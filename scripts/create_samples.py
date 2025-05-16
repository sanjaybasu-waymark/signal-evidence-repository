import os
import json
from typing import List, Dict, Any, Optional
import argparse
from datetime import datetime

from src.db.models import Recommendation, Entity, Evidence, Citation, RecommendationStore
from src.db.vector_store import VectorStore
from src.pipeline.processor import ContentProcessor

def create_sample_recommendations(data_dir: str, count: int = 5):
    """
    Create sample recommendations for testing
    
    Args:
        data_dir: Directory to store data
        count: Number of sample recommendations to create
    """
    # Initialize stores
    recommendation_store = RecommendationStore(data_dir)
    vector_store = VectorStore(data_dir)
    
    # Sample domains
    domains = [
        {"id": "diabetes", "name": "Diabetes"},
        {"id": "hypertension", "name": "Hypertension"},
        {"id": "heart_failure", "name": "Heart Failure"},
        {"id": "depression", "name": "Depression"},
        {"id": "housing", "name": "Housing"}
    ]
    
    # Sample roles
    roles = [
        {"id": "nurse", "name": "Nurse Care Manager"},
        {"id": "social_worker", "name": "Social Worker"},
        {"id": "pharmacist", "name": "Clinical Pharmacist"},
        {"id": "chw", "name": "Community Health Worker"},
        {"id": "care_coordinator", "name": "Care Coordinator"}
    ]
    
    # Sample recommendations
    recommendations = [
        {
            "title": "Medication Adherence for Diabetes Patients",
            "domain": domains[0],
            "roles": [roles[0], roles[2]],
            "priority_level": "high",
            "recommendation": "Implement a diabetes medication adherence plan focusing on insulin management. This may include arranging for a continuous glucose monitor (CGM) if not already in place, setting up automatic refills, and coordinating with a pharmacy that offers medication synchronization to ensure all diabetes medications are refilled simultaneously.",
            "rationale": "Medication adherence is a critical factor in diabetes management. Studies show that improved adherence to insulin and oral medications significantly reduces the risk of hospitalization and emergency department visits.",
            "expected_outcome": "Reduced ED visits and hospitalizations related to diabetes complications, improved glycemic control, and better patient quality of life.",
            "evidence_level": "A",
            "citations": [
                {
                    "authors": "Smith J, Johnson A, Williams B",
                    "title": "Impact of medication adherence on outcomes in patients with diabetes",
                    "journal": "Diabetes Care",
                    "year": 2023,
                    "doi": "10.1000/example-12345",
                    "url": "https://example.com/diabetes-adherence"
                }
            ],
            "implementation_notes": "Consider using pill organizers, smartphone reminders, or other adherence tools based on patient preferences and capabilities."
        },
        {
            "title": "Home Blood Pressure Monitoring for Hypertension Management",
            "domain": domains[1],
            "roles": [roles[0], roles[3]],
            "priority_level": "medium",
            "recommendation": "Establish a structured home blood pressure monitoring program with regular reporting to the care team. Provide patients with validated blood pressure monitors and train them on proper measurement technique and frequency.",
            "rationale": "Home blood pressure monitoring improves blood pressure control by increasing patient awareness and engagement in their care, while providing more comprehensive data for clinical decision-making.",
            "expected_outcome": "Improved blood pressure control, earlier detection of treatment effectiveness, and reduced clinical inertia in medication management.",
            "evidence_level": "B",
            "citations": [
                {
                    "authors": "Johnson R, Smith P, Garcia M",
                    "title": "Effectiveness of home blood pressure monitoring in hypertension management",
                    "journal": "Journal of Hypertension",
                    "year": 2022,
                    "doi": "10.1000/example-67890",
                    "url": "https://example.com/hbpm-effectiveness"
                }
            ],
            "implementation_notes": "Ensure patients have access to appropriately sized cuffs and understand the importance of consistent measurement conditions."
        },
        {
            "title": "Heart Failure Self-Care Education Program",
            "domain": domains[2],
            "roles": [roles[0], roles[3], roles[4]],
            "priority_level": "high",
            "recommendation": "Implement a structured telephone monitoring program with weekly check-ins specifically focused on daily weight monitoring, symptom recognition, and fluid/sodium intake to detect early signs of heart failure decompensation before they require emergency intervention.",
            "rationale": "Patient education and self-monitoring are essential components of heart failure management. Early recognition of worsening symptoms allows for timely intervention and prevents hospitalizations.",
            "expected_outcome": "Reduced heart failure-related hospitalizations, improved quality of life, and increased patient self-efficacy in managing their condition.",
            "evidence_level": "A",
            "citations": [
                {
                    "authors": "Williams T, Anderson J, Martinez R",
                    "title": "Impact of structured telephone monitoring on heart failure outcomes",
                    "journal": "Heart Failure Reviews",
                    "year": 2022,
                    "doi": "10.1000/example-24680",
                    "url": "https://example.com/hf-monitoring"
                }
            ],
            "implementation_notes": "Develop a standardized assessment script for telephone monitoring to ensure consistent evaluation of key parameters."
        },
        {
            "title": "Collaborative Care Model for Depression Management",
            "domain": domains[3],
            "roles": [roles[1], roles[4]],
            "priority_level": "medium",
            "recommendation": "Implement a collaborative care model for depression that includes regular PHQ-9 monitoring, structured follow-up, and care coordination between primary care and mental health specialists.",
            "rationale": "Collaborative care models have demonstrated effectiveness in improving depression outcomes through systematic monitoring and treatment adjustment.",
            "expected_outcome": "Improved depression symptom scores, increased treatment adherence, and reduced suicidal ideation.",
            "evidence_level": "A",
            "citations": [
                {
                    "authors": "Brown L, Davis K, Wilson J",
                    "title": "Effectiveness of collaborative care for depression in primary care settings",
                    "journal": "JAMA Psychiatry",
                    "year": 2021,
                    "doi": "10.1000/example-13579",
                    "url": "https://example.com/collaborative-care"
                }
            ],
            "implementation_notes": "Designate a care manager to serve as the point person for tracking patient progress and facilitating communication between team members."
        },
        {
            "title": "Housing Stability Assessment and Intervention",
            "domain": domains[4],
            "roles": [roles[1], roles[3]],
            "priority_level": "high",
            "recommendation": "Conduct standardized housing stability assessments for all patients and implement a tiered intervention approach based on risk level, from housing resources referral to intensive case management for high-risk individuals.",
            "rationale": "Housing instability is strongly associated with poor health outcomes and increased healthcare utilization. Early identification and intervention can prevent homelessness and associated health deterioration.",
            "expected_outcome": "Reduced housing instability, decreased ED visits related to exposure and stress, and improved medication adherence and appointment attendance.",
            "evidence_level": "B",
            "citations": [
                {
                    "authors": "Garcia R, Thompson S, Lee K",
                    "title": "Impact of housing interventions on healthcare utilization among Medicaid recipients",
                    "journal": "American Journal of Public Health",
                    "year": 2023,
                    "doi": "10.1000/example-97531",
                    "url": "https://example.com/housing-health"
                }
            ],
            "implementation_notes": "Develop partnerships with local housing agencies and maintain an updated database of housing resources and eligibility requirements."
        }
    ]
    
    # Create and save recommendations
    for i, rec_data in enumerate(recommendations[:count]):
        # Create domain entity
        domain = Entity(
            id=rec_data["domain"]["id"],
            name=rec_data["domain"]["name"]
        )
        
        # Create role entities
        role_entities = []
        for role_data in rec_data["roles"]:
            role_entities.append(Entity(
                id=role_data["id"],
                name=role_data["name"]
            ))
        
        # Create citations
        citations = []
        for citation_data in rec_data["citations"]:
            citations.append(Citation(
                authors=citation_data["authors"],
                title=citation_data["title"],
                journal=citation_data["journal"],
                year=citation_data["year"],
                doi=citation_data.get("doi"),
                url=citation_data.get("url")
            ))
        
        # Create evidence
        evidence = Evidence(
            level=rec_data["evidence_level"],
            citations=citations
        )
        
        # Create recommendation
        recommendation = Recommendation(
            id=f"{rec_data['domain']['id']}_{i+1}",
            title=rec_data["title"],
            domain=domain,
            roles=role_entities,
            priority_level=rec_data["priority_level"],
            recommendation=rec_data["recommendation"],
            rationale=rec_data["rationale"],
            expected_outcome=rec_data["expected_outcome"],
            evidence=evidence,
            implementation_notes=rec_data["implementation_notes"],
            last_updated=datetime.now().isoformat(),
            version="1.0"
        )
        
        # Save recommendation
        recommendation_store.save_recommendation(recommendation)
        
        # Add to vector store
        vector_store.add_recommendation(recommendation)
        
        print(f"Created recommendation: {recommendation.id}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Create sample recommendations for testing")
    parser.add_argument("--data-dir", type=str, default="./data", help="Directory to store data")
    parser.add_argument("--count", type=int, default=5, help="Number of sample recommendations to create")
    
    args = parser.parse_args()
    create_sample_recommendations(args.data_dir, args.count)
