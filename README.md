# Signal Evidence Repository

A comprehensive repository of evidence-based recommendations for population health care management teams, covering the most common diseases and social needs by care team member role type.

## Overview

The Signal Evidence Repository is a web application that provides healthcare professionals with evidence-based recommendations for managing various health conditions and social needs. The repository is organized by clinical domains (e.g., diabetes, hypertension) and care team roles (e.g., nurse care manager, clinical pharmacist), making it easy for users to find relevant recommendations for their specific needs.

## Features

- Browse recommendations by clinical domain or care team role
- Search for recommendations using text or semantic search
- View detailed information about each recommendation, including rationale, implementation notes, and citations
- Access a comprehensive library of evidence-based practices for population health management

## Technical Details

The application is built using:
- Python 3.11 with Flask web framework
- SQLite database with SQLAlchemy ORM
- Bootstrap 5 for responsive design
- Jinja2 templating engine

## Installation and Setup

### Prerequisites

- Python 3.11 or higher
- pip (Python package installer)

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/sanjaybasu-waymark/signal-evidence-repository.git
cd signal-evidence-repository
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
python src/main.py
```

5. Access the application in your browser at `http://127.0.0.1:5000`

## Deployment Options

### GitHub Pages Deployment

To deploy this application as a GitHub Pages website:

1. Create a new GitHub repository or use an existing one
2. Push the code to the repository
3. Go to the repository settings and navigate to the "Pages" section
4. Configure the source branch (usually `main` or `master`)
5. Select the folder containing the static files (usually `/docs` or `/`)
6. Save the settings and wait for GitHub to build and deploy your site

Note: Since GitHub Pages only supports static websites, you'll need to generate static HTML files from your Flask application before deployment. You can use tools like Frozen-Flask to accomplish this.

### Alternative Deployment Options

The application can also be deployed to various platforms:

- Heroku: Supports Python applications natively
- Vercel: Good for static site hosting
- Netlify: Excellent for static sites with serverless functions
- AWS, Google Cloud, or Azure: For more complex deployment needs

## Database Structure

The application uses a SQLite database with the following main tables:

- `domains`: Clinical domains (e.g., diabetes, hypertension)
- `roles`: Care team roles (e.g., nurse care manager, clinical pharmacist)
- `recommendations`: Evidence-based recommendations
- `citations`: Citations supporting the recommendations
- `recommendation_role`: Junction table for many-to-many relationship between recommendations and roles

## Contributing

Contributions to the Signal Evidence Repository are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

## License

This project is maintained by Sanjay Basu MD PhD, Waymark and University of California San Francisco.

## Contact

For questions or support, please contact the repository maintainers.
