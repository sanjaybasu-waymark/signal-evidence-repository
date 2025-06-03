#!/usr/bin/env python3
import json
import os
import glob

def consolidate_recommendations():
    """
    Consolidate all recommendation JSON files into a single JSON array
    """
    all_recommendations = []
    
    # Process main JSON files
    main_json_files = glob.glob('json_data/*_recommendations.json')
    for json_file in main_json_files:
        try:
            with open(json_file, 'r') as f:
                data = json.load(f)
                if isinstance(data, list):
                    all_recommendations.extend(data)
                else:
                    all_recommendations.append(data)
        except Exception as e:
            print(f"Error processing {json_file}: {e}")
    
    # Process additional recommendations
    additional_json_files = glob.glob('json_data/additional_recommendations/*.json')
    for json_file in additional_json_files:
        try:
            with open(json_file, 'r') as f:
                data = json.load(f)
                if isinstance(data, list):
                    all_recommendations.extend(data)
                else:
                    all_recommendations.append(data)
        except Exception as e:
            print(f"Error processing {json_file}: {e}")
    
    # Save consolidated data
    with open('website/all_recommendations.js', 'w') as f:
        f.write("const allRecommendations = ")
        json.dump(all_recommendations, f, indent=2)
        f.write(";")
    
    print(f"Consolidated {len(all_recommendations)} recommendations into website/all_recommendations.js")
    
    # Generate statistics
    domains = {}
    roles = {}
    
    for rec in all_recommendations:
        domain = rec.get('domain', 'Unknown')
        role = rec.get('role', 'Unknown')
        
        if domain in domains:
            domains[domain] += 1
        else:
            domains[domain] = 1
            
        if role in roles:
            roles[role] += 1
        else:
            roles[role] = 1
    
    print("\nDomain Statistics:")
    for domain, count in sorted(domains.items()):
        print(f"{domain}: {count}")
    
    print("\nRole Statistics:")
    for role, count in sorted(roles.items()):
        print(f"{role}: {count}")
    
    return all_recommendations, domains, roles

if __name__ == "__main__":
    consolidate_recommendations()
