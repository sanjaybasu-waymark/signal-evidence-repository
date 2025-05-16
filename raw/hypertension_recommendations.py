# Hypertension Evidence-Based Recommendations

# This file contains structured evidence-based recommendations for hypertension management
# Each recommendation is organized by role and includes citations to peer-reviewed literature

recommendations = [
  {
    "id": "hypertension_home_bp_1",
    "title": "Home Blood Pressure Monitoring Program",
    "domain_id": "hypertension",
    "domain_name": "Hypertension",
    "roles": [
      {"id": "nurse", "name": "Nurse Care Manager"},
      {"id": "care_coordinator", "name": "Care Coordinator"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a structured home blood pressure monitoring (HBPM) program that includes: (1) provision of validated BP monitors to patients with uncontrolled hypertension, (2) standardized patient education on proper measurement technique, (3) a recording system (paper log or mobile app), (4) a communication protocol for reporting readings (weekly for the first month, then biweekly), and (5) a clinical response algorithm for medication adjustments based on home readings.",
    "rationale": "Home blood pressure monitoring improves blood pressure control by providing more accurate assessment of true BP, increasing patient engagement, enabling more timely medication adjustments, and improving medication adherence. HBPM is particularly valuable for detecting white-coat and masked hypertension.",
    "expected_outcome": "Improved blood pressure control (5-8 mmHg systolic reduction on average), increased proportion of patients at BP goal (15-20% increase), reduced clinical inertia in medication management, and decreased cardiovascular events over time (10-15% reduction in 5-year risk).",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Shimbo D, Artinian NT, Basile JN, et al.",
        "title": "Self-Measured Blood Pressure Monitoring at Home: A Joint Policy Statement From the American Heart Association and American Medical Association",
        "journal": "Circulation",
        "year": 2020,
        "doi": "10.1161/CIR.0000000000000803",
        "url": "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000803"
      },
      {
        "authors": "Tucker KL, Sheppard JP, Stevens R, et al.",
        "title": "Self-monitoring of blood pressure in hypertension: A systematic review and individual patient data meta-analysis",
        "journal": "PLOS Medicine",
        "year": 2017,
        "doi": "10.1371/journal.pmed.1002389",
        "url": "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002389"
      }
    ],
    "implementation_notes": "Ensure patients receive proper training on measurement technique. Validate home devices against office measurements at initiation and periodically. Consider using cellular-connected BP monitors for patients with limited tech literacy or poor adherence to reporting protocols."
  },
  {
    "id": "hypertension_chw_1",
    "title": "Community Health Worker Intervention for Medication Adherence in Hypertension",
    "domain_id": "hypertension",
    "domain_name": "Hypertension",
    "roles": [
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "medium",
    "recommendation": "Implement a CHW-led medication adherence intervention for patients with uncontrolled hypertension that includes: (1) home visits to assess medication-taking behaviors and barriers, (2) use of pill organizers and visual medication schedules, (3) education about hypertension consequences using culturally appropriate materials, (4) assistance with pharmacy refill synchronization, (5) reminder system setup (phone, text, or visual cues), and (6) regular follow-up (biweekly for 2 months, then monthly for 4 months).",
    "rationale": "Medication non-adherence affects 30-50% of patients with hypertension and is a primary cause of uncontrolled blood pressure. CHWs are particularly effective at addressing adherence barriers in underserved populations through culturally tailored, practical interventions in patients' home environments.",
    "expected_outcome": "Improved medication adherence rates (20-30% increase in proportion of days covered), improved blood pressure control (4-7 mmHg systolic reduction), increased hypertension knowledge, and reduced barriers to medication access. Number needed to treat (NNT) to achieve one additional controlled hypertension case: 6-9 patients.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Brownstein JN, Chowdhury FM, Norris SL, et al.",
        "title": "Effectiveness of Community Health Workers in the Care of People with Hypertension",
        "journal": "American Journal of Preventive Medicine",
        "year": 2007,
        "doi": "10.1016/j.amepre.2007.04.016",
        "url": "https://www.ajpmonline.org/article/S0749-3797(07)00252-3/fulltext"
      },
      {
        "authors": "He J, Irazola V, Mills KT, et al.",
        "title": "Effect of a Community Health Worker–Led Multicomponent Intervention on Blood Pressure Control in Low-Income Patients in Argentina: A Randomized Clinical Trial",
        "journal": "JAMA",
        "year": 2017,
        "doi": "10.1001/jama.2017.10169",
        "url": "https://jamanetwork.com/journals/jama/fullarticle/2653911"
      }
    ],
    "implementation_notes": "CHWs should receive training in motivational interviewing techniques and basic hypertension management. Develop standardized assessment tools to identify specific adherence barriers. Consider using low-literacy visual aids and medication schedules. Establish clear protocols for when CHWs should escalate concerns to clinical team members."
  },
  {
    "id": "hypertension_pharmacist_1",
    "title": "Pharmacist-Led Medication Management for Resistant Hypertension",
    "domain_id": "hypertension",
    "domain_name": "Hypertension",
    "roles": [
      {"id": "pharmacist", "name": "Clinical Pharmacist"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a pharmacist-led medication management program for patients with resistant hypertension (BP >130/80 mmHg despite 3+ medications) that includes: (1) comprehensive medication review to identify adherence issues, drug interactions, and inappropriate regimens, (2) assessment for secondary causes and contributing medications, (3) evidence-based medication adjustments following a stepped-care protocol, (4) regular follow-up at 2-week intervals until BP controlled, and (5) coordination with primary care for laboratory monitoring and regimen approval.",
    "rationale": "Resistant hypertension affects 12-15% of treated hypertensive patients and significantly increases cardiovascular risk. Pharmacist-led interventions have demonstrated effectiveness in optimizing medication regimens, improving adherence, and achieving BP control in this high-risk population.",
    "expected_outcome": "Improved blood pressure control (10-15 mmHg systolic reduction on average), increased proportion of patients with resistant hypertension reaching BP goals (30-40% increase), reduced medication-related problems, and decreased cardiovascular events over time.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Hirsch JD, Steers N, Adler DS, et al.",
        "title": "Primary Care-Based, Pharmacist-Physician Collaborative Medication-Therapy Management of Hypertension: A Randomized, Pragmatic Trial",
        "journal": "Clinical Therapeutics",
        "year": 2014,
        "doi": "10.1016/j.clinthera.2014.06.030",
        "url": "https://www.clinicaltherapeutics.com/article/S0149-2918(14)00336-1/fulltext"
      },
      {
        "authors": "Margolis KL, Asche SE, Bergdall AR, et al.",
        "title": "Effect of Home Blood Pressure Telemonitoring and Pharmacist Management on Blood Pressure Control: A Cluster Randomized Clinical Trial",
        "journal": "JAMA",
        "year": 2013,
        "doi": "10.1001/jama.2013.6549",
        "url": "https://jamanetwork.com/journals/jama/fullarticle/1707720"
      }
    ],
    "implementation_notes": "Develop a collaborative practice agreement to enable pharmacist medication adjustments within specified parameters. Create a stepped-care algorithm based on current guidelines. Consider incorporating home BP monitoring data into decision-making. Establish clear communication protocols between pharmacists and primary care providers."
  }
]
