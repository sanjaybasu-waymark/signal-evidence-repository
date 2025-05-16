import os
import argparse
from dotenv import load_dotenv

def setup_environment():
    """
    Set up the project environment
    """
    # Create required directories
    os.makedirs("data/raw", exist_ok=True)
    os.makedirs("data/processed", exist_ok=True)
    os.makedirs("data/embeddings", exist_ok=True)
    os.makedirs("src/web/static/css", exist_ok=True)
    os.makedirs("src/web/templates", exist_ok=True)
    
    # Create .env file if it doesn't exist
    if not os.path.exists(".env"):
        with open(".env", "w") as f:
            f.write("# API Configuration\n")
            f.write("API_PORT=8000\n")
            f.write("WEB_PORT=5000\n")
            f.write("DATA_DIR=./data\n")
            f.write("LOG_LEVEL=INFO\n")
    
    # Create requirements.txt
    with open("requirements.txt", "w") as f:
        f.write("fastapi==0.95.1\n")
        f.write("uvicorn==0.22.0\n")
        f.write("flask==2.3.2\n")
        f.write("requests==2.30.0\n")
        f.write("sentence-transformers==2.2.2\n")
        f.write("faiss-cpu==1.7.4\n")
        f.write("python-dotenv==1.0.0\n")
        f.write("pydantic==1.10.7\n")
    
    print("Environment setup complete")

def create_run_scripts():
    """
    Create scripts to run the application
    """
    # Create run_api.py
    with open("run_api.py", "w") as f:
        f.write("import os\n")
        f.write("import uvicorn\n")
        f.write("from dotenv import load_dotenv\n\n")
        f.write("if __name__ == \"__main__\":\n")
        f.write("    load_dotenv()\n")
        f.write("    port = int(os.getenv(\"API_PORT\", 8000))\n")
        f.write("    uvicorn.run(\"src.api.main:app\", host=\"0.0.0.0\", port=port, reload=True)\n")
    
    # Create run_web.py
    with open("run_web.py", "w") as f:
        f.write("import os\n")
        f.write("from dotenv import load_dotenv\n")
        f.write("from src.web.app import app\n\n")
        f.write("if __name__ == \"__main__\":\n")
        f.write("    load_dotenv()\n")
        f.write("    port = int(os.getenv(\"WEB_PORT\", 5000))\n")
        f.write("    app.run(host=\"0.0.0.0\", port=port, debug=True)\n")
    
    # Create Dockerfile
    with open("Dockerfile", "w") as f:
        f.write("FROM python:3.10-slim\n\n")
        f.write("WORKDIR /app\n\n")
        f.write("COPY requirements.txt .\n")
        f.write("RUN pip install --no-cache-dir -r requirements.txt\n\n")
        f.write("COPY . .\n\n")
        f.write("EXPOSE 8000\n")
        f.write("EXPOSE 5000\n\n")
        f.write("CMD [\"python\", \"run_api.py\"]\n")
    
    # Create docker-compose.yml
    with open("docker-compose.yml", "w") as f:
        f.write("version: '3'\n")
        f.write("services:\n")
        f.write("  api:\n")
        f.write("    build: .\n")
        f.write("    ports:\n")
        f.write("      - \"8000:8000\"\n")
        f.write("    volumes:\n")
        f.write("      - ./data:/app/data\n")
        f.write("    env_file:\n")
        f.write("      - .env\n")
        f.write("    command: [\"python\", \"run_api.py\"]\n")
        f.write("    restart: unless-stopped\n\n")
        f.write("  web:\n")
        f.write("    build: .\n")
        f.write("    ports:\n")
        f.write("      - \"5000:5000\"\n")
        f.write("    volumes:\n")
        f.write("      - ./data:/app/data\n")
        f.write("    env_file:\n")
        f.write("      - .env\n")
        f.write("    command: [\"python\", \"run_web.py\"]\n")
        f.write("    restart: unless-stopped\n")
        f.write("    depends_on:\n")
        f.write("      - api\n")
    
    print("Run scripts created")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Set up the Signal Evidence Library project")
    
    args = parser.parse_args()
    
    # Load environment variables
    load_dotenv()
    
    # Set up environment
    setup_environment()
    
    # Create run scripts
    create_run_scripts()
    
    print("Setup complete. Run the following commands to start the application:")
    print("1. Install dependencies: pip install -r requirements.txt")
    print("2. Create sample data: python scripts/create_samples.py")
    print("3. Start API server: python run_api.py")
    print("4. Start web server: python run_web.py")
