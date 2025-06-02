# Waymark Population Health Evidence Library

A comprehensive collection of evidence-based recommendations for healthcare professionals working with underserved patients in proactive population health management teams.

## Overview

The Waymark Population Health Evidence Library is a repository of evidence-based recommendations for healthcare professionals across various clinical domains and professional roles. This repository contains:

- JSON files with structured recommendations
- A web interface for browsing and searching recommendations
- Tools for validating and maintaining the recommendation database

## Repository Structure

```
signal-evidence-repository/
├── index.html                  # Main website file
├── recommendations-data.js     # Embedded recommendations data
├── json_data/                  # JSON recommendation files by domain
│   ├── diabetes_recommendations.json
│   ├── hypertension_recommendations.json
│   └── ...
│   └── additional_recommendations/  # Individual recommendation files
│       ├── diabetes_cgm_1.json
│       └── ...
├── json_structure/             # JSON schema definitions
└── embed_recommendations.py    # Script to generate embedded data
```

## Implementation Instructions

### Setting Up GitHub Pages

1. Upload all files to your GitHub repository:
   ```
   git clone https://github.com/sanjaybasu-waymark/signal-evidence-repository.git
   cd signal-evidence-repository
   # Copy your updated files here
   git add .
   git commit -m "Update evidence repository"
   git push
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages"
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/" (root) folder
   - Click "Save"
   - Your site will be available at `https://[username].github.io/signal-evidence-repository/`

### Required Files for Website

The following files must be in the root of your repository for the website to function:

1. `index.html` - The main website file
2. `recommendations-data.js` - Contains all recommendation data

## Updating Recommendations

### Adding New Recommendations

1. Create new JSON files in the appropriate directories:
   - For domain-specific recommendations: `json_data/[domain]_recommendations.json`
   - For individual recommendations: `json_data/additional_recommendations/[specific]_1.json`

2. Follow the JSON schema defined in `json_structure/recommendation_schema.json`

3. Regenerate the embedded data file:
   ```bash
   python3 embed_recommendations.py
   ```

4. Upload the updated `recommendations-data.js` file to your repository

### Modifying Existing Recommendations

1. Edit the appropriate JSON files
2. Regenerate the embedded data file using the script
3. Upload the updated `recommendations-data.js` file

## JSON Schema

Each recommendation should follow this structure:

```json
{
  "id": "unique_identifier",
  "title": "Recommendation Title",
  "domain": "Clinical Domain",
  "role": "Professional Role",
  "implementation_guidance": "Detailed implementation steps...",
  "expected_outcomes": "Expected results...",
  "target_population": "Target patient population...",
  "evidence_level": "A/B/C/D",
  "citation": "Source citation..."
}
```

## Validation

To validate all JSON files against the schema:

```bash
python3 validate_json.py
```

## Website Features

The website provides the following features:

- Browse recommendations by domain (clinical condition or social need)
- Browse recommendations by professional role
- Search across all recommendations
- View detailed recommendation cards with implementation guidance
- Mobile-responsive design

## Troubleshooting

If recommendations are not displaying correctly:

1. Check that `recommendations-data.js` is in the same directory as `index.html`
2. Verify that the JSON format in your recommendation files is valid
3. Run the validation script to check for schema errors
4. Regenerate the embedded data file using the script

## License and Attribution

© 2025, Waymark, [www.waymarkcare.com](https://www.waymarkcare.com)

Created by Sanjay Basu MD PhD, Waymark 
