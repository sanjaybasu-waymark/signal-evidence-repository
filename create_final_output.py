#!/usr/bin/env python3

import os
import json
import glob
import shutil

# Define directories
base_dir = "/home/ubuntu/evidence_repo"
json_dir = os.path.join(base_dir, "json_data")
combined_dir = os.path.join(json_dir, "combined")
output_dir = os.path.join(base_dir, "final_output")
zip_dir = os.path.join(base_dir, "zip")

# Create output directories
os.makedirs(output_dir, exist_ok=True)
os.makedirs(zip_dir, exist_ok=True)

# Load metadata
metadata_path = os.path.join(base_dir, "json_structure/metadata.json")
with open(metadata_path, 'r') as f:
    metadata = json.load(f)

# Create index file with all recommendations
all_recommendations = []

# Process all domain directories
for domain in metadata["domains"]:
    domain_dir = os.path.join(combined_dir, domain.lower().replace(" ", "_"))
    
    if not os.path.exists(domain_dir):
        print(f"Warning: Directory not found for domain: {domain}")
        continue
    
    # Get all JSON files in the domain directory
    domain_files = glob.glob(os.path.join(domain_dir, "*.json"))
    
    domain_recommendations = []
    
    for file_path in domain_files:
        try:
            with open(file_path, 'r') as f:
                rec = json.load(f)
            
            # Add to domain recommendations
            domain_recommendations.append(rec)
            
            # Add to all recommendations
            all_recommendations.append(rec)
        
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
    
    # Create domain index file
    domain_index = {
        "domain": domain,
        "count": len(domain_recommendations),
        "recommendations": domain_recommendations
    }
    
    domain_output_path = os.path.join(output_dir, f"{domain.lower().replace(' ', '_')}.json")
    with open(domain_output_path, 'w') as f:
        json.dump(domain_index, f, indent=2)
    
    print(f"Created domain index for {domain} with {len(domain_recommendations)} recommendations")

# Create role-based index files
for role in metadata["roles"]:
    role_recommendations = [rec for rec in all_recommendations if rec["role"] == role]
    
    role_index = {
        "role": role,
        "count": len(role_recommendations),
        "recommendations": role_recommendations
    }
    
    role_output_path = os.path.join(output_dir, f"role_{role.lower().replace(' ', '_')}.json")
    with open(role_output_path, 'w') as f:
        json.dump(role_index, f, indent=2)
    
    print(f"Created role index for {role} with {len(role_recommendations)} recommendations")

# Create main index file
main_index = {
    "total_count": len(all_recommendations),
    "domains": metadata["domains"],
    "roles": metadata["roles"],
    "evidence_levels": metadata["evidence_levels"],
    "recommendations": all_recommendations
}

main_output_path = os.path.join(output_dir, "all_recommendations.json")
with open(main_output_path, 'w') as f:
    json.dump(main_index, f, indent=2)

print(f"Created main index with {len(all_recommendations)} recommendations")

# Create a zip file with all JSON files
shutil.make_archive(os.path.join(zip_dir, "evidence_repository"), 'zip', output_dir)

print(f"Created zip file at {os.path.join(zip_dir, 'evidence_repository.zip')}")
print("Integration complete!")
