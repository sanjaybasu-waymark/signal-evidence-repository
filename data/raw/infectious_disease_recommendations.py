# Infectious Disease and Special Populations Evidence-Based Recommendations

# This file contains structured evidence-based recommendations for infectious disease management
# Each recommendation is organized by role and includes citations to peer-reviewed literature

recommendations = [
  {
    "id": "hiv_care_coordinator_1",
    "title": "HIV Care Coordination and Retention Program",
    "domain_id": "hiv",
    "domain_name": "HIV",
    "roles": [
      {"id": "care_coordinator", "name": "Care Coordinator"},
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a comprehensive HIV care coordination program that includes: (1) systematic outreach to patients who miss appointments, (2) medication adherence support with directly observed therapy when needed, (3) case management for social needs, (4) transportation assistance to appointments, (5) mental health and substance use screening and referral, and (6) peer navigation services for newly diagnosed patients.",
    "rationale": "Retention in HIV care and antiretroviral therapy (ART) adherence are critical for viral suppression, improved health outcomes, and reduced transmission. Care coordination addressing both medical and social barriers improves engagement and adherence, particularly among vulnerable populations.",
    "expected_outcome": "Improved retention in care (70-80% of patients with ≥2 visits annually), increased ART adherence (>90% of doses taken), higher rates of viral suppression (20-30% increase), reduced HIV-related hospitalizations, and improved quality of life scores.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Irvine MK, Chamberlin SA, Robbins RS, et al.",
        "title": "Improvements in HIV care engagement and viral load suppression following enrollment in a comprehensive HIV care coordination program",
        "journal": "Clinical Infectious Diseases",
        "year": 2015,
        "doi": "10.1093/cid/ciu783",
        "url": "https://academic.oup.com/cid/article/60/2/298/2895952"
      },
      {
        "authors": "Maulsby C, Charles V, Kinsky S, Riordan M, Jain K, Holtgrave D",
        "title": "Positive Charge: Filling the Gaps in the U.S. HIV Continuum of Care",
        "journal": "AIDS and Behavior",
        "year": 2015,
        "doi": "10.1007/s10461-015-1015-0",
        "url": "https://link.springer.com/article/10.1007/s10461-015-1015-0"
      }
    ],
    "implementation_notes": "Develop a tracking system to identify patients who miss appointments or pharmacy refills. Create standardized protocols for outreach attempts (phone, text, home visit). Consider implementing a peer navigator program utilizing individuals with lived experience. Establish relationships with community organizations providing supportive services."
  },
  {
    "id": "vaccination_chw_1",
    "title": "Community-Based Vaccination Outreach Program",
    "domain_id": "vaccination",
    "domain_name": "Vaccination",
    "roles": [
      {"id": "chw", "name": "Community Health Worker"},
      {"id": "care_coordinator", "name": "Care Coordinator"}
    ],
    "priority_level": "medium",
    "recommendation": "Implement a community-based vaccination outreach program that includes: (1) identification of under-vaccinated individuals through EHR data, (2) culturally tailored education addressing vaccine hesitancy, (3) mobile vaccination clinics in community settings, (4) assistance with transportation to vaccination sites, (5) reminder systems for multi-dose vaccines, and (6) documentation and reporting to state immunization registries.",
    "rationale": "Vaccination rates remain suboptimal in many communities, particularly among racial/ethnic minorities and socioeconomically disadvantaged populations. Community-based approaches using trusted messengers can effectively address access barriers and vaccine hesitancy.",
    "expected_outcome": "Increased vaccination rates for influenza (15-25% increase), pneumococcal (20-30% increase), and other recommended vaccines. Reduced disparities in vaccination rates, decreased vaccine-preventable illnesses, and reduced hospitalizations related to vaccine-preventable diseases.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Community Preventive Services Task Force",
        "title": "Increasing Appropriate Vaccination: Community-Based Interventions Implemented in Combination",
        "journal": "The Community Guide",
        "year": 2014,
        "doi": "",
        "url": "https://www.thecommunityguide.org/findings/vaccination-programs-community-based-interventions-implemented-combination"
      },
      {
        "authors": "Lau D, Hu J, Majumdar SR, Storie DA, Rees SE, Johnson JA",
        "title": "Interventions to improve influenza and pneumococcal vaccination rates among community-dwelling adults: a systematic review and meta-analysis",
        "journal": "Annals of Family Medicine",
        "year": 2012,
        "doi": "10.1370/afm.1405",
        "url": "https://www.annfammed.org/content/10/6/538.long"
      }
    ],
    "implementation_notes": "Develop culturally and linguistically appropriate educational materials addressing common concerns about vaccines. Partner with trusted community organizations for outreach and mobile clinic locations. Consider implementing incentives for vaccination completion. Train CHWs on addressing common vaccine misconceptions and motivational interviewing techniques."
  },
  {
    "id": "epsdt_care_coordinator_1",
    "title": "EPSDT Screening Completion and Follow-up Program",
    "domain_id": "epsdt",
    "domain_name": "EPSDT",
    "roles": [
      {"id": "care_coordinator", "name": "Care Coordinator"},
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "medium",
    "recommendation": "Implement a comprehensive EPSDT (Early and Periodic Screening, Diagnostic, and Treatment) program that includes: (1) systematic identification of children due for screenings, (2) outreach to families via preferred communication channels, (3) assistance with appointment scheduling and transportation, (4) reminder calls/texts before appointments, (5) follow-up for missed appointments, and (6) care coordination for children with identified needs requiring referrals.",
    "rationale": "EPSDT is a comprehensive benefit for Medicaid-enrolled children that ensures early identification and treatment of health conditions. Despite this coverage, screening completion rates remain suboptimal, particularly for developmental, vision, hearing, and lead screenings.",
    "expected_outcome": "Increased EPSDT screening completion rates (20-30% increase), improved follow-up completion for abnormal findings, earlier identification of developmental delays and health conditions, and reduced disparities in preventive care access.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Coker TR, Moreno C, Shekelle PG, Schuster MA, Chung PJ",
        "title": "Well-child care clinical practice redesign for serving low-income children",
        "journal": "Pediatrics",
        "year": 2014,
        "doi": "10.1542/peds.2013-3775",
        "url": "https://publications.aap.org/pediatrics/article/134/1/e229/33008/Well-Child-Care-Clinical-Practice-Redesign-for"
      },
      {
        "authors": "Goyal NK, Hall ES, Meinzen-Derr JK, et al.",
        "title": "Dosage effect of prenatal home visiting on pregnancy outcomes in at-risk, first-time mothers",
        "journal": "Pediatrics",
        "year": 2013,
        "doi": "10.1542/peds.2013-1021D",
        "url": "https://publications.aap.org/pediatrics/article/132/Supplement_2/S118/32712/Dosage-Effect-of-Prenatal-Home-Visiting-on"
      }
    ],
    "implementation_notes": "Develop a tracking system to identify children due for EPSDT screenings by age. Create age-appropriate educational materials explaining the importance of each screening. Consider implementing flexible scheduling options including evening and weekend appointments. Establish relationships with pediatric specialists for timely referrals when needs are identified."
  }
]
