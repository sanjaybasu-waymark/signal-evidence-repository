#!/usr/bin/env python3

import json
import glob
import os

def validate_json_files():
    valid = True
    total_recs = 0
    domain_count = 0
    role_count = set()
    
    print("JSON Validation Report")
    print("=====================\n")
    
    for file in glob.glob('/home/ubuntu/evidence_repo/json_data/*.json'):
        domain_count += 1
        filename = os.path.basename(file)
        
        try:
            with open(file, 'r') as f:
                data = json.load(f)
                recs = data.get('recommendations', [])
                total_recs += len(recs)
                
                # Check for required fields in each recommendation
                for i, rec in enumerate(recs):
                    # Track unique roles
                    if 'role' in rec:
                        role_count.add(rec['role'])
                    
                    # Check required fields
                    required_fields = ['id', 'title', 'domain', 'role', 'implementation_guidance', 
                                      'expected_outcomes', 'target_population', 'citation', 
                                      'evidence_level', 'tags']
                    
                    missing = [field for field in required_fields if field not in rec]
                    if missing:
                        print(f"  - Warning: Recommendation {i+1} in {filename} is missing fields: {', '.join(missing)}")
                        valid = False
                
                print(f"✓ {filename}: Valid JSON with {len(recs)} recommendations")
                
        except Exception as e:
            valid = False
            print(f"✗ {filename}: INVALID JSON - {str(e)}")
    
    print("\nSummary:")
    print(f"- Total domains: {domain_count}")
    print(f"- Total roles: {len(role_count)}")
    print(f"- Total recommendations: {total_recs}")
    print(f"- Overall validation: {'PASSED' if valid else 'FAILED'}")
    
    return {
        "valid": valid,
        "total_recommendations": total_recs,
        "domain_count": domain_count,
        "role_count": len(role_count),
        "roles": list(role_count)
    }

if __name__ == "__main__":
    validate_json_files()
