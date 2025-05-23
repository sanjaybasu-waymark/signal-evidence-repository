# Signal Evidence Library

A comprehensive, evidence-based library of healthcare recommendations for population health care management teams.

## Overview

The Signal Evidence Library provides over 170 evidence-based recommendations for healthcare providers across multiple clinical domains and healthcare roles. Each recommendation is:

- Specific and actionable
- Focused on individual patient-facing actions
- Supported by peer-reviewed evidence
- Includes implementation guidance and expected outcomes

## Repository Structure

```
signal-evidence-library/
├── config/                 # Configuration files
│   ├── domains.py          # Domain definitions
│   └── roles.py            # Role definitions
├── data/                   # Data storage
│   ├── raw/                # Raw recommendation files
│   ├── processed/          # Processed JSON data
│   └── embeddings/         # Vector embeddings
├── src/                    # Source code
│   ├── api/                # API endpoints
│   ├── db/                 # Database models and operations
│   ├── pipeline/           # Data processing pipeline
│   └── web/                # Web interface
├── scripts/                # Utility scripts
└── docs/                   # Documentation
```

## Clinical Domains

The library covers recommendations across multiple clinical domains:

1. Chronic Disease Management
2. Cardiovascular Health
3. Behavioral Health
4. Substance Use
5. Care Coordination
6. Maternal Health
7. Transitional Care
8. Social Determinants of Health

## Healthcare Roles

Recommendations are tailored for various healthcare roles:

1. Community Health Worker (CHW)
2. Nurse
3. Primary Care Provider (PCP)
4. Behavioral Health Provider
5. Social Worker
6. Care Coordinator
7. Doula
8. Pharmacist
9. Peer Support Specialist

## Features

- **Evidence-Based**: All recommendations are supported by peer-reviewed literature
- **Actionable**: Specific, concrete actions providers can take
- **Implementation Guidance**: Practical advice for putting recommendations into practice
- **Expected Outcomes**: Documented impact with metrics and confidence intervals
- **Cost-Effectiveness**: Information on resource requirements and return on investment

## Recommendation Types

The library includes various types of recommendations:

- **Specific Assessment Techniques**: Detailed instructions for conducting assessments (e.g., "Perform the 10-gram monofilament test at 4 specific sites on each foot")
- **Specific Questions for Patient Engagement**: Exact wording for effective patient communication (e.g., "Ask patients with heart failure these specific questions about diuretics")
- **Structured Approaches**: Step-by-step frameworks for addressing common clinical challenges (e.g., "Implement the 'Show-Tell-Show' technique for medication education")
- **Targeted Interventions**: Focused actions for specific populations (e.g., "Provide 3-5 postpartum home visits within the first 6 weeks after birth")

## Getting Started

1. Clone this repository
2. Install dependencies: `pip install -r requirements.txt`
3. Run the application: `python src/main.py`
4. Access the web interface at `http://localhost:5000`

## Scripts

- `scripts/rebuild_search_index.py`: Rebuild the search index
- `scripts/analyze_slow_queries.py`: Optimize database queries
- `scripts/update_embeddings.py`: Update vector embeddings
- `scripts/validate_all_content.py`: Run quality validation
- `scripts/fix_content_formatting.py`: Fix common formatting issues
- `scripts/update_evidence_levels.py`: Update evidence levels
- `scripts/migrate_to_db.py`: Migrate data to database
- `scripts/generate_embeddings.py`: Generate vector embeddings
- `scripts/pubmed_scholar_import.py`: Import content from PubMed/Google Scholar

## Sources

Recommendations are sourced from authoritative references including:

- Clinical practice guidelines (USPSTF, ADA, AHA, etc.)
- Systematic reviews and meta-analyses
- Randomized controlled trials
- The Better Care Playbook
- Evidence-based nursing and social work textbooks
- Community health worker intervention studies

## Contributing

Contributions to the Signal Evidence Library are welcome! Please see our contributing guidelines for more information.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please open an issue on GitHub or contact the project maintainers.
