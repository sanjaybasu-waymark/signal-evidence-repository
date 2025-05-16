import os
import numpy as np
import faiss
from typing import List, Dict, Any, Optional
from sentence_transformers import SentenceTransformer
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class VectorStore:
    """Vector store for semantic search of recommendations"""
    
    def __init__(self):
        self.model = None
        self.index = None
        self.recommendation_ids = []
        self.initialized = False
    
    def initialize(self):
        """Initialize the vector store with the sentence transformer model"""
        if self.initialized:
            return
            
        print("Initializing vector store...")
        # Load the sentence transformer model
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        
        # Create a new FAISS index
        embedding_size = 384  # Default size for all-MiniLM-L6-v2
        self.index = faiss.IndexFlatL2(embedding_size)
        
        self.initialized = True
        print("Vector store initialized")
    
    def add_recommendation(self, rec_id: str, title: str, text: str, rationale: str = ""):
        """Add a recommendation to the vector store"""
        if not self.initialized:
            self.initialize()
        
        # Combine fields for better semantic representation
        content = f"{title} {text} {rationale}"
        
        # Generate embedding
        embedding = self.model.encode([content])[0]
        
        # Add to index
        self.index.add(np.array([embedding], dtype=np.float32))
        self.recommendation_ids.append(rec_id)
    
    def add_recommendations_batch(self, recommendations: List[Dict[str, Any]]):
        """Add multiple recommendations to the vector store in a batch"""
        if not self.initialized:
            self.initialize()
        
        embeddings = []
        for rec in recommendations:
            content = f"{rec['title']} {rec['recommendation']} {rec.get('rationale', '')}"
            embedding = self.model.encode([content])[0]
            embeddings.append(embedding)
            self.recommendation_ids.append(rec['id'])
        
        if embeddings:
            self.index.add(np.array(embeddings, dtype=np.float32))
    
    def search(self, query: str, top_k: int = 10) -> List[Dict[str, Any]]:
        """Search for recommendations similar to the query"""
        if not self.initialized:
            self.initialize()
            
        if len(self.recommendation_ids) == 0:
            return []
        
        # Generate query embedding
        query_embedding = self.model.encode([query])[0]
        
        # Search the index
        distances, indices = self.index.search(
            np.array([query_embedding], dtype=np.float32), 
            min(top_k, len(self.recommendation_ids))
        )
        
        # Format results
        results = []
        for i, idx in enumerate(indices[0]):
            if idx < len(self.recommendation_ids):
                results.append({
                    'id': self.recommendation_ids[idx],
                    'score': float(1.0 - distances[0][i] / 100.0)  # Convert distance to similarity score
                })
        
        return results
    
    def rebuild_index(self, recommendations: List[Dict[str, Any]]):
        """Rebuild the entire index with the provided recommendations"""
        if not self.initialized:
            self.initialize()
        
        # Reset the index
        embedding_size = 384  # Default size for all-MiniLM-L6-v2
        self.index = faiss.IndexFlatL2(embedding_size)
        self.recommendation_ids = []
        
        # Add all recommendations
        self.add_recommendations_batch(recommendations)
        
        print(f"Index rebuilt with {len(self.recommendation_ids)} recommendations")

# Create a singleton instance
vector_store = VectorStore()
