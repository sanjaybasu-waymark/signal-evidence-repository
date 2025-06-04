// Enhanced protocols data for Signal Evidence Repository
// Last updated: June 4, 2025

const allProtocols = [
  // DIABETES PROTOCOLS
  {
    "id": "diabetes_self_management_education_1",
    "title": "Structured Diabetes Self-Management Education Protocol",
    "domain": "Diabetes",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for delivering structured diabetes self-management education using the AADE7 Self-Care Behaviors™ framework, with specific assessment tools, implementation steps, and outcome metrics.",
    "description": "This protocol provides a comprehensive approach to diabetes self-management education based on the American Association of Diabetes Educators' seven self-care behaviors framework. It includes validated assessment tools (SKILLD, DES-SF), structured curriculum components, and specific outcome metrics for monitoring patient progress.",
    "implementation": "1) Conduct baseline assessment using validated tools (SKILLD, DES-SF)\n2) Deliver structured education in 1-hour sessions over 8-12 weeks\n3) Use teach-back method to verify understanding\n4) Provide tailored action plans with specific goals\n5) Schedule follow-up at 3, 6, and 12 months\n6) Monitor outcomes using standardized metrics",
    "outcomes": "Expected outcomes include: ≥15% improvement in diabetes knowledge scores, ≥0.5% reduction in HbA1c, ≥30% improvement in self-efficacy scores, ≥25% reduction in diabetes distress, and ≥40% adherence to self-monitoring practices.",
    "evidence": "Powers MA, Bardsley J, Cypress M, et al. Diabetes Self-management Education and Support in Type 2 Diabetes: A Joint Position Statement of the American Diabetes Association, the American Association of Diabetes Educators, and the Academy of Nutrition and Dietetics. Diabetes Care. 2015;38(7):1372-1382.",
    "tools": "AADE7 Self-Care Behaviors™ Framework, Spoken Knowledge in Low Literacy in Diabetes Scale (SKILLD), Diabetes Empowerment Scale-Short Form (DES-SF), Problem Areas In Diabetes (PAID) scale"
  },
  {
    "id": "diabetes_hypoglycemia_management_1",
    "title": "Hypoglycemia Prevention and Management Protocol",
    "domain": "Diabetes",
    "role": "Pharmacist",
    "summary": "Evidence-based protocol for hypoglycemia risk assessment, prevention strategies, and management techniques, with specific tools and metrics for patients with diabetes.",
    "description": "This protocol provides a structured approach to identifying patients at risk for hypoglycemia, implementing prevention strategies, and educating patients on proper management techniques. It includes validated risk assessment tools, specific intervention components, and outcome metrics.",
    "implementation": "1) Screen all diabetes patients using Hypoglycemia Risk Score\n2) Stratify risk (low, moderate, high) based on score\n3) Implement prevention strategies based on risk level\n4) Provide structured education on recognition and treatment\n5) Document hypoglycemic events using standardized reporting\n6) Review medication regimens quarterly for high-risk patients",
    "outcomes": "Expected outcomes include: ≥50% reduction in severe hypoglycemic events, ≥80% of patients able to demonstrate proper hypoglycemia management, ≥70% of high-risk patients with medication regimen adjustments, and ≥40% reduction in hypoglycemia-related ED visits.",
    "evidence": "Seaquist ER, Anderson J, Childs B, et al. Hypoglycemia and diabetes: a report of a workgroup of the American Diabetes Association and the Endocrine Society. Diabetes Care. 2013;36(5):1384-1395.",
    "tools": "Hypoglycemia Risk Score, Clarke Hypoglycemia Awareness Questionnaire, Hypoglycemia Patient Questionnaire (HPQ), Standardized hypoglycemia event documentation form"
  },
  {
    "id": "diabetes_medication_management_1",
    "title": "Pharmacist-Led Medication Therapy Management for Diabetes",
    "domain": "Diabetes",
    "role": "Pharmacist",
    "summary": "Evidence-based protocol for comprehensive medication therapy management in diabetes, including medication reconciliation, adherence assessment, and therapeutic optimization.",
    "description": "This protocol outlines a structured approach for pharmacists to conduct comprehensive medication therapy management for patients with diabetes. It includes validated adherence assessment tools, specific intervention components, and outcome metrics for monitoring effectiveness.",
    "implementation": "1) Conduct comprehensive medication reconciliation\n2) Assess adherence using validated tools (MMAS-8, MALMAS)\n3) Identify medication-related problems using standardized taxonomy\n4) Develop personalized medication action plan\n5) Provide targeted education using teach-back method\n6) Follow up at 2 weeks, 1 month, and quarterly thereafter",
    "outcomes": "Expected outcomes include: ≥25% improvement in medication adherence scores, ≥0.5% reduction in HbA1c, ≥30% reduction in medication-related problems, ≥80% resolution of identified drug therapy problems, and ≥40% of patients at glycemic goal.",
    "evidence": "Chung WW, Chua SS, Lai PSM, Chan SP. Effects of a pharmaceutical care model on medication adherence and glycemic control of people with type 2 diabetes. Patient Prefer Adherence. 2014;8:1185-1194.",
    "tools": "Morisky Medication Adherence Scale (MMAS-8), Malaysian Medication Adherence Scale (MALMAS), Drug Therapy Problem Classification System, Medication Action Plan template"
  },
  
  // HYPERTENSION PROTOCOLS
  {
    "id": "hypertension_home_monitoring_1",
    "title": "Home Blood Pressure Telemonitoring with Pharmacist Management",
    "domain": "Hypertension",
    "role": "Pharmacist",
    "summary": "Evidence-based protocol for home blood pressure monitoring with pharmacist-led medication management, including specific monitoring parameters and intervention thresholds.",
    "description": "This protocol provides a structured approach to implementing home blood pressure telemonitoring with pharmacist-led medication management. It includes specific equipment requirements, monitoring schedules, intervention thresholds, and outcome metrics.",
    "implementation": "1) Provide validated home BP monitor and training\n2) Establish monitoring schedule (14 readings/week)\n3) Implement secure data transmission system\n4) Review readings weekly for first month, then biweekly\n5) Adjust medications per protocol when BP exceeds thresholds\n6) Conduct monthly telephone follow-up for 6 months",
    "outcomes": "Expected outcomes include: ≥80% of patients achieving BP <130/80 mmHg, ≥10 mmHg reduction in systolic BP, ≥70% adherence to monitoring schedule, ≥90% medication adherence, and ≥50% reduction in uncontrolled hypertension visits.",
    "evidence": "Margolis KL, Asche SE, Bergdall AR, et al. Effect of home blood pressure telemonitoring and pharmacist management on blood pressure control: a cluster randomized clinical trial. JAMA. 2013;310(1):46-56.",
    "tools": "Validated home BP monitor (Omron 7 Series or equivalent), Telemonitoring data transmission system, Medication adjustment algorithm, BP control threshold chart"
  },
  {
    "id": "hypertension_behavioral_management_1",
    "title": "Behavioral and Medication Management for Hypertension",
    "domain": "Hypertension",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol combining behavioral interventions and medication management for hypertension control, with specific intervention components and outcome metrics.",
    "description": "This protocol outlines a comprehensive approach combining behavioral interventions and medication management for hypertension control. It includes specific behavioral strategies, medication management algorithms, and outcome metrics for monitoring effectiveness.",
    "implementation": "1) Assess baseline behaviors using standardized tools\n2) Deliver structured behavioral counseling (30-45 min sessions)\n3) Implement medication management algorithm\n4) Provide tailored self-monitoring tools and guidance\n5) Conduct biweekly follow-up for 3 months, then monthly\n6) Adjust intervention intensity based on BP response",
    "outcomes": "Expected outcomes include: ≥8 mmHg reduction in systolic BP, ≥70% of patients achieving BP <130/80 mmHg, ≥30% improvement in dietary adherence, ≥25% increase in physical activity, and ≥40% reduction in sodium intake.",
    "evidence": "Bosworth HB, Powers BJ, Olsen MK, et al. Home blood pressure management and improved blood pressure control: results from a randomized controlled trial. Arch Intern Med. 2011;171(13):1173-1180.",
    "tools": "Dietary Approaches to Stop Hypertension (DASH) adherence questionnaire, Physical Activity Vital Sign (PAVS), Medication adherence assessment tools, Home BP monitoring protocol"
  },
  
  // MENTAL HEALTH PROTOCOLS
  {
    "id": "mental_health_collaborative_care_1",
    "title": "Collaborative Care for Depression and Anxiety",
    "domain": "Mental Health",
    "role": "Social Worker (Clinical/Therapy)",
    "summary": "Evidence-based protocol for implementing collaborative care model for depression and anxiety in primary care settings, with specific screening tools, intervention components, and outcome metrics.",
    "description": "This protocol outlines the implementation of the collaborative care model for managing depression and anxiety in primary care settings. It includes validated screening and monitoring tools, structured intervention components, and specific outcome metrics.",
    "implementation": "1) Screen using PHQ-9 and GAD-7 at initial visit and follow-ups\n2) Implement registry-based tracking system\n3) Provide evidence-based psychotherapy (PST or BA)\n4) Coordinate with PCP for medication management\n5) Conduct weekly team meetings with psychiatric consultant\n6) Adjust treatment based on measurement-based care principles",
    "outcomes": "Expected outcomes include: ≥50% of patients with ≥50% reduction in PHQ-9/GAD-7 scores, ≥25% achieving remission (PHQ-9 <5, GAD-7 <5), ≥70% treatment engagement at 3 months, and ≥30% improvement in functional status.",
    "evidence": "Archer J, Bower P, Gilbody S, et al. Collaborative care for depression and anxiety problems. Cochrane Database Syst Rev. 2012;10:CD006525.",
    "tools": "Patient Health Questionnaire-9 (PHQ-9), Generalized Anxiety Disorder-7 (GAD-7), Problem-Solving Treatment (PST) manual, Behavioral Activation (BA) protocol, Registry tracking template"
  },
  
  // SOCIAL DETERMINANTS OF HEALTH PROTOCOLS
  {
    "id": "sdoh_screening_referral_1",
    "title": "Social Determinants of Health Screening and Referral Protocol",
    "domain": "Social Determinants of Health",
    "role": "Social Worker (Clinical/Therapy)",
    "summary": "Evidence-based protocol for systematic screening and referral for social determinants of health, including validated screening tools and structured referral processes.",
    "description": "This protocol provides a structured approach to screening for social determinants of health and connecting patients to appropriate resources. It includes validated screening tools, specific workflow integration steps, and outcome metrics for monitoring effectiveness.",
    "implementation": "1) Screen all patients using AHC-HRSN tool annually\n2) Score and prioritize needs using standardized algorithm\n3) Provide warm handoff to community resource specialist\n4) Create personalized resource plan with 2-3 priority needs\n5) Follow up within 7 days to confirm resource connection\n6) Reassess at 30 and 90 days for resolution of needs",
    "outcomes": "Expected outcomes include: ≥90% screening completion rate, ≥70% of identified needs with referrals made, ≥50% successful resource connections, ≥30% resolution of priority needs at 90 days, and ≥25% improvement in self-reported health status.",
    "evidence": "Billioux A, Verlander K, Anthony S, Alley D. Standardized Screening for Health-Related Social Needs in Clinical Settings: The Accountable Health Communities Screening Tool. NAM Perspectives. 2017;7(5).",
    "tools": "Accountable Health Communities Health-Related Social Needs (AHC-HRSN) Screening Tool, Resource prioritization algorithm, Community resource inventory, Referral tracking system"
  },
  
  // ASTHMA PROTOCOLS
  {
    "id": "asthma_self_management_1",
    "title": "Asthma Self-Management Education Protocol",
    "domain": "Asthma",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for comprehensive asthma self-management education, including specific assessment tools, inhaler technique training, and action plan development.",
    "description": "This protocol outlines a structured approach to asthma self-management education, focusing on knowledge assessment, inhaler technique training, symptom monitoring, and action plan development. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Assess baseline knowledge using NAV2 and ANQ\n2) Provide structured education in 3-4 sessions (45-60 min each)\n3) Demonstrate and assess inhaler technique using standardized checklist\n4) Develop personalized asthma action plan with traffic light system\n5) Train in peak flow monitoring with recording system\n6) Follow up at 2 weeks, 1 month, and quarterly thereafter",
    "outcomes": "Expected outcomes include: ≥80% demonstration of correct inhaler technique, ≥70% adherence to daily controller medications, ≥60% reduction in rescue inhaler use, ≥50% reduction in symptom-free days, and ≥40% reduction in ED visits/hospitalizations.",
    "evidence": "Pinnock H, Parke HL, Panagioti M, et al. Systematic meta-review of supported self-management for asthma: a healthcare perspective. BMC Med. 2017;15(1):64.",
    "tools": "Asthma Navigating Ability (NAV2) Questionnaire, Asthma Numeracy Questionnaire (ANQ), Inhaled Corticosteroid Knowledge Questionnaire, Inhaler technique assessment checklist, Asthma Control Test (ACT)"
  },
  
  // HEART FAILURE PROTOCOLS
  {
    "id": "heart_failure_self_care_1",
    "title": "Heart Failure Self-Care Management Protocol",
    "domain": "Heart Failure",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for heart failure self-care management, including specific assessment tools, symptom monitoring strategies, and outcome metrics.",
    "description": "This protocol provides a comprehensive approach to heart failure self-care management, focusing on symptom monitoring, medication adherence, dietary management, and physical activity. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Assess baseline self-care using EHFScB-9 and SCHFI\n2) Provide structured education in 4-6 sessions (30-45 min each)\n3) Implement daily weight monitoring with decision support\n4) Train in symptom recognition using zones system\n5) Develop medication management system with adherence supports\n6) Follow up weekly for first month, then biweekly",
    "outcomes": "Expected outcomes include: ≥20% improvement in self-care behavior scores, ≥50% adherence to daily weight monitoring, ≥60% medication adherence, ≥40% reduction in salt intake, and ≥30% reduction in heart failure-related hospitalizations.",
    "evidence": "Riegel B, Moser DK, Buck HG, et al. Self-Care for the Prevention and Management of Cardiovascular Disease and Stroke: A Scientific Statement for Healthcare Professionals From the American Heart Association. J Am Heart Assoc. 2017;6(9):e006997.",
    "tools": "European Heart Failure Self-care Behavior Scale (EHFScB-9), Self-Care of Heart Failure Index (SCHFI), Heart Failure Somatic Awareness Scale (HFSAS), Dutch Heart Failure Knowledge Scale (DHFKS), Weight Monitoring Adherence Tool"
  },
  
  // CHRONIC KIDNEY DISEASE PROTOCOLS
  {
    "id": "ckd_management_1",
    "title": "Chronic Kidney Disease Management Protocol",
    "domain": "Chronic Kidney Disease",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for comprehensive CKD management, including risk stratification, medication management, and lifestyle modifications with specific metrics.",
    "description": "This protocol outlines a structured approach to chronic kidney disease management, focusing on risk stratification, medication optimization, complication prevention, and lifestyle modifications. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Stratify risk using KFRE and KDIGO Heat Map\n2) Implement medication review using CKD-MAP tool quarterly\n3) Monitor parameters based on CKD stage (eGFR, ACR, electrolytes)\n4) Provide structured education on diet, fluid, and medications\n5) Coordinate care with nephrology based on referral criteria\n6) Follow up monthly for high risk, quarterly for moderate risk",
    "outcomes": "Expected outcomes include: ≤3 ml/min/1.73m² annual eGFR decline, ≥50% reduction in albuminuria, ≥80% of patients on appropriate RAAS blockade, ≥70% BP control (<130/80 mmHg), and ≥40% reduction in AKI episodes.",
    "evidence": "Vassalotti JA, Centor R, Turner BJ, et al. Practical Approach to Detection and Management of Chronic Kidney Disease for the Primary Care Clinician. Am J Med. 2016;129(2):153-162.e7.",
    "tools": "Kidney Failure Risk Equation (KFRE), CKD-EPI equation for GFR estimation, Urine Albumin-to-Creatinine Ratio (ACR) categorization, KDIGO CKD Heat Map risk stratification tool, Medication Appropriateness in CKD Assessment Tool"
  },
  
  // COPD PROTOCOLS
  {
    "id": "copd_management_1",
    "title": "COPD Management Protocol",
    "domain": "COPD",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for comprehensive COPD management, including assessment tools, exacerbation prevention strategies, and self-management support.",
    "description": "This protocol provides a structured approach to COPD management, focusing on assessment, pharmacologic and non-pharmacologic interventions, exacerbation prevention, and self-management support. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Assess using CAT, mMRC, and spirometry at baseline\n2) Classify using GOLD ABCD assessment tool\n3) Optimize pharmacotherapy based on GOLD recommendations\n4) Implement exacerbation action plan with traffic light system\n5) Provide structured self-management education (4-6 sessions)\n6) Follow up monthly for first 3 months, then quarterly",
    "outcomes": "Expected outcomes include: ≥2 point reduction in CAT score, ≥30% reduction in exacerbation frequency, ≥50% of patients with completed action plans, ≥40% improvement in inhaler technique, and ≥25% reduction in COPD-related ED visits.",
    "evidence": "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease: 2023 Report.",
    "tools": "CAPTURE Screening Tool, COPD Assessment Test (CAT), Modified Medical Research Council (mMRC) Dyspnea Scale, GOLD ABCD Assessment Tool, BODE Index for prognosis"
  },
  
  // CARE TRANSITIONS PROTOCOLS
  {
    "id": "care_transitions_1",
    "title": "Care Transitions Protocol",
    "domain": "Care Transitions",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for managing transitions of care from hospital to home, including risk assessment, medication reconciliation, and follow-up coordination.",
    "description": "This protocol outlines a comprehensive approach to managing transitions of care from hospital to home, focusing on risk assessment, medication reconciliation, follow-up coordination, and patient education. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Assess transition risk using 8P tool pre-discharge\n2) Conduct comprehensive medication reconciliation\n3) Schedule follow-up appointment within 7 days\n4) Complete post-discharge phone call within 48-72 hours\n5) Conduct home visit within 14 days for high-risk patients\n6) Reassess needs at 30 days post-discharge",
    "outcomes": "Expected outcomes include: ≤15% 30-day readmission rate, ≥80% attendance at follow-up appointments, ≥70% medication reconciliation completion, ≥60% resolution of post-discharge issues, and ≥50% patient understanding of discharge instructions.",
    "evidence": "Coleman EA, Parry C, Chalmers S, Min SJ. The care transitions intervention: results of a randomized controlled trial. Arch Intern Med. 2006;166(17):1822-1828.",
    "tools": "Care Transitions Intervention (CTI), Transitional Care Model (TCM), Re-Engineered Discharge (RED), IDEAL Discharge Planning Framework, BOOST toolkit with risk assessment"
  },
  
  // MEDICATION ADHERENCE PROTOCOLS
  {
    "id": "medication_adherence_1",
    "title": "Medication Adherence Protocol",
    "domain": "Medication Adherence",
    "role": "Pharmacist",
    "summary": "Evidence-based protocol for assessing and improving medication adherence, including validated assessment tools, targeted interventions, and outcome metrics.",
    "description": "This protocol provides a structured approach to assessing and improving medication adherence, focusing on barrier identification, tailored interventions, and ongoing monitoring. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Assess adherence using MAQ/MMAS-4 at each visit\n2) Identify specific barriers using BMQ\n3) Implement targeted interventions based on barrier type\n4) Provide medication organization tools as needed\n5) Utilize technology supports (apps, reminders) when appropriate\n6) Follow up biweekly for first month, then monthly",
    "outcomes": "Expected outcomes include: ≥25% improvement in adherence scores, ≥80% of patients with MPR/PDC ≥0.80, ≥60% reduction in identified barriers, ≥40% improvement in medication knowledge, and ≥30% reduction in medication-related problems.",
    "evidence": "Viswanathan M, Golin CE, Jones CD, et al. Interventions to improve adherence to self-administered medications for chronic diseases in the United States: a systematic review. Ann Intern Med. 2012;157(11):785-795.",
    "tools": "Medication Adherence Questionnaire (MAQ/MMAS-4), Medication Adherence Report Scale (MARS), Brief Medication Questionnaire (BMQ), Medication Event Monitoring System (MEMS), Pharmacy refill data metrics (MPR and PDC)"
  },
  
  // PREVENTIVE SCREENING PROTOCOLS
  {
    "id": "preventive_screening_1",
    "title": "Preventive Screening Protocol",
    "domain": "Preventive Screening",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for implementing comprehensive preventive screening programs, including risk assessment, screening schedules, and follow-up processes.",
    "description": "This protocol outlines a structured approach to implementing comprehensive preventive screening programs, focusing on risk assessment, screening schedules, result management, and follow-up processes. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Conduct annual preventive screening needs assessment\n2) Stratify screening needs by risk level and guidelines\n3) Implement reminder system with multiple modalities\n4) Provide pre-screening education and preparation\n5) Ensure closed-loop follow-up for all results\n6) Track completion rates and address barriers quarterly",
    "outcomes": "Expected outcomes include: ≥70% screening completion rates for eligible patients, ≥90% follow-up completion for abnormal results, ≤14 days average time to follow-up, ≥60% early-stage diagnosis for detected conditions, and ≥50% reduction in screening disparities.",
    "evidence": "US Preventive Services Task Force. Screening for Social Risk Factors: Technical Brief to Support the US Preventive Services Task Force. JAMA. 2021;326(14):1416-1428.",
    "tools": "Accountable Health Communities (AHC) Screening Tool, U.S. Preventive Services Task Force (USPSTF) Screening Guidelines, Patient Health Questionnaire-9 (PHQ-9), Alcohol Use Disorders Identification Test (AUDIT), Social Needs Screening Tool (SNST)"
  },
  
  // VACCINATION PROTOCOLS
  {
    "id": "vaccination_protocol_1",
    "title": "Vaccination Implementation Protocol",
    "domain": "Vaccination",
    "role": "Pharmacist",
    "summary": "Evidence-based protocol for implementing comprehensive vaccination programs, including assessment, education, administration, and documentation processes.",
    "description": "This protocol provides a structured approach to implementing comprehensive vaccination programs, focusing on assessment, education, administration, documentation, and follow-up. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Assess vaccination status at each encounter\n2) Screen for contraindications using standardized questionnaire\n3) Address vaccine hesitancy using BeSD framework\n4) Administer vaccines per ACIP recommendations\n5) Document in immunization information system\n6) Schedule follow-up for series completion",
    "outcomes": "Expected outcomes include: ≥80% vaccination coverage for target populations, ≥70% series completion rates, ≥60% reduction in vaccine hesitancy, ≥90% documentation in immunization registries, and ≥50% reduction in vaccine-preventable diseases.",
    "evidence": "World Health Organization. Behavioural and Social Drivers of Vaccination: Tools and practical guidance for achieving high uptake. Geneva: World Health Organization; 2022.",
    "tools": "WHO Behavioural and Social Drivers (BeSD) of Vaccination Framework, Emory Vaccine Confidence Index (EVCI), Vaccine Hesitancy Scale (VHS), Immunization Information System (IIS), Standards for Adult Immunization Practice"
  },
  
  // HIV CARE PROTOCOLS
  {
    "id": "hiv_care_1",
    "title": "HIV Care Management Protocol",
    "domain": "HIV Care",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for comprehensive HIV care management, including testing, treatment initiation, adherence support, and retention strategies.",
    "description": "This protocol outlines a structured approach to comprehensive HIV care management, focusing on testing, linkage to care, treatment initiation, adherence support, and retention strategies. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Implement routine opt-out HIV testing per CDC guidelines\n2) Link newly diagnosed patients to care within 7 days\n3) Initiate ART within 7 days of diagnosis when possible\n4) Assess adherence at each visit using validated tools\n5) Screen for comorbidities per recommended schedule\n6) Implement retention interventions for missed visits",
    "outcomes": "Expected outcomes include: ≥90% of diagnosed patients linked to care, ≥85% retention in care at 12 months, ≥90% ART adherence, ≥80% viral suppression (<200 copies/mL), and ≥70% screening completion for comorbidities.",
    "evidence": "Saag MS, Gandhi RT, Hoy JF, et al. Antiretroviral Drugs for Treatment and Prevention of HIV Infection in Adults: 2020 Recommendations of the International Antiviral Society-USA Panel. JAMA. 2020;324(16):1651-1669.",
    "tools": "HIV Care in Primary Health Care Assessment Instrument, HIV Quality of Care Assessment Tool (HIVQUAL), HIV Treatment Adherence Assessment Tools, HIV Stigma Scale, Patient Health Questionnaire-9 (PHQ-9)"
  },
  
  // POST-STROKE PROTOCOLS
  {
    "id": "post_stroke_rehabilitation_1",
    "title": "Post-Stroke Rehabilitation Protocol",
    "domain": "Post-Stroke",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for comprehensive post-stroke rehabilitation, including assessment tools, intervention components, and outcome metrics.",
    "description": "This protocol provides a structured approach to post-stroke rehabilitation, focusing on assessment, goal setting, intervention delivery, and outcome monitoring. It includes validated assessment tools and specific outcome metrics for physical, cognitive, and functional domains.",
    "implementation": "1) Conduct comprehensive assessment using standardized tools\n2) Develop personalized rehabilitation goals using GAS\n3) Implement high-intensity, task-specific training\n4) Provide structured home exercise program\n5) Address psychosocial needs with appropriate referrals\n6) Follow up weekly for first month, then biweekly",
    "outcomes": "Expected outcomes include: ≥20 point improvement in Fugl-Meyer scores, ≥50 meter increase in 6MWT distance, ≥30% improvement in functional independence measures, ≥25% reduction in fall risk, and ≥40% achievement of personalized goals.",
    "evidence": "Winstein CJ, Stein J, Arena R, et al. Guidelines for Adult Stroke Rehabilitation and Recovery: A Guideline for Healthcare Professionals From the American Heart Association/American Stroke Association. Stroke. 2016;47(6):e98-e169.",
    "tools": "Berg Balance Scale (BBS), Timed Up and Go Test (TUG), 6-Minute Walk Test (6MWT), 10-Meter Walk Test (10MWT), Fugl-Meyer Assessment (FMA)"
  },
  
  // POST-MI PROTOCOLS
  {
    "id": "post_mi_cardiac_rehab_1",
    "title": "Post-MI Cardiac Rehabilitation Protocol",
    "domain": "Post-MI",
    "role": "Nurse Care Manager",
    "summary": "Evidence-based protocol for comprehensive cardiac rehabilitation after myocardial infarction, including assessment, exercise prescription, risk factor management, and outcome metrics.",
    "description": "This protocol outlines a structured approach to cardiac rehabilitation after myocardial infarction, focusing on risk stratification, exercise prescription, medication management, lifestyle modification, and psychosocial support. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Conduct initial assessment with risk stratification\n2) Develop individualized exercise prescription\n3) Implement medication optimization protocol\n4) Provide structured education on lifestyle modifications\n5) Address psychosocial needs with screening and referral\n6) Follow up weekly during program, then at 3, 6, and 12 months",
    "outcomes": "Expected outcomes include: ≥15% increase in peak VO₂, ≥10% improvement in quality of life scores, ≥80% medication adherence, ≥50% achievement of risk factor targets, and ≤5% rate of major adverse cardiac events at 1 year.",
    "evidence": "Brown TM, Pack QR, Aberegg E, et al. Core Components of Cardiac Rehabilitation Programs: 2024 Update: A Scientific Statement From the American Heart Association and the American Association of Cardiovascular and Pulmonary Rehabilitation. Circulation. 2024;150(18).",
    "tools": "Cardiopulmonary Exercise Testing (CPET), 6-Minute Walk Test (6MWT), Duke Activity Status Index (DASI), ASCVD Risk Calculator, GRACE Risk Score, Patient Health Questionnaire-9 (PHQ-9), Generalized Anxiety Disorder-7 (GAD-7)"
  },
  
  // SUBSTANCE USE PROTOCOLS
  {
    "id": "substance_use_management_1",
    "title": "Substance Use Disorder Management Protocol",
    "domain": "Substance Use",
    "role": "Social Worker (Clinical/Therapy)",
    "summary": "Evidence-based protocol for comprehensive substance use disorder management, including screening, brief intervention, medication treatment, and care coordination.",
    "description": "This protocol provides a structured approach to substance use disorder management, focusing on screening, brief intervention, medication-assisted treatment, psychosocial support, and care coordination. It includes validated assessment tools and specific outcome metrics.",
    "implementation": "1) Screen using validated tools (TAPS, DAST-10, AUDIT)\n2) Deliver brief intervention using FRAMES approach\n3) Initiate medication-assisted treatment when indicated\n4) Provide evidence-based psychosocial interventions\n5) Coordinate care across levels using ASAM criteria\n6) Follow up weekly for first month, then biweekly",
    "outcomes": "Expected outcomes include: ≥30% reduction in substance use, ≥40% improvement in functioning, ≥60% treatment retention at 3 months, ≥50% reduction in cravings, and ≥40% improvement in quality of life measures.",
    "evidence": "McNeely J, Adam A, Rotrosen J, et al. Substance Use Screening, Risk Assessment, and Brief Intervention. NIDA Clinical Trials Network Protocol CTN-0062. J Addict Med. 2024.",
    "tools": "Tobacco, Alcohol, Prescription medication, and other Substance use (TAPS) Tool, Drug Abuse Screening Test (DAST-10), CRAFFT Screening Tool (for adolescents), Alcohol Use Disorders Identification Test (AUDIT), Screening, Brief Intervention, and Referral to Treatment (SBIRT) Framework"
  }
];

// For backward compatibility
const allRecommendations = allProtocols;
