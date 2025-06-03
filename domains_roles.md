# Domains and Roles for Evidence Repository

## Domains
Based on the existing website and requirements:

1. Diabetes
2. Hypertension
3. Depression
4. Anxiety
5. Substance Use Disorders
6. Housing
7. Food Security
8. Transportation
9. Asthma
10. COPD
11. Heart Failure
12. Preventive Screenings
13. Medication Adherence
14. Care Transitions
15. CKD (Chronic Kidney Disease)
16. Post MI (Post Myocardial Infarction)
17. Post Stroke
18. HIV
19. Vaccination
20. EPSDT (Early and Periodic Screening, Diagnostic, and Treatment)
21. Prenatal (New)
22. Postnatal (New)

## Roles
Based on the existing website and requirements:

1. Nurse Care Manager
2. Clinical Pharmacist
3. Community Health Worker
4. Social Worker (Non-Clinical)
5. Care Coordinator
6. Social Worker (Clinical/Therapy)
7. Pharmacy Technician
8. Doula (New)

## JSON Structure
Based on the extracted technical documentation:

```json
{
  "id": "unique_identifier",
  "title": "Recommendation Title",
  "domain_id": 1,
  "domain_name": "Diabetes",
  "role_id": 3,
  "role_name": "Community Health Worker",
  "content": "Detailed recommendation content that is actionable at the individual provider level",
  "implementation_guidance": "Specific steps for implementing this recommendation",
  "expected_outcomes": "Measurable outcomes that can be expected",
  "target_population": "Underserved/vulnerable patients or patients receiving Medicaid",
  "citations": [
    {
      "authors": "Author1 A, Author2 B, Author3 C.",
      "title": "Article title",
      "journal": "Journal Name",
      "year": 2020,
      "volume": "10",
      "issue": "2",
      "pages": "123-145",
      "doi": "10.xxxx/xxxxx",
      "url": "https://doi.org/10.xxxx/xxxxx"
    }
  ],
  "version": 1,
  "created_at": "2025-05-29T18:51:00Z",
  "updated_at": "2025-05-29T18:51:00Z"
}
```

## Waymarkcare Branding
Colors observed from waymarkcare.com/research:
- Primary blue: #0066CC (navigation links)
- Secondary colors:
  - Green: #4CAF50
  - Purple: #9C27B0
  - Orange: #FF9800
  - Teal: #009688
- Background: Light cream/off-white
- Text: Dark gray/near black for body text
- Accent colors for categories/filters
