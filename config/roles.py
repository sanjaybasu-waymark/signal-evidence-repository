"""
Role definitions for the Signal Evidence Library.
Each role represents a healthcare worker type with specific responsibilities.
"""

ROLES = [
    {
        "id": 1,
        "name": "Community Health Worker (CHW)",
        "description": "Community-based support, navigation, education",
        "slug": "chw"
    },
    {
        "id": 2,
        "name": "Registered Nurse (RN)",
        "description": "Clinical care, care coordination, patient education",
        "slug": "nurse"
    },
    {
        "id": 3,
        "name": "Primary Care Provider (PCP)",
        "description": "Diagnosis, treatment, preventive care",
        "slug": "pcp"
    },
    {
        "id": 4,
        "name": "Behavioral Health Clinician",
        "description": "Mental health therapy, counseling, treatment",
        "slug": "behavioral_health"
    },
    {
        "id": 5,
        "name": "Social Worker",
        "description": "Social determinants, resource connection, advocacy",
        "slug": "social_worker"
    },
    {
        "id": 6,
        "name": "Care Coordinator",
        "description": "Care management, appointment coordination, follow-up",
        "slug": "care_coordinator"
    },
    {
        "id": 7,
        "name": "Doula",
        "description": "Maternal health support, birth advocacy, postpartum care",
        "slug": "doula"
    },
    {
        "id": 8,
        "name": "Pharmacist",
        "description": "Medication management, therapy optimization, counseling",
        "slug": "pharmacist"
    },
    {
        "id": 9,
        "name": "Peer Support Specialist",
        "description": "Lived experience support, recovery coaching",
        "slug": "peer_support"
    }
]

def get_role_by_id(role_id):
    """Get role by ID."""
    for role in ROLES:
        if role["id"] == role_id:
            return role
    return None

def get_role_by_slug(slug):
    """Get role by slug."""
    for role in ROLES:
        if role["slug"] == slug:
            return role
    return None

def get_all_roles():
    """Get all roles."""
    return ROLES
