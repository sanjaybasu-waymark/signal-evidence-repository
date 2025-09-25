// Comprehensive Population Health Protocol Database
// Enhanced with major chronic conditions and transition support domains

const allRecommendations = [
    // ASTHMA PROTOCOLS
    {
        title: "Comprehensive Asthma Care Management Program",
        domain: "Asthma",
        role: "Respiratory Therapist",
        description: "Evidence-based asthma management program focusing on medication adherence, trigger identification, and self-management education for Medicaid populations with persistent asthma.",
        implementation: "Phase 1 (Weeks 1-2): Conduct comprehensive asthma assessment using ACT (Asthma Control Test) and identify environmental triggers. Establish care team including respiratory therapist, pharmacist, and community health worker. Phase 2 (Weeks 3-8): Implement weekly 45-minute individual education sessions covering proper inhaler technique, peak flow monitoring, and action plan development. Deploy home environmental assessment by CHW. Phase 3 (Weeks 9-12): Transition to monthly follow-up with medication adherence monitoring via smart inhalers or pill counts. Integrate with EHR for automated alerts on emergency department visits.",
        expectedOutcomes: "Reduce asthma-related emergency department visits by 40% (95% CI: 32-48%) within 6 months. Improve asthma control scores (ACT ≥20) in 65% of participants. Decrease oral corticosteroid use by 35% and improve quality of life scores by 25% as measured by AQLQ.",
        targetPopulation: "Medicaid beneficiaries ages 6-65 with persistent asthma (≥2 controller medication fills in past year or ≥1 asthma-related ED visit). Priority for patients with multiple comorbidities, housing instability, or limited English proficiency.",
        healthEquity: "Address environmental justice concerns by prioritizing patients in high-pollution zip codes. Provide culturally adapted education materials in Spanish and other prevalent languages. Partner with housing authorities to address mold, pest control, and ventilation issues. Ensure access to spacer devices and peak flow meters regardless of insurance coverage gaps.",
        measurement: "Process: Monthly inhaler technique assessments, quarterly environmental trigger evaluations. Outcome: ACT scores every 3 months, ED visit rates, controller medication adherence (PDC ≥80%), peak flow variability. Implementation: Staff training completion rates, patient satisfaction scores, care plan adherence.",
        evidenceBase: [
            "Gibson PG, Powell H, Coughlan J, et al. Self-management education and regular practitioner review for adults with asthma. Cochrane Database Syst Rev. 2003;(1):CD001117. https://doi.org/10.1002/14651858.CD001117",
            "Patel MR, Janevic MR, Heeringa SG, et al. An evaluation of the in-home asthma coaching program to improve asthma outcomes in urban adults. J Asthma. 2013;50(6):729-736. https://doi.org/10.3109/02770903.2013.792352",
            "Merchant RK, Inamdar R, Henderson JC, et al. Digital health intervention for asthma: patient-reported value and usability. JMIR Mhealth Uhealth. 2018;6(6):e133. https://doi.org/10.2196/mhealth.9133"
        ]
    },
    {
        title: "Pediatric Asthma School-Based Management",
        domain: "Asthma",
        role: "School Nurse",
        description: "Comprehensive school-based asthma management program integrating clinical care with educational support to reduce school absences and improve academic performance.",
        implementation: "Phase 1: Establish partnerships with school districts and train school nurses on asthma action plan implementation. Deploy standardized asthma screening tools and medication administration protocols. Phase 2: Implement daily symptom monitoring system with automated alerts to parents and providers. Establish on-site nebulizer treatments and rescue medication protocols. Phase 3: Create peer support programs and integrate asthma education into health curriculum. Deploy telemedicine consultations for acute episodes.",
        expectedOutcomes: "Reduce school absences due to asthma by 50% and improve academic performance scores by 15%. Decrease parent work absences by 30% and emergency department visits during school hours by 60%.",
        targetPopulation: "Students ages 5-18 with diagnosed asthma in high-poverty school districts with >70% free/reduced lunch eligibility.",
        healthEquity: "Prioritize schools in environmental justice communities with high air pollution exposure. Provide bilingual asthma education and ensure access to rescue medications regardless of family's ability to pay.",
        measurement: "Process: School absence rates, medication administration frequency. Outcome: Academic performance metrics, family quality of life scores. Implementation: Nurse training completion, parent satisfaction surveys.",
        evidenceBase: [
            "Bruzzese JM, Sheares BJ, Vincent EJ, et al. Effects of a school-based intervention for urban adolescents with asthma. Am J Respir Crit Care Med. 2011;183(8):998-1006. https://doi.org/10.1164/rccm.201003-0429OC",
            "Gerald LB, Redden D, Wittich AR, et al. Outcomes for a comprehensive school-based asthma management program. J Sch Health. 2006;76(6):291-296. https://doi.org/10.1111/j.1746-1561.2006.00114.x"
        ]
    },

    // COPD PROTOCOLS
    {
        title: "COPD Care Coordination and Pulmonary Rehabilitation",
        domain: "COPD",
        role: "Respiratory Therapist",
        description: "Comprehensive COPD management program combining medication optimization, pulmonary rehabilitation, and care coordination to reduce hospitalizations and improve quality of life.",
        implementation: "Phase 1 (Weeks 1-4): Conduct comprehensive COPD assessment using CAT (COPD Assessment Test) and mMRC dyspnea scale. Optimize bronchodilator therapy and assess inhaler technique. Initiate smoking cessation counseling if applicable. Phase 2 (Weeks 5-16): Implement 12-week pulmonary rehabilitation program with 3x weekly 60-minute sessions including exercise training, education, and psychosocial support. Deploy home oxygen therapy if indicated (SpO2 <88%). Phase 3 (Ongoing): Monthly care coordination visits with medication reconciliation, exacerbation action plan review, and advance care planning discussions.",
        expectedOutcomes: "Reduce COPD-related hospitalizations by 45% (95% CI: 38-52%) and emergency department visits by 35%. Improve 6-minute walk distance by 50 meters and quality of life scores (SGRQ) by 12 points. Achieve 30% reduction in healthcare costs per patient annually.",
        targetPopulation: "Medicaid beneficiaries with moderate to severe COPD (GOLD Stage 2-4) with ≥1 hospitalization or ≥2 emergency department visits in past year. Priority for patients with multiple comorbidities or social determinants challenges.",
        healthEquity: "Address tobacco cessation with culturally appropriate interventions and consider environmental exposures in occupational history. Provide transportation assistance for pulmonary rehabilitation sessions and ensure access to home oxygen regardless of housing situation.",
        measurement: "Process: Pulmonary rehabilitation attendance rates, inhaler technique assessments, smoking cessation attempts. Outcome: CAT scores, 6-minute walk test, hospitalization rates, medication adherence. Implementation: Patient satisfaction, care plan completion rates.",
        evidenceBase: [
            "McCarthy B, Casey D, Devane D, et al. Pulmonary rehabilitation for chronic obstructive pulmonary disease. Cochrane Database Syst Rev. 2015;2015(2):CD003793. https://doi.org/10.1002/14651858.CD003793.pub3",
            "Kruis AL, Smidt N, Assendelft WJ, et al. Integrated disease management interventions for patients with chronic obstructive pulmonary disease. Cochrane Database Syst Rev. 2013;2013(10):CD009437. https://doi.org/10.1002/14651858.CD009437.pub2",
            "Fan VS, Gaziano JM, Lew R, et al. A comprehensive care management program to prevent chronic obstructive pulmonary disease hospitalizations. Ann Intern Med. 2012;156(10):673-683. https://doi.org/10.7326/0003-4819-156-10-201205150-00003"
        ]
    },

    // HEART FAILURE PROTOCOLS
    {
        title: "Heart Failure Transitional Care Management",
        domain: "Heart Failure",
        role: "Nurse Care Manager",
        description: "Evidence-based heart failure management program focusing on medication optimization, self-care education, and care transitions to reduce 30-day readmissions.",
        implementation: "Phase 1 (Days 1-7 post-discharge): Conduct comprehensive medication reconciliation and assess for drug interactions. Initiate guideline-directed medical therapy optimization. Deploy daily weight monitoring with automated alerts for >2 lb gain. Phase 2 (Weeks 2-4): Implement weekly nurse visits for medication adherence, symptom assessment, and self-care education. Establish cardiology follow-up within 7-14 days. Phase 3 (Weeks 5-12): Transition to bi-weekly then monthly monitoring with telemedicine support. Integrate with EHR for automated medication refill reminders and lab monitoring.",
        expectedOutcomes: "Reduce 30-day heart failure readmissions by 50% (95% CI: 42-58%) and 90-day readmissions by 35%. Improve medication adherence (PDC ≥80%) in 75% of patients and quality of life scores (KCCQ) by 15 points. Achieve cost savings of $8,000 per patient annually.",
        targetPopulation: "Medicaid beneficiaries with heart failure (EF ≤40% or recent HF hospitalization) at high risk for readmission based on LACE+ score ≥10 or multiple comorbidities.",
        healthEquity: "Address medication affordability through patient assistance programs and generic alternatives. Provide culturally appropriate dietary education considering traditional foods and cooking methods. Ensure access to daily weight scales and blood pressure monitors.",
        measurement: "Process: Medication reconciliation completion, cardiology follow-up rates, daily weight monitoring compliance. Outcome: 30-day readmission rates, KCCQ scores, medication adherence, mortality. Implementation: Care plan adherence, patient satisfaction scores.",
        evidenceBase: [
            "Feltner C, Jones CD, Cené CW, et al. Transitional care interventions to prevent readmissions for persons with heart failure. Ann Intern Med. 2014;160(11):774-784. https://doi.org/10.7326/M14-0083",
            "Stamp KD, Machado MA, Allen NA. Transitional care programs improve outcomes for heart failure patients: an integrative review. J Cardiovasc Nurs. 2014;29(2):140-154. https://doi.org/10.1097/JCN.0b013e31827db560",
            "Vedel I, Khanassov V. Transitional care for patients with congestive heart failure: a systematic review and meta-analysis. Ann Fam Med. 2015;13(6):562-571. https://doi.org/10.1370/afm.1844"
        ]
    },

    // CHRONIC KIDNEY DISEASE PROTOCOLS
    {
        title: "CKD Progression Prevention and Care Coordination",
        domain: "Chronic Kidney Disease",
        role: "Nurse Care Manager",
        description: "Comprehensive chronic kidney disease management program focusing on progression prevention, complication management, and preparation for renal replacement therapy.",
        implementation: "Phase 1 (Weeks 1-4): Conduct comprehensive CKD staging using eGFR and albuminuria. Optimize blood pressure control (target <130/80) and diabetes management (HbA1c <7%). Initiate ACE inhibitor or ARB therapy if indicated. Phase 2 (Weeks 5-12): Implement monthly monitoring of kidney function, electrolytes, and mineral bone disease markers. Provide dietary counseling for protein, phosphorus, and potassium restriction. Phase 3 (Weeks 13-24): Establish nephrology referral for Stage 4-5 CKD and begin renal replacement therapy education. Deploy medication reconciliation to avoid nephrotoxic drugs.",
        expectedOutcomes: "Slow CKD progression by 30% as measured by eGFR decline rate. Achieve blood pressure control (<130/80) in 70% of patients and diabetes control (HbA1c <7%) in 65%. Reduce cardiovascular events by 25% and improve preparation for renal replacement therapy.",
        targetPopulation: "Medicaid beneficiaries with CKD Stages 3-5 (eGFR <60 mL/min/1.73m²) with diabetes, hypertension, or cardiovascular disease. Priority for patients with rapid progression (>5 mL/min/1.73m² decline annually).",
        healthEquity: "Address food insecurity affecting dietary modifications and ensure access to ACE inhibitors/ARBs through patient assistance programs. Provide culturally appropriate dietary counseling and consider traditional food preferences in meal planning.",
        measurement: "Process: Blood pressure monitoring frequency, medication adherence rates, nephrology referral completion. Outcome: eGFR progression rates, blood pressure control, HbA1c levels, cardiovascular events. Implementation: Patient education completion, care plan adherence.",
        evidenceBase: [
            "Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013;3(1):1-150. https://doi.org/10.1038/kisup.2012.73",
            "Bello AK, Levin A, Tonelli M, et al. Assessment of global kidney health care status. JAMA. 2017;317(18):1864-1881. https://doi.org/10.1001/jama.2017.4046",
            "Chen TK, Knicely DH, Grams ME. Chronic kidney disease diagnosis and management: a review. JAMA. 2019;322(13):1294-1304. https://doi.org/10.1001/jama.2019.14745"
        ]
    },

    // SUBSTANCE USE DISORDER PROTOCOLS
    {
        title: "Medication-Assisted Treatment (MAT) Coordination",
        domain: "Substance Use Disorder",
        role: "Peer Recovery Specialist",
        description: "Comprehensive substance use disorder treatment program integrating medication-assisted treatment with peer support, counseling, and social services coordination.",
        implementation: "Phase 1 (Days 1-7): Conduct comprehensive substance use assessment using AUDIT/DAST tools and assess for withdrawal symptoms. Initiate appropriate MAT (buprenorphine, methadone, or naltrexone) with medical supervision. Connect with peer recovery specialist for initial engagement. Phase 2 (Weeks 2-12): Implement weekly individual counseling sessions and bi-weekly group therapy. Deploy contingency management protocols with incentives for treatment adherence. Coordinate with social services for housing, employment, and legal support. Phase 3 (Weeks 13-52): Transition to monthly MAT monitoring with ongoing peer support and relapse prevention planning.",
        expectedOutcomes: "Achieve 60% treatment retention at 6 months and 45% at 12 months. Reduce illicit drug use by 70% as measured by urine drug screens. Decrease criminal justice involvement by 50% and improve employment rates by 35%. Reduce overdose deaths by 80%.",
        targetPopulation: "Medicaid beneficiaries with opioid use disorder, alcohol use disorder, or polysubstance use seeking treatment. Priority for patients with history of overdose, criminal justice involvement, or co-occurring mental health disorders.",
        healthEquity: "Address stigma through trauma-informed care approaches and ensure access to MAT regardless of insurance coverage gaps. Provide culturally responsive treatment considering racial/ethnic disparities in addiction treatment access and outcomes.",
        measurement: "Process: MAT initiation rates, counseling session attendance, peer support engagement. Outcome: Treatment retention rates, drug screen results, overdose incidents, criminal justice involvement. Implementation: Staff training completion, patient satisfaction scores.",
        evidenceBase: [
            "Sordo L, Barrio G, Bravo MJ, et al. Mortality risk during and after opioid substitution treatment: systematic review and meta-analysis of cohort studies. BMJ. 2017;357:j1550. https://doi.org/10.1136/bmj.j1550",
            "Wakeman SE, Larochelle MR, Ameli O, et al. Comparative effectiveness of different treatment pathways for opioid use disorder. JAMA Netw Open. 2020;3(2):e1920622. https://doi.org/10.1001/jamanetworkopen.2019.20622",
            "Connery HS. Medication-assisted treatment of opioid use disorder: review of the evidence and future directions. Harv Rev Psychiatry. 2015;23(2):63-75. https://doi.org/10.1097/HRP.0000000000000075"
        ]
    },

    // TRANSITIONS SUPPORT PROTOCOLS
    {
        title: "Post-Hospital Discharge Transitional Care",
        domain: "Care Transitions",
        role: "Care Coordinator",
        description: "Comprehensive transitional care program to reduce 30-day readmissions through medication reconciliation, follow-up coordination, and patient education.",
        implementation: "Phase 1 (Days 1-3 post-discharge): Conduct comprehensive medication reconciliation within 24 hours of discharge. Schedule primary care follow-up within 7 days and specialist appointments within 14 days. Deploy home visit by care coordinator to assess safety and medication adherence. Phase 2 (Days 4-14): Implement daily phone calls for first week, then every other day for second week. Provide patient education on warning signs and when to seek care. Coordinate with pharmacy for medication delivery if needed. Phase 3 (Days 15-30): Weekly phone calls with symptom assessment and care plan review. Ensure completion of all follow-up appointments and diagnostic tests.",
        expectedOutcomes: "Reduce 30-day all-cause readmissions by 40% (95% CI: 33-47%) and emergency department visits by 30%. Improve medication adherence to 85% and primary care follow-up completion to 90%. Achieve patient satisfaction scores >4.5/5.0.",
        targetPopulation: "Medicaid beneficiaries at high risk for readmission based on LACE+ score ≥10, multiple comorbidities, or history of frequent hospitalizations. Priority for patients with heart failure, COPD, diabetes, or mental health conditions.",
        healthEquity: "Address transportation barriers through ride vouchers or telemedicine options. Provide interpretation services and culturally appropriate education materials. Ensure access to medications through patient assistance programs.",
        measurement: "Process: Medication reconciliation completion rates, follow-up appointment scheduling, home visit completion. Outcome: 30-day readmission rates, ED visit rates, medication adherence, patient satisfaction. Implementation: Care coordinator caseload metrics, intervention fidelity.",
        evidenceBase: [
            "Leppin AL, Gionfriddo MR, Kessler M, et al. Preventing 30-day hospital readmissions: a systematic review and meta-analysis of randomized trials. JAMA Intern Med. 2014;174(7):1095-1107. https://doi.org/10.1001/jamainternmed.2014.1608",
            "Burke RE, Prochazka AV. The case for transitional care. J Hosp Med. 2013;8(8):472-479. https://doi.org/10.1002/jhm.2059",
            "Coleman EA, Parry C, Chalmers S, Min SJ. The care transitions intervention: results of a randomized controlled trial. Arch Intern Med. 2006;166(17):1822-1828. https://doi.org/10.1001/archinte.166.17.1822"
        ]
    },
    {
        title: "Skilled Nursing Facility Transition Coordination",
        domain: "Care Transitions",
        role: "Social Worker",
        description: "Comprehensive care coordination program for transitions to and from skilled nursing facilities, focusing on care continuity and family engagement.",
        implementation: "Phase 1 (Pre-transition): Conduct comprehensive assessment of functional status, cognitive capacity, and social support systems. Coordinate with SNF staff on care plan development and medication reconciliation. Engage family in care planning and decision-making. Phase 2 (During SNF stay): Weekly care plan reviews with interdisciplinary team and family conferences. Monitor progress toward discharge goals and coordinate with community resources. Phase 3 (Post-SNF discharge): Home visit within 48 hours to assess safety and care plan implementation. Coordinate home health services, medical equipment, and follow-up appointments.",
        expectedOutcomes: "Reduce SNF readmissions by 35% and improve successful community discharge rates by 25%. Achieve family satisfaction scores >4.0/5.0 and reduce length of stay by 10%. Improve functional outcomes as measured by ADL scores.",
        targetPopulation: "Medicaid beneficiaries transitioning to/from skilled nursing facilities, particularly those with complex medical conditions, cognitive impairment, or limited family support.",
        healthEquity: "Ensure culturally appropriate care planning and address language barriers through professional interpretation. Consider family cultural values in care decisions and discharge planning.",
        measurement: "Process: Care plan completion rates, family conference participation, discharge planning timeliness. Outcome: SNF readmission rates, community discharge success, functional status improvements. Implementation: Social worker caseload metrics, family satisfaction scores.",
        evidenceBase: [
            "Ouslander JG, Lamb G, Perloe M, et al. Potentially avoidable hospitalizations of nursing home residents: frequency, causes, and costs. J Am Geriatr Soc. 2010;58(4):627-635. https://doi.org/10.1111/j.1532-5415.2010.02768.x",
            "Mor V, Intrator O, Feng Z, Grabowski DC. The revolving door of rehospitalization from skilled nursing facilities. Health Aff (Millwood). 2010;29(1):57-64. https://doi.org/10.1377/hlthaff.2009.0629"
        ]
    },
    {
        title: "Post-Incarceration Health Transition Support",
        domain: "Care Transitions",
        role: "Community Health Worker",
        description: "Comprehensive health transition program for individuals returning from incarceration, focusing on healthcare access, medication continuity, and social determinants.",
        implementation: "Phase 1 (Pre-release): Coordinate with correctional health staff to obtain medical records and medication lists. Schedule primary care appointment within 7 days of release and specialist appointments within 30 days. Apply for Medicaid coverage if needed. Phase 2 (Days 1-30 post-release): Conduct comprehensive health assessment and medication reconciliation. Provide transportation assistance for medical appointments and pharmacy visits. Connect with mental health and substance use treatment services. Phase 3 (Days 31-90): Monthly check-ins with focus on medication adherence, appointment compliance, and social needs assessment. Coordinate with community resources for housing, employment, and legal support.",
        expectedOutcomes: "Achieve 80% primary care connection within 30 days and 70% medication continuity for chronic conditions. Reduce emergency department utilization by 40% and improve health insurance enrollment to 90%. Decrease recidivism rates by 25%.",
        targetPopulation: "Individuals returning from incarceration with chronic medical conditions, mental health disorders, or substance use disorders. Priority for those with complex medical needs or limited social support.",
        healthEquity: "Address systemic barriers to healthcare access and provide trauma-informed care approaches. Ensure culturally responsive services and address racial disparities in post-incarceration health outcomes.",
        measurement: "Process: Primary care appointment completion, medication pickup rates, insurance enrollment. Outcome: Emergency department utilization, health status improvements, recidivism rates. Implementation: CHW caseload metrics, client satisfaction scores.",
        evidenceBase: [
            "Binswanger IA, Stern MF, Deyo RA, et al. Release from prison--a high risk of death for former inmates. N Engl J Med. 2007;356(2):157-165. https://doi.org/10.1056/NEJMsa064115",
            "Wang EA, Hong CS, Samuels L, et al. Transitions clinic: creating a community-based model of health care for recently released California prisoners. Public Health Rep. 2010;125(2):171-177. https://doi.org/10.1177/003335491012500205"
        ]
    },

    // EXISTING ENHANCED PROTOCOLS (keeping the best ones from previous version)
    {
        title: "Diabetes Self-Management Education and Support (DSMES)",
        domain: "Diabetes",
        role: "Certified Diabetes Educator",
        description: "Comprehensive diabetes self-management education program combining individual counseling, group sessions, and technology-enabled monitoring to improve glycemic control and reduce complications.",
        implementation: "Phase 1 (Weeks 1-2): Conduct comprehensive diabetes assessment including HbA1c, blood pressure, lipids, and foot examination. Establish individualized glycemic targets and medication optimization. Deploy continuous glucose monitoring or structured blood glucose monitoring. Phase 2 (Weeks 3-10): Implement 8-week DSMES curriculum with weekly 90-minute group sessions covering nutrition, medication management, blood glucose monitoring, and complication prevention. Provide individual counseling sessions bi-weekly. Phase 3 (Weeks 11-26): Monthly follow-up visits with medication titration, lifestyle reinforcement, and complication screening. Integrate with EHR for automated medication refill reminders and lab result tracking.",
        expectedOutcomes: "Reduce HbA1c by 1.2% (95% CI: 0.9-1.5%) within 6 months. Achieve glycemic control (HbA1c <7%) in 60% of participants. Improve medication adherence (PDC ≥80%) to 75% and reduce diabetes-related emergency department visits by 35%.",
        targetPopulation: "Medicaid beneficiaries with Type 1 or Type 2 diabetes with HbA1c ≥8% or recent diabetes-related hospitalization. Priority for patients with multiple comorbidities, limited health literacy, or social determinants challenges.",
        healthEquity: "Address food insecurity through partnerships with food banks and provide culturally appropriate nutrition education. Ensure access to glucose monitoring supplies and medications regardless of insurance coverage gaps. Provide interpretation services and materials in prevalent community languages.",
        measurement: "Process: DSMES session attendance, blood glucose monitoring frequency, medication adherence rates. Outcome: HbA1c levels, blood pressure control, lipid levels, emergency department visits. Implementation: Educator training completion, patient satisfaction scores, care plan adherence.",
        evidenceBase: [
            "Chrvala CA, Sherr D, Lipman RD. Diabetes self-management education for adults with type 2 diabetes mellitus: a systematic review of the effect on glycemic control. Patient Educ Couns. 2016;99(6):926-943. https://doi.org/10.1016/j.pec.2015.11.003",
            "Powers MA, Bardsley J, Cypress M, et al. Diabetes self-management education and support in type 2 diabetes: a joint position statement of the American Diabetes Association, the American Association of Diabetes Educators, and the Academy of Nutrition and Dietetics. Diabetes Care. 2015;38(7):1372-1382. https://doi.org/10.2337/dc15-0730"
        ]
    },

    // MENTAL HEALTH PROTOCOLS
    {
        title: "Integrated Behavioral Health Care Management",
        domain: "Mental Health",
        role: "Behavioral Health Care Manager",
        description: "Evidence-based integrated care model combining medication management, psychotherapy, and care coordination for depression and anxiety disorders in primary care settings.",
        implementation: "Phase 1 (Weeks 1-2): Conduct comprehensive mental health assessment using PHQ-9, GAD-7, and trauma screening tools. Initiate collaborative care team including primary care provider, behavioral health care manager, and psychiatric consultant. Develop individualized treatment plan with patient preferences. Phase 2 (Weeks 3-12): Implement weekly 30-minute care management sessions with medication monitoring, brief behavioral interventions, and symptom tracking. Provide psychiatric consultation as needed for medication optimization. Phase 3 (Weeks 13-24): Transition to bi-weekly then monthly follow-up with relapse prevention planning and community resource connection.",
        expectedOutcomes: "Achieve 50% reduction in PHQ-9 scores within 6 months and remission (PHQ-9 <5) in 45% of patients. Improve functional status as measured by WHODAS scores by 30%. Reduce mental health-related emergency department visits by 40%.",
        targetPopulation: "Medicaid beneficiaries with depression (PHQ-9 ≥10) or anxiety disorders (GAD-7 ≥10) receiving care in primary care settings. Priority for patients with co-occurring medical conditions or substance use disorders.",
        healthEquity: "Address cultural stigma around mental health through community education and peer support programs. Ensure access to culturally responsive therapy approaches and consider trauma-informed care for patients with adverse childhood experiences.",
        measurement: "Process: Care management session attendance, medication adherence rates, psychiatric consultation utilization. Outcome: PHQ-9 and GAD-7 scores, functional status measures, emergency department visits. Implementation: Care manager caseload metrics, patient satisfaction scores.",
        evidenceBase: [
            "Unützer J, Katon W, Callahan CM, et al. Collaborative care management of late-life depression in the primary care setting: a randomized controlled trial. JAMA. 2002;288(22):2836-2845. https://doi.org/10.1001/jama.288.22.2836",
            "Archer J, Bower P, Gilbody S, et al. Collaborative care for depression and anxiety problems. Cochrane Database Syst Rev. 2012;10:CD006525. https://doi.org/10.1002/14651858.CD006525.pub2"
        ]
    }
];
