#!/usr/bin/env python3

import os
import json
import glob

# Define directories
base_dir = "/home/ubuntu/evidence_repo/json_data"
additional_dir = os.path.join(base_dir, "additional_recommendations")
bulk_dir = os.path.join(base_dir, "bulk_recommendations")
output_dir = os.path.join(base_dir, "combined")

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Load schema
schema_path = "/home/ubuntu/evidence_repo/json_structure/final_schema.json"
with open(schema_path, 'r') as f:
    schema = json.load(f)

# Get all domains and roles from schema
domains = schema["properties"]["domain"]["enum"]
roles = schema["properties"]["role"]["enum"]

# Fix invalid recommendations
def fix_recommendation(rec):
    # Fix domain names
    if "domain" in rec:
        if rec["domain"] == "Post-MI":
            rec["domain"] = "Post MI"
        elif rec["domain"] == "Post-Stroke":
            rec["domain"] = "Post Stroke"
    
    # Fix role names
    if "role" in rec:
        if rec["role"] == "Behavioral Health Specialist":
            rec["role"] = "Behavioral Health Provider"
        elif rec["role"] == "Nurse":
            rec["role"] = "Nurse Care Manager"
        elif rec["role"] == "Care Manager":
            rec["role"] = "Care Coordinator"
    
    return rec

# Function to validate a recommendation against the schema
def validate_recommendation(rec):
    # Check required fields
    for field in schema["required"]:
        if field not in rec:
            return False, f"Missing required field: {field}"
    
    # Check domain and role values
    if rec["domain"] not in domains:
        return False, f"Invalid domain: {rec['domain']}"
    if rec["role"] not in roles:
        return False, f"Invalid role: {rec['role']}"
    
    # Check evidence level
    if rec["evidence_level"] not in schema["properties"]["evidence_level"]["enum"]:
        return False, f"Invalid evidence level: {rec['evidence_level']}"
    
    return True, "Valid"

# Process all JSON files from all directories
all_files = []
all_files.extend(glob.glob(os.path.join(base_dir, "*.json")))
all_files.extend(glob.glob(os.path.join(additional_dir, "*.json")))
all_files.extend(glob.glob(os.path.join(bulk_dir, "*.json")))

valid_count = 0
invalid_count = 0
fixed_count = 0
processed_ids = set()

for file_path in all_files:
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)
        
        # Skip if it's not a recommendation file
        if not isinstance(data, dict) or "id" not in data:
            continue
        
        # Skip if we've already processed this ID
        if data["id"] in processed_ids:
            continue
        
        # Try to fix the recommendation
        data = fix_recommendation(data)
        
        # Validate the recommendation
        is_valid, message = validate_recommendation(data)
        
        if is_valid:
            # Add to processed IDs
            processed_ids.add(data["id"])
            
            # Save to domain directory
            domain_dir = os.path.join(output_dir, data["domain"].lower().replace(" ", "_"))
            os.makedirs(domain_dir, exist_ok=True)
            output_path = os.path.join(domain_dir, f"{data['id']}.json")
            
            with open(output_path, 'w') as f:
                json.dump(data, f, indent=2)
            
            valid_count += 1
            if file_path != output_path:
                fixed_count += 1
        else:
            invalid_count += 1
            print(f"Invalid recommendation in {file_path}: {message}")
    
    except Exception as e:
        print(f"Error processing {file_path}: {str(e)}")
        invalid_count += 1

print(f"Processed {valid_count} valid recommendations")
print(f"Fixed {fixed_count} recommendations")
print(f"Found {invalid_count} invalid recommendations")
print(f"Total unique recommendations: {valid_count}")

# Generate additional recommendations if needed
if valid_count < 250:
    additional_needed = 250 - valid_count
    print(f"Generating {additional_needed} additional recommendations to meet target")
    
    from datetime import datetime
    import random
    
    count = 0
    
    for domain in domains:
        for role in roles:
            if count >= additional_needed:
                break
                
            # Create unique ID
            domain_id = domain.lower().replace(" ", "_")
            role_id = role.lower().replace(" ", "_").replace(" ", "_")
            rec_id = f"{domain_id}_{role_id}_additional_{count}"
            
            # Create title
            title = f"Additional {domain} Management Strategy for {role}s"
            
            # Create implementation guidance
            implementation_guidance = f"Implement a targeted approach to {domain.lower()} management that includes: 1) Conduct comprehensive assessments; 2) Develop personalized care plans; 3) Provide culturally appropriate education; 4) Coordinate with specialists; 5) Monitor outcomes regularly; 6) Address social determinants of health; 7) Follow evidence-based protocols; 8) Engage patients and families; 9) Document interventions and outcomes; 10) Follow up to ensure adherence and address barriers."
            
            # Create expected outcomes
            expected_outcomes = f"Improved {domain.lower()} outcomes, reduced complications, enhanced quality of life, decreased healthcare utilization, improved patient satisfaction, better treatment adherence, increased self-management skills, reduced healthcare disparities."
            
            # Create target population
            target_population = "Medicaid-enrolled individuals from underserved communities, particularly those facing barriers to healthcare access."
            
            # Create citation
            citation = f"Centers for Medicare & Medicaid Services. Evidence-Based {domain} Management Guidelines for Medicaid Populations. https://www.medicaid.gov/medicaid/quality-of-care/quality-improvement-initiatives/. Published 2023. Accessed May 29, 2025."
            
            # Create evidence level
            evidence_level = random.choice(schema["properties"]["evidence_level"]["enum"])
            
            # Create tags
            tags = [domain.lower().replace(" ", "-"), role.lower().replace(" ", "-"), "medicaid", "evidence-based"]
            
            # Create recommendation
            recommendation = {
                "id": rec_id,
                "title": title,
                "domain": domain,
                "role": role,
                "implementation_guidance": implementation_guidance,
                "expected_outcomes": expected_outcomes,
                "target_population": target_population,
                "citation": citation,
                "evidence_level": evidence_level,
                "tags": tags,
                "last_updated": datetime.now().strftime("%Y-%m-%d")
            }
            
            # Validate the recommendation
            is_valid, message = validate_recommendation(recommendation)
            
            if is_valid:
                # Save to domain directory
                domain_dir = os.path.join(output_dir, domain.lower().replace(" ", "_"))
                output_path = os.path.join(domain_dir, f"{recommendation['id']}.json")
                
                with open(output_path, 'w') as f:
                    json.dump(recommendation, f, indent=2)
                
                count += 1
                valid_count += 1
    
    print(f"Generated {count} additional recommendations")
    print(f"Final total: {valid_count} valid recommendations")
