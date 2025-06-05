const allRecommendations = [
  {
    "title": "Implement Structured Diabetes Self-Management Education",
    "domain": "Diabetes",
    "role": "Nurse Care Manager",
    "implementation_guidance": "1. Conduct initial assessment using validated AADE7 Self-Care Behaviors framework\n2. Develop personalized education plan with specific glycemic targets (HbA1c reduction of 0.5-1% within 3-6 months)\n3. Schedule structured 30-45 minute sessions at 2-week intervals for first 3 months\n4. Document baseline knowledge using Diabetes Knowledge Test (DKT) with target improvement of ≥20%\n5. Implement teach-back method to verify comprehension of key concepts\n6. Provide specific instruction on glucose monitoring technique with return demonstration\n7. Document self-management goals using SMART framework in EHR\n8. Schedule follow-up within 2 weeks of medication changes\n9. Establish hypoglycemia action plan with specific glucose thresholds (<70 mg/dL)\n10. Measure outcomes using validated Problem Areas in Diabetes (PAID) scale",
    "expected_outcomes": "1. HbA1c reduction of 0.5-1.0% within 6 months\n2. 80% of patients demonstrate proper glucose monitoring technique\n3. 30% reduction in diabetes distress as measured by PAID scale\n4. 25% reduction in hypoglycemic events\n5. 40% improvement in medication adherence",
    "target_population": "Adults with type 1 or type 2 diabetes with HbA1c >8.0% or newly diagnosed patients",
    "evidence": "Powers MA, et al. Diabetes Self-management Education and Support in Type 2 Diabetes: A Joint Position Statement of the American Diabetes Association, the American Association of Diabetes Educators, and the Academy of Nutrition and Dietetics. Diabetes Care. 2015;38(7):1372-1382."
  },
  {
    "title": "Implement Home Blood Pressure Monitoring Protocol",
    "domain": "Hypertension",
    "role": "Nurse Care Manager",
    "implementation_guidance": "1. Select validated home BP device (AAMI/ESH/ISO certified) with appropriate cuff size\n2. Train patient on proper technique: seated position, back supported, feet flat, arm at heart level\n3. Instruct on specific measurement protocol: measure BP twice daily (morning and evening) for 7 consecutive days\n4. Document baseline office BP and compare with home readings (acceptable difference <5 mmHg)\n5. Establish clear reporting thresholds: SBP >180 or <90, DBP >110 or <60 requires immediate contact\n6. Implement standardized recording system with date, time, and position\n7. Schedule technique reassessment at 30 days\n8. Configure EHR alerts for readings outside target range (>135/85 for home readings)\n9. Establish medication adjustment protocol based on 7-day averages\n10. Recalibrate device every 6 months or after 2,000 readings",
    "expected_outcomes": "1. BP control rate improvement of 20% compared to usual care\n2. 90% adherence to monitoring protocol\n3. 30% reduction in white coat hypertension misdiagnosis\n4. 25% reduction in BP-related urgent care visits\n5. 15% reduction in medication adjustments",
    "target_population": "Adults with uncontrolled hypertension (BP >140/90) or suspected white coat hypertension",
    "evidence": "Shimbo D, et al. Self-Measured Blood Pressure Monitoring at Home: A Joint Policy Statement From the American Heart Association and American Medical Association. Circulation. 2020;142(4):e42-e63."
  },
  {
    "title": "Implement Medication Adherence Protocol for Complex Regimens",
    "domain": "Medication Adherence",
    "role": "Clinical Pharmacist",
    "implementation_guidance": "1. Conduct comprehensive medication review using validated BMQ (Brief Medication Questionnaire) tool\n2. Quantify baseline adherence using proportion of days covered (PDC) calculation from pharmacy claims data\n3. Implement medication synchronization with standardized refill date\n4. Perform regimen consolidation to reduce dosing frequency to ≤2 times daily when possible\n5. Provide dose-specific pill box with compartments for each administration time\n6. Configure automated refill reminders 7 days before medication depletion\n7. Document specific adherence barriers using COM-B framework (Capability, Opportunity, Motivation, Behavior)\n8. Schedule structured follow-up at 14, 30, and 90 days post-intervention\n9. Implement teach-back method for high-risk medications (anticoagulants, insulin, etc.)\n10. Establish medication cost threshold (>$50/month) for financial assistance program referral",
    "expected_outcomes": "1. Improvement in PDC from <80% to >85% within 90 days\n2. 30% reduction in missed doses as self-reported\n3. 25% reduction in therapeutic duplications\n4. 20% reduction in medication-related adverse events\n5. 15% improvement in clinical outcomes related to treated conditions",
    "target_population": "Patients taking ≥5 chronic medications or with demonstrated poor adherence (PDC <80%)",
    "evidence": "Viswanathan M, et al. Interventions to Improve Adherence to Self-administered Medications for Chronic Diseases in the United States: A Systematic Review. Ann Intern Med. 2012;157(11):785-795."
  },
  {
    "title": "Implement Structured Home Visit Protocol for CHWs",
    "domain": "Care Transitions",
    "role": "Community Health Worker",
    "implementation_guidance": "1. Complete pre-visit assessment using standardized PRAPARE social determinants screening tool\n2. Schedule initial visit within 72 hours of hospital discharge or referral\n3. Conduct medication reconciliation using brown bag review technique\n4. Perform home safety assessment with CDC STEADI fall risk checklist\n5. Document specific social needs with ICD-10 Z-codes in EHR\n6. Establish communication protocol with primary care team (response time <24 hours)\n7. Develop action plan with maximum of 3 prioritized goals using teach-back method\n8. Schedule follow-up visits at 7, 14, and 30 days with specific agenda\n9. Implement standardized handoff using SBAR technique for identified clinical concerns\n10. Measure visit effectiveness using Patient Activation Measure (PAM) with target improvement of ≥1 level",
    "expected_outcomes": "1. 30% reduction in 30-day readmission rates\n2. 80% of medication discrepancies resolved within 7 days\n3. 40% increase in primary care follow-up attendance\n4. 25% reduction in ED visits within 90 days\n5. 35% improvement in patient activation as measured by PAM",
    "target_population": "High-risk patients recently discharged from hospital or with multiple chronic conditions and identified social needs",
    "evidence": "Kangovi S, et al. Effect of Community Health Worker Support on Clinical Outcomes of Low-Income Patients Across Primary Care Facilities: A Randomized Clinical Trial. JAMA Intern Med. 2018;178(12):1635-1643."
  },
  {
    "title": "Implement Nutritional Counseling Protocol for Chronic Disease Management",
    "domain": "Nutrition",
    "role": "Dietitian/Nutritionist",
    "implementation_guidance": "1. Conduct comprehensive nutritional assessment using validated AND-NCP (Academy of Nutrition and Dietetics Nutrition Care Process)\n2. Calculate specific caloric and macronutrient targets based on indirect calorimetry or Mifflin-St Jeor equation\n3. Develop personalized meal plans with specific food groups and portion sizes\n4. Implement 3-day food diary with analysis of macro/micronutrient content\n5. Establish SMART nutritional goals with measurable outcomes at 30, 60, and 90 days\n6. Provide hands-on education for food label reading with specific focus on sodium, added sugars, and saturated fat\n7. Schedule follow-up at 2-week intervals for first 2 months, then monthly\n8. Document baseline anthropometric measurements (weight, waist circumference, body composition) with target changes\n9. Implement teach-back method for dietary recommendations\n10. Coordinate care plan with primary provider and pharmacist for medication timing with meals",
    "expected_outcomes": "1. Achievement of individualized weight goals in 70% of patients within 6 months\n2. 25% improvement in diet quality as measured by Healthy Eating Index\n3. 20% reduction in disease-specific biomarkers (HbA1c, LDL, blood pressure)\n4. 30% improvement in medication efficacy through proper meal timing\n5. 40% reduction in nutrition-related symptoms (GI distress, fatigue)",
    "target_population": "Patients with nutrition-sensitive chronic conditions (diabetes, heart failure, CKD, NASH) or BMI >30 with comorbidities",
    "evidence": "Evert AB, et al. Nutrition Therapy for Adults With Diabetes or Prediabetes: A Consensus Report. Diabetes Care. 2019;42(5):731-754."
  }
]
