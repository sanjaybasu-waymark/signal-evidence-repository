import os
import json
from typing import List, Dict, Any, Optional
from sentence_transformers import SentenceTransformer
import numpy as np
import faiss

from ..db.models import Recommendation, RecommendationStore

class VectorStore:
    def __init__(self, data_dir: str, model_name: str = "all-MiniLM-L6-v2"):
        self.data_dir = data_dir
        self.embeddings_dir = os.path.join(data_dir, "embeddings")
        os.makedirs(self.embeddings_dir, exist_ok=True)
        
        # Initialize the embedding model
        self.model = SentenceTransformer(model_name)
        
        # Initialize FAISS index
        self.index = None
        self.recommendation_ids = []
        
        # Load or create index
        self._load_or_create_index()
    
    def _load_or_create_index(self):
        index_path = os.path.join(self.embeddings_dir, "faiss_index.bin")
        ids_path = os.path.join(self.embeddings_dir, "recommendation_ids.json")
        
        if os.path.exists(index_path) and os.path.exists(ids_path):
            # Load existing index
            self.index = faiss.read_index(index_path)
            with open(ids_path, 'r') as f:
                self.recommendation_ids = json.load(f)
        else:
            # Create new index
            embedding_dim = self.model.get_sentence_embedding_dimension()
            self.index = faiss.IndexFlatL2(embedding_dim)
            self.recommendation_ids = []
    
    def _save_index(self):
        index_path = os.path.join(self.embeddings_dir, "faiss_index.bin")
        ids_path = os.path.join(self.embeddings_dir, "recommendation_ids.json")
        
        faiss.write_index(self.index, index_path)
        with open(ids_path, 'w') as f:
            json.dump(self.recommendation_ids, f)
    
    def _get_recommendation_text(self, recommendation: Recommendation) -> str:
        """Create a text representation of a recommendation for embedding"""
        text_parts = [
            recommendation.title,
            recommendation.domain.name,
            " ".join([role.name for role in recommendation.roles]),
            recommendation.recommendation,
            recommendation.rationale,
            recommendation.expected_outcome
        ]
        return " ".join(text_parts)
    
    def add_recommendation(self, recommendation: Recommendation):
        """Add a recommendation to the vector store"""
        # Create text representation
        text = self._get_recommendation_text(recommendation)
        
        # Generate embedding
        embedding = self.model.encode([text])[0]
        embedding = np.array([embedding]).astype('float32')
        
        # Add to index
        self.index.add(embedding)
        self.recommendation_ids.append(recommendation.id)
        
        # Save index
        self._save_index()
    
    def search(self, query: str, top_k: int = 5) -> List[str]:
        """Search for recommendations similar to the query"""
        if self.index.ntotal == 0:
            return []
        
        # Generate query embedding
        query_embedding = self.model.encode([query])[0]
        query_embedding = np.array([query_embedding]).astype('float32')
        
        # Search index
        distances, indices = self.index.search(query_embedding, min(top_k, self.index.ntotal))
        
        # Return recommendation IDs
        results = [self.recommendation_ids[idx] for idx in indices[0]]
        return results
    
    def rebuild_index(self, recommendation_store: RecommendationStore):
        """Rebuild the entire index from the recommendation store"""
        # Create new index
        embedding_dim = self.model.get_sentence_embedding_dimension()
        self.index = faiss.IndexFlatL2(embedding_dim)
        self.recommendation_ids = []
        
        # Add all recommendations
        for recommendation_id in recommendation_store.list_recommendations():
            recommendation = recommendation_store.get_recommendation(recommendation_id)
            if recommendation:
                self.add_recommendation(recommendation)
        
        # Save index
        self._save_index()
