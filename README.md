# Signal Evidence Repository

## Overview
The Signal Evidence Repository is a comprehensive collection of evidence-based recommendations for population health care management teams. This repository contains over 250 tactical, medically-valid recommendations across 22 domains and 8 professional roles, designed to be implemented at the individual provider level.

![Signal Evidence Repository](https://github.com/sanjaybasu-waymark/signal-evidence-repository/raw/main/website/screenshot.png)

## Purpose
This repository serves as a centralized hub for healthcare professionals to access bite-sized, actionable recommendations backed by peer-reviewed evidence. Rather than focusing on system-level interventions, these recommendations provide specific guidance that individual providers can implement in their practice.

## Features
- **Evidence-Based**: All recommendations are sourced from peer-reviewed literature and authoritative clinical guidelines
- **Role-Specific**: Tailored recommendations for 8 different healthcare roles
- **Domain-Focused**: Covers 22 clinical conditions and social determinants of health
- **Actionable**: Concrete, specific guidance rather than general principles
- **Searchable**: Web interface allows filtering by domain, role, or keyword
- **Validated**: All recommendations follow a consistent schema and validation process

## Domains Covered
- Clinical Conditions: Diabetes, Hypertension, Depression, Anxiety, Substance Use Disorders, Asthma, COPD, Heart Failure, CKD, Post MI, Post Stroke, HIV
- Preventive Care: Preventive Screenings, Vaccination, EPSDT
- Care Management: Medication Adherence, Care Transitions
- Social Determinants: Housing, Food Security, Transportation
- Maternal Health: Prenatal, Postnatal

## Professional Roles
- Nurse Care Manager
- Clinical Pharmacist
- Community Health Worker
- Social Worker (Non-Clinical)
- Care Coordinator
- Social Worker (Clinical/Therapy)
- Pharmacy Technician
- Doula

## Repository Structure
```
signal-evidence-repository/
├── website/
│   └── index.html           # Main web interface
├── json_data/
│   ├── [domain_name].json   # Domain-specific recommendation files
│   └── additional_recommendations/
│       └── [specific_recommendations].json
├── json_structure/
│   └── recommendation_schema.json  # JSON schema definition
├── validate_json.py         # Validation script
└── README.md                # This file
```

## Using the Repository

### Browsing Recommendations
The easiest way to explore the repository is through the web interface:
1. Visit the GitHub Pages site: https://sanjaybasu-waymark.github.io/signal-evidence-repository/
2. Browse recommendations by domain or role
3. Use the search function to find specific topics

### Accessing the Raw Data
All recommendations are stored as JSON files in the `json_data` directory. Each recommendation follows this structure:
```json
{
  "id": "unique_identifier",
  "title": "Recommendation Title",
  "domain": "Clinical Domain",
  "role": "Professional Role",
  "implementation_guidance": "Detailed guidance on implementation",
  "expected_outcomes": "Expected outcomes when implemented",
  "target_population": "Specific population for whom this is intended",
  "citation": "Citation in JAMA/AMA style",
  "evidence_level": "Evidence classification (A-D)",
  "tags": ["relevant", "tags"],
  "last_updated": "YYYY-MM-DD"
}
```

## Deployment
To deploy your own instance of the Signal Evidence Repository:

1. Fork this repository
2. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/website" folder
   - Click "Save"
3. Your site will be available at `https://[your-username].github.io/signal-evidence-repository/`

## Contributing
Contributions to the Signal Evidence Repository are welcome! To contribute:

1. Fork the repository
2. Add new recommendations following the schema in `json_structure/recommendation_schema.json`
3. Validate your additions using `python validate_json.py`
4. Submit a pull request with your changes

## License
This repository is available under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- Created by Waymark Care
- Evidence sourced from peer-reviewed literature and clinical guidelines
- Special thanks to all contributors who have helped build this resource

## Contact
For questions or feedback about the Signal Evidence Repository, please contact:
- GitHub: [@sanjaybasu-waymark](https://github.com/sanjaybasu-waymark)
- Website: [waymarkcare.com](https://waymarkcare.com)
