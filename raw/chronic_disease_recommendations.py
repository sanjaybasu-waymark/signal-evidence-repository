# Chronic Disease Management Evidence-Based Recommendations

# This file contains structured evidence-based recommendations for chronic disease management
# Each recommendation is organized by role and includes citations to peer-reviewed literature

recommendations = [
  {
    "id": "ckd_nurse_1",
    "title": "Nurse-Led CKD Management Program",
    "domain_id": "ckd",
    "domain_name": "CKD",
    "roles": [
      {"id": "nurse", "name": "Nurse Care Manager"},
      {"id": "pharmacist", "name": "Clinical Pharmacist"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a structured nurse-led CKD management program that includes: (1) regular monitoring of kidney function and albuminuria, (2) blood pressure management with target <130/80 mmHg, (3) medication review focusing on nephrotoxic medications and appropriate dosing, (4) dietary counseling on sodium, potassium, and phosphorus restrictions, (5) self-management education, and (6) coordination with nephrology for patients with eGFR <30 ml/min/1.73m².",
    "rationale": "CKD affects approximately 15% of US adults and is associated with increased cardiovascular risk and progression to kidney failure. Early intervention can slow disease progression and reduce complications, particularly in stages 1-3 CKD.",
    "expected_outcome": "Slowed progression of kidney disease (reduced annual eGFR decline by 0.5-1.0 ml/min/1.73m²), improved blood pressure control, reduced incidence of acute kidney injury, decreased hospitalizations, and delayed need for renal replacement therapy.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Chen PM, Lai TS, Chen PY, et al.",
        "title": "Multidisciplinary care program for advanced chronic kidney disease: reduces renal replacement and medical costs",
        "journal": "American Journal of Medicine",
        "year": 2015,
        "doi": "10.1016/j.amjmed.2014.10.002",
        "url": "https://www.amjmed.com/article/S0002-9343(14)00889-3/fulltext"
      },
      {
        "authors": "Strand H, Parker D",
        "title": "Effects of multidisciplinary models of care for adult pre-dialysis patients with chronic kidney disease: a systematic review",
        "journal": "International Journal of Evidence-Based Healthcare",
        "year": 2012,
        "doi": "10.1111/j.1744-1609.2012.00253.x",
        "url": "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1744-1609.2012.00253.x"
      }
    ],
    "implementation_notes": "Develop a risk stratification tool to identify patients at highest risk for rapid progression. Create standardized protocols for medication review and adjustment. Consider using telehealth for rural patients or those with transportation barriers. Establish clear referral criteria for nephrology consultation."
  },
  {
    "id": "post_mi_care_coordinator_1",
    "title": "Post-MI Care Coordination Program",
    "domain_id": "post_mi",
    "domain_name": "Post MI",
    "roles": [
      {"id": "care_coordinator", "name": "Care Coordinator"},
      {"id": "nurse", "name": "Nurse Care Manager"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a structured post-MI care coordination program that includes: (1) early follow-up within 7 days of discharge, (2) medication reconciliation and adherence support for secondary prevention medications, (3) cardiac rehabilitation referral and enrollment assistance, (4) symptom monitoring and management education, (5) lifestyle modification support (smoking cessation, diet, exercise), and (6) regular follow-up at 2 weeks, 1 month, and 3 months post-discharge.",
    "rationale": "The post-MI period represents a high-risk time for recurrent events and readmissions. Comprehensive care coordination can improve adherence to secondary prevention strategies and reduce adverse outcomes, particularly in the first 90 days after discharge.",
    "expected_outcome": "Reduced 30-day readmission rates (25-35% reduction), improved medication adherence for secondary prevention medications, increased cardiac rehabilitation participation (40-50% increase), and reduced recurrent cardiovascular events at 1 year (15-20% reduction).",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Aragam KG, Dai D, Neely ML, et al.",
        "title": "Gaps in Referral to Cardiac Rehabilitation of Patients Undergoing Percutaneous Coronary Intervention in the United States",
        "journal": "Journal of the American College of Cardiology",
        "year": 2015,
        "doi": "10.1016/j.jacc.2015.06.1089",
        "url": "https://www.jacc.org/doi/10.1016/j.jacc.2015.06.1089"
      },
      {
        "authors": "Anderson L, Oldridge N, Thompson DR, et al.",
        "title": "Exercise-Based Cardiac Rehabilitation for Coronary Heart Disease: Cochrane Systematic Review and Meta-Analysis",
        "journal": "Journal of the American College of Cardiology",
        "year": 2016,
        "doi": "10.1016/j.jacc.2015.10.044",
        "url": "https://www.jacc.org/doi/10.1016/j.jacc.2015.10.044"
      }
    ],
    "implementation_notes": "Develop a standardized discharge checklist to ensure all post-MI patients receive appropriate referrals and education. Create a cardiac rehabilitation enrollment assistance protocol to address common barriers. Consider implementing a home-based cardiac rehabilitation option for patients with transportation barriers."
  },
  {
    "id": "post_stroke_social_worker_1",
    "title": "Post-Stroke Care Coordination and Support Program",
    "domain_id": "post_stroke",
    "domain_name": "Post Stroke",
    "roles": [
      {"id": "social_worker_nonclinical", "name": "Social Worker (Non-Clinical)"},
      {"id": "care_coordinator", "name": "Care Coordinator"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a comprehensive post-stroke support program that includes: (1) needs assessment within 1 week of discharge, (2) coordination of rehabilitation services, (3) caregiver support and education, (4) assistance with home modifications and adaptive equipment, (5) connection to community resources and support groups, and (6) regular follow-up at 2 weeks, 1 month, 3 months, and 6 months post-discharge.",
    "rationale": "Stroke survivors face complex challenges including physical disability, cognitive impairment, depression, and social isolation. Comprehensive support addressing both medical and social needs improves recovery outcomes and reduces caregiver burden.",
    "expected_outcome": "Improved functional independence (increased ADL/IADL scores), reduced hospital readmissions, decreased caregiver burden and depression, increased rehabilitation service utilization, and improved quality of life scores for both patients and caregivers.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Langhorne P, Baylan S, Early Supported Discharge Trialists",
        "title": "Early supported discharge services for people with acute stroke",
        "journal": "Cochrane Database of Systematic Reviews",
        "year": 2017,
        "doi": "10.1002/14651858.CD000443.pub4",
        "url": "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000443.pub4/full"
      },
      {
        "authors": "Bakas T, McCarthy M, Miller ET",
        "title": "Update on the State of the Evidence for Stroke Family Caregiver and Dyad Interventions",
        "journal": "Stroke",
        "year": 2017,
        "doi": "10.1161/STROKEAHA.117.016052",
        "url": "https://www.ahajournals.org/doi/10.1161/STROKEAHA.117.016052"
      }
    ],
    "implementation_notes": "Develop a comprehensive post-stroke needs assessment tool covering physical, cognitive, emotional, and social domains. Create a resource guide for local stroke support services. Consider implementing a caregiver training program focusing on safe transfers, medication management, and recognition of complications."
  }
]
