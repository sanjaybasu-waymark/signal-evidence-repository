#!/usr/bin/env python3
import os
import json
import glob

def load_json_file(file_path):
    """Load a JSON file and return its contents."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            return json.loads(content)
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return None

def collect_all_recommendations():
    """Collect all recommendations from various locations in the repository."""
    base_dir = "/home/ubuntu/evidence_repo"
    all_recommendations = []
    
    # Track loaded recommendations by ID to avoid duplicates
    loaded_ids = set()
    
    # 1. Load from json_data directory
    json_data_dir = os.path.join(base_dir, "json_data")
    main_json_files = glob.glob(os.path.join(json_data_dir, "*.json"))
    
    for file_path in main_json_files:
        data = load_json_file(file_path)
        if not data:
            continue
            
        # Handle both array and single object formats
        if isinstance(data, list):
            for item in data:
                if item and isinstance(item, dict) and 'title' in item:
                    rec_id = item.get('id', item.get('title', ''))
                    if rec_id and rec_id not in loaded_ids:
                        loaded_ids.add(rec_id)
                        all_recommendations.append(item)
        elif isinstance(data, dict) and 'title' in data:
            rec_id = data.get('id', data.get('title', ''))
            if rec_id and rec_id not in loaded_ids:
                loaded_ids.add(rec_id)
                all_recommendations.append(data)
    
    # 2. Load from json_data/additional_recommendations directory
    additional_dir = os.path.join(json_data_dir, "additional_recommendations")
    if os.path.exists(additional_dir):
        additional_files = glob.glob(os.path.join(additional_dir, "*.json"))
        
        for file_path in additional_files:
            data = load_json_file(file_path)
            if not data:
                continue
                
            # Handle both array and single object formats
            if isinstance(data, list):
                for item in data:
                    if item and isinstance(item, dict) and 'title' in item:
                        rec_id = item.get('id', item.get('title', ''))
                        if rec_id and rec_id not in loaded_ids:
                            loaded_ids.add(rec_id)
                            all_recommendations.append(item)
            elif isinstance(data, dict) and 'title' in data:
                rec_id = data.get('id', data.get('title', ''))
                if rec_id and rec_id not in loaded_ids:
                    loaded_ids.add(rec_id)
                    all_recommendations.append(data)
    
    # 3. Count recommendations by domain and role
    domain_counts = {}
    role_counts = {}
    
    for rec in all_recommendations:
        domain = rec.get('domain', 'Unknown')
        role = rec.get('role', 'Unknown')
        
        domain_counts[domain] = domain_counts.get(domain, 0) + 1
        role_counts[role] = role_counts.get(role, 0) + 1
    
    # Print statistics
    print(f"Total recommendations: {len(all_recommendations)}")
    print("\nDomain counts:")
    for domain, count in sorted(domain_counts.items()):
        print(f"  {domain}: {count}")
    
    print("\nRole counts:")
    for role, count in sorted(role_counts.items()):
        print(f"  {role}: {count}")
    
    # Create embedded data JavaScript
    js_data = f"const allRecommendations = {json.dumps(all_recommendations, indent=2)};"
    
    # Write to a JavaScript file
    js_file_path = os.path.join(base_dir, "website", "recommendations-data.js")
    with open(js_file_path, 'w') as f:
        f.write(js_data)
    
    print(f"\nEmbedded data written to {js_file_path}")
    
    return all_recommendations, domain_counts, role_counts

if __name__ == "__main__":
    collect_all_recommendations()
