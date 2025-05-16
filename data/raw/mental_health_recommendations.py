# Mental Health Evidence-Based Recommendations

# This file contains structured evidence-based recommendations for mental health conditions
# Each recommendation is organized by role and includes citations to peer-reviewed literature

recommendations = [
  {
    "id": "depression_care_coordination_1",
    "title": "Collaborative Care Model for Depression Management",
    "domain_id": "depression",
    "domain_name": "Depression",
    "roles": [
      {"id": "nurse", "name": "Nurse Care Manager"},
      {"id": "care_coordinator", "name": "Care Coordinator"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a collaborative care model for depression that includes: (1) systematic screening using PHQ-9, (2) registry-based tracking of symptoms and treatment response, (3) regular follow-up with measurement-based treatment adjustments (every 2-4 weeks until improvement, then monthly), (4) care coordination between primary care and mental health specialists, and (5) stepped care protocols for treatment intensification when patients don't improve.",
    "rationale": "Collaborative care models have consistently demonstrated effectiveness in improving depression outcomes in primary care settings. This approach ensures systematic monitoring, timely treatment adjustments, and appropriate specialist involvement, addressing common gaps in depression management.",
    "expected_outcome": "Improved depression remission rates (15-25% increase over usual care), reduced symptom severity (3-5 point greater reduction in PHQ-9 scores), improved treatment adherence, increased work productivity, and reduced suicidal ideation. Number needed to treat (NNT) for one additional depression remission: 4-6 patients.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Archer J, Bower P, Gilbody S, et al.",
        "title": "Collaborative care for depression and anxiety problems",
        "journal": "Cochrane Database of Systematic Reviews",
        "year": 2012,
        "doi": "10.1002/14651858.CD006525.pub2",
        "url": "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD006525.pub2/full"
      },
      {
        "authors": "Unützer J, Katon W, Callahan CM, et al.",
        "title": "Collaborative care management of late-life depression in the primary care setting: a randomized controlled trial",
        "journal": "JAMA",
        "year": 2002,
        "doi": "10.1001/jama.288.22.2836",
        "url": "https://jamanetwork.com/journals/jama/fullarticle/195599"
      }
    ],
    "implementation_notes": "Designate a care manager (typically a nurse or social worker) to serve as the point person for tracking patient progress and facilitating communication between team members. Develop clear protocols for when to escalate to psychiatric consultation. Consider using digital tools to support symptom monitoring and registry functions."
  },
  {
    "id": "anxiety_social_worker_1",
    "title": "Cognitive Behavioral Therapy for Anxiety in Primary Care",
    "domain_id": "anxiety",
    "domain_name": "Anxiety",
    "roles": [
      {"id": "social_worker_clinical", "name": "Social Worker (Clinical/Therapy)"}
    ],
    "priority_level": "medium",
    "recommendation": "Implement a brief cognitive-behavioral therapy (CBT) intervention for anxiety disorders in primary care settings, delivered by clinical social workers. The protocol should include: (1) 6-8 sessions of structured CBT focusing on cognitive restructuring and exposure techniques, (2) use of validated anxiety measures (GAD-7) at each session, (3) patient workbooks and between-session assignments, (4) regular supervision for social workers, and (5) coordination with primary care providers regarding medication management.",
    "rationale": "Brief CBT interventions have demonstrated effectiveness for anxiety disorders in primary care settings, with outcomes comparable to longer treatments. Clinical social workers can effectively deliver these interventions, increasing access to evidence-based psychological treatment.",
    "expected_outcome": "Reduced anxiety symptoms (3-5 point reduction in GAD-7 scores), improved functional status, decreased use of anxiolytic medications, reduced emergency department visits for anxiety symptoms, and increased patient self-efficacy in managing anxiety.",
    "evidence_level": "A",
    "citations": [
      {
        "authors": "Roy-Byrne P, Craske MG, Sullivan G, et al.",
        "title": "Delivery of evidence-based treatment for multiple anxiety disorders in primary care: a randomized controlled trial",
        "journal": "JAMA",
        "year": 2010,
        "doi": "10.1001/jama.2010.651",
        "url": "https://jamanetwork.com/journals/jama/fullarticle/185843"
      },
      {
        "authors": "Carpenter JK, Andrews LA, Witcraft SM, Powers MB, Smits JAJ, Hofmann SG",
        "title": "Cognitive behavioral therapy for anxiety and related disorders: A meta-analysis of randomized placebo-controlled trials",
        "journal": "Depression and Anxiety",
        "year": 2018,
        "doi": "10.1002/da.22728",
        "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/da.22728"
      }
    ],
    "implementation_notes": "Provide clinical social workers with specialized training in CBT for anxiety disorders. Develop a structured treatment manual to ensure consistent delivery. Consider offering both individual and group formats to maximize efficiency. Establish clear referral criteria for patients who require more intensive treatment."
  },
  {
    "id": "substance_use_chw_1",
    "title": "Community Health Worker Support for Substance Use Disorder Recovery",
    "domain_id": "substance_use",
    "domain_name": "Substance Use Disorders",
    "roles": [
      {"id": "chw", "name": "Community Health Worker"}
    ],
    "priority_level": "high",
    "recommendation": "Implement a CHW-led recovery support program for patients with substance use disorders that includes: (1) regular outreach and engagement (weekly initially, then biweekly), (2) assistance with practical barriers to treatment (transportation, childcare, housing), (3) connection to community recovery resources, (4) support for medication adherence for medication-assisted treatment, (5) coordination with clinical providers, and (6) motivational support for maintaining recovery goals.",
    "rationale": "CHWs can effectively bridge gaps between clinical treatment and community settings for individuals with substance use disorders. Their lived experience and community knowledge help address social determinants that impact recovery and reduce barriers to treatment engagement.",
    "expected_outcome": "Improved treatment retention (20-30% increase), reduced substance use frequency, increased medication adherence for medication-assisted treatment, improved appointment attendance, and reduced emergency department visits. Number needed to treat (NNT) to prevent one treatment dropout: 4-7 patients.",
    "evidence_level": "B",
    "citations": [
      {
        "authors": "Jack HE, Oller D, Kelly J, Magidson JF, Wakeman SE",
        "title": "Addressing substance use disorder in primary care: The role, integration, and impact of recovery coaches",
        "journal": "Substance Abuse",
        "year": 2018,
        "doi": "10.1080/08897077.2017.1389802",
        "url": "https://www.tandfonline.com/doi/full/10.1080/08897077.2017.1389802"
      },
      {
        "authors": "Eddie D, Hoffman L, Vilsaint C, et al.",
        "title": "Lived Experience in New Models of Care for Substance Use Disorder: A Systematic Review of Peer Recovery Support Services and Recovery Coaching",
        "journal": "Frontiers in Psychology",
        "year": 2019,
        "doi": "10.3389/fpsyg.2019.01052",
        "url": "https://www.frontiersin.org/articles/10.3389/fpsyg.2019.01052/full"
      }
    ],
    "implementation_notes": "Prioritize hiring CHWs with lived experience of recovery when possible. Provide training in motivational interviewing, basic understanding of addiction, and boundary setting. Establish clear protocols for when to escalate concerns to clinical team members. Develop a comprehensive resource guide of local recovery support services."
  }
]
