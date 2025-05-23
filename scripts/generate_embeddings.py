"""
Script to generate vector embeddings for recommendations.
"""

import os
import sys
import json
import numpy as np
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.db.models import Base, Recommendation

# In a production environment, this would use a proper embedding model
# For this prototype, we'll use a simple TF-IDF approach
def generate_simple_embedding(text, dim=384):
    """
    Generate a simple deterministic embedding for text.
    This is a placeholder for a real embedding model.
    
    Args:
        text (str): Text to embed
        dim (int): Embedding dimension
        
    Returns:
        str: JSON string of embedding vector
    """
    # Create a deterministic hash-based embedding (NOT for production use)
    import hashlib
    
    # Initialize a vector of zeros
    vector = np.zeros(dim)
    
    # Use words to influence different dimensions
    words = text.lower().split()
    for i, word in enumerate(words):
        # Hash the word to get a deterministic value
        hash_val = int(hashlib.md5(word.encode()).hexdigest(), 16)
        
        # Use the hash to set values in the embedding
        for j in range(min(10, len(word))):
            idx = (hash_val + j) % dim
            vector[idx] = (hash_val % 10000) / 10000.0
    
    # Normalize the vector
    norm = np.linalg.norm(vector)
    if norm > 0:
        vector = vector / norm
    
    return json.dumps(vector.tolist())

def generate_embeddings():
    """Generate embeddings for all recommendations in the database."""
    # Create engine and session
    engine = create_engine('sqlite:///data/signal_evidence.db')
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    
    # Get all recommendations
    recommendations = session.query(Recommendation).all()
    
    count = 0
    for rec in recommendations:
        # Combine title and text for embedding
        text = f"{rec.title} {rec.recommendation_text}"
        
        # Generate embedding
        embedding = generate_simple_embedding(text)
        
        # Update recommendation
        rec.embedding = embedding
        count += 1
        
        # Commit every 100 records
        if count % 100 == 0:
            session.commit()
            print(f"Processed {count} recommendations")
    
    # Final commit
    session.commit()
    print(f"Generated embeddings for {count} recommendations")
    
    return count

if __name__ == "__main__":
    print("Generating embeddings...")
    count = generate_embeddings()
    print(f"Generated embeddings for {count} recommendations")
