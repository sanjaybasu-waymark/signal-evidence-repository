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

# Create domain and role directories
for domain in domains:
    domain_dir = os.path.join(output_dir, domain.lower().replace(" ", "_"))
    os.makedirs(domain_dir, exist_ok=True)

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
        
        # Validate the recommendation
        is_valid, message = validate_recommendation(data)
        
        if is_valid:
            # Add to processed IDs
            processed_ids.add(data["id"])
            
            # Save to domain directory
            domain_dir = os.path.join(output_dir, data["domain"].lower().replace(" ", "_"))
            output_path = os.path.join(domain_dir, f"{data['id']}.json")
            
            with open(output_path, 'w') as f:
                json.dump(data, f, indent=2)
            
            valid_count += 1
        else:
            invalid_count += 1
            print(f"Invalid recommendation in {file_path}: {message}")
    
    except Exception as e:
        print(f"Error processing {file_path}: {str(e)}")
        invalid_count += 1

print(f"Processed {valid_count} valid recommendations")
print(f"Found {invalid_count} invalid recommendations")
print(f"Total unique recommendations: {valid_count}")
