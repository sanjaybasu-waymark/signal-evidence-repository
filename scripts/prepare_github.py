import os
import sys
import argparse
from dotenv import load_dotenv

def create_github_files():
    """
    Create files needed for GitHub repository
    """
    # Create LICENSE file
    with open("LICENSE", "w") as f:
        f.write("MIT License\n\n")
        f.write("Copyright (c) 2025 Waymark\n\n")
        f.write("Permission is hereby granted, free of charge, to any person obtaining a copy\n")
        f.write("of this software and associated documentation files (the \"Software\"), to deal\n")
        f.write("in the Software without restriction, including without limitation the rights\n")
        f.write("to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n")
        f.write("copies of the Software, and to permit persons to whom the Software is\n")
        f.write("furnished to do so, subject to the following conditions:\n\n")
        f.write("The above copyright notice and this permission notice shall be included in all\n")
        f.write("copies or substantial portions of the Software.\n\n")
        f.write("THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n")
        f.write("IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n")
        f.write("FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n")
        f.write("AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n")
        f.write("LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n")
        f.write("OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n")
        f.write("SOFTWARE.\n")
    
    # Create CONTRIBUTING.md
    with open("CONTRIBUTING.md", "w") as f:
        f.write("# Contributing to Signal Evidence Library\n\n")
        f.write("Thank you for considering contributing to the Signal Evidence Library! This document provides guidelines and instructions for contributing.\n\n")
        f.write("## Code of Conduct\n\n")
        f.write("Please be respectful and considerate of others when contributing to this project.\n\n")
        f.write("## How to Contribute\n\n")
        f.write("1. Fork the repository\n")
        f.write("2. Create a feature branch (`git checkout -b feature/amazing-feature`)\n")
        f.write("3. Commit your changes (`git commit -m 'Add some amazing feature'`)\n")
        f.write("4. Push to the branch (`git push origin feature/amazing-feature`)\n")
        f.write("5. Open a Pull Request\n\n")
        f.write("## Development Setup\n\n")
        f.write("1. Clone the repository\n")
        f.write("2. Install dependencies: `pip install -r requirements.txt`\n")
        f.write("3. Run the setup script: `python scripts/setup.py`\n")
        f.write("4. Create sample data: `python scripts/create_samples.py`\n")
        f.write("5. Start the API server: `python run_api.py`\n")
        f.write("6. Start the web server: `python run_web.py`\n\n")
        f.write("## Adding Content\n\n")
        f.write("To add new evidence-based recommendations:\n\n")
        f.write("1. Create a JSON file with the recommendation data\n")
        f.write("2. Use the content processor to process the data\n")
        f.write("3. Add the processed data to the recommendation store\n")
        f.write("4. Update the vector store with the new recommendation\n\n")
        f.write("## Testing\n\n")
        f.write("Please ensure all tests pass before submitting a pull request.\n\n")
        f.write("## Documentation\n\n")
        f.write("Please update documentation as needed when making changes.\n")
    
    # Create .github/workflows/ci.yml
    os.makedirs(".github/workflows", exist_ok=True)
    with open(".github/workflows/ci.yml", "w") as f:
        f.write("name: CI\n\n")
        f.write("on:\n")
        f.write("  push:\n")
        f.write("    branches: [ main ]\n")
        f.write("  pull_request:\n")
        f.write("    branches: [ main ]\n\n")
        f.write("jobs:\n")
        f.write("  build:\n")
        f.write("    runs-on: ubuntu-latest\n\n")
        f.write("    steps:\n")
        f.write("    - uses: actions/checkout@v2\n")
        f.write("    - name: Set up Python\n")
        f.write("      uses: actions/setup-python@v2\n")
        f.write("      with:\n")
        f.write("        python-version: '3.10'\n")
        f.write("    - name: Install dependencies\n")
        f.write("      run: |\n")
        f.write("        python -m pip install --upgrade pip\n")
        f.write("        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi\n")
        f.write("    - name: Setup environment\n")
        f.write("      run: |\n")
        f.write("        python scripts/setup.py\n")
        f.write("    - name: Create sample data\n")
        f.write("      run: |\n")
        f.write("        python scripts/create_samples.py\n")
        f.write("    - name: Test API\n")
        f.write("      run: |\n")
        f.write("        python -c \"import requests; print(requests.get('http://localhost:8000').status_code)\"\n")
    
    print("GitHub files created")

def update_readme():
    """
    Update README.md with deployment instructions
    """
    with open("README.md", "r") as f:
        content = f.read()
    
    # Add deployment instructions
    deployment_instructions = """
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
"""
    
    # Add deployment instructions to README
    with open("README.md", "w") as f:
        f.write(content + deployment_instructions)
    
    print("README updated with deployment instructions")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Prepare GitHub repository for Signal Evidence Library")
    
    args = parser.parse_args()
    
    # Create GitHub files
    create_github_files()
    
    # Update README with deployment instructions
    update_readme()
    
    print("GitHub repository preparation complete")
