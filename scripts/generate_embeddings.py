import os
import json
import sys
import numpy as np
from pathlib import Path
from sentence_transformers import SentenceTransformer
import faiss

# Add the project root to the Python path
sys.path.append(str(Path(__file__).parent.parent))

def generate_embeddings():
    """
    Generate embeddings for all processed recommendations and update the vector store
    """
    # Create output directory if it doesn't exist
    os.makedirs("data/embeddings", exist_ok=True)
    
    # Load the master index
    with open("data/processed/master_index.json", "r") as f:
        master_index = json.load(f)
    
    # Load all recommendations
    recommendations = []
    for rec_id in master_index["recommendations"]:
        with open(f"data/processed/{rec_id}.json", "r") as f:
            recommendations.append(json.load(f))
    
    print(f"Loaded {len(recommendations)} recommendations")
    
    # Initialize the sentence transformer model
    model = SentenceTransformer('all-MiniLM-L6-v2')
    print("Initialized embedding model")
    
    # Prepare texts for embedding
    texts = []
    for rec in recommendations:
        # Combine relevant fields for embedding
        text = f"{rec['title']} {rec['domain']['name']} {rec['recommendation']} {rec['rationale']} {rec['expected_outcome']}"
        texts.append(text)
    
    # Generate embeddings
    print("Generating embeddings...")
    embeddings = model.encode(texts)
    print(f"Generated embeddings with shape: {embeddings.shape}")
    
    # Create a FAISS index
    dimension = embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(np.array(embeddings).astype('float32'))
    
    # Save the FAISS index
    faiss.write_index(index, "data/embeddings/recommendations.index")
    
    # Save the mapping from index to recommendation ID
    index_mapping = {i: recommendations[i]["id"] for i in range(len(recommendations))}
    with open("data/embeddings/index_mapping.json", "w") as f:
        json.dump(index_mapping, f, indent=2)
    
    # Save the embedding model name for future reference
    with open("data/embeddings/model_info.json", "w") as f:
        json.dump({"model_name": "all-MiniLM-L6-v2"}, f, indent=2)
    
    print("Embeddings generated and vector store updated")

if __name__ == "__main__":
    generate_embeddings()
