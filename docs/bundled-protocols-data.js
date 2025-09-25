// Bundled Population Health Protocol Database
// Cleaned domains and standardized roles

const allRecommendations = [
    // DIABETES (3 protocols)
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
        "title": "Continuous Glucose Monitoring Support Program",
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
    {
        "title": "Diabetes Prevention Program",
        "domain": "Diabetes",
        "role": "Health Educator",
        "description": "Evidence-based lifestyle change program for adults with prediabetes to prevent or delay onset of type 2 diabetes through diet, physical activity, and behavior modification.",
        "implementation": "Recruit participants through healthcare provider referrals and community screening, train lifestyle coaches, establish 16-session core curriculum with ongoing maintenance sessions.",
        "expectedOutcomes": "58% reduction in diabetes incidence, 5-7% weight loss, improved physical activity levels, delayed diabetes onset by 2-3 years.",
        "targetPopulation": "Adults with prediabetes (HbA1c 5.7-6.4%, fasting glucose 100-125 mg/dL, or 2-hour glucose 140-199 mg/dL), particularly those from high-risk populations.",
        "evidenceBase": [
            "Diabetes Prevention Program Research Group. Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin. N Engl J Med. 2002;346(6):393-403. DOI: 10.1056/NEJMoa012512",
            "Ely EK, et al. A national effort to prevent type 2 diabetes: participant-level evaluation of CDC's National Diabetes Prevention Program. Diabetes Care. 2017;40(10):1331-1341. DOI: 10.2337/dc16-2099"
        ],
        "healthEquity": "Adapt curriculum for diverse populations, provide programs in community settings, address cultural food preferences, and ensure linguistic accessibility.",
        "measurement": "Process: Enrollment rates, session attendance, coach training completion. Outcome: Weight loss, physical activity levels, diabetes incidence, program retention."
    },

    // HYPERTENSION (2 protocols)
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
    {
        "title": "Medication Adherence Support Program",
        "domain": "Hypertension",
        "role": "Pharmacy Technician",
        "description": "Comprehensive medication management program including adherence monitoring, pill packaging, medication reconciliation, and patient education.",
        "implementation": "Implement medication therapy management protocols, establish pharmacy partnerships, develop adherence monitoring systems, train staff in motivational interviewing.",
        "expectedOutcomes": "Improved medication adherence rates by 25-40%, better BP control rates, reduced medication-related adverse events, decreased healthcare costs.",
        "targetPopulation": "Adults with hypertension on multiple medications, those with adherence challenges, complex medication regimens, or cognitive impairment.",
        "evidenceBase": [
            "Conn VS, et al. Medication adherence interventions that target subjects with adherence problems: systematic review and meta-analysis. Res Social Adm Pharm. 2016;12(2):218-246. DOI: 10.1016/j.sapharm.2015.06.001",
            "Gwadry-Sridhar FH, et al. Impact of interventions on medication adherence and blood pressure control in patients with essential hypertension: a systematic review by the ISPOR medication adherence and persistence special interest group. Value Health. 2013;16(5):863-871. DOI: 10.1016/j.jval.2013.03.1631"
        ],
        "healthEquity": "Address cost barriers through patient assistance programs, provide multilingual medication education, and consider cultural beliefs about medications.",
        "measurement": "Process: Medication reconciliation completion, adherence monitoring frequency, patient education sessions. Outcome: Medication adherence rates, BP control, adverse events."
    },

    // MENTAL HEALTH (4 protocols)
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
        "title": "Anxiety Disorders Treatment Program",
        "domain": "Mental Health",
        "role": "Behavioral Health Care Manager",
        "description": "Evidence-based treatment program for anxiety disorders using cognitive-behavioral therapy techniques, relaxation training, and care coordination.",
        "implementation": "Train care managers in CBT techniques, establish screening protocols, develop group therapy options, integrate with primary care services.",
        "expectedOutcomes": "40-60% reduction in anxiety symptoms (GAD-7 scores), improved functional status, reduced healthcare utilization, enhanced quality of life.",
        "targetPopulation": "Adults with generalized anxiety disorder, panic disorder, social anxiety, or other anxiety conditions, particularly in primary care settings.",
        "evidenceBase": [
            "Craske MG, et al. Anxiety disorders. Nat Rev Dis Primers. 2017;3:17024. DOI: 10.1038/nrdp.2017.24",
            "Cuijpers P, et al. Psychological treatment of generalized anxiety disorder: a meta-analysis. Clin Psychol Rev. 2014;34(2):130-140. DOI: 10.1016/j.cpr.2014.01.002"
        ],
        "healthEquity": "Provide culturally adapted interventions, address stigma and barriers to mental health care, ensure services are accessible in community settings.",
        "measurement": "Process: Screening completion, treatment engagement, session attendance. Outcome: GAD-7 scores, functional improvement, treatment satisfaction."
    },
    {
        "title": "Trauma-Informed Care Implementation",
        "domain": "Mental Health",
        "role": "Social Worker",
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
    {
        "title": "Integrated Behavioral Health Program",
        "domain": "Mental Health",
        "role": "Behavioral Health Care Manager",
        "description": "Co-located behavioral health services within primary care settings to provide immediate access to mental health and substance use treatment.",
        "implementation": "Establish co-location agreements, train primary care staff in behavioral health screening, develop warm handoff protocols, implement shared care plans.",
        "expectedOutcomes": "Increased access to behavioral health services, improved treatment engagement by 30-50%, better coordination of care, reduced stigma.",
        "targetPopulation": "Primary care patients with mental health or substance use concerns, particularly those who would not otherwise access specialty behavioral health services.",
        "evidenceBase": [
            "Peek CJ, et al. The Five Levels of Primary Care-Behavioral Health Integration. SAMHSA-HRSA Center for Integrated Health Solutions. 2013.",
            "Butler M, et al. Integration of mental health/substance abuse and primary care. Evidence Report/Technology Assessment No. 173. AHRQ Publication No. 09-E003. Rockville, MD: Agency for Healthcare Research and Quality; 2008."
        ],
        "healthEquity": "Reduce barriers to behavioral health care, provide culturally competent services, and address social determinants affecting mental health.",
        "measurement": "Process: Screening rates, warm handoff completion, shared care plan development. Outcome: Treatment engagement, symptom improvement, patient satisfaction."
    },

    // CARDIOVASCULAR HEALTH (3 protocols)
    {
        "title": "Cardiovascular Risk Reduction Program",
        "domain": "Cardiovascular Health",
        "role": "Health Educator",
        "description": "Comprehensive risk reduction program addressing lifestyle factors, medication adherence, and care coordination for patients with cardiovascular disease or risk factors.",
        "implementation": "Implement risk stratification protocols, develop lifestyle modification curricula, establish care coordination pathways, train educators in motivational interviewing.",
        "expectedOutcomes": "10-20% reduction in cardiovascular events, improved lipid profiles, better blood pressure control, increased physical activity levels.",
        "targetPopulation": "Adults with cardiovascular disease or multiple risk factors, particularly those from underserved communities with limited access to specialty care.",
        "evidenceBase": [
            "Arnett DK, et al. 2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease. Circulation. 2019;140(11):e596-e646. DOI: 10.1161/CIR.0000000000000678",
            "Piepoli MF, et al. 2016 European Guidelines on cardiovascular disease prevention in clinical practice. Eur Heart J. 2016;37(29):2315-2381. DOI: 10.1093/eurheartj/ehw106"
        ],
        "healthEquity": "Address social determinants affecting cardiovascular health, provide culturally appropriate lifestyle interventions, and ensure access to affordable medications.",
        "measurement": "Process: Risk assessment completion, lifestyle counseling sessions, medication adherence monitoring. Outcome: Cardiovascular events, risk factor control, quality of life."
    },
    {
        "title": "Heart Failure Management Program",
        "domain": "Cardiovascular Health",
        "role": "Nurse Care Manager",
        "description": "Comprehensive heart failure management including patient education, medication optimization, symptom monitoring, and care coordination.",
        "implementation": "Establish heart failure clinics, train nurses in evidence-based protocols, implement remote monitoring systems, develop care transition protocols.",
        "expectedOutcomes": "30-40% reduction in heart failure hospitalizations, improved quality of life scores, better medication adherence, reduced healthcare costs.",
        "targetPopulation": "Adults with heart failure, particularly those with recent hospitalizations, multiple comorbidities, or limited social support.",
        "evidenceBase": [
            "Yancy CW, et al. 2017 ACC/AHA/HFSA Focused Update of the 2013 ACCF/AHA Guideline for the Management of Heart Failure. Circulation. 2017;136(6):e137-e161. DOI: 10.1161/CIR.0000000000000509",
            "Feltner C, et al. Transitional care interventions to prevent readmissions for persons with heart failure: a systematic review and meta-analysis. Ann Intern Med. 2014;160(11):774-784. DOI: 10.7326/M14-0083"
        ],
        "healthEquity": "Address barriers to medication access, provide education in multiple languages, and consider cultural factors affecting self-care behaviors.",
        "measurement": "Process: Patient education completion, medication reconciliation, symptom monitoring frequency. Outcome: Hospitalization rates, functional status, self-care behaviors."
    },
    {
        "title": "Lipid Management Program",
        "domain": "Cardiovascular Health",
        "role": "Pharmacy Technician",
        "description": "Comprehensive lipid management program including medication therapy management, lifestyle counseling, and adherence monitoring.",
        "implementation": "Establish lipid clinics, train pharmacy staff in counseling techniques, develop medication adherence protocols, implement monitoring systems.",
        "expectedOutcomes": "20-30% reduction in LDL cholesterol levels, improved medication adherence rates, reduced cardiovascular events, better patient knowledge.",
        "targetPopulation": "Adults with dyslipidemia, particularly those with cardiovascular disease, diabetes, or multiple risk factors requiring intensive lipid management.",
        "evidenceBase": [
            "Grundy SM, et al. 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation. 2019;139(25):e1082-e1143. DOI: 10.1161/CIR.0000000000000625",
            "Cannon CP, et al. Ezetimibe Added to Statin Therapy after Acute Coronary Syndromes. N Engl J Med. 2015;372(25):2387-2397. DOI: 10.1056/NEJMoa1410489"
        ],
        "healthEquity": "Address cost barriers to medications, provide culturally appropriate dietary counseling, and ensure access to monitoring services.",
        "measurement": "Process: Lipid monitoring frequency, medication counseling sessions, adherence assessments. Outcome: LDL cholesterol levels, medication adherence, cardiovascular events."
    },

    // SOCIAL DETERMINANTS OF HEALTH (6 protocols)
    {
        "title": "Housing Stability Program",
        "domain": "Social Determinants of Health",
        "role": "Community Health Worker",
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
        "title": "Food Security and Nutrition Program",
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
    {
        "title": "Transportation Assistance Program",
        "domain": "Social Determinants of Health",
        "role": "Community Health Worker",
        "description": "Comprehensive transportation program providing medical transportation, public transit assistance, and care coordination to improve healthcare access.",
        "implementation": "Establish transportation partnerships, develop voucher systems, train staff in transportation resources, integrate with appointment scheduling systems.",
        "expectedOutcomes": "Increased appointment attendance by 25-40%, improved medication adherence, better chronic disease management, reduced missed care opportunities.",
        "targetPopulation": "Low-income individuals with limited transportation options, particularly those with chronic conditions requiring frequent medical visits.",
        "evidenceBase": [
            "Syed ST, et al. Traveling towards disease: transportation barriers to health care access. J Community Health. 2013;38(5):976-993. DOI: 10.1007/s10900-013-9681-1",
            "Wolfe MK, et al. Impact of a ride service intervention on barriers to healthcare access. Health Soc Work. 2020;45(1):35-42. DOI: 10.1093/hsw/hlz034"
        ],
        "healthEquity": "Address geographic barriers to care, provide culturally appropriate transportation assistance, and advocate for improved public transportation in underserved areas.",
        "measurement": "Process: Transportation assistance provided, appointment scheduling support, resource connections. Outcome: Appointment attendance rates, healthcare utilization, health outcomes."
    },
    {
        "title": "Benefits Enrollment and Navigation",
        "domain": "Social Determinants of Health",
        "role": "Community Health Worker",
        "description": "Comprehensive program assisting individuals and families with enrollment in public benefits including Medicaid, SNAP, housing assistance, and utility programs.",
        "implementation": "Train staff in benefits programs, establish partnerships with social services agencies, develop screening tools, create follow-up protocols.",
        "expectedOutcomes": "Increased benefits enrollment by 50-70%, improved access to healthcare and social services, reduced financial stress, better health outcomes.",
        "targetPopulation": "Low-income individuals and families eligible for public benefits, particularly those who are uninsured or underinsured.",
        "evidenceBase": [
            "Blewett LA, et al. When universal health insurance coverage remains universal: factors associated with accessing care in Massachusetts. Am J Public Health. 2008;98(8):1391-1398. DOI: 10.2105/AJPH.2007.129247",
            "Sommers BD, et al. Changes in mortality after Massachusetts health care reform: a quasi-experimental study. Ann Intern Med. 2014;160(9):585-593. DOI: 10.7326/M13-2275"
        ],
        "healthEquity": "Address language barriers, provide culturally competent assistance, and advocate for policy changes to improve benefits access for marginalized populations.",
        "measurement": "Process: Benefits applications completed, enrollment assistance provided, follow-up contacts. Outcome: Benefits enrollment rates, healthcare access, financial stability measures."
    },
    {
        "title": "Digital Health Literacy Program",
        "domain": "Social Determinants of Health",
        "role": "Community Health Worker",
        "description": "Program to improve digital health literacy and technology access, including patient portal training, telehealth support, and device assistance.",
        "implementation": "Establish technology training programs, provide device lending libraries, train staff in digital health tools, partner with community organizations.",
        "expectedOutcomes": "Improved digital health literacy scores, increased patient portal usage by 40-60%, better telehealth engagement, enhanced self-management capabilities.",
        "targetPopulation": "Individuals with limited digital health literacy, particularly older adults, those with limited English proficiency, and low-income populations.",
        "evidenceBase": [
            "Norman CD, et al. eHealth literacy: essential skills for consumer health in a networked world. J Med Internet Res. 2006;8(2):e9. DOI: 10.2196/jmir.8.2.e9",
            "Neter E, et al. eHealth literacy: extending the digital divide to the realm of health information. J Med Internet Res. 2012;14(1):e19. DOI: 10.2196/jmir.1619"
        ],
        "healthEquity": "Address digital divides, provide multilingual technology training, and ensure equitable access to digital health tools and resources.",
        "measurement": "Process: Training sessions completed, device lending, portal registration assistance. Outcome: Digital health literacy scores, technology usage, health engagement."
    },
    {
        "title": "Legal Aid and Health Partnership",
        "domain": "Social Determinants of Health",
        "role": "Community Health Worker",
        "description": "Partnership between healthcare and legal services to address legal issues affecting health, including housing, benefits, immigration, and disability rights.",
        "implementation": "Establish partnerships with legal aid organizations, train healthcare staff in legal issue identification, develop referral protocols, create co-location opportunities.",
        "expectedOutcomes": "Resolution of legal issues affecting health, improved access to benefits and services, reduced stress and anxiety, better health outcomes.",
        "targetPopulation": "Low-income individuals facing legal issues that impact health, including housing problems, benefits denials, immigration issues, and disability discrimination.",
        "evidenceBase": [
            "Teufel JA, et al. Rural medical-legal partnership and advocacy: a three-year follow-up study. J Health Care Poor Underserved. 2012;23(2):705-714. DOI: 10.1353/hpu.2012.0047",
            "Zuckerman B, et al. Why pediatricians need lawyers to keep children healthy. Pediatrics. 2004;114(1):224-228. DOI: 10.1542/peds.114.1.224"
        ],
        "healthEquity": "Address systemic legal barriers to health, provide culturally competent legal assistance, and advocate for policy changes to improve health equity.",
        "measurement": "Process: Legal referrals made, cases resolved, partnership activities. Outcome: Legal issue resolution, health improvements, patient satisfaction."
    },

    // CARE TRANSITIONS (3 protocols)
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
    {
        "title": "Skilled Nursing Facility Transition Support",
        "domain": "Care Transitions",
        "role": "Care Coordinator",
        "description": "Comprehensive support for patients transitioning from skilled nursing facilities back to community settings, including care planning and resource coordination.",
        "implementation": "Establish SNF partnerships, develop transition protocols, train care coordinators in post-acute care needs, implement communication systems.",
        "expectedOutcomes": "Reduced readmission rates, improved functional outcomes, successful community transitions, enhanced quality of life.",
        "targetPopulation": "Patients transitioning from skilled nursing facilities to home or community settings, particularly those with complex medical needs or limited social support.",
        "evidenceBase": [
            "Burke RE, et al. Moving beyond readmission penalties: creating an ideal process to improve transitional care. J Hosp Med. 2013;8(2):102-109. DOI: 10.1002/jhm.1990",
            "Naylor MD, et al. Transitional care of older adults hospitalized with heart failure: a randomized, controlled trial. J Am Geriatr Soc. 2004;52(5):675-684. DOI: 10.1111/j.1532-5415.2004.52202.x"
        ],
        "healthEquity": "Address barriers to successful community transitions, provide culturally appropriate support, and ensure access to necessary resources and services.",
        "measurement": "Process: Transition planning completion, resource coordination, follow-up contacts. Outcome: Readmission rates, functional status, community tenure."
    },

    // CHRONIC DISEASE MANAGEMENT (4 protocols)
    {
        "title": "Chronic Pain Management Program",
        "domain": "Chronic Disease Management",
        "role": "Social Worker",
        "description": "Comprehensive chronic pain management program using multimodal approaches including behavioral interventions, care coordination, and non-pharmacological therapies.",
        "implementation": "Establish interdisciplinary pain teams, train staff in evidence-based pain management, develop care protocols, implement outcome tracking systems.",
        "expectedOutcomes": "20-30% reduction in pain intensity scores, improved functional status, reduced opioid use, enhanced quality of life measures.",
        "targetPopulation": "Adults with chronic pain conditions, particularly those with complex pain syndromes, opioid use concerns, or multiple comorbidities.",
        "evidenceBase": [
            "Chou R, et al. Nonpharmacologic therapies for low back pain: a systematic review for an American College of Physicians clinical practice guideline. Ann Intern Med. 2017;166(7):493-505. DOI: 10.7326/M16-2459",
            "Dowell D, et al. CDC Guideline for Prescribing Opioids for Chronic Pain — United States, 2016. MMWR Recomm Rep. 2016;65(1):1-49. DOI: 10.15585/mmwr.rr6501e1"
        ],
        "healthEquity": "Address disparities in pain treatment, provide culturally appropriate interventions, and ensure equitable access to non-pharmacological therapies.",
        "measurement": "Process: Pain assessments completed, treatment plan development, therapy participation. Outcome: Pain intensity scores, functional status, opioid use patterns."
    },
    {
        "title": "Chronic Kidney Disease Management",
        "domain": "Chronic Disease Management",
        "role": "Nurse Care Manager",
        "description": "Comprehensive CKD management program including patient education, medication management, dietary counseling, and preparation for renal replacement therapy.",
        "implementation": "Establish CKD clinics, train nurses in CKD protocols, develop patient education materials, coordinate with nephrology services.",
        "expectedOutcomes": "Slowed progression of kidney disease, improved blood pressure and diabetes control, better preparation for dialysis or transplant, enhanced quality of life.",
        "targetPopulation": "Adults with chronic kidney disease stages 3-5, particularly those with diabetes, hypertension, or other comorbidities.",
        "evidenceBase": [
            "KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013;3(1):1-150.",
            "Chen TK, et al. Chronic Kidney Disease Diagnosis and Management: A Review. JAMA. 2019;322(13):1294-1304. DOI: 10.1001/jama.2019.14745"
        ],
        "healthEquity": "Address barriers to specialty care access, provide culturally appropriate education, and ensure equitable access to renal replacement therapies.",
        "measurement": "Process: CKD staging, medication optimization, education completion. Outcome: eGFR progression, blood pressure control, preparation for renal replacement therapy."
    },
    {
        "title": "COPD Management Program",
        "domain": "Chronic Disease Management",
        "role": "Respiratory Therapist",
        "description": "Comprehensive COPD management including pulmonary rehabilitation, medication optimization, exacerbation prevention, and self-management education.",
        "implementation": "Establish pulmonary rehabilitation programs, train respiratory therapists, develop action plans, implement remote monitoring systems.",
        "expectedOutcomes": "Reduced COPD exacerbations by 30-40%, improved exercise tolerance, better medication adherence, enhanced quality of life.",
        "targetPopulation": "Adults with COPD, particularly those with frequent exacerbations, functional limitations, or poor disease control.",
        "evidenceBase": [
            "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease (2023 Report).",
            "McCarthy B, et al. Pulmonary rehabilitation for chronic obstructive pulmonary disease. Cochrane Database Syst Rev. 2015;2:CD003793. DOI: 10.1002/14651858.CD003793.pub3"
        ],
        "healthEquity": "Address barriers to pulmonary rehabilitation access, provide culturally appropriate education, and ensure equitable access to medications and devices.",
        "measurement": "Process: Pulmonary rehabilitation participation, medication adherence, action plan completion. Outcome: Exacerbation rates, exercise capacity, quality of life scores."
    },
    {
        "title": "Asthma Management Program",
        "domain": "Chronic Disease Management",
        "role": "Respiratory Therapist",
        "description": "Comprehensive asthma management program including trigger identification, medication optimization, self-management education, and care coordination.",
        "implementation": "Establish asthma clinics, train respiratory therapists in asthma protocols, develop action plans, implement peak flow monitoring systems.",
        "expectedOutcomes": "Reduced asthma exacerbations by 40-50%, improved asthma control scores, decreased emergency department visits, enhanced quality of life.",
        "targetPopulation": "Children and adults with asthma, particularly those with poor control, frequent exacerbations, or multiple triggers.",
        "evidenceBase": [
            "National Heart, Lung, and Blood Institute. 2020 Focused Updates to the Asthma Management Guidelines: A Report from the National Asthma Education and Prevention Program. NIH Publication No. 20-HL-7117.",
            "Gibson PG, et al. Self-management education and regular practitioner review for adults with asthma. Cochrane Database Syst Rev. 2003;1:CD001117. DOI: 10.1002/14651858.CD001117"
        ],
        "healthEquity": "Address environmental triggers in low-income housing, provide culturally appropriate education, and ensure equitable access to controller medications.",
        "measurement": "Process: Asthma action plan completion, trigger assessment, medication training. Outcome: Asthma control scores, exacerbation rates, quality of life measures."
    },

    // SUBSTANCE USE DISORDER (2 protocols)
    {
        "title": "Medication-Assisted Treatment Program",
        "domain": "Substance Use Disorder",
        "role": "Peer Recovery Specialist",
        "description": "Comprehensive MAT program combining FDA-approved medications with counseling and behavioral therapies for opioid use disorder treatment.",
        "implementation": "Establish MAT clinics, train providers in evidence-based protocols, develop peer support programs, implement wraparound services.",
        "expectedOutcomes": "60-80% reduction in illicit opioid use, improved treatment retention rates, reduced overdose deaths, enhanced quality of life.",
        "targetPopulation": "Adults with opioid use disorder, particularly those with multiple treatment episodes, co-occurring disorders, or high-risk behaviors.",
        "evidenceBase": [
            "Connery HS. Medication-assisted treatment of opioid use disorder: review of the evidence and future directions. Harv Rev Psychiatry. 2015;23(2):63-75. DOI: 10.1097/HRP.0000000000000075",
            "Sordo L, et al. Mortality risk during and after opioid substitution treatment: systematic review and meta-analysis of cohort studies. BMJ. 2017;357:j1550. DOI: 10.1136/bmj.j1550"
        ],
        "healthEquity": "Address stigma and barriers to treatment access, provide culturally competent services, and ensure equitable access to medications and support services.",
        "measurement": "Process: Treatment initiation rates, retention in treatment, peer support engagement. Outcome: Substance use patterns, overdose rates, quality of life measures."
    },
    {
        "title": "Substance Use Screening and Brief Intervention",
        "domain": "Substance Use Disorder",
        "role": "Social Worker",
        "description": "Systematic screening for substance use in healthcare settings with brief interventions and referral to treatment for those with substance use disorders.",
        "implementation": "Implement universal screening protocols, train staff in brief intervention techniques, establish referral pathways, develop follow-up systems.",
        "expectedOutcomes": "Increased identification of substance use disorders, reduced alcohol and drug use, improved treatment engagement, better health outcomes.",
        "targetPopulation": "All patients in healthcare settings, with particular focus on those with risk factors for substance use disorders or related health problems.",
        "evidenceBase": [
            "Jonas DE, et al. Behavioral counseling after screening for alcohol misuse in primary care: a systematic review and meta-analysis for the U.S. Preventive Services Task Force. Ann Intern Med. 2012;157(9):645-654. DOI: 10.7326/0003-4819-157-9-201211060-00544",
            "Saitz R. Clinical practice. Unhealthy alcohol use. N Engl J Med. 2005;352(6):596-607. DOI: 10.1056/NEJMcp042262"
        ],
        "healthEquity": "Address cultural factors affecting substance use, provide linguistically appropriate screening tools, and ensure equitable access to treatment services.",
        "measurement": "Process: Screening completion rates, brief intervention delivery, referral to treatment. Outcome: Substance use patterns, treatment engagement, health improvements."
    },

    // WOMEN'S HEALTH (3 protocols)
    {
        "title": "Maternal Health Support Program",
        "domain": "Women's Health",
        "role": "Doula",
        "description": "Comprehensive maternal health program providing prenatal education, birth support, postpartum care, and care coordination for pregnant women.",
        "implementation": "Train doulas in evidence-based practices, establish partnerships with obstetric providers, develop care protocols, implement outcome tracking.",
        "expectedOutcomes": "Reduced cesarean section rates, improved birth outcomes, increased breastfeeding rates, enhanced maternal satisfaction.",
        "targetPopulation": "Pregnant women, particularly those from underserved communities, adolescents, or those with high-risk pregnancies.",
        "evidenceBase": [
            "Bohren MA, et al. Continuous support for women during childbirth. Cochrane Database Syst Rev. 2017;7:CD003766. DOI: 10.1002/14651858.CD003766.pub6",
            "Kozhimannil KB, et al. Modeling the cost-effectiveness of doula care associated with reductions in preterm birth and cesarean delivery. Birth. 2016;43(1):20-27. DOI: 10.1111/birt.12218"
        ],
        "healthEquity": "Address racial disparities in maternal health outcomes, provide culturally competent care, and ensure access to comprehensive maternal health services.",
        "measurement": "Process: Prenatal visit attendance, birth plan completion, postpartum follow-up. Outcome: Birth outcomes, breastfeeding rates, maternal satisfaction."
    },
    {
        "title": "Family Planning and Reproductive Health",
        "domain": "Women's Health",
        "role": "Health Educator",
        "description": "Comprehensive reproductive health program including contraceptive counseling, preconception care, STI prevention, and reproductive health education.",
        "implementation": "Train health educators in reproductive health counseling, establish clinic protocols, develop educational materials, implement follow-up systems.",
        "expectedOutcomes": "Reduced unintended pregnancy rates, improved contraceptive use, decreased STI transmission, enhanced reproductive health knowledge.",
        "targetPopulation": "Women of reproductive age, particularly adolescents and young adults, those seeking contraception, or those planning pregnancy.",
        "evidenceBase": [
            "Curtis KM, et al. U.S. Medical Eligibility Criteria for Contraceptive Use, 2016. MMWR Recomm Rep. 2016;65(3):1-103. DOI: 10.15585/mmwr.rr6503a1",
            "Gavin L, et al. Providing quality family planning services: Recommendations of CDC and the U.S. Office of Population Affairs. MMWR Recomm Rep. 2014;63(4):1-54."
        ],
        "healthEquity": "Address barriers to reproductive health care access, provide culturally appropriate counseling, and ensure equitable access to contraceptive methods.",
        "measurement": "Process: Contraceptive counseling completion, method provision, follow-up visits. Outcome: Contraceptive use rates, unintended pregnancy rates, STI incidence."
    },
    {
        "title": "Cervical Cancer Screening Program",
        "domain": "Women's Health",
        "role": "Patient Navigator",
        "description": "Comprehensive cervical cancer screening program including outreach, education, screening coordination, and follow-up for abnormal results.",
        "implementation": "Develop outreach strategies, train patient navigators, establish screening protocols, implement tracking systems for follow-up care.",
        "expectedOutcomes": "Increased cervical cancer screening rates by 20-30%, improved follow-up for abnormal results, reduced cervical cancer incidence and mortality.",
        "targetPopulation": "Women aged 21-65, particularly those who are unscreened or underscreened, from underserved communities, or with barriers to care access.",
        "evidenceBase": [
            "Curry SJ, et al. Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;320(7):674-686. DOI: 10.1001/jama.2018.10897",
            "Freeman HP, et al. Patient navigation: a community centered approach to reducing cancer mortality. J Cancer Educ. 2006;21(1 Suppl):S11-14. DOI: 10.1207/s15430154jce2101s_4"
        ],
        "healthEquity": "Address cultural and linguistic barriers to screening, provide education about cervical cancer prevention, and ensure equitable access to screening and follow-up care.",
        "measurement": "Process: Outreach contacts, screening appointments scheduled, navigation services provided. Outcome: Screening rates, follow-up completion, cancer detection rates."
    },

    // PREVENTIVE CARE (3 protocols)
    {
        "title": "Cancer Screening Navigation Program",
        "domain": "Preventive Care",
        "role": "Patient Navigator",
        "description": "Comprehensive cancer screening program including breast, cervical, and colorectal cancer screening with navigation support and follow-up coordination.",
        "implementation": "Train patient navigators, establish screening protocols, develop tracking systems, coordinate with primary care and specialty providers.",
        "expectedOutcomes": "Increased cancer screening rates by 25-40%, improved follow-up for abnormal results, earlier cancer detection, reduced cancer mortality.",
        "targetPopulation": "Adults eligible for cancer screening, particularly those from underserved communities, uninsured or underinsured, or with barriers to care access.",
        "evidenceBase": [
            "Freeman HP, et al. Patient navigation: a community centered approach to reducing cancer mortality. J Cancer Educ. 2006;21(1 Suppl):S11-14. DOI: 10.1207/s15430154jce2101s_4",
            "Carter-Harris L, et al. Patient navigation for lung cancer screening: a systematic review. Chest. 2019;156(5):1012-1021. DOI: 10.1016/j.chest.2019.04.099"
        ],
        "healthEquity": "Address disparities in cancer screening and outcomes, provide culturally appropriate navigation services, and ensure equitable access to screening and follow-up care.",
        "measurement": "Process: Navigation contacts, screening appointments scheduled, follow-up coordination. Outcome: Screening rates, follow-up completion, cancer detection and staging."
    },
    {
        "title": "Immunization Outreach Program",
        "domain": "Preventive Care",
        "role": "Public Health Nurse",
        "description": "Comprehensive immunization program including outreach, education, vaccine administration, and tracking to improve vaccination rates across all age groups.",
        "implementation": "Develop outreach strategies, train public health nurses, establish vaccination clinics, implement immunization information systems.",
        "expectedOutcomes": "Increased vaccination rates by 20-30%, reduced vaccine-preventable disease incidence, improved herd immunity, enhanced public health protection.",
        "targetPopulation": "All age groups with focus on underimmunized populations, including children, adolescents, adults, and older adults in underserved communities.",
        "evidenceBase": [
            "Community Preventive Services Task Force. Increasing appropriate vaccination: community-wide education when used alone. Am J Prev Med. 2015;49(6):S50-S52. DOI: 10.1016/j.amepre.2015.09.007",
            "Jacobson Vann JC, et al. Patient reminder and recall systems to improve immunization rates. Cochrane Database Syst Rev. 2018;1:CD003941. DOI: 10.1002/14651858.CD003941.pub3"
        ],
        "healthEquity": "Address vaccine hesitancy and access barriers, provide culturally appropriate education, and ensure equitable access to vaccines across all communities.",
        "measurement": "Process: Outreach contacts, vaccination appointments, education sessions. Outcome: Vaccination rates, vaccine-preventable disease incidence, community immunity levels."
    },
    {
        "title": "Physical Activity Promotion Program",
        "domain": "Preventive Care",
        "role": "Health Educator",
        "description": "Community-based physical activity promotion program including exercise counseling, group activities, and environmental interventions to increase physical activity levels.",
        "implementation": "Develop community partnerships, train health educators, establish exercise programs, implement environmental modifications, create tracking systems.",
        "expectedOutcomes": "Increased physical activity levels by 20-30%, improved cardiovascular fitness, reduced chronic disease risk factors, enhanced quality of life.",
        "targetPopulation": "Adults with sedentary lifestyles, particularly those with chronic disease risk factors, older adults, and those from underserved communities.",
        "evidenceBase": [
            "Community Preventive Services Task Force. Physical activity: built environment approaches combining transportation system interventions with land use and environmental design. Am J Prev Med. 2016;50(1):129-136. DOI: 10.1016/j.amepre.2015.07.012",
            "Kahn EB, et al. The effectiveness of interventions to increase physical activity. A systematic review. Am J Prev Med. 2002;22(4 Suppl):73-107. DOI: 10.1016/s0749-3797(02)00434-8"
        ],
        "healthEquity": "Address barriers to physical activity in underserved communities, provide culturally appropriate programming, and advocate for safe and accessible exercise environments.",
        "measurement": "Process: Program participation, exercise counseling sessions, environmental modifications. Outcome: Physical activity levels, fitness measures, chronic disease risk factors."
    }
];
