# Signal Evidence Library

A comprehensive, peer-reviewed knowledge base to serve as the foundation for population health management recommendations. This library leverages automations and multidisciplinary internal peer review to maintain, update, and deliver evidence-based guidance customized by clinical domain and professional role.

## Overview

The Signal Evidence Library is designed to provide:

- **Role-specific guidance** for each member of the care team (nurses, CHWs, social workers, pharmacists, care coordinators)
- **Domain-organized content** structured by clinical condition and social need
- **Evidence-based recommendations** built exclusively from peer-reviewed literature and established guidelines
- **Transparent citations** with clear provenance tracking

## Features

- Content organized by professional role, clinical/social domain, and intervention complexity
- Vector-based semantic search for finding relevant recommendations
- API access for integration with other systems
- Web interface for browsing and searching content
- Docker-based deployment for easy setup

## Project Structure

```
signal-evidence-library/
├── config/                  # Configuration files
├── data/                    # Data storage
│   ├── raw/                 # Original guideline documents
│   ├── processed/           # Processed content
│   └── embeddings/          # Vector embeddings
├── src/                     # Source code
│   ├── pipeline/            # Content processing pipeline
│   ├── api/                 # API implementation
│   ├── db/                  # Database interactions
│   ├── web/                 # Web interface
│   └── utils/               # Utility functions
├── scripts/                 # Automation scripts
├── tests/                   # Test cases
└── docs/                    # Documentation
```

## Getting Started

### Prerequisites

- Python 3.8+
- Docker and Docker Compose (for containerized deployment)

### Installation

1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Configure environment variables in `.env`
4. Run setup script: `python scripts/setup.py`

### Running the Application

#### Development Mode

```bash
python src/api/main.py
```

#### Production Mode (Docker)

```bash
docker-compose up -d
```

## API Documentation

The API provides the following endpoints:

- `/query`: Natural language query endpoint
- `/browse`: Structured content browsing
- `/document/{id}`: Retrieve specific document
- `/search`: Combined vector and metadata search

## Web Interface

The web interface is available at `http://localhost:8000` and provides:

- Content browsing by domain and role
- Natural language search
- Document visualization
- Export capabilities

## Contributing

Guidelines for contributing to the Signal Evidence Library, including content submission and review processes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

### Local Deployment

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/signal-evidence-library.git
   cd signal-evidence-library
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the setup script:
   ```bash
   python scripts/setup.py
   ```

4. Create sample data:
   ```bash
   python scripts/create_samples.py
   ```

5. Start the API server:
   ```bash
   python run_api.py
   ```

6. In a separate terminal, start the web server:
   ```bash
   python run_web.py
   ```

7. Access the web interface at http://localhost:5000

### Docker Deployment

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/signal-evidence-library.git
   cd signal-evidence-library
   ```

2. Build and start the Docker containers:
   ```bash
   docker-compose up -d
   ```

3. Access the web interface at http://localhost:5000

### Production Deployment

For production deployment, consider the following:

1. Use a production-ready web server like Nginx or Apache as a reverse proxy
2. Set up SSL/TLS for secure connections
3. Configure proper authentication and authorization
4. Set up monitoring and logging
5. Use a production database for metadata storage

Example Nginx configuration:
```nginx
server {
    listen 80;
    server_name evidence.example.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```
