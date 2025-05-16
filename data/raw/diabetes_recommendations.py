# Diabetes Evidence-Based Recommendations

# This file contains structured evidence-based recommendations for diabetes management
# Each recommendation is organized by role and includes citations to peer-reviewed literature

recommendations = [
  {
    "id": "diabetes_medication_adherence_1",
    "title": "Medication Adherence Program for Diabetes Patients",
    "domain_id": "diabetes",
    "domain_name": "Diabetes",
    "roles": [
      {"id": "nurse", "name": "Nurse Care Manager"},
      {"id": "pharmacist", "name": "Clinical Pharmacist"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a structured medication adherence program for patients with diabetes that includes: (1) simplified medication regimens (once-daily dosing when possible), (2) pill boxes or dose-packaging systems, (3) technology-based reminders, and (4) regular follow-up calls to address barriers. For patients with complex regimens, consider coordinating with a pharmacy that offers medication synchronization to ensure all medications are refilled simultaneously.",
    "rationale": "Medication non-adherence affects 38-93% of patients with diabetes and is associated with poor glycemic control, increased hospitalizations, higher healthcare costs, and increased mortality. Multicomponent interventions addressing practical, educational, and behavioral barriers show the strongest evidence for improving adherence.",
    "expected_outcome": "Improved medication adherence rates (>80% as measured by proportion of days covered), reduced HbA1c levels (0.5-1% reduction on average), decreased diabetes-related emergency department visits and hospitalizations (20-30% reduction), and improved quality of life scores.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Polonsky WH, Henry RR",
        "title": "Poor medication adherence in type 2 diabetes: recognizing the scope of the problem and its key contributors",
        "journal": "Patient Preference and Adherence",
        "year": 2016,
        "doi": "10.2147/PPA.S106821",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4966497/"
      },
      {
        "authors": "Khunti K, Seidu S, Kunutsor S, Davies M",
        "title": "Association Between Adherence to Pharmacotherapy and Outcomes in Type 2 Diabetes: A Meta-analysis",
        "journal": "Diabetes Care",
        "year": 2017,
        "doi": "10.2337/dc16-1925",
        "url": "https://care.diabetesjournals.org/content/40/11/1588"
      }
    ],
    "implementation_notes": "Consider using validated adherence assessment tools (e.g., MMAS-8) at baseline and follow-up. For patients with low health literacy, use teach-back methods and visual aids. Coordinate with pharmacy services for medication synchronization and automatic refill programs."
  },
  {
    "id": "diabetes_chw_support_1",
    "title": "Community Health Worker Support for Diabetes Self-Management",
    "domain_id": "diabetes",
    "domain_name": "Diabetes",
    "roles": [
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a structured CHW-led diabetes self-management support program with home visits (monthly for first 3 months, then quarterly) focusing on: (1) basic diabetes education using culturally appropriate materials, (2) medication adherence support, (3) blood glucose monitoring technique and log review, (4) healthy food access and meal planning within cultural preferences, (5) physical activity encouragement, and (6) appointment navigation assistance. CHWs should use standardized assessment tools and maintain regular communication with the clinical team.",
    "rationale": "CHW interventions have demonstrated effectiveness in improving diabetes outcomes, particularly among underserved populations. CHWs can bridge cultural and linguistic gaps, address social determinants of health, and provide practical support for diabetes self-management in patients' home environments.",
    "expected_outcome": "Improved HbA1c levels (average reduction of 0.2-0.5%), increased self-management behaviors (medication adherence, glucose monitoring, healthy eating), improved appointment attendance rates, and reduced diabetes-related distress. Number needed to treat (NNT) to achieve clinically significant HbA1c reduction: 5-8 patients.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Palmas W, March D, Darakjy S, et al.",
        "title": "Community Health Worker Interventions to Improve Glycemic Control in People with Diabetes: A Systematic Review and Meta-Analysis",
        "journal": "Journal of General Internal Medicine",
        "year": 2015,
        "doi": "10.1007/s11606-015-3247-0",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4451256/"
      },
      {
        "authors": "Spencer MS, Kieffer EC, Sinco B, et al.",
        "title": "Outcomes at 18 Months From a Community Health Worker and Peer Leader Diabetes Self-Management Program for Latino Adults",
        "journal": "Diabetes Care",
        "year": 2018,
        "doi": "10.2337/dc18-0467",
        "url": "https://care.diabetesjournals.org/content/41/7/1414"
      }
    ],
    "implementation_notes": "CHWs should receive at least 40 hours of initial training in diabetes basics, self-management support, motivational interviewing, and documentation. Regular supervision and case review with clinical team members is essential. Consider using standardized assessment tools and checklists to ensure consistent delivery of all program components."
  },
  {
    "id": "diabetes_social_worker_1",
    "title": "Social Worker-Led Intervention for Diabetes and Food Insecurity",
    "domain_id": "diabetes",
    "domain_name": "Diabetes",
    "roles": [
      {"id": "social_worker_nonclinical", "name": "Social Worker (Non-Clinical)"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a standardized screening and intervention protocol for food insecurity among diabetes patients. The protocol should include: (1) universal screening using the validated 2-item Hunger Vital Sign tool, (2) assessment of specific food access barriers, (3) immediate connection to emergency food resources when needed, (4) assistance with SNAP/WIC enrollment, (5) referral to diabetes-appropriate food pantries or medically-tailored meal programs, and (6) follow-up within 2 weeks to assess resolution and ongoing needs.",
    "rationale": "Food insecurity affects 1 in 5 patients with diabetes and is associated with poor glycemic control, medication underuse, increased hypoglycemia, and higher healthcare utilization. Addressing food insecurity is essential for effective diabetes management, particularly among Medicaid populations.",
    "expected_outcome": "Reduced food insecurity status (50-60% of patients), improved medication adherence, decreased hypoglycemic episodes, improved glycemic control (HbA1c reduction of 0.3-0.5% on average), and reduced diabetes-related emergency department visits.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Seligman HK, Lyles C, Marshall MB, et al.",
        "title": "A Pilot Food Bank Intervention Featuring Diabetes-Appropriate Food Improved Glycemic Control Among Clients In Three States",
        "journal": "Health Affairs",
        "year": 2015,
        "doi": "10.1377/hlthaff.2015.0641",
        "url": "https://www.healthaffairs.org/doi/10.1377/hlthaff.2015.0641"
      },
      {
        "authors": "Berkowitz SA, Terranova J, Hill C, et al.",
        "title": "Meal Delivery Programs Reduce The Use Of Costly Health Care In Dually Eligible Medicare And Medicaid Beneficiaries",
        "journal": "Health Affairs",
        "year": 2018,
        "doi": "10.1377/hlthaff.2017.0999",
        "url": "https://www.healthaffairs.org/doi/10.1377/hlthaff.2017.0999"
      }
    ],
    "implementation_notes": "Develop partnerships with local food banks, SNAP outreach programs, and medically-tailored meal services before implementation. Create a resource guide specific to diabetes-appropriate food resources. Consider co-locating SNAP enrollment assistance within clinical settings to reduce barriers to enrollment."
  }
]
