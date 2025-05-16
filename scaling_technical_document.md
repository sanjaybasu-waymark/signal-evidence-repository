# Technical Document: Scaling the Signal Evidence Library to Thousands of Recommendations

## Overview

This document provides technical guidance for the data science team on how to scale the Signal Evidence Library from its current prototype (24 recommendations) to a production system capable of handling thousands of recommendations while maintaining performance, reliability, and usability.

## Current Architecture Limitations

The current implementation has several limitations that need to be addressed for scaling:

1. **File-based Storage**: JSON files in the filesystem won't scale efficiently
2. **In-memory Processing**: All data is loaded into memory, which won't work for large datasets
3. **Limited Search Capabilities**: Basic keyword matching without advanced semantic search
4. **No Pagination**: All results are returned at once, which will cause performance issues
5. **Manual Content Management**: No streamlined process for adding new recommendations

## Recommended Technical Upgrades

### 1. Database Implementation

```python
# Current approach (file-based):
def load_recommendation(rec_id):
    with open(os.path.join(PROCESSED_DATA_PATH, f'{rec_id}.json'), 'r') as f:
        return json.load(f)

# Recommended approach (database):
from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

Base = declarative_base()

class Recommendation(Base):
    __tablename__ = 'recommendations'
    
    id = Column(String, primary_key=True)
    title = Column(String, nullable=False)
    domain_id = Column(String, ForeignKey('domains.id'))
    recommendation_text = Column(Text, nullable=False)
    rationale = Column(Text)
    expected_outcome = Column(Text)
    implementation_notes = Column(Text)
    priority_level = Column(String)
    evidence_level = Column(String)
    last_updated = Column(String)
    version = Column(String)
    
    # Relationships
    domain = relationship("Domain", back_populates="recommendations")
    roles = relationship("RecommendationRole", back_populates="recommendation")
    citations = relationship("Citation", back_populates="recommendation")
    
# Usage example:
def get_recommendation(rec_id):
    session = Session()
    return session.query(Recommendation).filter(Recommendation.id == rec_id).first()
```

### 2. Vector Database for Semantic Search

```python
# Current approach (basic text search):
def text_search(query, master_index):
    recommendations = []
    for rec_id in master_index['recommendations']:
        rec = load_recommendation(rec_id)
        if (query.lower() in rec['title'].lower() or 
            query.lower() in rec['recommendation'].lower()):
            recommendations.append(rec)
    return recommendations

# Recommended approach (vector database):
import pinecone
from sentence_transformers import SentenceTransformer

# Initialize once at startup
def initialize_vector_search():
    model = SentenceTransformer('all-MiniLM-L6-v2')
    pinecone.init(api_key=os.environ.get('PINECONE_API_KEY'), environment='us-west1-gcp')
    index = pinecone.Index('signal-evidence-library')
    return model, index

# Search function
def semantic_search(query, top_k=10):
    model, index = get_vector_search_instance()
    query_embedding = model.encode([query])[0].tolist()
    results = index.query(vector=query_embedding, top_k=top_k, include_metadata=True)
    
    recommendation_ids = [match['id'] for match in results['matches']]
    return get_recommendations_by_ids(recommendation_ids)
```

### 3. Content Pipeline for Batch Processing

```python
# Batch processing for new content
def process_new_recommendations(input_file):
    # Read from CSV, Excel, or structured format
    df = pd.read_csv(input_file)
    
    # Process in batches to avoid memory issues
    batch_size = 100
    for i in range(0, len(df), batch_size):
        batch = df.iloc[i:i+batch_size]
        
        # Process each recommendation
        for _, row in batch.iterrows():
            # Create recommendation object
            rec = Recommendation(
                id=generate_id(row),
                title=row['title'],
                domain_id=row['domain_id'],
                recommendation_text=row['recommendation'],
                # ... other fields
            )
            
            # Add to database
            session.add(rec)
            
            # Generate embedding for vector search
            embedding = model.encode([row['title'] + " " + row['recommendation']])[0].tolist()
            
            # Add to vector database
            index.upsert([(rec.id, embedding, {"title": rec.title})])
        
        # Commit batch
        session.commit()
```

### 4. API Layer with Pagination

```python
from flask import Flask, request, jsonify
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class RecommendationListResource(Resource):
    def get(self):
        # Get pagination parameters
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 20))
        
        # Get filter parameters
        domain_id = request.args.get('domain_id')
        role_id = request.args.get('role_id')
        
        # Build query
        query = session.query(Recommendation)
        if domain_id:
            query = query.filter(Recommendation.domain_id == domain_id)
        if role_id:
            query = query.join(RecommendationRole).filter(RecommendationRole.role_id == role_id)
        
        # Apply pagination
        recommendations = query.offset((page - 1) * per_page).limit(per_page).all()
        total = query.count()
        
        # Format response
        return {
            'recommendations': [rec.to_dict() for rec in recommendations],
            'pagination': {
                'page': page,
                'per_page': per_page,
                'total': total,
                'pages': (total + per_page - 1) // per_page
            }
        }

api.add_resource(RecommendationListResource, '/api/recommendations')
```

### 5. Caching Layer for Performance

```python
from flask_caching import Cache

cache = Cache(app, config={'CACHE_TYPE': 'redis', 'CACHE_REDIS_URL': os.environ.get('REDIS_URL')})

@cache.memoize(timeout=3600)  # Cache for 1 hour
def get_domain_recommendations(domain_id):
    return session.query(Recommendation).filter(Recommendation.domain_id == domain_id).all()

@cache.memoize(timeout=300)  # Cache for 5 minutes
def search_recommendations(query, filters=None):
    # Implementation of search with filters
    pass
```

## Data Model for Scaling

```
Recommendation
├── id (PK)
├── title
├── domain_id (FK)
├── recommendation_text
├── rationale
├── expected_outcome
├── implementation_notes
├── priority_level
├── evidence_level
├── last_updated
└── version

Domain
├── id (PK)
├── name
└── description

Role
├── id (PK)
├── name
└── description

RecommendationRole (Junction table)
├── recommendation_id (PK, FK)
└── role_id (PK, FK)

Citation
├── id (PK)
├── recommendation_id (FK)
├── authors
├── title
├── journal
├── year
├── doi
└── url
```

## Infrastructure Recommendations

1. **Database**: PostgreSQL for relational data, with proper indexing
2. **Vector Database**: Pinecone, Weaviate, or Qdrant for semantic search
3. **Caching**: Redis for frequently accessed data
4. **API**: Flask with Flask-RESTful or FastAPI for better performance
5. **Deployment**: Docker containers with Kubernetes for scaling
6. **Monitoring**: Prometheus and Grafana for performance metrics

## Content Management Workflow

1. **Input Templates**: Standardized Excel/CSV templates for batch uploads
2. **Validation Pipeline**: Automated checks for data quality and completeness
3. **Review System**: Multi-stage approval workflow before publication
4. **Version Control**: Track changes to recommendations over time
5. **Bulk Operations**: Tools for batch updates across multiple recommendations

## Implementation Roadmap

1. **Phase 1**: Database migration (2 weeks)
   - Set up PostgreSQL schema
   - Migrate existing JSON data
   - Implement basic CRUD operations

2. **Phase 2**: Search enhancement (2 weeks)
   - Implement vector database
   - Create embeddings for existing content
   - Develop hybrid search (keyword + semantic)

3. **Phase 3**: API development (3 weeks)
   - Design RESTful API
   - Implement pagination and filtering
   - Add caching layer

4. **Phase 4**: Content management (3 weeks)
   - Build batch processing pipeline
   - Create validation tools
   - Implement version control

5. **Phase 5**: UI enhancements (2 weeks)
   - Update frontend for pagination
   - Improve search interface
   - Add advanced filtering

## Performance Considerations

1. **Database Indexing**: Create indexes on frequently queried fields
2. **Query Optimization**: Use database profiling to identify slow queries
3. **Caching Strategy**: Cache common queries and invalidate when data changes
4. **Batch Processing**: Process large operations in smaller batches
5. **Connection Pooling**: Optimize database connections

## Monitoring and Maintenance

1. **Performance Metrics**: Track response times, database load, and cache hit rates
2. **Error Tracking**: Implement centralized logging and error reporting
3. **Regular Backups**: Schedule automated backups of all data
4. **Update Schedule**: Plan for regular updates of embeddings and search indexes

## Conclusion

By implementing these technical changes, the Signal Evidence Library can scale to thousands of recommendations while maintaining performance and usability. The modular approach allows for incremental improvements and ensures the system can continue to grow as more content is added.
