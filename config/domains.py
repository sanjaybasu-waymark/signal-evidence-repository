"""
Domain definitions for the Signal Evidence Library.
Each domain represents a clinical area with specific recommendations.
"""

DOMAINS = [
    {
        "id": 1,
        "name": "Diabetes Management",
        "description": "Blood sugar control, medication adherence, complications prevention",
        "slug": "diabetes"
    },
    {
        "id": 2,
        "name": "Hypertension/Blood Pressure",
        "description": "BP monitoring, lifestyle interventions, medication management",
        "slug": "hypertension"
    },
    {
        "id": 3,
        "name": "Mental Health & Depression",
        "description": "Screening, therapy, medication support, crisis intervention",
        "slug": "mental_health"
    },
    {
        "id": 4,
        "name": "Substance Use Disorders",
        "description": "Addiction treatment, recovery support, harm reduction",
        "slug": "substance_use"
    },
    {
        "id": 5,
        "name": "Chronic Disease Prevention",
        "description": "Screening, vaccination, lifestyle counseling",
        "slug": "prevention"
    },
    {
        "id": 6,
        "name": "Prenatal Care",
        "description": "Pregnancy support, risk screening, birth preparation",
        "slug": "prenatal_care"
    },
    {
        "id": 7,
        "name": "Postpartum Care",
        "description": "Recovery support, breastfeeding, depression screening",
        "slug": "postpartum_care"
    },
    {
        "id": 8,
        "name": "Cardiovascular Disease",
        "description": "Heart disease prevention, lifestyle modification",
        "slug": "cardiovascular"
    },
    {
        "id": 9,
        "name": "Chronic Pain Management",
        "description": "Non-pharmacological approaches, self-management",
        "slug": "pain_management"
    },
    {
        "id": 10,
        "name": "Obesity & Weight Management",
        "description": "Lifestyle interventions, behavioral support",
        "slug": "weight_management"
    }
]

def get_domain_by_id(domain_id):
    """Get domain by ID."""
    for domain in DOMAINS:
        if domain["id"] == domain_id:
            return domain
    return None

def get_domain_by_slug(slug):
    """Get domain by slug."""
    for domain in DOMAINS:
        if domain["slug"] == slug:
            return domain
    return None

def get_all_domains():
    """Get all domains."""
    return DOMAINS
