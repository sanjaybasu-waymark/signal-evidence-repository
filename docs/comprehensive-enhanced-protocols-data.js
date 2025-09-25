// Comprehensive Population Health Protocol Database
// Enhanced with practical implementation details and all major domains

const allRecommendations = [
    // DIABETES (3 protocols)
    {
        "title": "Diabetes Self-Management Education and Support (DSMES)",
        "domain": "Diabetes",
        "role": "Certified Diabetes Educator",
        "description": "Structured 8-session diabetes education program delivered over 12 weeks, combining group classes with individual coaching to develop self-management skills for blood glucose monitoring, medication adherence, nutrition planning, and complication prevention.",
        "implementation": "Week 1-2: Conduct comprehensive diabetes assessment using validated tools (DKN-A, PAID-5). Weeks 3-4: Establish 16-hour curriculum delivery schedule (4 group sessions + 4 individual sessions). Week 5: Train educators in motivational interviewing techniques and cultural competency. Weeks 6-8: Implement standardized referral pathway from primary care using EHR alerts for HbA1c >8%. Weeks 9-12: Deploy remote monitoring system for blood glucose data sharing. Ongoing: Monthly booster sessions and quarterly outcome assessments.",
        "expectedOutcomes": "Primary: HbA1c reduction of 0.8% (95% CI: 0.5-1.1%) at 6 months. Secondary: 40% improvement in diabetes knowledge scores (DKN-A), 25% increase in self-efficacy (DSES), 30% reduction in diabetes-related ED visits, 15% improvement in medication adherence (PDC >80%).",
        "targetPopulation": "Adults with type 1 or type 2 diabetes with HbA1c >7.5%, newly diagnosed patients within 6 months, those with diabetes-related hospitalizations in past year, and Medicaid beneficiaries with limited diabetes education exposure.",
        "evidenceBase": [
            "Powers MA, et al. Diabetes self-management education and support in type 2 diabetes: a joint position statement. Diabetes Care. 2015;38(7):1372-1382. https://doi.org/10.2337/dc15-0730",
            "Chrvala CA, et al. Diabetes self-management education for adults with type 2 diabetes mellitus: A systematic review of the effect on glycemic control. Patient Educ Couns. 2016;99(6):926-943. https://doi.org/10.1016/j.pec.2015.11.003",
            "Duncan I, et al. Assessing the value of diabetes education. Diabetes Educ. 2009;35(5):752-760. https://doi.org/10.1177/0145721709343609"
        ],
        "healthEquity": "Implement culturally adapted curricula for Hispanic/Latino (DSME-H) and African American (DSME-AA) populations. Provide bilingual educators and translated materials in Spanish, Arabic, and Somali. Address food insecurity through partnerships with food banks and SNAP enrollment assistance. Offer evening and weekend sessions to accommodate work schedules.",
        "measurement": "Process: Monthly enrollment rates (target: 15 participants/month), session attendance >75%, educator certification maintenance. Outcome: Quarterly HbA1c testing, annual diabetes knowledge assessments, self-efficacy surveys, healthcare utilization tracking via claims data."
    },
    {
        "title": "Continuous Glucose Monitoring Support Program",
        "domain": "Diabetes",
        "role": "Certified Diabetes Educator",
        "description": "Comprehensive 6-week CGM initiation and optimization program including device training, data interpretation workshops, insulin adjustment protocols, and 24/7 technical support for patients using continuous glucose monitoring technology.",
        "implementation": "Week 1: CGM device fitting and initial training (2-hour session). Week 2: Data download and interpretation training using manufacturer software (Dexcom Clarity, FreeStyle LibreView). Week 3: Insulin adjustment protocol training based on time-in-range data. Week 4: Hypoglycemia prevention strategies and alarm management. Week 5: Integration with insulin pumps or smart pens. Week 6: Long-term maintenance and troubleshooting. Establish 24/7 technical support hotline and monthly data review appointments.",
        "expectedOutcomes": "Primary: Time-in-range (70-180 mg/dL) improvement from 45% to 65% at 3 months. Secondary: HbA1c reduction of 0.5% (95% CI: 0.3-0.7%), 50% reduction in severe hypoglycemia episodes, 90% CGM adherence rate (>70% wear time), improved diabetes distress scores (DDS-17).",
        "targetPopulation": "Adults and adolescents (≥14 years) with type 1 diabetes, adults with type 2 diabetes on intensive insulin therapy (≥3 injections/day), patients with hypoglycemia unawareness, and those with frequent glucose excursions despite optimal medical therapy.",
        "evidenceBase": [
            "Beck RW, et al. Effect of continuous glucose monitoring on glycemic control in adults with type 1 diabetes. JAMA. 2017;317(4):371-378. https://doi.org/10.1001/jama.2016.19975",
            "Lind M, et al. Continuous glucose monitoring vs conventional therapy for glycemic control in adults with type 1 diabetes. JAMA. 2017;317(4):379-387. https://doi.org/10.1001/jama.2016.19976",
            "Ruedy KJ, et al. Continuous glucose monitoring in older adults with type 1 diabetes. Diabetes Care. 2017;40(9):1186-1192. https://doi.org/10.2337/dc17-0628"
        ],
        "healthEquity": "Provide device loan programs for uninsured patients. Offer technology training in multiple languages with visual aids for low-literacy populations. Partner with insurance advocates to secure coverage approvals. Establish community-based training sites in federally qualified health centers.",
        "measurement": "Process: CGM initiation rates, training completion, technical support call volume. Outcome: Time-in-range data, HbA1c levels, hypoglycemia frequency, device adherence rates, patient satisfaction scores (CGM-SAT)."
    },
    {
        "title": "Diabetes Prevention Program (DPP)",
        "domain": "Diabetes",
        "role": "Health Educator",
        "description": "Evidence-based 22-session lifestyle intervention delivered over 12 months, targeting 5-7% weight loss through structured nutrition education, progressive physical activity goals, and behavioral modification techniques for adults with prediabetes.",
        "implementation": "Months 1-4: Weekly 1-hour group sessions (16 sessions) covering nutrition basics, portion control, reading food labels, meal planning, and physical activity progression from 150 to 300 minutes/week. Months 5-12: Monthly maintenance sessions (6 sessions) focusing on long-term behavior change, relapse prevention, and peer support. Implement standardized curriculum with lifestyle coaches certified in DPP delivery. Establish referral protocols from primary care using prediabetes ICD-10 codes.",
        "expectedOutcomes": "Primary: 58% reduction in diabetes incidence over 3 years. Secondary: 5-7% weight loss maintained at 12 months, 150+ minutes/week physical activity achievement in 75% of participants, improved dietary quality scores, reduced cardiovascular risk factors.",
        "targetPopulation": "Adults aged 18+ with prediabetes (HbA1c 5.7-6.4%, fasting glucose 100-125 mg/dL, or 2-hour OGTT 140-199 mg/dL), BMI ≥24 (≥22 for Asian Americans), and high risk for diabetes progression based on CDC risk assessment.",
        "evidenceBase": [
            "Diabetes Prevention Program Research Group. Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin. N Engl J Med. 2002;346(6):393-403. https://doi.org/10.1056/NEJMoa012512",
            "Ely EK, et al. A national effort to prevent type 2 diabetes: participant-level evaluation of CDC's National Diabetes Prevention Program. Diabetes Care. 2017;40(10):1331-1341. https://doi.org/10.2337/dc16-2099",
            "Ali MK, et al. Achievement of goals in U.S. diabetes care, 1999-2010. N Engl J Med. 2013;368(17):1613-1624. https://doi.org/10.1056/NEJMsa1213829"
        ],
        "healthEquity": "Adapt curriculum for diverse populations with culturally appropriate food examples and physical activities. Provide childcare during sessions and transportation vouchers. Offer programs in community settings (churches, community centers) and multiple languages. Address food insecurity through partnerships with local food assistance programs.",
        "measurement": "Process: Enrollment rates by demographic groups, session attendance (target >75%), lifestyle coach training completion. Outcome: Weight loss percentage, physical activity minutes/week, dietary quality assessments, diabetes incidence rates, program retention at 12 months."
    },

    // HYPERTENSION (2 protocols)
    {
        "title": "Home Blood Pressure Monitoring Program",
        "domain": "Hypertension",
        "role": "Nurse Care Manager",
        "description": "Structured 12-week home BP monitoring program providing validated automated devices, standardized measurement training, weekly data review, and medication adjustment protocols to improve hypertension control in primary care settings.",
        "implementation": "Week 1: Distribute validated home BP monitors (OMRON 7 Series or equivalent) with proper cuff sizing. Provide 30-minute training on proper technique: 5-minute rest, feet flat, arm supported, 2 readings 1 minute apart. Week 2-4: Daily morning and evening measurements with weekly data submission via patient portal or phone. Weeks 5-8: Bi-weekly nurse review with medication adjustment protocols per JNC-8 guidelines. Weeks 9-12: Monthly monitoring with primary care provider integration. Establish BP targets: <130/80 for most patients, <140/90 for adults ≥65.",
        "expectedOutcomes": "Primary: Systolic BP reduction of 6.8 mmHg (95% CI: 4.2-9.4 mmHg) at 12 weeks. Secondary: 25% increase in BP control rates (<130/80), 30% improvement in medication adherence (PDC >80%), 20% reduction in hypertension-related ED visits.",
        "targetPopulation": "Adults with uncontrolled hypertension (BP >130/80 on 2+ visits), newly diagnosed hypertension, medication adherence concerns, or limited access to frequent clinical visits. Priority for Medicaid beneficiaries with diabetes or cardiovascular disease.",
        "evidenceBase": [
            "Tucker KL, et al. Self-monitoring of blood pressure in hypertension: a systematic review and individual patient data meta-analysis. PLoS Med. 2017;14(9):e1002389. https://doi.org/10.1371/journal.pmed.1002389",
            "Uhlig K, et al. Self-measured blood pressure monitoring in the management of hypertension. Ann Intern Med. 2013;159(3):185-194. https://doi.org/10.7326/0003-4819-159-3-201308060-00008",
            "McManus RJ, et al. Efficacy of self-monitored blood pressure, with or without telemonitoring, for titration of antihypertensive medication. Hypertension. 2010;56(6):1077-1083. https://doi.org/10.1161/HYPERTENSIONAHA.110.154138"
        ],
        "healthEquity": "Provide devices at no cost through equipment lending library. Offer training in Spanish, Arabic, and Somali with culturally appropriate educational materials. Address health literacy barriers with visual aids and simplified instructions. Partner with community health centers for device distribution.",
        "measurement": "Process: Device distribution rates, training completion, data submission frequency (target >80% of scheduled readings). Outcome: BP control rates, medication adherence via pharmacy claims, healthcare utilization, patient satisfaction with home monitoring."
    },
    {
        "title": "Medication Adherence Support Program",
        "domain": "Hypertension",
        "role": "Pharmacy Technician",
        "description": "Comprehensive medication therapy management program including monthly adherence assessments, pill packaging services, medication synchronization, side effect monitoring, and cost assistance for patients with hypertension on multiple medications.",
        "implementation": "Month 1: Comprehensive medication review and adherence assessment using Morisky-8 scale. Implement pill packaging (blister packs or pill organizers) for complex regimens. Month 2: Medication synchronization to align all refill dates. Establish monthly pharmacy consultations for adherence monitoring and side effect assessment. Month 3+: Ongoing support with quarterly medication reviews, insurance prior authorization assistance, and patient assistance program enrollment for cost barriers.",
        "expectedOutcomes": "Primary: Medication adherence improvement from 65% to 85% (PDC >80%). Secondary: 20% improvement in BP control rates, 25% reduction in medication-related adverse events, 15% decrease in antihypertensive medication costs through generic substitution and assistance programs.",
        "targetPopulation": "Adults with hypertension on ≥3 medications, medication adherence <80% based on pharmacy claims, frequent medication changes, or cost-related medication non-adherence. Focus on Medicaid beneficiaries with multiple comorbidities.",
        "evidenceBase": [
            "Conn VS, et al. Medication adherence interventions that target subjects with adherence problems: systematic review and meta-analysis. Res Social Adm Pharm. 2016;12(2):218-246. https://doi.org/10.1016/j.sapharm.2015.06.001",
            "Gwadry-Sridhar FH, et al. Impact of interventions on medication adherence and blood pressure control in patients with essential hypertension. Value Health. 2013;16(5):863-871. https://doi.org/10.1016/j.jval.2013.03.1631",
            "Bramley TJ, et al. Relationship of blood pressure control to adherence with antihypertensive monotherapy in 13 managed care organizations. J Manag Care Pharm. 2006;12(3):239-245. https://doi.org/10.18553/jmcp.2006.12.3.239"
        ],
        "healthEquity": "Provide medication assistance program enrollment for uninsured/underinsured patients. Offer multilingual pharmacy counseling and translated medication labels. Address transportation barriers through mail-order pharmacy services and community pickup locations.",
        "measurement": "Process: Medication reviews completed, pill packaging utilization, pharmacy consultation attendance. Outcome: Medication adherence rates (PDC), BP control achievement, medication-related adverse events, out-of-pocket medication costs."
    },

    // MENTAL HEALTH (4 protocols)
    {
        "title": "Collaborative Care for Depression",
        "domain": "Mental Health",
        "role": "Behavioral Health Care Manager",
        "description": "Integrated primary care-behavioral health model featuring systematic depression screening, care manager-delivered brief interventions, psychiatric consultation, and measurement-based care using standardized tools over 12-month treatment episodes.",
        "implementation": "Week 1-2: Implement universal PHQ-9 screening in primary care with EHR integration and automated scoring. Week 3-4: Train care managers in behavioral activation, problem-solving therapy, and motivational interviewing. Establish weekly psychiatric consultation (30 minutes/week) for medication recommendations. Week 5-8: Deploy measurement-based care with bi-weekly PHQ-9 assessments and treatment adjustments. Week 9-12: Implement relapse prevention protocols and care transition planning. Maintain 1:200 care manager-to-patient ratio.",
        "expectedOutcomes": "Primary: 50% reduction in PHQ-9 scores at 6 months (from 15.2 to 7.6 average). Secondary: 65% response rate (≥50% PHQ-9 reduction), 45% remission rate (PHQ-9 <5), 25% reduction in healthcare costs, improved functional status (SF-12).",
        "targetPopulation": "Adults with major depression (PHQ-9 ≥10), persistent depressive symptoms despite treatment, depression with medical comorbidities, and Medicaid beneficiaries with limited access to specialty mental health services.",
        "evidenceBase": [
            "Unützer J, et al. Collaborative care management of late-life depression in the primary care setting. JAMA. 2002;288(22):2836-2845. https://doi.org/10.1001/jama.288.22.2836",
            "Archer J, et al. Collaborative care for depression and anxiety problems. Cochrane Database Syst Rev. 2012;10:CD006525. https://doi.org/10.1002/14651858.CD006525.pub2",
            "Katon WJ, et al. Cost-effectiveness of improving primary care treatment of late-life depression. Arch Gen Psychiatry. 2005;62(12):1313-1320. https://doi.org/10.1001/archpsyc.62.12.1313"
        ],
        "healthEquity": "Provide culturally adapted interventions for Hispanic/Latino and African American populations. Train care managers in trauma-informed care and cultural humility. Offer services in community health centers and via telehealth to address geographic barriers.",
        "measurement": "Process: Screening completion rates, care manager contact frequency, psychiatric consultation utilization. Outcome: PHQ-9 score changes, functional status improvements, treatment engagement duration, healthcare utilization patterns."
    },
    {
        "title": "Anxiety Disorders Treatment Program",
        "domain": "Mental Health",
        "role": "Behavioral Health Care Manager",
        "description": "Evidence-based anxiety treatment program utilizing cognitive-behavioral therapy techniques, relaxation training, exposure therapy protocols, and care coordination delivered in 8-12 session format with booster sessions.",
        "implementation": "Sessions 1-2: Comprehensive anxiety assessment using GAD-7, PDSS, and functional impairment measures. Sessions 3-4: Psychoeducation about anxiety and introduction to cognitive restructuring techniques. Sessions 5-6: Progressive muscle relaxation and breathing exercises training. Sessions 7-8: Graded exposure therapy planning and implementation. Sessions 9-12: Relapse prevention and coping skills consolidation. Provide between-session practice assignments and anxiety monitoring logs.",
        "expectedOutcomes": "Primary: 45% reduction in GAD-7 scores at 12 weeks (from 12.4 to 6.8 average). Secondary: 60% response rate (≥50% symptom reduction), improved work/social functioning (WHODAS-12), 30% reduction in anxiety-related healthcare utilization.",
        "targetPopulation": "Adults with generalized anxiety disorder, panic disorder, social anxiety disorder, or specific phobias with GAD-7 ≥8, functional impairment, or inadequate response to medication alone.",
        "evidenceBase": [
            "Craske MG, et al. Anxiety disorders. Nat Rev Dis Primers. 2017;3:17024. https://doi.org/10.1038/nrdp.2017.24",
            "Cuijpers P, et al. Psychological treatment of generalized anxiety disorder: a meta-analysis. Clin Psychol Rev. 2014;34(2):130-140. https://doi.org/10.1016/j.cpr.2014.01.002",
            "Bandelow B, et al. Efficacy of treatments for anxiety disorders: a meta-analysis. Int Clin Psychopharmacol. 2007;22(2):93-102. https://doi.org/10.1097/YIC.0b013e3280117b1a"
        ],
        "healthEquity": "Adapt exposure exercises for cultural contexts and provide anxiety education materials in multiple languages. Address stigma through community education and peer support groups. Offer flexible scheduling including evening and weekend appointments.",
        "measurement": "Process: Treatment engagement rates, session attendance, homework completion. Outcome: GAD-7 score changes, functional status measures, quality of life assessments, treatment satisfaction scores."
    },
    {
        "title": "Trauma-Informed Care Implementation",
        "domain": "Mental Health",
        "role": "Social Worker",
        "description": "Organization-wide trauma-informed care transformation involving staff training, policy revision, environmental modifications, and service delivery changes based on SAMHSA's 6 key principles over 18-month implementation period.",
        "implementation": "Months 1-3: Organizational assessment using TIC Organizational Assessment tool. Staff training on trauma prevalence, impact, and recovery principles (8-hour initial training + 4-hour annual refreshers). Months 4-6: Policy review and revision to eliminate re-traumatizing practices. Environmental modifications for safety and comfort. Months 7-12: Service delivery modifications including universal trauma screening (PC-PTSD-5), trauma-specific interventions, and secondary trauma prevention for staff. Months 13-18: Sustainability planning and continuous quality improvement.",
        "expectedOutcomes": "Primary: 40% reduction in re-traumatization incidents, 25% improvement in patient satisfaction scores (CAHPS). Secondary: 20% decrease in staff turnover, improved treatment engagement rates, reduced use of restraints/seclusion by 60%.",
        "targetPopulation": "All patients served by the organization, with particular focus on those with trauma history, substance use disorders, mental health conditions, involvement in child welfare or justice systems, and survivors of domestic violence.",
        "evidenceBase": [
            "Substance Abuse and Mental Health Services Administration. Trauma-Informed Care in Behavioral Health Services. Treatment Improvement Protocol (TIP) Series 57. HHS Publication No. (SMA) 13-4801. Rockville, MD: SAMHSA; 2014.",
            "Megan Gerber, et al. Trauma-informed healthcare approaches: a systematic review of the literature. Patient Educ Couns. 2019;102(7):1363-1372. https://doi.org/10.1016/j.pec.2019.02.016",
            "Raja S, et al. Trauma informed care in medicine: current knowledge and future research directions. Fam Community Health. 2015;38(3):216-226. https://doi.org/10.1097/FCH.0000000000000071"
        ],
        "healthEquity": "Address historical trauma and systemic oppression through culturally responsive practices. Engage community leaders and trauma survivors in implementation planning. Provide trauma-informed care training specific to racial, ethnic, and LGBTQ+ populations.",
        "measurement": "Process: Staff training completion rates, policy revisions implemented, environmental modifications completed. Outcome: Patient satisfaction scores, treatment retention rates, staff well-being measures (Professional Quality of Life Scale), incident reports."
    },
    {
        "title": "Integrated Behavioral Health Program",
        "domain": "Mental Health",
        "role": "Behavioral Health Care Manager",
        "description": "Co-located behavioral health services within primary care featuring same-day consultations, warm handoffs, shared care planning, and brief intervention models delivered by embedded behavioral health clinicians.",
        "implementation": "Phase 1 (Months 1-2): Establish co-location agreements and physical space modifications. Train primary care staff in behavioral health screening (PHQ-9, GAD-7, AUDIT-C). Phase 2 (Months 3-4): Implement warm handoff protocols with same-day availability for 80% of referrals. Develop shared care plans in EHR. Phase 3 (Months 5-6): Deploy brief intervention models (15-30 minute sessions) and establish psychiatric consultation pathways. Maintain 1:3 behavioral health to primary care provider ratio.",
        "expectedOutcomes": "Primary: 75% of patients receive behavioral health services within 48 hours of referral. Secondary: 40% improvement in depression/anxiety screening rates, 50% increase in treatment engagement, 25% reduction in specialty mental health wait times.",
        "targetPopulation": "Primary care patients with mild-to-moderate mental health concerns, substance use issues, chronic disease with behavioral components, and those who would not otherwise access specialty behavioral health services.",
        "evidenceBase": [
            "Peek CJ, et al. The Five Levels of Primary Care-Behavioral Health Integration. SAMHSA-HRSA Center for Integrated Health Solutions. 2013.",
            "Butler M, et al. Integration of mental health/substance abuse and primary care. Evidence Report/Technology Assessment No. 173. AHRQ Publication No. 09-E003. Rockville, MD: Agency for Healthcare Research and Quality; 2008.",
            "Archer J, et al. Collaborative care for depression and anxiety problems. Cochrane Database Syst Rev. 2012;10:CD006525. https://doi.org/10.1002/14651858.CD006525.pub2"
        ],
        "healthEquity": "Reduce stigma barriers by providing behavioral health services in familiar primary care settings. Ensure cultural and linguistic competency of behavioral health staff. Address social determinants affecting mental health through integrated service delivery.",
        "measurement": "Process: Warm handoff completion rates, same-day access availability, shared care plan development. Outcome: Treatment engagement rates, symptom improvement scores, patient satisfaction with integrated services."
    },

    // PEDIATRIC & ADOLESCENT HEALTH (4 protocols)
    {
        "title": "School-Based Health Center Program",
        "domain": "Pediatric & Adolescent Health",
        "role": "Public Health Nurse",
        "description": "Comprehensive school-based health services including preventive care, chronic disease management, mental health screening, reproductive health education, and care coordination delivered on-site during school hours.",
        "implementation": "Phase 1: Establish partnerships with school districts and obtain necessary approvals. Set up clinical space meeting state health department requirements. Phase 2: Hire and train school-based health staff (nurse practitioner, social worker, health educator). Implement EHR system with primary care integration. Phase 3: Launch services with parental consent processes, health screenings, and referral protocols. Provide services 4-5 days/week during school hours with summer programming.",
        "expectedOutcomes": "Primary: 85% of enrolled students receive annual preventive care visits. Secondary: 40% increase in immunization rates, 30% improvement in chronic disease control (asthma, diabetes), 25% reduction in school absences due to health issues.",
        "targetPopulation": "Students in high-need schools with limited healthcare access, particularly those from low-income families, uninsured/underinsured students, and those with chronic health conditions requiring ongoing management.",
        "evidenceBase": [
            "Bains RM, et al. Clinical and economic outcomes of school-based health centers: a systematic review. Health Aff (Millwood). 2016;35(12):2230-2237. https://doi.org/10.1377/hlthaff.2016.0608",
            "Guo JJ, et al. School-based health centers: cost-benefit analysis and impact on health care disparities. Am J Public Health. 2010;100(9):1617-1623. https://doi.org/10.2105/AJPH.2009.185181",
            "Walker SC, et al. Impact of school-based health center use on academic outcomes. J Adolesc Health. 2010;46(3):251-257. https://doi.org/10.1016/j.jadohealth.2009.07.002"
        ],
        "healthEquity": "Prioritize schools in underserved communities with high percentages of students eligible for free/reduced lunch. Provide culturally competent care and multilingual services. Address social determinants through connections to community resources.",
        "measurement": "Process: Student enrollment rates, service utilization, preventive care completion. Outcome: Immunization rates, chronic disease control measures, school attendance rates, academic performance indicators."
    },
    {
        "title": "Childhood Obesity Prevention Program",
        "domain": "Pediatric & Adolescent Health",
        "role": "Health Educator",
        "description": "Multi-component obesity prevention program targeting children ages 6-12 through school-based nutrition education, family engagement, physical activity promotion, and policy/environmental changes over 2-year implementation period.",
        "implementation": "Year 1: Implement evidence-based nutrition curriculum (10 lessons/semester) in participating schools. Train teachers and food service staff. Establish family engagement activities (monthly workshops, take-home materials). Year 2: Add physical activity components (daily 30-minute structured activity), policy changes (healthy food standards), and environmental modifications (playground improvements, walking paths). Coordinate with school wellness committees and community partners.",
        "expectedOutcomes": "Primary: Stabilization of BMI percentiles in 60% of participants over 2 years. Secondary: Improved dietary quality scores, increased physical activity levels (60+ minutes/day), enhanced nutrition knowledge, reduced screen time.",
        "targetPopulation": "Children ages 6-12 in schools with high rates of childhood obesity, particularly those from low-income families, racial/ethnic minority populations, and communities with limited access to healthy foods and safe physical activity spaces.",
        "evidenceBase": [
            "Waters E, et al. Interventions for preventing obesity in children. Cochrane Database Syst Rev. 2011;12:CD001871. https://doi.org/10.1002/14651858.CD001871.pub3",
            "Wang Y, et al. What childhood obesity prevention programmes work? A systematic review and meta-analysis. Obes Rev. 2015;16(7):547-565. https://doi.org/10.1111/obr.12277",
            "Bleich SN, et al. Interventions to prevent global childhood overweight and obesity: a systematic review. Lancet Diabetes Endocrinol. 2018;6(4):332-346. https://doi.org/10.1016/S2213-8587(17)30358-3"
        ],
        "healthEquity": "Address food insecurity through school meal program enhancements and family food assistance. Provide culturally appropriate nutrition education reflecting diverse food traditions. Ensure safe physical activity opportunities in underresourced communities.",
        "measurement": "Process: Curriculum implementation fidelity, family engagement participation, policy adoption rates. Outcome: BMI percentile changes, dietary quality assessments, physical activity levels, nutrition knowledge scores."
    },
    {
        "title": "Adolescent Mental Health Screening and Support",
        "domain": "Pediatric & Adolescent Health",
        "role": "Social Worker",
        "description": "Comprehensive adolescent mental health program featuring universal screening, brief interventions, family engagement, school-based counseling, and care coordination for teens ages 12-18 with mental health concerns.",
        "implementation": "Phase 1: Implement universal mental health screening using PHQ-A and GAD-7 in primary care and school settings. Train staff in adolescent-specific screening and intervention techniques. Phase 2: Establish brief intervention protocols (3-5 sessions) for mild-moderate symptoms. Develop family engagement strategies and peer support groups. Phase 3: Create care coordination pathways to specialty mental health services and crisis intervention protocols. Provide services in schools, community centers, and telehealth platforms.",
        "expectedOutcomes": "Primary: 80% of adolescents receive annual mental health screening. Secondary: 50% improvement in depression/anxiety symptom scores, increased help-seeking behavior, reduced mental health-related school absences, improved family functioning.",
        "targetPopulation": "Adolescents ages 12-18, particularly those in high-stress environments, with academic difficulties, substance use concerns, trauma exposure, or family mental health history. Priority for LGBTQ+ youth and those in foster care.",
        "evidenceBase": [
            "Richardson LP, et al. Evaluation of the Patient Health Questionnaire-9 Item for detecting major depression among adolescents. Pediatrics. 2010;126(6):1117-1123. https://doi.org/10.1542/peds.2010-0852",
            "Asarnow JR, et al. Effectiveness of a quality improvement intervention for adolescent depression in primary care clinics. JAMA. 2005;293(3):311-319. https://doi.org/10.1001/jama.293.3.311",
            "Lewandowski RE, et al. Evidence-based assessment of adolescent mental health problems. J Clin Child Adolesc Psychol. 2013;42(6):847-858. https://doi.org/10.1080/15374416.2013.764825"
        ],
        "healthEquity": "Provide culturally responsive mental health services and address stigma in diverse communities. Ensure LGBTQ+-affirming care and trauma-informed approaches. Offer services in multiple languages and community-based settings.",
        "measurement": "Process: Screening completion rates, intervention engagement, family participation. Outcome: Mental health symptom scores, school performance indicators, help-seeking behavior, crisis intervention utilization."
    },
    {
        "title": "Early Childhood Development Support",
        "domain": "Pediatric & Adolescent Health",
        "role": "Community Health Worker",
        "description": "Home-based early childhood development program for children ages 0-5 featuring developmental screening, parent education, school readiness activities, and connection to community resources delivered through weekly home visits.",
        "implementation": "Months 1-2: Recruit and train community health workers in child development, family engagement, and resource navigation. Establish partnerships with pediatric providers and early childhood programs. Months 3-6: Begin weekly 60-minute home visits using evidence-based curricula (Parents as Teachers, Healthy Families). Conduct developmental screenings using ASQ-3 and ASQ:SE-2. Months 7-12: Provide school readiness activities, connect families to community resources (WIC, childcare, preschool), and coordinate with healthcare providers.",
        "expectedOutcomes": "Primary: 90% of children meet developmental milestones at age-appropriate levels. Secondary: Improved school readiness scores, increased immunization rates, enhanced parent-child interactions, reduced child maltreatment risk.",
        "targetPopulation": "Families with children ages 0-5 in high-risk communities, particularly first-time parents, families with low income, limited education, social isolation, or history of trauma/substance use.",
        "evidenceBase": [
            "Avellar SA, et al. Home Visiting Evidence of Effectiveness Review: Executive Summary. Office of Planning, Research and Evaluation, Administration for Children and Families, U.S. Department of Health and Human Services. Washington, DC. 2016.",
            "Peacock S, et al. Effectiveness of home visiting programs on child outcomes: a systematic review. BMC Public Health. 2013;13:17. https://doi.org/10.1186/1471-2458-13-17",
            "Howard KS, et al. The impact of parental trauma on child outcomes: a systematic review. J Fam Violence. 2013;28(2):191-208. https://doi.org/10.1007/s10896-012-9478-4"
        ],
        "healthEquity": "Prioritize families facing multiple risk factors and systemic barriers. Provide services in families' preferred languages and respect cultural child-rearing practices. Address social determinants through comprehensive resource connections.",
        "measurement": "Process: Home visit completion rates, developmental screening frequency, resource connections made. Outcome: Developmental milestone achievement, school readiness assessments, immunization status, family functioning measures."
    },

    // GERIATRIC & AGING SERVICES (4 protocols)
    {
        "title": "Aging in Place Support Program",
        "domain": "Geriatric & Aging Services",
        "role": "Case Manager",
        "description": "Comprehensive aging in place program providing home safety assessments, care coordination, assistive technology, caregiver support, and community resource connections to help older adults remain safely in their homes.",
        "implementation": "Phase 1: Conduct comprehensive home safety assessment using standardized tools (SAFER-HOME). Assess functional status (ADLs, IADLs), cognitive function (MMSE), and fall risk. Phase 2: Develop individualized care plans addressing identified needs. Coordinate home modifications, assistive devices, and in-home services. Phase 3: Provide ongoing case management with monthly check-ins, quarterly reassessments, and 24/7 emergency response system. Connect to community resources (meal delivery, transportation, social activities).",
        "expectedOutcomes": "Primary: 85% of participants remain in their homes at 12 months. Secondary: 40% reduction in falls, 30% decrease in emergency department visits, improved quality of life scores, enhanced caregiver satisfaction.",
        "targetPopulation": "Adults ages 65+ with functional limitations, chronic conditions, social isolation, or at risk for nursing home placement. Priority for those with limited family support, low income, or recent hospital discharge.",
        "evidenceBase": [
            "Stuck AE, et al. Comprehensive geriatric assessment: a meta-analysis of controlled trials. Lancet. 1993;342(8878):1032-1036. https://doi.org/10.1016/0140-6736(93)92884-V",
            "Beswick AD, et al. Complex interventions to improve physical function and maintain independent living in elderly people: a systematic review and meta-analysis. Lancet. 2008;371(9614):725-735. https://doi.org/10.1016/S0140-6736(08)60342-6",
            "Gitlin LN, et al. A randomized trial of a multicomponent home intervention to reduce functional difficulties in older adults. J Am Geriatr Soc. 2006;54(5):809-816. https://doi.org/10.1111/j.1532-5415.2006.00703.x"
        ],
        "healthEquity": "Address language barriers and cultural preferences for aging. Provide services regardless of immigration status. Connect to culturally appropriate community resources and address social determinants affecting aging.",
        "measurement": "Process: Assessment completion rates, care plan implementation, service coordination frequency. Outcome: Housing stability, functional status changes, healthcare utilization, quality of life measures."
    },
    {
        "title": "Fall Prevention Program",
        "domain": "Geriatric & Aging Services",
        "role": "Physical Therapist",
        "description": "Evidence-based fall prevention program combining strength and balance training, medication review, home safety modifications, and vision/hearing assessments delivered over 12-week period with ongoing maintenance.",
        "implementation": "Weeks 1-2: Comprehensive fall risk assessment using CDC STEADI toolkit. Conduct Timed Up and Go test, 30-second chair stand, and 4-stage balance test. Weeks 3-6: Implement Otago Exercise Program (strength and balance exercises 3x/week). Conduct medication review with pharmacist. Weeks 7-10: Home safety assessment and modifications (grab bars, lighting, clutter removal). Vision and hearing screenings. Weeks 11-12: Develop maintenance exercise plan and ongoing monitoring schedule.",
        "expectedOutcomes": "Primary: 35% reduction in fall rates at 12 months. Secondary: Improved balance scores (Berg Balance Scale), increased strength measures, enhanced confidence in balance (ABC Scale), reduced fear of falling.",
        "targetPopulation": "Adults ages 65+ with history of falls, fear of falling, balance problems, multiple medications, or environmental hazards. Priority for those with osteoporosis, vision impairment, or cognitive decline.",
        "evidenceBase": [
            "Gillespie LD, et al. Interventions for preventing falls in older people living in the community. Cochrane Database Syst Rev. 2012;9:CD007146. https://doi.org/10.1002/14651858.CD007146.pub3",
            "Sherrington C, et al. Exercise to prevent falls in older adults: an updated meta-analysis and best practice recommendations. N S W Public Health Bull. 2011;22(3-4):78-83. https://doi.org/10.1071/NB10056",
            "Campbell AJ, et al. Randomised controlled trial of a general practice programme of home based exercise to prevent falls in elderly women. BMJ. 1997;315(7115):1065-1069. https://doi.org/10.1136/bmj.315.7115.1065"
        ],
        "healthEquity": "Provide services in multiple languages and culturally appropriate settings. Address cost barriers through insurance coverage advocacy and equipment lending programs. Ensure accessibility for individuals with disabilities.",
        "measurement": "Process: Risk assessment completion, exercise program adherence, home modification implementation. Outcome: Fall rates, balance and strength measures, functional status, emergency department visits for falls."
    },
    {
        "title": "Medication Management for Older Adults",
        "domain": "Geriatric & Aging Services",
        "role": "Pharmacy Technician",
        "description": "Comprehensive medication management program addressing polypharmacy, drug interactions, adherence challenges, and cost issues through systematic medication reviews, deprescribing protocols, and adherence support systems.",
        "implementation": "Month 1: Comprehensive medication review using Beers Criteria and STOPP/START criteria. Assess for drug-drug interactions, inappropriate medications, and adherence barriers. Month 2: Implement deprescribing protocols in collaboration with prescribers. Provide medication synchronization and packaging services. Month 3+: Ongoing monitoring with quarterly medication reviews, adherence assessments, and cost optimization strategies. Establish communication protocols with all prescribers.",
        "expectedOutcomes": "Primary: 25% reduction in potentially inappropriate medications. Secondary: Improved medication adherence (PDC >80%), 30% reduction in adverse drug events, decreased medication costs, enhanced quality of life.",
        "targetPopulation": "Adults ages 65+ on ≥5 medications, those with medication adherence challenges, cognitive impairment, multiple prescribers, or medication-related adverse events.",
        "evidenceBase": [
            "American Geriatrics Society 2019 Updated AGS Beers Criteria for potentially inappropriate medication use in older adults. J Am Geriatr Soc. 2019;67(4):674-694. https://doi.org/10.1111/jgs.15767",
            "Gallagher P, et al. STOPP (Screening Tool of Older Person's Prescriptions) and START (Screening Tool to Alert doctors to Right Treatment). Int J Clin Pharmacol Ther. 2008;46(2):72-83. https://doi.org/10.5414/cpp46072",
            "Reeve E, et al. Review of deprescribing processes and development of an evidence-based, patient-centred deprescribing process. Br J Clin Pharmacol. 2014;78(4):738-747. https://doi.org/10.1111/bcp.12386"
        ],
        "healthEquity": "Address cost barriers through patient assistance programs and generic substitutions. Provide medication education in multiple languages and formats appropriate for health literacy levels. Consider cultural beliefs about medications.",
        "measurement": "Process: Medication reviews completed, deprescribing interventions, adherence support services. Outcome: Number of medications, potentially inappropriate medication use, adherence rates, adverse drug events."
    },
    {
        "title": "Caregiver Support Program",
        "domain": "Geriatric & Aging Services",
        "role": "Social Worker",
        "description": "Comprehensive caregiver support program providing education, respite care, support groups, care coordination, and resource connections for family caregivers of older adults with chronic conditions or disabilities.",
        "implementation": "Phase 1: Caregiver assessment using Caregiver Strain Index and Zarit Burden Interview. Provide caregiver education on disease management, safety, and self-care. Phase 2: Establish respite care services (in-home, adult day programs) and support groups (monthly meetings, online forums). Phase 3: Ongoing care coordination, resource connections, and crisis intervention. Provide 24/7 helpline and emergency respite services.",
        "expectedOutcomes": "Primary: 30% reduction in caregiver burden scores. Secondary: Improved caregiver quality of life, reduced depression/anxiety symptoms, delayed nursing home placement for care recipients, enhanced caregiver knowledge and skills.",
        "targetPopulation": "Family caregivers of older adults with dementia, chronic illnesses, or functional disabilities, particularly those experiencing high stress, social isolation, or health problems related to caregiving.",
        "evidenceBase": [
            "Pinquart M, et al. Effectiveness of interventions for caregivers of people with dementia: meta-analysis. Br J Psychiatry. 2006;189:12-17. https://doi.org/10.1192/bjp.189.1.12",
            "Sörensen S, et al. How effective are interventions with caregivers? An updated meta-analysis. Gerontologist. 2002;42(3):356-372. https://doi.org/10.1093/geront/42.3.356",
            "Gitlin LN, et al. A randomized trial of a multicomponent home intervention to reduce functional difficulties in older adults. J Am Geriatr Soc. 2006;54(5):809-816. https://doi.org/10.1111/j.1532-5415.2006.00703.x"
        ],
        "healthEquity": "Provide culturally appropriate caregiver education and support. Address language barriers and varying cultural expectations of family caregiving. Connect to community-specific resources and support networks.",
        "measurement": "Process: Caregiver enrollment, education session attendance, respite service utilization. Outcome: Caregiver burden scores, quality of life measures, care recipient outcomes, nursing home placement rates."
    },

    // INFECTIOUS DISEASE MANAGEMENT (3 protocols)
    {
        "title": "HIV Care Coordination Program",
        "domain": "Infectious Disease Management",
        "role": "Case Manager",
        "description": "Comprehensive HIV care coordination program providing linkage to care, adherence support, viral load monitoring, and wraparound services to achieve viral suppression and improve health outcomes for people living with HIV.",
        "implementation": "Phase 1: Rapid linkage to HIV care within 30 days of diagnosis. Comprehensive needs assessment including housing, mental health, substance use, and social support. Phase 2: Implement adherence support interventions (pill packaging, reminder systems, peer support). Coordinate with HIV specialists and primary care providers. Phase 3: Ongoing case management with monthly contacts, quarterly viral load monitoring, and annual comprehensive assessments. Provide crisis intervention and emergency assistance.",
        "expectedOutcomes": "Primary: 90% viral suppression (undetectable viral load) at 12 months. Secondary: 95% retention in care, improved CD4 counts, reduced HIV transmission risk, enhanced quality of life.",
        "targetPopulation": "People living with HIV, particularly newly diagnosed individuals, those with detectable viral loads, unstable housing, substance use disorders, or mental health conditions affecting care engagement.",
        "evidenceBase": [
            "Gardner EM, et al. The spectrum of engagement in HIV care and its relevance to test-and-treat strategies for prevention of HIV infection. Clin Infect Dis. 2011;52(6):793-800. https://doi.org/10.1093/cid/ciq243",
            "Mugavero MJ, et al. Measuring retention in HIV care: the elusive gold standard. J Acquir Immune Defic Syndr. 2012;61(5):574-580. https://doi.org/10.1097/QAI.0b013e318273762f",
            "Thompson MA, et al. Antiretroviral treatment of adult HIV infection: 2012 recommendations of the International Antiviral Society-USA panel. JAMA. 2012;308(4):387-402. https://doi.org/10.1001/jama.2012.7961"
        ],
        "healthEquity": "Address stigma and discrimination barriers to HIV care. Provide culturally competent services for LGBTQ+ individuals and communities of color. Ensure confidentiality and trauma-informed care approaches.",
        "measurement": "Process: Linkage to care rates, case management contacts, adherence support interventions. Outcome: Viral suppression rates, CD4 counts, retention in care, quality of life measures."
    },
    {
        "title": "Hepatitis C Treatment Navigation",
        "domain": "Infectious Disease Management",
        "role": "Patient Navigator",
        "description": "Comprehensive hepatitis C treatment navigation program providing screening, linkage to care, treatment support, and cure monitoring using direct-acting antiviral therapies with wraparound services for high-risk populations.",
        "implementation": "Phase 1: Implement universal hepatitis C screening in high-risk settings (substance use treatment, correctional facilities, homeless services). Provide point-of-care testing and same-day results. Phase 2: Rapid linkage to treatment within 30 days of positive test. Navigate insurance authorization and patient assistance programs. Phase 3: Treatment support including adherence monitoring, side effect management, and completion tracking. Post-treatment monitoring for sustained virologic response (SVR).",
        "expectedOutcomes": "Primary: 95% sustained virologic response (cure) at 12 weeks post-treatment. Secondary: 80% treatment completion rates, reduced liver disease progression, decreased transmission risk.",
        "targetPopulation": "Adults with hepatitis C infection, particularly those with substance use disorders, history of injection drug use, incarceration history, or limited healthcare access.",
        "evidenceBase": [
            "AASLD-IDSA HCV Guidance Panel. Hepatitis C guidance 2018 update: AASLD-IDSA recommendations for testing, managing, and treating hepatitis C virus infection. Clin Infect Dis. 2018;67(10):1477-1492. https://doi.org/10.1093/cid/ciy585",
            "Falade-Nwulia O, et al. Oral direct-acting agent therapy for hepatitis C virus infection: a systematic review. Ann Intern Med. 2017;166(9):637-648. https://doi.org/10.7326/M16-2575",
            "Norton BL, et al. Community-based HCV screening: knowledge and attitudes in a high risk urban population. BMC Infect Dis. 2014;14:74. https://doi.org/10.1186/1471-2334-14-74"
        ],
        "healthEquity": "Provide services in community-based settings accessible to high-risk populations. Address stigma and discrimination barriers. Ensure treatment access regardless of insurance status or substance use.",
        "measurement": "Process: Screening rates, linkage to care, treatment initiation. Outcome: Treatment completion rates, sustained virologic response, reinfection rates."
    },
    {
        "title": "Tuberculosis Case Management",
        "domain": "Infectious Disease Management",
        "role": "Public Health Nurse",
        "description": "Comprehensive tuberculosis case management program providing directly observed therapy (DOT), contact investigation, adherence support, and infection control measures to ensure treatment completion and prevent transmission.",
        "implementation": "Phase 1: Rapid case investigation within 24 hours of notification. Initiate directly observed therapy and contact investigation. Assess for drug resistance and HIV co-infection. Phase 2: Daily DOT for intensive phase (2 months), then 3x/week for continuation phase (4 months). Monthly clinical monitoring and sputum cultures. Phase 3: Contact investigation and testing of close contacts. Provide infection control education and isolation guidance. Post-treatment monitoring for cure.",
        "expectedOutcomes": "Primary: 95% treatment completion rate. Secondary: Negative sputum cultures at 2 months, prevention of drug resistance, identification and treatment of latent TB in contacts.",
        "targetPopulation": "Individuals with active tuberculosis disease, particularly those with drug-resistant TB, HIV co-infection, homelessness, substance use disorders, or other factors affecting treatment adherence.",
        "evidenceBase": [
            "World Health Organization. Guidelines for treatment of drug-susceptible tuberculosis and patient care. Geneva: World Health Organization; 2017.",
            "Volmink J, et al. Directly observed therapy and treatment adherence. Lancet. 2000;355(9212):1345-1350. https://doi.org/10.1016/S0140-6736(00)02125-5",
            "Centers for Disease Control and Prevention. Treatment of tuberculosis. MMWR Recomm Rep. 2003;52(RR-11):1-77."
        ],
        "healthEquity": "Provide culturally competent care and address language barriers. Ensure treatment access for undocumented immigrants and homeless individuals. Address social determinants affecting treatment completion.",
        "measurement": "Process: DOT completion rates, contact investigation timeliness, adherence monitoring. Outcome: Treatment completion rates, sputum conversion, contact testing and treatment rates."
    },

    // EMERGENCY & CRISIS RESPONSE (3 protocols)
    {
        "title": "Mobile Crisis Response Team",
        "domain": "Emergency & Crisis Response",
        "role": "Social Worker",
        "description": "24/7 mobile crisis response team providing immediate mental health crisis intervention, de-escalation, safety planning, and linkage to ongoing services for individuals experiencing psychiatric emergencies in community settings.",
        "implementation": "Phase 1: Establish 24/7 crisis hotline with trained crisis counselors. Deploy mobile teams (clinician + peer specialist) with 30-minute response time goal. Coordinate with law enforcement and emergency medical services. Phase 2: Implement standardized crisis assessment protocols and safety planning tools. Provide on-scene de-escalation and stabilization services. Phase 3: Develop warm handoff protocols to ongoing mental health services. Provide follow-up contact within 24-48 hours post-crisis.",
        "expectedOutcomes": "Primary: 80% of crisis calls resolved without hospitalization or arrest. Secondary: Reduced emergency department utilization for mental health crises, improved linkage to ongoing services, enhanced community safety.",
        "targetPopulation": "Individuals experiencing mental health crises, particularly those with serious mental illness, substance use disorders, trauma history, or frequent emergency service utilization.",
        "evidenceBase": [
            "Scott RL. Evaluation of a mobile crisis program: effectiveness, efficiency, and consumer satisfaction. Psychiatr Serv. 2000;51(9):1153-1156. https://doi.org/10.1176/appi.ps.51.9.1153",
            "Guo S, et al. The effectiveness of mobile crisis teams: a systematic review. Psychiatr Serv. 2001;52(8):1045-1052. https://doi.org/10.1176/appi.ps.52.8.1045",
            "Zealberg JJ, et al. A mobile crisis program: collaboration between emergency psychiatric services and police. Hosp Community Psychiatry. 1992;43(6):612-615. https://doi.org/10.1176/ps.43.6.612"
        ],
        "healthEquity": "Provide culturally responsive crisis intervention and address language barriers. Train staff in trauma-informed and culturally competent crisis response. Ensure services are accessible to all community members regardless of insurance status.",
        "measurement": "Process: Response times, crisis call volume, team deployment frequency. Outcome: Hospitalization rates, arrest rates, service linkage rates, consumer satisfaction."
    },
    {
        "title": "Emergency Preparedness for Vulnerable Populations",
        "domain": "Emergency & Crisis Response",
        "role": "Community Health Worker",
        "description": "Comprehensive emergency preparedness program for vulnerable populations including disaster planning, emergency supply distribution, evacuation assistance, and post-disaster recovery support tailored to high-risk individuals and families.",
        "implementation": "Phase 1: Identify and register vulnerable individuals (disabilities, chronic conditions, limited mobility, social isolation). Develop individualized emergency plans and communication systems. Phase 2: Pre-position emergency supplies and establish evacuation protocols. Train community health workers in disaster response and recovery. Phase 3: Activate response protocols during emergencies. Provide immediate assistance, wellness checks, and resource coordination. Post-disaster: Conduct damage assessments and coordinate recovery services.",
        "expectedOutcomes": "Primary: 95% of registered vulnerable individuals have emergency plans and supplies. Secondary: Reduced emergency-related morbidity and mortality, faster recovery times, improved community resilience.",
        "targetPopulation": "Individuals with disabilities, chronic medical conditions, limited mobility, social isolation, language barriers, or other factors that increase vulnerability during emergencies and disasters.",
        "evidenceBase": [
            "Fernandez LS, et al. Frail elderly as disaster victims: emergency management strategies. Prehosp Disaster Med. 2002;17(2):67-74. https://doi.org/10.1017/s1049023x00000200",
            "Aldrich N, et al. Disasters and the elderly. Emerg Med Clin North Am. 2007;25(1):49-67. https://doi.org/10.1016/j.emc.2006.12.005",
            "Kailes JI, et al. The importance of including the whole community in emergency preparedness, response, recovery, and mitigation. J Emerg Manag. 2012;10(4):311-322. https://doi.org/10.5055/jem.2012.0109"
        ],
        "healthEquity": "Prioritize historically marginalized communities and address language and cultural barriers in emergency planning. Ensure equitable access to emergency resources and recovery assistance.",
        "measurement": "Process: Vulnerable population registration rates, emergency plan completion, supply distribution. Outcome: Emergency-related health outcomes, evacuation success rates, recovery time measures."
    },
    {
        "title": "Disaster Response Coordination",
        "domain": "Emergency & Crisis Response",
        "role": "Emergency Coordinator",
        "description": "Coordinated disaster response system integrating healthcare, social services, and community organizations to provide immediate and long-term assistance to disaster-affected populations through established command structures and resource allocation protocols.",
        "implementation": "Phase 1: Establish incident command system and activate emergency operations center. Coordinate with local emergency management, healthcare systems, and community partners. Phase 2: Deploy rapid needs assessment teams and establish emergency shelters with medical support. Coordinate resource distribution and volunteer management. Phase 3: Transition to recovery operations including temporary housing, healthcare continuity, and mental health support. Conduct after-action reviews and plan improvements.",
        "expectedOutcomes": "Primary: Coordinated response within 4 hours of disaster declaration. Secondary: Reduced disaster-related morbidity and mortality, effective resource utilization, successful community recovery.",
        "targetPopulation": "All community members affected by disasters, with priority for vulnerable populations including children, elderly, individuals with disabilities, and those with limited resources.",
        "evidenceBase": [
            "Federal Emergency Management Agency. National Incident Management System. Washington, DC: Department of Homeland Security; 2017.",
            "Landesman LY. Public Health Management of Disasters: The Practice Guide. 3rd ed. Washington, DC: American Public Health Association; 2012.",
            "Veenema TG, et al. Nurses as leaders in disaster preparedness and response—a call to action. J Nurs Scholarsh. 2016;48(2):187-200. https://doi.org/10.1111/jnu.12198"
        ],
        "healthEquity": "Ensure equitable disaster response and recovery assistance across all community populations. Address systemic barriers that may affect disaster preparedness and recovery in marginalized communities.",
        "measurement": "Process: Response activation times, resource deployment, coordination effectiveness. Outcome: Disaster-related health outcomes, community recovery indicators, preparedness improvements."
    },

    // SPECIALTY CARE COORDINATION (3 protocols)
    {
        "title": "Oncology Care Navigation",
        "domain": "Specialty Care Coordination",
        "role": "Patient Navigator",
        "description": "Comprehensive cancer care navigation program providing diagnosis support, treatment coordination, symptom management, psychosocial support, and survivorship planning throughout the cancer care continuum.",
        "implementation": "Phase 1: Rapid navigation within 48 hours of cancer diagnosis or suspicion. Comprehensive needs assessment including psychosocial, financial, and practical barriers. Phase 2: Coordinate multidisciplinary care team meetings and treatment planning. Provide education about treatment options and side effects. Phase 3: Ongoing support during treatment including symptom monitoring, appointment coordination, and resource connections. Post-treatment: Survivorship care planning and long-term follow-up coordination.",
        "expectedOutcomes": "Primary: 90% of patients receive timely cancer care (treatment within 30 days of diagnosis). Secondary: Improved treatment completion rates, reduced treatment delays, enhanced quality of life, increased patient satisfaction.",
        "targetPopulation": "Individuals with cancer diagnosis or suspicion, particularly those with limited healthcare experience, complex treatment needs, psychosocial barriers, or limited support systems.",
        "evidenceBase": [
            "Freeman HP, et al. Patient navigation: a community centered approach to reducing cancer mortality. J Cancer Educ. 2006;21(1 Suppl):S11-14. https://doi.org/10.1207/s15430154jce2101s_4",
            "Carter-Harris L, et al. Patient navigation for lung cancer screening: a systematic review. Chest. 2019;156(5):1012-1021. https://doi.org/10.1016/j.chest.2019.04.099",
            "Paskett ED, et al. Patient navigation: an update on the state of the science. CA Cancer J Clin. 2011;61(4):237-249. https://doi.org/10.3322/caac.20111"
        ],
        "healthEquity": "Address disparities in cancer care access and outcomes. Provide culturally competent navigation services and address language barriers. Ensure equitable access to clinical trials and cutting-edge treatments.",
        "measurement": "Process: Navigation engagement rates, appointment coordination, resource connections. Outcome: Time to treatment initiation, treatment completion rates, quality of life measures, survival outcomes."
    },
    {
        "title": "Nephrology Care Coordination",
        "domain": "Specialty Care Coordination",
        "role": "Nurse Care Manager",
        "description": "Comprehensive kidney disease care coordination program providing chronic kidney disease management, dialysis preparation, transplant evaluation, and end-stage renal disease support through multidisciplinary team approach.",
        "implementation": "Phase 1: Early identification of CKD patients (stages 3-5) through EHR alerts and laboratory monitoring. Comprehensive assessment including cardiovascular risk, bone disease, and anemia. Phase 2: Coordinate nephrology referrals and specialty care. Provide patient education about kidney disease progression and treatment options. Phase 3: Prepare patients for renal replacement therapy (dialysis or transplant). Coordinate vascular access placement and transplant evaluation. Ongoing: Support patients on dialysis with care coordination and quality monitoring.",
        "expectedOutcomes": "Primary: 80% of ESRD patients start dialysis with permanent vascular access. Secondary: Improved CKD progression monitoring, increased transplant referrals, enhanced quality of life, reduced hospitalizations.",
        "targetPopulation": "Adults with chronic kidney disease stages 3-5, particularly those with diabetes, hypertension, or other conditions affecting kidney function.",
        "evidenceBase": [
            "KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int Suppl. 2013;3(1):1-150.",
            "Chen TK, et al. Chronic Kidney Disease Diagnosis and Management: A Review. JAMA. 2019;322(13):1294-1304. https://doi.org/10.1001/jama.2019.14745",
            "Vassalotti JA, et al. Practical approach to detection and management of chronic kidney disease for the primary care clinician. Am J Med. 2016;129(2):153-162. https://doi.org/10.1016/j.amjmed.2015.08.025"
        ],
        "healthEquity": "Address disparities in kidney disease care and transplant access. Provide culturally competent education about kidney disease and treatment options. Ensure equitable access to transplant evaluation and living donor programs.",
        "measurement": "Process: CKD identification rates, nephrology referrals, patient education completion. Outcome: Vascular access placement rates, transplant referral rates, dialysis adequacy measures, quality of life."
    },
    {
        "title": "Complex Medical Device Management",
        "domain": "Specialty Care Coordination",
        "role": "Nurse Care Manager",
        "description": "Comprehensive medical device management program providing training, monitoring, troubleshooting, and coordination for patients with complex medical devices including ventilators, feeding tubes, ostomies, and infusion pumps.",
        "implementation": "Phase 1: Device-specific training for patients and caregivers including hands-on practice and competency assessment. Establish emergency protocols and 24/7 support systems. Phase 2: Regular monitoring visits (weekly initially, then monthly) to assess device function, patient adaptation, and caregiver competency. Phase 3: Coordinate with durable medical equipment providers, home health agencies, and specialty providers. Provide ongoing education and troubleshooting support.",
        "expectedOutcomes": "Primary: 95% device-related competency achievement by patients/caregivers. Secondary: Reduced device-related complications, decreased emergency department visits, improved quality of life, enhanced caregiver confidence.",
        "targetPopulation": "Patients requiring complex medical devices for chronic conditions, particularly those with limited caregiver support, complex medical needs, or history of device-related complications.",
        "evidenceBase": [
            "Stanton AL, et al. Home care for patients with complex medical devices: a systematic review. J Adv Nurs. 2015;71(11):2518-2531. https://doi.org/10.1111/jan.12721",
            "Carnevale FA, et al. Daily living with distressing ongoing symptoms: a descriptive study of ventilator-assisted individuals with neuromuscular disorders. Palliat Med. 2006;20(7):693-701. https://doi.org/10.1177/0269216306071064",
            "Tearl DK, et al. Home mechanical ventilation in children. Clin Chest Med. 2016;37(2):335-366. https://doi.org/10.1016/j.ccm.2016.01.011"
        ],
        "healthEquity": "Ensure equitable access to medical devices and training regardless of insurance status. Provide culturally competent device education and address language barriers. Consider home environment factors affecting device use.",
        "measurement": "Process: Training completion rates, monitoring visit frequency, emergency support utilization. Outcome: Device-related complication rates, emergency department visits, patient/caregiver competency scores."
    },

    // HEALTH SYSTEM NAVIGATION (3 protocols)
    {
        "title": "Insurance Enrollment and Advocacy",
        "domain": "Health System Navigation",
        "role": "Community Health Worker",
        "description": "Comprehensive insurance enrollment and advocacy program providing Medicaid/marketplace enrollment assistance, appeals support, prior authorization navigation, and ongoing insurance maintenance to ensure continuous healthcare coverage.",
        "implementation": "Phase 1: Conduct insurance eligibility screening and application assistance using certified application counselors. Provide enrollment support during open enrollment and special enrollment periods. Phase 2: Ongoing insurance maintenance including annual renewals, address changes, and coverage verification. Phase 3: Appeals and advocacy support for denied claims, prior authorizations, and coverage disputes. Coordinate with healthcare providers for medical necessity documentation.",
        "expectedOutcomes": "Primary: 90% successful insurance enrollment for eligible individuals. Secondary: Reduced uninsured rates, improved healthcare access, decreased medical debt, enhanced continuity of care.",
        "targetPopulation": "Uninsured and underinsured individuals and families, particularly those eligible for Medicaid, marketplace subsidies, or other public insurance programs.",
        "evidenceBase": [
            "Sommers BD, et al. Changes in mortality after Massachusetts health care reform: a quasi-experimental study. Ann Intern Med. 2014;160(9):585-593. https://doi.org/10.7326/M13-2275",
            "Blewett LA, et al. When universal health insurance coverage remains universal: factors associated with accessing care in Massachusetts. Am J Public Health. 2008;98(8):1391-1398. https://doi.org/10.2105/AJPH.2007.129247",
            "Miller S, et al. Medicaid and mortality: new evidence from linked survey and administrative data. Q J Econ. 2021;136(3):1783-1829. https://doi.org/10.1093/qje/qjab004"
        ],
        "healthEquity": "Provide enrollment assistance in multiple languages and culturally appropriate settings. Address documentation barriers for immigrant populations. Ensure equitable access to insurance enrollment regardless of immigration status where applicable.",
        "measurement": "Process: Enrollment applications completed, appeals filed, advocacy interventions. Outcome: Insurance enrollment rates, coverage retention, healthcare access measures, financial protection indicators."
    },
    {
        "title": "Healthcare Literacy Program",
        "domain": "Health System Navigation",
        "role": "Health Educator",
        "description": "Comprehensive health literacy program providing education on healthcare navigation, medical terminology, shared decision-making, and self-advocacy skills through interactive workshops, one-on-one coaching, and peer support.",
        "implementation": "Phase 1: Health literacy assessment using validated tools (REALM, NVS, or eHEALS). Develop individualized learning plans based on assessment results. Phase 2: Deliver structured curriculum covering healthcare system navigation, understanding medical information, communication with providers, and medication management. Phase 3: Provide ongoing coaching and support for healthcare encounters. Develop peer support networks and mentorship programs.",
        "expectedOutcomes": "Primary: 40% improvement in health literacy scores. Secondary: Increased healthcare utilization appropriateness, improved medication adherence, enhanced patient-provider communication, better health outcomes.",
        "targetPopulation": "Individuals with limited health literacy, particularly those with chronic conditions, limited English proficiency, low educational attainment, or complex healthcare needs.",
        "evidenceBase": [
            "Berkman ND, et al. Low health literacy and health outcomes: an updated systematic review. Ann Intern Med. 2011;155(2):97-107. https://doi.org/10.7326/0003-4819-155-2-201107190-00005",
            "Schillinger D, et al. Association of health literacy with diabetes outcomes. JAMA. 2002;288(4):475-482. https://doi.org/10.1001/jama.288.4.475",
            "DeWalt DA, et al. Literacy and health outcomes: a systematic review of the literature. J Gen Intern Med. 2004;19(12):1228-1239. https://doi.org/10.1111/j.1525-1497.2004.40153.x"
        ],
        "healthEquity": "Provide health literacy education in multiple languages and formats appropriate for diverse learning styles. Address cultural factors affecting health literacy and healthcare navigation. Ensure accessibility for individuals with disabilities.",
        "measurement": "Process: Health literacy assessments completed, education session attendance, coaching contacts. Outcome: Health literacy score improvements, healthcare utilization patterns, medication adherence, health outcomes."
    },
    {
        "title": "Patient Advocacy Services",
        "domain": "Health System Navigation",
        "role": "Patient Navigator",
        "description": "Comprehensive patient advocacy program providing support for healthcare decision-making, insurance disputes, quality of care concerns, and healthcare rights protection through trained patient advocates and ombudsman services.",
        "implementation": "Phase 1: Establish patient advocacy services with trained advocates available during business hours and on-call coverage. Develop protocols for common advocacy issues including billing disputes, quality concerns, and access barriers. Phase 2: Provide direct advocacy support including accompanying patients to appointments, facilitating communication with providers, and mediating disputes. Phase 3: Systemic advocacy for policy changes and quality improvements based on identified patterns of patient concerns.",
        "expectedOutcomes": "Primary: 85% resolution rate for patient advocacy cases. Secondary: Improved patient satisfaction, reduced healthcare-related stress, enhanced healthcare access, better health outcomes.",
        "targetPopulation": "Patients experiencing healthcare access barriers, quality of care concerns, insurance disputes, or communication difficulties with healthcare providers.",
        "evidenceBase": [
            "Schwartz CE, et al. The role of patient advocacy in healthcare. Patient Educ Couns. 2009;74(3):296-301. https://doi.org/10.1016/j.pec.2008.12.012",
            "Mallik M, et al. Patient advocacy in nursing: a concept analysis. Nurs Ethics. 1997;4(1):29-40. https://doi.org/10.1177/096973309700400104",
            "Zomorodi M, et al. Developing a professional advocacy conceptual model for baccalaureate nursing students: a theoretical approach. Nurse Educ Today. 2011;31(8):e31-e36. https://doi.org/10.1016/j.nedt.2010.11.014"
        ],
        "healthEquity": "Provide advocacy services that address systemic barriers and discrimination in healthcare. Ensure cultural competency and language accessibility in advocacy services. Prioritize advocacy for vulnerable and marginalized populations.",
        "measurement": "Process: Advocacy case volume, resolution rates, service utilization. Outcome: Patient satisfaction scores, healthcare access improvements, quality of care indicators, systemic change achievements."
    },

    // WORKPLACE & OCCUPATIONAL HEALTH (2 protocols)
    {
        "title": "Return-to-Work Program",
        "domain": "Workplace & Occupational Health",
        "role": "Occupational Health Nurse",
        "description": "Comprehensive return-to-work program providing medical evaluation, functional capacity assessment, workplace accommodation planning, and gradual return protocols for employees recovering from illness or injury.",
        "implementation": "Phase 1: Medical clearance evaluation including functional capacity assessment and work restrictions determination. Coordinate with treating physicians and occupational medicine specialists. Phase 2: Workplace assessment and accommodation planning in collaboration with employers and human resources. Develop modified duty or gradual return schedules. Phase 3: Ongoing monitoring and support during return-to-work transition. Provide education on injury prevention and workplace safety.",
        "expectedOutcomes": "Primary: 80% successful return to work within 90 days. Secondary: Reduced work-related disability duration, decreased workers' compensation costs, improved employee satisfaction, prevention of re-injury.",
        "targetPopulation": "Employees recovering from work-related injuries, occupational illnesses, or medical conditions affecting work capacity, particularly those with complex medical needs or workplace accommodation requirements.",
        "evidenceBase": [
            "Franche RL, et al. Workplace-based return-to-work interventions: a systematic review of the quantitative literature. J Occup Rehabil. 2005;15(4):607-631. https://doi.org/10.1007/s10926-005-8038-8",
            "Steenstra IA, et al. The effectiveness of graded activity for low back pain in occupational healthcare. Occup Environ Med. 2006;63(11):718-725. https://doi.org/10.1136/oem.2005.021675",
            "Young AE, et al. A developmental conceptualization of return to work. J Occup Rehabil. 2005;15(4):557-568. https://doi.org/10.1007/s10926-005-8034-z"
        ],
        "healthEquity": "Ensure equitable return-to-work opportunities regardless of injury type or worker characteristics. Address language barriers and provide culturally competent occupational health services. Advocate for reasonable accommodations for workers with disabilities.",
        "measurement": "Process: Medical evaluations completed, accommodation plans developed, return-to-work attempts. Outcome: Return-to-work rates, time to return, re-injury rates, worker satisfaction, disability duration."
    },
    {
        "title": "Workplace Wellness Initiative",
        "domain": "Workplace & Occupational Health",
        "role": "Health Educator",
        "description": "Comprehensive workplace wellness program providing health screenings, lifestyle interventions, stress management, ergonomic assessments, and health promotion activities to improve employee health and reduce healthcare costs.",
        "implementation": "Phase 1: Conduct workplace health risk assessments and biometric screenings. Analyze aggregate data to identify priority health issues. Phase 2: Implement targeted interventions including nutrition education, physical activity programs, stress management workshops, and smoking cessation support. Phase 3: Ongoing wellness activities including lunch-and-learn sessions, health challenges, and environmental modifications. Provide annual program evaluation and improvement planning.",
        "expectedOutcomes": "Primary: 25% improvement in employee health risk scores. Secondary: Reduced healthcare costs, decreased absenteeism, improved productivity, enhanced employee satisfaction and retention.",
        "targetPopulation": "All employees in participating workplaces, with targeted interventions for those with identified health risks or chronic conditions.",
        "evidenceBase": [
            "Baicker K, et al. Workplace wellness programs can generate savings. Health Aff (Millwood). 2010;29(2):304-311. https://doi.org/10.1377/hlthaff.2009.0626",
            "Goetzel RZ, et al. Do workplace health promotion (wellness) programs work? J Occup Environ Med. 2014;56(9):927-934. https://doi.org/10.1097/JOM.0000000000000276",
            "Song Z, et al. Workplace wellness programs can generate savings. Health Aff (Millwood). 2019;38(3):455-463. https://doi.org/10.1377/hlthaff.2018.05503"
        ],
        "healthEquity": "Ensure wellness programs are accessible to all employees regardless of shift schedules, job types, or health status. Address social determinants of health affecting workplace wellness. Provide culturally appropriate wellness interventions.",
        "measurement": "Process: Screening participation rates, program engagement, intervention completion. Outcome: Health risk score changes, biometric improvements, healthcare utilization, absenteeism rates, productivity measures."
    }
];
