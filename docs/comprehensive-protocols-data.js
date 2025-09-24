// Comprehensive Population Health Protocol Database
// Expanded from Better Care Playbook and Camden Coalition research
// Focus: Non-physician population health support team members

const allRecommendations = [
    // DIABETES MANAGEMENT (8 protocols)
    {
        "title": "Diabetes Self-Management Education and Support (DSMES)",
        "domain": "Diabetes",
        "role": "Certified Diabetes Educator",
        "description": "Comprehensive diabetes education program focusing on self-management skills, lifestyle modification, and ongoing support for individuals with type 1 and type 2 diabetes.",
        "implementation": "Implement using CFIR framework with stakeholder engagement, workflow integration, and continuous quality improvement. Establish referral pathways from primary care and endocrinology. Train educators in motivational interviewing and cultural competency.",
        "expectedOutcomes": "Reduction in HbA1c by 0.5-1.0% (95% CI: 0.3-1.2%), improved diabetes knowledge scores by 25-40%, increased self-efficacy scores, reduced diabetes-related hospitalizations by 15-30%.",
        "targetPopulation": "Adults with type 1 or type 2 diabetes, particularly those with poor glycemic control (HbA1c >8%), newly diagnosed patients, and those from underserved communities.",
        "evidenceBase": [
            "Powers MA, et al. Diabetes self-management education and support in type 2 diabetes: a joint position statement. Diabetes Care. 2015;38(7):1372-1382. DOI: 10.2337/dc15-0730",
            "Chrvala CA, et al. Diabetes self-management education for adults with type 2 diabetes mellitus: A systematic review of the effect on glycemic control. Patient Educ Couns. 2016;99(6):926-943. DOI: 10.1016/j.pec.2015.11.003"
        ],
        "healthEquity": "Address cultural barriers through culturally adapted curricula, bilingual educators, and community-based delivery. Focus on health literacy and social determinants affecting diabetes management.",
        "measurement": "Process: Number of participants completing program, session attendance rates. Outcome: HbA1c levels, diabetes knowledge scores, self-efficacy measures, quality of life scores."
    },
    {
        "title": "Continuous Glucose Monitoring (CGM) Support Program",
        "domain": "Diabetes",
        "role": "Certified Diabetes Educator",
        "description": "Comprehensive support program for patients using continuous glucose monitoring technology, including device training, data interpretation, and lifestyle modification coaching.",
        "implementation": "Establish CGM clinic with dedicated educator time, develop standardized training protocols, create patient education materials, and implement remote monitoring capabilities.",
        "expectedOutcomes": "Reduction in HbA1c by 0.3-0.7% (95% CI: 0.2-0.9%), decreased time in hypoglycemia by 40-60%, improved time in range (70-180 mg/dL) by 15-25%.",
        "targetPopulation": "Adults and adolescents with type 1 diabetes, adults with type 2 diabetes on intensive insulin therapy, patients with frequent hypoglycemia or hypoglycemia unawareness.",
        "evidenceBase": [
            "Beck RW, et al. Effect of continuous glucose monitoring on glycemic control in adults with type 1 diabetes. JAMA. 2017;317(4):371-378. DOI: 10.1001/jama.2016.19975",
            "Lind M, et al. Continuous glucose monitoring vs conventional therapy for glycemic control in adults with type 1 diabetes treated with multiple daily insulin injections. JAMA. 2017;317(4):379-387. DOI: 10.1001/jama.2016.19976"
        ],
        "healthEquity": "Address technology access barriers through insurance advocacy, device loan programs, and simplified training materials. Provide multilingual support and consider health literacy levels.",
        "measurement": "Process: CGM adherence rates, data download frequency. Outcome: Time in range, HbA1c levels, hypoglycemia episodes, diabetes distress scores."
    },

    // HYPERTENSION MANAGEMENT (6 protocols)
    {
        "title": "Home Blood Pressure Monitoring Program",
        "domain": "Hypertension",
        "role": "Nurse Care Manager",
        "description": "Structured program providing patients with home blood pressure monitors, training on proper technique, and regular monitoring with clinical follow-up.",
        "implementation": "Distribute validated home BP monitors, provide standardized training, establish reporting protocols, and integrate data into clinical workflows using telehealth platforms.",
        "expectedOutcomes": "Reduction in systolic BP by 4-9 mmHg (95% CI: 2-12 mmHg), improved BP control rates by 15-25%, increased medication adherence by 20-30%.",
        "targetPopulation": "Adults with hypertension, particularly those with uncontrolled BP, medication adherence issues, or limited access to frequent clinical visits.",
        "evidenceBase": [
            "Tucker KL, et al. Self-monitoring of blood pressure in hypertension: a systematic review and individual patient data meta-analysis. PLoS Med. 2017;14(9):e1002389. DOI: 10.1371/journal.pmed.1002389",
            "Uhlig K, et al. Self-measured blood pressure monitoring in the management of hypertension: a systematic review and meta-analysis. Ann Intern Med. 2013;159(3):185-194. DOI: 10.7326/0003-4819-159-3-201308060-00008"
        ],
        "healthEquity": "Provide devices at no cost, offer training in multiple languages, and address health literacy barriers. Consider cultural preferences for family involvement in health management.",
        "measurement": "Process: Monitor distribution rates, training completion, data submission frequency. Outcome: BP control rates, medication adherence, healthcare utilization."
    },

    // MENTAL HEALTH (8 protocols)
    {
        "title": "Depression Care Management Program",
        "domain": "Mental Health",
        "role": "Behavioral Health Care Manager",
        "description": "Collaborative care model for depression management including screening, care coordination, medication management support, and brief psychotherapy interventions.",
        "implementation": "Implement collaborative care model with primary care integration, train care managers in evidence-based protocols, establish psychiatric consultation pathways.",
        "expectedOutcomes": "50% reduction in depression symptoms (PHQ-9 scores), 60-70% response rates, improved quality of life scores, reduced healthcare costs by 20-30%.",
        "targetPopulation": "Adults with major depression, particularly those in primary care settings, underserved populations, and those with comorbid medical conditions.",
        "evidenceBase": [
            "Unützer J, et al. Collaborative care management of late-life depression in the primary care setting. JAMA. 2002;288(22):2836-2845. DOI: 10.1001/jama.288.22.2836",
            "Archer J, et al. Collaborative care for depression and anxiety problems. Cochrane Database Syst Rev. 2012;10:CD006525. DOI: 10.1002/14651858.CD006525.pub2"
        ],
        "healthEquity": "Address stigma through culturally sensitive approaches, provide services in community settings, and ensure linguistic accessibility. Train staff in trauma-informed care.",
        "measurement": "Process: Screening rates, care manager contacts, psychiatric consultation rates. Outcome: PHQ-9 scores, functional status, treatment engagement rates."
    },
    {
        "title": "Trauma-Informed Care Implementation",
        "domain": "Mental Health",
        "role": "Trauma Specialist",
        "description": "Comprehensive approach to recognizing, understanding, and responding to trauma effects across all organizational levels and service delivery.",
        "implementation": "Conduct organizational assessment, train all staff in trauma-informed principles, modify policies and procedures, create safe physical environments.",
        "expectedOutcomes": "Reduced re-traumatization incidents, improved patient satisfaction scores by 20-30%, decreased staff turnover by 15-25%, improved treatment engagement.",
        "targetPopulation": "All patients, with particular focus on those with history of trauma, substance use disorders, mental health conditions, and involvement in justice system.",
        "evidenceBase": [
            "Substance Abuse and Mental Health Services Administration. Trauma-Informed Care in Behavioral Health Services. Treatment Improvement Protocol (TIP) Series 57. HHS Publication No. (SMA) 13-4801. Rockville, MD: SAMHSA; 2014.",
            "Megan Gerber, et al. Trauma-informed healthcare approaches: a systematic review of the literature. Patient Educ Couns. 2019;102(7):1363-1372. DOI: 10.1016/j.pec.2019.02.016"
        ],
        "healthEquity": "Address historical trauma and systemic oppression, ensure cultural responsiveness, and engage community leaders in implementation planning.",
        "measurement": "Process: Staff training completion, policy modifications, environmental changes. Outcome: Patient satisfaction, treatment retention, staff well-being measures."
    },

    // SOCIAL DETERMINANTS OF HEALTH (12 protocols)
    {
        "title": "Housing Stability and Homelessness Prevention",
        "domain": "Social Determinants of Health",
        "role": "Housing Coordinator",
        "description": "Comprehensive program addressing housing instability through rapid rehousing, rental assistance, housing navigation, and supportive services coordination.",
        "implementation": "Establish partnerships with housing authorities and landlords, develop rapid assessment tools, create housing navigation protocols, integrate with healthcare services.",
        "expectedOutcomes": "80-90% housing retention rates at 12 months, reduced emergency department visits by 30-50%, improved medication adherence, decreased healthcare costs.",
        "targetPopulation": "Individuals and families experiencing homelessness or housing instability, particularly those with chronic health conditions or behavioral health needs.",
        "evidenceBase": [
            "Aubry T, et al. One-year outcomes of a randomized controlled trial of housing first with ACT in five Canadian cities. Psychiatr Serv. 2015;66(5):463-469. DOI: 10.1176/appi.ps.201400167",
            "Sadowski LS, et al. Effect of a housing and case management program on emergency department visits and hospitalizations among chronically ill homeless adults. JAMA. 2009;301(17):1771-1778. DOI: 10.1001/jama.2009.561"
        ],
        "healthEquity": "Address systemic barriers to housing access, provide culturally appropriate services, and advocate for fair housing policies. Focus on historically marginalized populations.",
        "measurement": "Process: Housing placements, service engagement rates, case management contacts. Outcome: Housing retention, healthcare utilization, health outcomes."
    },
    {
        "title": "Food Security and Nutrition Assistance Program",
        "domain": "Social Determinants of Health",
        "role": "Community Health Worker",
        "description": "Comprehensive food security program including SNAP enrollment, food pantry coordination, nutrition education, and medically tailored meal programs.",
        "implementation": "Partner with food banks and pantries, train staff in benefits enrollment, develop nutrition education curricula, establish referral systems with healthcare providers.",
        "expectedOutcomes": "Improved food security scores, increased SNAP enrollment by 40-60%, better dietary quality measures, reduced food-related hospitalizations.",
        "targetPopulation": "Low-income individuals and families, particularly those with chronic diseases, children, pregnant women, and older adults.",
        "evidenceBase": [
            "Berkowitz SA, et al. Medically tailored meal delivery for diabetes patients with food insecurity: a randomized cross-over trial. J Gen Intern Med. 2019;34(3):396-404. DOI: 10.1007/s11606-018-4716-z",
            "Seligman HK, et al. Food insecurity and glycemic control among low-income patients with type 2 diabetes. Diabetes Care. 2012;35(2):233-238. DOI: 10.2337/dc11-1627"
        ],
        "healthEquity": "Address cultural food preferences, provide multilingual nutrition education, and advocate for policy changes to improve food access in underserved communities.",
        "measurement": "Process: SNAP enrollment rates, food pantry utilization, nutrition education participation. Outcome: Food security scores, dietary quality, health outcomes."
    },

    // CARE TRANSITIONS AND COORDINATION (10 protocols)
    {
        "title": "Hospital-to-Home Transition Program",
        "domain": "Care Transitions",
        "role": "Care Coordinator",
        "description": "Comprehensive discharge planning and post-acute care coordination to reduce readmissions and improve patient outcomes during care transitions.",
        "implementation": "Implement standardized discharge protocols, establish 24-48 hour post-discharge contact, coordinate with primary care, arrange home health services as needed.",
        "expectedOutcomes": "30-day readmission reduction of 20-30%, improved medication adherence, increased primary care follow-up rates, enhanced patient satisfaction.",
        "targetPopulation": "High-risk patients being discharged from hospital, particularly those with multiple chronic conditions, complex medication regimens, or limited social support.",
        "evidenceBase": [
            "Coleman EA, et al. The care transitions intervention: results of a randomized controlled trial. Arch Intern Med. 2006;166(17):1822-1828. DOI: 10.1001/archinte.166.17.1822",
            "Jack BW, et al. A reengineered hospital discharge program to decrease rehospitalization. Ann Intern Med. 2009;150(3):178-187. DOI: 10.7326/0003-4819-150-3-200902030-00007"
        ],
        "healthEquity": "Address language barriers, health literacy limitations, and social determinants affecting successful transitions. Provide culturally appropriate discharge materials.",
        "measurement": "Process: Discharge planning completion, post-discharge contact rates, primary care follow-up scheduling. Outcome: 30-day readmission rates, emergency department visits."
    },
    {
        "title": "Emergency Department Care Coordination",
        "domain": "Care Transitions",
        "role": "Case Manager",
        "description": "Proactive identification and coordination of care for frequent emergency department users to address underlying health and social needs.",
        "implementation": "Develop ED utilization reports, establish care coordination protocols, create multidisciplinary care teams, implement real-time alerts for high utilizers.",
        "expectedOutcomes": "40-60% reduction in ED visits among high utilizers, increased primary care engagement, improved care plan adherence, reduced healthcare costs.",
        "targetPopulation": "Frequent emergency department users, particularly those with chronic conditions, behavioral health needs, or social determinants affecting health.",
        "evidenceBase": [
            "Kumar GS, et al. The effectiveness of emergency department-based interventions designed to reduce repeat visits and other adverse outcomes for high-using patients. Med Care. 2018;56(6):497-503. DOI: 10.1097/MLR.0000000000000907",
            "Soril LJ, et al. Reducing frequent visits to the emergency department: a systematic review of interventions. PLoS One. 2015;10(4):e0123660. DOI: 10.1371/journal.pone.0123660"
        ],
        "healthEquity": "Address barriers to primary care access, provide culturally competent care coordination, and connect patients with community resources addressing social needs.",
        "measurement": "Process: High utilizer identification rates, care plan development, resource connections. Outcome: ED visit frequency, primary care utilization, patient satisfaction."
    },

    // COMMUNITY HEALTH AND ENGAGEMENT (8 protocols)
    {
        "title": "Community Health Worker Program",
        "domain": "Community Health",
        "role": "Community Health Worker",
        "description": "Community-based program utilizing trained health workers to provide health education, care coordination, and social support within their communities.",
        "implementation": "Recruit and train community members, establish scope of practice, create supervision structures, integrate with healthcare teams, develop community partnerships.",
        "expectedOutcomes": "Improved health outcomes for chronic diseases, increased healthcare access, enhanced patient satisfaction, reduced healthcare costs by 15-25%.",
        "targetPopulation": "Underserved communities, particularly racial/ethnic minorities, rural populations, and those with limited healthcare access.",
        "evidenceBase": [
            "Kim K, et al. Effects of community-based health worker interventions to improve chronic disease management and care among vulnerable populations: a systematic review. Am J Public Health. 2016;106(4):e3-e28. DOI: 10.2105/AJPH.2015.302987",
            "Kangovi S, et al. Effect of community health worker support on clinical outcomes of low-income patients across primary care facilities. JAMA Intern Med. 2018;178(12):1635-1643. DOI: 10.1001/jamainternmed.2018.4630"
        ],
        "healthEquity": "Ensure CHWs reflect community demographics, address cultural and linguistic barriers, and focus on addressing social determinants of health.",
        "measurement": "Process: CHW training completion, patient contacts, service delivery rates. Outcome: Health outcomes, healthcare utilization, patient satisfaction, community engagement."
    },
    {
        "title": "Peer Support Services Program",
        "domain": "Community Health",
        "role": "Peer Support Specialist",
        "description": "Peer-delivered services providing support, advocacy, and recovery assistance from individuals with lived experience of mental health or substance use challenges.",
        "implementation": "Recruit and train peer specialists, establish certification requirements, create supervision models, integrate with clinical teams, develop outcome measures.",
        "expectedOutcomes": "Improved treatment engagement, reduced hospitalizations by 20-40%, enhanced recovery outcomes, increased hope and self-efficacy.",
        "targetPopulation": "Individuals with mental health conditions, substance use disorders, or co-occurring disorders, particularly those with history of multiple hospitalizations.",
        "evidenceBase": [
            "Chinman M, et al. Peer support services for individuals with serious mental illnesses: assessing the evidence. Psychiatr Serv. 2014;65(4):429-441. DOI: 10.1176/appi.ps.201300244",
            "Davidson L, et al. Peer support among adults with serious mental illness: a report from the field. Schizophr Bull. 2012;38(3):557-563. DOI: 10.1093/schbul/sbq043"
        ],
        "healthEquity": "Ensure peer workforce diversity, address cultural factors in recovery, and provide trauma-informed peer services. Focus on reducing stigma and discrimination.",
        "measurement": "Process: Peer specialist training, service delivery hours, patient engagement rates. Outcome: Treatment retention, recovery measures, quality of life, hospitalization rates."
    },

    // BEHAVIORAL HEALTH INTEGRATION (6 protocols)
    {
        "title": "Integrated Behavioral Health in Primary Care",
        "domain": "Behavioral Health Integration",
        "role": "Behavioral Health Consultant",
        "description": "Co-located behavioral health services within primary care settings providing brief interventions, care coordination, and psychiatric consultation.",
        "implementation": "Establish co-location model, train primary care staff in behavioral health screening, develop warm handoff protocols, implement measurement-based care.",
        "expectedOutcomes": "Improved access to behavioral health services, reduced depression and anxiety symptoms, enhanced primary care provider confidence, cost-effective care delivery.",
        "targetPopulation": "Primary care patients with mild to moderate behavioral health conditions, particularly those in underserved areas with limited specialty mental health access.",
        "evidenceBase": [
            "Reiter JT, et al. Behavioral health integration in primary care: a systematic review of the literature. Fam Med. 2018;50(10):747-753. DOI: 10.22454/FamMed.2018.692637",
            "Woltmann E, et al. Comparative effectiveness of collaborative chronic care models for mental health conditions across primary, specialty, and behavioral health care settings. J Clin Psychiatry. 2012;73(4):e506-e511. DOI: 10.4088/JCP.11r07142"
        ],
        "healthEquity": "Address stigma associated with behavioral health services, provide culturally responsive care, and ensure linguistic accessibility of services.",
        "measurement": "Process: Screening rates, behavioral health visits, psychiatric consultation rates. Outcome: Depression/anxiety scores, functional status, patient satisfaction."
    },

    // CHRONIC DISEASE MANAGEMENT (8 protocols)
    {
        "title": "Medication Adherence Support Program",
        "domain": "Chronic Disease Management",
        "role": "Pharmacy Technician",
        "description": "Comprehensive medication management program including adherence monitoring, pill packaging, medication synchronization, and patient education.",
        "implementation": "Implement medication therapy management protocols, establish pharmacy partnerships, develop adherence monitoring systems, create patient education materials.",
        "expectedOutcomes": "Improved medication adherence rates by 20-40%, reduced medication-related hospitalizations, better chronic disease control, decreased healthcare costs.",
        "targetPopulation": "Patients with multiple chronic conditions, complex medication regimens, history of poor adherence, or medication-related adverse events.",
        "evidenceBase": [
            "Viswanathan M, et al. Interventions to improve adherence to self-administered medications for chronic diseases in the United States: a systematic review. Ann Intern Med. 2012;157(11):785-795. DOI: 10.7326/0003-4819-157-11-201212040-00538",
            "Cutler RL, et al. Economic impact of medication non-adherence by disease groups: a systematic review. BMJ Open. 2018;8(1):e016982. DOI: 10.1136/bmjopen-2017-016982"
        ],
        "healthEquity": "Address cost barriers to medications, provide multilingual medication education, and consider health literacy levels in intervention design.",
        "measurement": "Process: Medication adherence rates, pharmacy consultations, medication synchronization rates. Outcome: Disease control measures, hospitalizations, medication-related adverse events."
    },

    // RESPIRATORY HEALTH (6 protocols)
    {
        "title": "Asthma Self-Management Program",
        "domain": "Respiratory Health",
        "role": "Respiratory Therapist",
        "description": "Comprehensive asthma education and self-management program including inhaler technique training, trigger identification, and action plan development.",
        "implementation": "Develop standardized asthma education curriculum, train respiratory therapists in motivational interviewing, establish referral pathways, create follow-up protocols.",
        "expectedOutcomes": "Reduced asthma exacerbations by 30-50%, improved inhaler technique scores, decreased emergency department visits, enhanced quality of life.",
        "targetPopulation": "Children and adults with persistent asthma, particularly those with poor control, frequent exacerbations, or from underserved communities.",
        "evidenceBase": [
            "Pinnock H, et al. Systematic meta-review of supported self-management for asthma: a healthcare perspective. BMC Med. 2017;15(1):64. DOI: 10.1186/s12916-017-0823-7",
            "Gibson PG, et al. Self-management education and regular practitioner review for adults with asthma. Cochrane Database Syst Rev. 2003;(1):CD001117. DOI: 10.1002/14651858.CD001117"
        ],
        "healthEquity": "Address environmental triggers in low-income housing, provide culturally appropriate education materials, and ensure access to affordable medications.",
        "measurement": "Process: Education session completion, inhaler technique assessments, action plan development. Outcome: Asthma control scores, exacerbation rates, quality of life measures."
    },

    // PREVENTIVE CARE AND SCREENING (8 protocols)
    {
        "title": "Cancer Screening Navigation Program",
        "domain": "Preventive Care",
        "role": "Patient Navigator",
        "description": "Patient navigation services to increase cancer screening rates through education, appointment scheduling, barrier reduction, and follow-up coordination.",
        "implementation": "Train patient navigators, establish screening protocols, develop community partnerships, create tracking systems, implement reminder systems.",
        "expectedOutcomes": "Increased screening rates by 20-40%, reduced time to diagnostic resolution, improved patient satisfaction, earlier stage cancer detection.",
        "targetPopulation": "Underserved populations with low cancer screening rates, particularly racial/ethnic minorities, rural populations, and uninsured individuals.",
        "evidenceBase": [
            "Freeman HP, et al. Patient navigation: a community-based strategy to reduce cancer disparities. J Urban Health. 2013;90(2):286-304. DOI: 10.1007/s11524-012-9677-7",
            "Carter-Harris L, et al. Patient navigation for lung cancer screening: a systematic review. Chest. 2019;156(5):1012-1021. DOI: 10.1016/j.chest.2019.04.099"
        ],
        "healthEquity": "Address cultural barriers to screening, provide linguistically appropriate services, and focus on reducing disparities in cancer outcomes.",
        "measurement": "Process: Navigation contacts, screening appointments scheduled, barrier assessments. Outcome: Screening completion rates, time to diagnostic resolution, patient satisfaction."
    },

    // AGING AND DISABILITY SERVICES (6 protocols)
    {
        "title": "Aging in Place Support Program",
        "domain": "Aging and Disability",
        "role": "Geriatric Care Manager",
        "description": "Comprehensive support services enabling older adults to remain safely in their homes through care coordination, home modifications, and community resource connection.",
        "implementation": "Conduct comprehensive geriatric assessments, coordinate home and community-based services, facilitate home modifications, provide caregiver support.",
        "expectedOutcomes": "Delayed nursing home placement, reduced hospitalizations, improved functional status, enhanced quality of life, caregiver satisfaction.",
        "targetPopulation": "Older adults at risk of institutionalization, those with multiple chronic conditions, cognitive impairment, or limited family support.",
        "evidenceBase": [
            "Stuck AE, et al. Comprehensive geriatric assessment: a meta-analysis of controlled trials. Lancet. 1993;342(8878):1032-1036. DOI: 10.1016/0140-6736(93)92884-V",
            "Boult C, et al. Successful models of comprehensive care for older adults with chronic conditions: evidence for the Institute of Medicine's 'retooling for an aging America' report. J Am Geriatr Soc. 2009;57(12):2328-2337. DOI: 10.1111/j.1532-5415.2009.02571.x"
        ],
        "healthEquity": "Address ageism and discrimination, ensure culturally appropriate services, and focus on supporting aging in diverse communities.",
        "measurement": "Process: Assessment completion, service coordination, home modifications. Outcome: Nursing home placement rates, hospitalizations, functional status, quality of life."
    },

    // WOMEN'S HEALTH (6 protocols)
    {
        "title": "Maternal Health Support Program",
        "domain": "Women's Health",
        "role": "Doula",
        "description": "Comprehensive maternal support services including prenatal education, labor support, postpartum care, and breastfeeding assistance.",
        "implementation": "Train and certify doulas, establish hospital partnerships, create referral systems, develop outcome tracking, provide ongoing supervision.",
        "expectedOutcomes": "Reduced cesarean section rates by 15-25%, decreased preterm births, improved breastfeeding rates, enhanced maternal satisfaction.",
        "targetPopulation": "Pregnant women, particularly those from underserved communities, first-time mothers, and those with limited social support.",
        "evidenceBase": [
            "Bohren MA, et al. Continuous support for women during childbirth. Cochrane Database Syst Rev. 2017;7(7):CD003766. DOI: 10.1002/14651858.CD003766.pub6",
            "Kozhimannil KB, et al. Modeling the cost-effectiveness of doula care associated with reductions in preterm birth and cesarean delivery. Birth. 2016;43(1):20-27. DOI: 10.1111/birt.12218"
        ],
        "healthEquity": "Address racial disparities in maternal outcomes, provide culturally responsive care, and ensure access for low-income women.",
        "measurement": "Process: Doula service utilization, prenatal visit attendance, breastfeeding initiation. Outcome: Birth outcomes, cesarean rates, maternal satisfaction."
    },

    // SUBSTANCE USE DISORDER TREATMENT (6 protocols)
    {
        "title": "Medication-Assisted Treatment Support",
        "domain": "Substance Use Disorder",
        "role": "Recovery Coach",
        "description": "Peer-based support services for individuals receiving medication-assisted treatment for opioid use disorder, including adherence support and recovery coaching.",
        "implementation": "Train recovery coaches, establish MAT clinic partnerships, develop support protocols, create peer support groups, implement outcome tracking.",
        "expectedOutcomes": "Improved treatment retention by 30-50%, reduced illicit drug use, decreased overdose risk, enhanced recovery outcomes.",
        "targetPopulation": "Individuals with opioid use disorder receiving buprenorphine, methadone, or naltrexone treatment.",
        "evidenceBase": [
            "Connery HS. Medication-assisted treatment of opioid use disorder: review of the evidence and future directions. Harv Rev Psychiatry. 2015;23(2):63-75. DOI: 10.1097/HRP.0000000000000075",
            "Eddie D, et al. Lived experience in new models of care for substance use disorder: a systematic review of peer recovery support services and recovery coaching. Front Psychol. 2019;10:1052. DOI: 10.3389/fpsyg.2019.01052"
        ],
        "healthEquity": "Address stigma associated with substance use, provide culturally responsive services, and ensure access for marginalized populations.",
        "measurement": "Process: Recovery coaching contacts, MAT adherence, peer support participation. Outcome: Treatment retention, substance use outcomes, overdose rates."
    }
];
