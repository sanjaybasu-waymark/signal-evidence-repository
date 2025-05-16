# Social Determinants of Health Evidence-Based Recommendations

# This file contains structured evidence-based recommendations for social determinants of health
# Each recommendation is organized by role and includes citations to peer-reviewed literature

recommendations = [
  {
    "id": "housing_social_worker_1",
    "title": "Housing Stability Assessment and Intervention Protocol",
    "domain_id": "housing",
    "domain_name": "Housing",
    "roles": [
      {"id": "social_worker_nonclinical", "name": "Social Worker (Non-Clinical)"},
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a standardized housing stability assessment and intervention protocol that includes: (1) universal screening using validated tools (e.g., AHC-HRSN), (2) tiered intervention approach based on risk level, (3) direct assistance with housing applications and documentation, (4) landlord mediation for eviction prevention, (5) connection to legal aid services for housing issues, and (6) follow-up monitoring at 30, 60, and 90 days.",
    "rationale": "Housing instability is strongly associated with poor health outcomes, increased healthcare utilization, and medication non-adherence. Early identification and intervention can prevent homelessness and associated health deterioration, particularly among Medicaid populations.",
    "expected_outcome": "Reduced rates of homelessness (15-20% reduction), decreased housing instability, reduced ED visits related to exposure and housing conditions (25-30% reduction), improved medication adherence, and better chronic disease management outcomes.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Kushel MB, Gupta R, Gee L, Haas JS",
        "title": "Housing instability and food insecurity as barriers to health care among low-income Americans",
        "journal": "Journal of General Internal Medicine",
        "year": 2006,
        "doi": "10.1111/j.1525-1497.2006.00278.x",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1484604/"
      },
      {
        "authors": "Sadowski LS, Kee RA, VanderWeele TJ, Buchanan D",
        "title": "Effect of a housing and case management program on emergency department visits and hospitalizations among chronically ill homeless adults: a randomized trial",
        "journal": "JAMA",
        "year": 2009,
        "doi": "10.1001/jama.2009.561",
        "url": "https://jamanetwork.com/journals/jama/fullarticle/183842"
      }
    ],
    "implementation_notes": "Develop partnerships with local housing agencies, legal aid services, and emergency housing providers before implementation. Create a comprehensive database of housing resources with eligibility requirements, application procedures, and waiting list information. Train staff on trauma-informed approaches to housing assessment and intervention."
  },
  {
    "id": "food_security_chw_1",
    "title": "Food Insecurity Screening and Intervention Program",
    "domain_id": "food_security",
    "domain_name": "Food Security",
    "roles": [
      {"id": "chw", "name": "Community Health Worker"},
      {"id": "care_coordinator", "name": "Care Coordinator"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a comprehensive food insecurity program that includes: (1) universal screening using the validated 2-item Hunger Vital Sign, (2) immediate connection to emergency food resources when needed, (3) assistance with SNAP/WIC enrollment, (4) referral to medically-tailored meal programs for eligible patients with chronic conditions, (5) connection to local food resources (food pantries, community gardens), and (6) follow-up within 2 weeks to assess resolution and ongoing needs.",
    "rationale": "Food insecurity affects approximately 12% of US households and is associated with poor health outcomes, medication underuse, and increased healthcare utilization. Addressing food insecurity is particularly important for patients with diet-sensitive chronic conditions like diabetes, heart failure, and kidney disease.",
    "expected_outcome": "Reduced food insecurity status (40-50% of patients), improved medication adherence, better glycemic control in patients with diabetes (HbA1c reduction of 0.3-0.5%), reduced hospital admissions for diet-sensitive conditions, and improved quality of life scores.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Berkowitz SA, Seligman HK, Rigdon J, Meigs JB, Basu S",
        "title": "Supplemental Nutrition Assistance Program (SNAP) Participation and Health Care Expenditures Among Low-Income Adults",
        "journal": "JAMA Internal Medicine",
        "year": 2017,
        "doi": "10.1001/jamainternmed.2017.4841",
        "url": "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2653910"
      },
      {
        "authors": "Berkowitz SA, Delahanty LM, Terranova J, et al.",
        "title": "Medically Tailored Meal Delivery for Diabetes Patients with Food Insecurity: a Randomized Cross-over Trial",
        "journal": "Journal of General Internal Medicine",
        "year": 2019,
        "doi": "10.1007/s11606-018-4716-z",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6544730/"
      }
    ],
    "implementation_notes": "Develop partnerships with local food banks, SNAP outreach programs, and medically-tailored meal services before implementation. Create a resource guide specific to condition-appropriate food resources. Consider co-locating SNAP enrollment assistance within clinical settings to reduce barriers to enrollment."
  },
  {
    "id": "transportation_care_coordinator_1",
    "title": "Transportation Barrier Reduction Program",
    "domain_id": "transportation",
    "domain_name": "Transportation",
    "roles": [
      {"id": "care_coordinator", "name": "Care Coordinator"},
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "medium",
    "recommendation": "Implement a transportation barrier reduction program that includes: (1) systematic screening for transportation barriers during intake and follow-up, (2) education about Medicaid non-emergency medical transportation (NEMT) benefits, (3) direct assistance with NEMT scheduling, (4) coordination of appointments to minimize transportation needs, (5) telehealth options when appropriate, and (6) partnerships with community transportation services for gaps not covered by NEMT.",
    "rationale": "Transportation barriers affect 10-25% of patients and are associated with missed appointments, delayed care, and medication non-adherence. These barriers disproportionately affect rural populations, older adults, and those with disabilities or chronic conditions.",
    "expected_outcome": "Reduced appointment no-show rates (30-40% reduction), increased preventive care completion, improved medication adherence, reduced ED visits for non-emergency conditions, and better chronic disease management outcomes.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Syed ST, Gerber BS, Sharp LK",
        "title": "Traveling Towards Disease: Transportation Barriers to Health Care Access",
        "journal": "Journal of Community Health",
        "year": 2013,
        "doi": "10.1007/s10900-013-9681-1",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4265215/"
      },
      {
        "authors": "Chaiyachati KH, Hubbard RA, Yeager A, et al.",
        "title": "Association of Rideshare-Based Transportation Services and Missed Primary Care Appointments: A Clinical Trial",
        "journal": "JAMA Internal Medicine",
        "year": 2018,
        "doi": "10.1001/jamainternmed.2017.8336",
        "url": "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2671405"
      }
    ],
    "implementation_notes": "Develop a comprehensive guide to local transportation resources, including NEMT services, public transportation, volunteer driver programs, and rideshare options. Train staff on NEMT eligibility requirements and scheduling procedures. Consider implementing appointment clustering to minimize transportation needs."
  }
]
