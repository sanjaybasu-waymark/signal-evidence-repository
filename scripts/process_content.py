# Content Processing Script for Signal Evidence Library

import os
import json
import sys
from pathlib import Path

# Add the project root to the Python path
sys.path.append(str(Path(__file__).parent.parent))

# Import recommendation modules
from data.raw.diabetes_recommendations import recommendations as diabetes_recommendations
from data.raw.hypertension_recommendations import recommendations as hypertension_recommendations
from data.raw.mental_health_recommendations import recommendations as mental_health_recommendations
from data.raw.sdoh_recommendations import recommendations as sdoh_recommendations
from data.raw.respiratory_recommendations import recommendations as respiratory_recommendations
from data.raw.quality_measures_recommendations import recommendations as quality_measures_recommendations
from data.raw.chronic_disease_recommendations import recommendations as chronic_disease_recommendations
from data.raw.infectious_disease_recommendations import recommendations as infectious_disease_recommendations

def process_recommendations():
    """
    Process all recommendation data and save to structured JSON files
    """
    # Create output directory if it doesn't exist
    os.makedirs("data/processed", exist_ok=True)
    
    # Combine all recommendations
    all_recommendations = (
        diabetes_recommendations +
        hypertension_recommendations +
        mental_health_recommendations +
        sdoh_recommendations +
        respiratory_recommendations +
        quality_measures_recommendations +
        chronic_disease_recommendations +
        infectious_disease_recommendations
    )
    
    # Process each recommendation
    for recommendation in all_recommendations:
        # Create a processed version of the recommendation
        processed_recommendation = {
            "id": recommendation["id"],
            "title": recommendation["title"],
            "domain": {
                "id": recommendation["domain_id"],
                "name": recommendation["domain_name"]
            },
            "roles": recommendation["roles"],
            "priority_level": recommendation["priority_level"],
            "recommendation": recommendation["recommendation"],
            "rationale": recommendation["rationale"],
            "expected_outcome": recommendation["expected_outcome"],
            "evidence": {
                "level": recommendation["evidence_level"],
                "citations": recommendation["citations"]
            },
            "implementation_notes": recommendation.get("implementation_notes", ""),
            "last_updated": "2025-05-16",
            "version": "1.0"
        }
        
        # Save to individual JSON file
        output_file = f"data/processed/{recommendation['id']}.json"
        with open(output_file, "w") as f:
            json.dump(processed_recommendation, f, indent=2)
        
        print(f"Processed recommendation: {recommendation['id']}")
    
    # Create a domain index
    domain_index = {}
    for recommendation in all_recommendations:
        domain_id = recommendation["domain_id"]
        if domain_id not in domain_index:
            domain_index[domain_id] = {
                "id": domain_id,
                "name": recommendation["domain_name"],
                "recommendations": []
            }
        domain_index[domain_id]["recommendations"].append(recommendation["id"])
    
    # Save domain index
    with open("data/processed/domain_index.json", "w") as f:
        json.dump(domain_index, f, indent=2)
    
    # Create a role index
    role_index = {}
    for recommendation in all_recommendations:
        for role in recommendation["roles"]:
            role_id = role["id"]
            if role_id not in role_index:
                role_index[role_id] = {
                    "id": role_id,
                    "name": role["name"],
                    "recommendations": []
                }
            role_index[role_id]["recommendations"].append(recommendation["id"])
    
    # Save role index
    with open("data/processed/role_index.json", "w") as f:
        json.dump(role_index, f, indent=2)
    
    # Create a master index with all recommendations
    master_index = {
        "total": len(all_recommendations),
        "recommendations": [rec["id"] for rec in all_recommendations]
    }
    
    # Save master index
    with open("data/processed/master_index.json", "w") as f:
        json.dump(master_index, f, indent=2)
    
    print(f"Processed {len(all_recommendations)} recommendations")
    print(f"Created indexes for {len(domain_index)} domains and {len(role_index)} roles")

if __name__ == "__main__":
    process_recommendations()
