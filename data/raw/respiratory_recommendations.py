# Respiratory Conditions Evidence-Based Recommendations

# This file contains structured evidence-based recommendations for respiratory conditions
# Each recommendation is organized by role and includes citations to peer-reviewed literature

recommendations = [
  {
    "id": "asthma_nurse_1",
    "title": "Nurse-Led Asthma Self-Management Program",
    "domain_id": "asthma",
    "domain_name": "Asthma",
    "roles": [
      {"id": "nurse", "name": "Nurse Care Manager"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a structured nurse-led asthma self-management program that includes: (1) standardized assessment of asthma control using ACT or ACQ, (2) personalized written asthma action plans with traffic light system, (3) inhaler technique education with teach-back verification, (4) trigger identification and mitigation strategies, (5) regular follow-up (monthly until controlled, then quarterly), and (6) coordination with primary care for medication adjustments.",
    "rationale": "Self-management education improves asthma outcomes by increasing patient knowledge, self-efficacy, and appropriate response to symptoms. Nurse-led programs have demonstrated effectiveness in reducing emergency department visits, hospitalizations, and improving quality of life.",
    "expected_outcome": "Reduced asthma-related emergency department visits (30-40% reduction), decreased hospitalizations (20-30% reduction), improved asthma control scores, reduced work/school absences, and improved quality of life scores.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Gibson PG, Powell H, Coughlan J, et al.",
        "title": "Self-management education and regular practitioner review for adults with asthma",
        "journal": "Cochrane Database of Systematic Reviews",
        "year": 2003,
        "doi": "10.1002/14651858.CD001117",
        "url": "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001117/full"
      },
      {
        "authors": "Pinnock H, Parke HL, Panagioti M, et al.",
        "title": "Systematic meta-review of supported self-management for asthma: a healthcare perspective",
        "journal": "BMC Medicine",
        "year": 2017,
        "doi": "10.1186/s12916-017-0823-7",
        "url": "https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-017-0823-7"
      }
    ],
    "implementation_notes": "Develop standardized asthma action plan templates that can be personalized for each patient. Use visual aids and videos for inhaler technique education. Consider using peak flow meters for patients with poor symptom perception. Establish clear protocols for when to escalate to physician review."
  },
  {
    "id": "copd_chw_1",
    "title": "Community Health Worker Support for COPD Self-Management",
    "domain_id": "copd",
    "domain_name": "COPD",
    "roles": [
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a CHW-led COPD support program that includes: (1) home-based assessment of environmental triggers and safety, (2) education on early recognition of exacerbation symptoms using a standardized tool, (3) support for medication and oxygen therapy adherence, (4) smoking cessation support, (5) connection to pulmonary rehabilitation programs, and (6) regular check-ins (biweekly for 3 months, then monthly).",
    "rationale": "COPD exacerbations lead to accelerated disease progression and increased mortality. CHWs can effectively support self-management in the home environment, addressing barriers to care and facilitating early intervention for exacerbations.",
    "expected_outcome": "Reduced COPD-related emergency department visits (20-30% reduction), decreased hospitalizations, improved medication adherence, increased completion of pulmonary rehabilitation, and improved quality of life scores. Number needed to treat (NNT) to prevent one hospitalization: 5-8 patients.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Benzo R, Vickers K, Novotny PJ, et al.",
        "title": "Health Coaching and Chronic Obstructive Pulmonary Disease Rehospitalization: A Randomized Study",
        "journal": "American Journal of Respiratory and Critical Care Medicine",
        "year": 2016,
        "doi": "10.1164/rccm.201512-2503OC",
        "url": "https://www.atsjournals.org/doi/10.1164/rccm.201512-2503OC"
      },
      {
        "authors": "Zwerink M, Brusse-Keizer M, van der Valk PD, et al.",
        "title": "Self management for patients with chronic obstructive pulmonary disease",
        "journal": "Cochrane Database of Systematic Reviews",
        "year": 2014,
        "doi": "10.1002/14651858.CD002990.pub3",
        "url": "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD002990.pub3/full"
      }
    ],
    "implementation_notes": "Train CHWs on COPD basics, proper inhaler technique, oxygen safety, and recognition of exacerbation symptoms. Develop a standardized home assessment checklist for environmental triggers. Create a simple exacerbation action plan with clear instructions for when to contact healthcare providers."
  },
  {
    "id": "heart_failure_nurse_1",
    "title": "Nurse-Led Heart Failure Management Program",
    "domain_id": "heart_failure",
    "domain_name": "Heart Failure",
    "roles": [
      {"id": "nurse", "name": "Nurse Care Manager"},
      {"id": "care_coordinator", "name": "Care Coordinator"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a structured nurse-led heart failure management program that includes: (1) systematic assessment using validated tools, (2) daily weight monitoring protocol with action thresholds, (3) medication reconciliation and adherence support, (4) dietary sodium and fluid restriction education, (5) symptom recognition and response training, and (6) structured telephone follow-up (weekly for 1 month post-discharge, then biweekly).",
    "rationale": "Heart failure is the leading cause of hospitalization in adults over 65, with high 30-day readmission rates. Nurse-led management programs have consistently demonstrated effectiveness in reducing readmissions and improving quality of life.",
    "expected_outcome": "Reduced heart failure-related hospitalizations (25-35% reduction), decreased 30-day readmissions, improved medication adherence, better quality of life scores, and reduced mortality. Number needed to treat (NNT) to prevent one hospitalization: 8-12 patients.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Feltner C, Jones CD, Cené CW, et al.",
        "title": "Transitional care interventions to prevent readmissions for persons with heart failure: a systematic review and meta-analysis",
        "journal": "Annals of Internal Medicine",
        "year": 2014,
        "doi": "10.7326/M14-0083",
        "url": "https://www.acpjournals.org/doi/10.7326/M14-0083"
      },
      {
        "authors": "Van Spall HGC, Rahman T, Mytton O, et al.",
        "title": "Comparative effectiveness of transitional care services in patients discharged from the hospital with heart failure: a systematic review and network meta-analysis",
        "journal": "European Journal of Heart Failure",
        "year": 2017,
        "doi": "10.1002/ejhf.765",
        "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/ejhf.765"
      }
    ],
    "implementation_notes": "Develop a standardized assessment protocol including fluid status, medication adherence, dietary compliance, and symptom burden. Create a weight monitoring log with clear action thresholds. Consider using telemonitoring for high-risk patients. Establish clear protocols for when to escalate to physician review."
  }
]
