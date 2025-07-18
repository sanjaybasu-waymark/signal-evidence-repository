#!/usr/bin/env python3
"""
Waymark Population Health Protocol Data Validator and Migrator

This script validates protocol data against the enhanced schema and provides
migration capabilities from the legacy format to the new structured format.

Author: Sanjay Basu MD PhD
Affiliations: Waymark, University of California San Francisco
"""

import json
import jsonschema
import re
from datetime import datetime, date
from typing import Dict, List, Any, Optional, Tuple
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class ProtocolValidator:
    """Validates and migrates protocol data."""
    
    def __init__(self, schema_path: str):
        """Initialize validator with schema."""
        with open(schema_path, 'r') as f:
            self.schema = json.load(f)
        self.validator = jsonschema.Draft7Validator(self.schema)
    
    def validate_protocol(self, protocol: Dict[str, Any]) -> Tuple[bool, List[str]]:
        """
        Validate a protocol against the schema.
        
        Args:
            protocol: Protocol data to validate
            
        Returns:
            Tuple of (is_valid, error_messages)
        """
        errors = []
        
        try:
            # Basic schema validation
            schema_errors = list(self.validator.iter_errors(protocol))
            for error in schema_errors:
                errors.append(f"Schema validation error: {error.message} at {'.'.join(str(p) for p in error.path)}")
            
            # Additional custom validations
            errors.extend(self._validate_citations(protocol))
            errors.extend(self._validate_outcomes(protocol))
            errors.extend(self._validate_implementation_guidance(protocol))
            
            return len(errors) == 0, errors
            
        except Exception as e:
            errors.append(f"Validation error: {str(e)}")
            return False, errors
    
    def _validate_citations(self, protocol: Dict[str, Any]) -> List[str]:
        """Validate citation format and accessibility."""
        errors = []
        
        if 'evidence' not in protocol or 'citations' not in protocol['evidence']:
            return errors
        
        for i, citation in enumerate(protocol['evidence']['citations']):
            # Validate PMID/DOI format
            pmid_doi = citation.get('pmid_or_doi', '')
            if not re.match(r'^(PMID:\s*\d+|DOI:\s*10\.\d+\/.*|https?:\/\/.*)$', pmid_doi):
                errors.append(f"Citation {i+1}: Invalid PMID/DOI format: {pmid_doi}")
            
            # Validate year range
            year = citation.get('year')
            if year and (year < 1990 or year > 2030):
                errors.append(f"Citation {i+1}: Year {year} outside valid range (1990-2030)")
        
        return errors
    
    def _validate_outcomes(self, protocol: Dict[str, Any]) -> List[str]:
        """Validate outcome metrics and confidence intervals."""
        errors = []
        
        if 'expected_outcomes' not in protocol:
            return errors
        
        outcomes = protocol['expected_outcomes']
        
        # Validate primary outcomes
        if 'primary_outcomes' in outcomes:
            for i, outcome in enumerate(outcomes['primary_outcomes']):
                # Validate confidence interval format
                ci = outcome.get('confidence_interval')
                if ci and not re.match(r'^\d+(\.\d+)?%\s+CI:\s+\[.*\]$', ci):
                    errors.append(f"Primary outcome {i+1}: Invalid confidence interval format: {ci}")
                
                # Validate timeframe format
                timeframe = outcome.get('timeframe', '')
                if not re.match(r'^\d+\s+(days?|weeks?|months?)$', timeframe):
                    errors.append(f"Primary outcome {i+1}: Invalid timeframe format: {timeframe}")
        
        return errors
    
    def _validate_implementation_guidance(self, protocol: Dict[str, Any]) -> List[str]:
        """Validate implementation guidance structure."""
        errors = []
        
        if 'implementation_guidance' not in protocol:
            return errors
        
        guidance = protocol['implementation_guidance']
        
        # Validate steps
        if 'steps' in guidance:
            step_numbers = []
            for i, step in enumerate(guidance['steps']):
                step_num = step.get('step_number')
                if step_num in step_numbers:
                    errors.append(f"Duplicate step number {step_num}")
                step_numbers.append(step_num)
                
                # Validate duration format
                duration = step.get('duration', '')
                if not re.match(r'^\d+\s+(minutes?|hours?|days?|weeks?)$', duration):
                    errors.append(f"Step {i+1}: Invalid duration format: {duration}")
        
        # Validate staff time format
        if 'resources' in guidance and 'staff_time' in guidance['resources']:
            staff_time = guidance['resources']['staff_time']
            if not re.match(r'^\d+\s+(minutes?|hours?)\s+per\s+(patient|week|month)$', staff_time):
                errors.append(f"Invalid staff time format: {staff_time}")
        
        return errors

class LegacyDataMigrator:
    """Migrates legacy protocol data to enhanced format."""
    
    def __init__(self):
        """Initialize migrator."""
        self.domain_mapping = {
            'Diabetes': 'Diabetes',
            'Hypertension': 'Hypertension',
            'Heart Failure': 'Heart Failure',
            'Medication Adherence': 'Medication Adherence',
            'Care Transitions': 'Care Transitions',
            'Nutrition': 'Nutrition',
            'Anxiety': 'Mental Health'
        }
        
        self.role_mapping = {
            'Nurse Care Manager': 'Nurse Care Manager',
            'Community Health Worker': 'Community Health Worker',
            'Pharmacy Technician': 'Pharmacy Technician',
            'Clinical Pharmacist': 'Clinical Pharmacist',
            'Care Coordinator': 'Care Coordinator',
            'Social Worker': 'Social Worker',
            'Dietitian/Nutritionist': 'Dietitian/Nutritionist',
            'Social Worker (Clinical/Therapy)': 'Social Worker'
        }
    
    def migrate_protocol(self, legacy_protocol: Dict[str, Any]) -> Dict[str, Any]:
        """
        Migrate a legacy protocol to the enhanced format.
        
        Args:
            legacy_protocol: Legacy protocol data
            
        Returns:
            Enhanced protocol data
        """
        # Generate unique ID from title
        protocol_id = self._generate_id(legacy_protocol.get('title', ''))
        
        # Map domain and role
        domain = self.domain_mapping.get(legacy_protocol.get('domain'), 'Chronic Disease Management')
        role = [self.role_mapping.get(legacy_protocol.get('role'), 'Care Coordinator')]
        
        # Parse implementation guidance
        implementation_guidance = self._parse_implementation_guidance(
            legacy_protocol.get('implementation_guidance', '')
        )
        
        # Parse expected outcomes
        expected_outcomes = self._parse_expected_outcomes(
            legacy_protocol.get('expected_outcomes', '')
        )
        
        # Parse target population
        target_population = self._parse_target_population(
            legacy_protocol.get('target_population', '')
        )
        
        # Parse evidence
        evidence = self._parse_evidence(legacy_protocol.get('evidence', ''))
        
        # Create enhanced protocol
        enhanced_protocol = {
            'id': protocol_id,
            'title': legacy_protocol.get('title', ''),
            'domain': domain,
            'role': role,
            'implementation_guidance': implementation_guidance,
            'expected_outcomes': expected_outcomes,
            'target_population': target_population,
            'evidence': evidence,
            'version': {
                'number': '1.0.0',
                'changelog': [{
                    'version': '1.0.0',
                    'date': datetime.now().strftime('%Y-%m-%d'),
                    'changes': ['Initial migration from legacy format'],
                    'author': 'System Migration'
                }]
            },
            'created_date': datetime.now().strftime('%Y-%m-%d'),
            'last_updated': datetime.now().strftime('%Y-%m-%d'),
            'status': 'Active',
            'tags': self._generate_tags(legacy_protocol),
            'complexity_score': self._estimate_complexity(implementation_guidance)
        }
        
        return enhanced_protocol
    
    def _generate_id(self, title: str) -> str:
        """Generate a unique ID from protocol title."""
        # Convert to lowercase, replace spaces with underscores, remove special chars
        protocol_id = re.sub(r'[^a-z0-9_-]', '', title.lower().replace(' ', '_'))
        return protocol_id[:50]  # Limit length
    
    def _parse_implementation_guidance(self, guidance_text: str) -> Dict[str, Any]:
        """Parse legacy implementation guidance into structured format."""
        # Split into numbered steps
        steps = []
        step_pattern = r'(\d+)\.\s*([^0-9]+?)(?=\d+\.|$)'
        matches = re.findall(step_pattern, guidance_text, re.DOTALL)
        
        for i, (step_num, description) in enumerate(matches):
            steps.append({
                'step_number': int(step_num),
                'description': description.strip(),
                'duration': '30 minutes',  # Default duration
                'required_skills': [],
                'tools_needed': []
            })
        
        # If no numbered steps found, create a single step
        if not steps:
            steps.append({
                'step_number': 1,
                'description': guidance_text.strip(),
                'duration': '30 minutes',
                'required_skills': [],
                'tools_needed': []
            })
        
        return {
            'steps': steps,
            'resources': {
                'staff_time': '30 minutes per patient',
                'materials': [],
                'technology': [],
                'training_required': 'Basic protocol training'
            },
            'timeline': '1-2 weeks',
            'prerequisites': [],
            'contraindications': []
        }
    
    def _parse_expected_outcomes(self, outcomes_text: str) -> Dict[str, Any]:
        """Parse legacy expected outcomes into structured format."""
        # Extract metrics and percentages
        metric_pattern = r'([^(]+)\s*\(([^)]+)\)'
        matches = re.findall(metric_pattern, outcomes_text)
        
        primary_outcomes = []
        for metric, change in matches:
            primary_outcomes.append({
                'metric': metric.strip(),
                'expected_change': change.strip(),
                'timeframe': '3 months',  # Default timeframe
                'confidence_interval': '95% CI: [Not specified]'
            })
        
        # If no structured outcomes found, create a general one
        if not primary_outcomes:
            primary_outcomes.append({
                'metric': 'Clinical improvement',
                'expected_change': outcomes_text.strip(),
                'timeframe': '3 months',
                'confidence_interval': '95% CI: [Not specified]'
            })
        
        return {
            'primary_outcomes': primary_outcomes,
            'secondary_outcomes': [],
            'process_measures': []
        }
    
    def _parse_target_population(self, population_text: str) -> Dict[str, Any]:
        """Parse legacy target population into structured format."""
        return {
            'description': population_text.strip(),
            'inclusion_criteria': [],
            'exclusion_criteria': [],
            'demographics': {
                'age_range': 'Adults',
                'insurance_type': ['Medicaid'],
                'social_determinants': []
            }
        }
    
    def _parse_evidence(self, evidence_text: str) -> Dict[str, Any]:
        """Parse legacy evidence into structured format."""
        # Extract citations using common patterns
        citations = []
        
        # Look for author patterns
        author_pattern = r'([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+et\s+al\.?'
        authors = re.findall(author_pattern, evidence_text)
        
        # Look for years
        year_pattern = r'\b(19|20)\d{2}\b'
        years = re.findall(year_pattern, evidence_text)
        
        # Look for journal names or guidelines
        journal_pattern = r'([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*(?:\s+Journal|\s+Guidelines|\s+Standards))'
        journals = re.findall(journal_pattern, evidence_text)
        
        # Create citations from extracted information
        if authors or years or journals:
            citation = {
                'type': 'Clinical Guideline',
                'title': 'Referenced guideline or study',
                'authors': authors[0] if authors else 'Not specified',
                'publication': journals[0] if journals else 'Not specified',
                'year': int(years[0]) if years else 2023,
                'pmid_or_doi': 'DOI: Not specified',
                'relevance_score': 8,
                'key_findings': evidence_text.strip()[:200] + '...' if len(evidence_text) > 200 else evidence_text.strip()
            }
            citations.append(citation)
        
        return {
            'grade': 'Moderate',  # Default grade
            'grade_rationale': 'Based on clinical guidelines and expert consensus',
            'citations': citations if citations else [{
                'type': 'Expert Consensus',
                'title': 'Clinical best practices',
                'authors': 'Clinical experts',
                'publication': 'Professional guidelines',
                'year': 2023,
                'pmid_or_doi': 'DOI: Not specified',
                'relevance_score': 7,
                'key_findings': evidence_text.strip()
            }],
            'last_literature_review': datetime.now().strftime('%Y-%m-%d'),
            'search_strategy': 'Manual review of clinical guidelines and literature'
        }
    
    def _generate_tags(self, legacy_protocol: Dict[str, Any]) -> List[str]:
        """Generate tags for improved searchability."""
        tags = []
        
        # Add domain as tag
        if 'domain' in legacy_protocol:
            tags.append(legacy_protocol['domain'].lower())
        
        # Add role as tag
        if 'role' in legacy_protocol:
            tags.append(legacy_protocol['role'].lower().replace(' ', '_'))
        
        # Extract keywords from title
        title = legacy_protocol.get('title', '')
        title_words = re.findall(r'\b[a-zA-Z]{4,}\b', title.lower())
        tags.extend(title_words[:5])  # Limit to 5 keywords
        
        return list(set(tags))  # Remove duplicates
    
    def _estimate_complexity(self, implementation_guidance: Dict[str, Any]) -> int:
        """Estimate implementation complexity score (1-10)."""
        steps = implementation_guidance.get('steps', [])
        num_steps = len(steps)
        
        # Base complexity on number of steps
        if num_steps <= 2:
            return 3
        elif num_steps <= 4:
            return 5
        elif num_steps <= 6:
            return 7
        else:
            return 9

def migrate_legacy_data(input_file: str, output_file: str, schema_file: str):
    """
    Migrate legacy protocol data to enhanced format.
    
    Args:
        input_file: Path to legacy data file
        output_file: Path for enhanced data output
        schema_file: Path to validation schema
    """
    logger.info(f"Starting migration from {input_file} to {output_file}")
    
    # Load legacy data
    with open(input_file, 'r') as f:
        content = f.read()
        
    # Extract JavaScript array (assuming window.allRecommendations = [...])
    start_marker = 'window.allRecommendations = ['
    end_marker = '];'
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        logger.error("Could not find legacy data array")
        return
    
    start_idx += len(start_marker) - 1  # Include the opening bracket
    end_idx = content.rfind(end_marker)
    if end_idx == -1:
        logger.error("Could not find end of legacy data array")
        return
    
    json_content = content[start_idx:end_idx + 1]
    
    try:
        legacy_protocols = json.loads(json_content)
    except json.JSONDecodeError as e:
        logger.error(f"Failed to parse legacy JSON: {e}")
        return
    
    # Initialize migrator and validator
    migrator = LegacyDataMigrator()
    validator = ProtocolValidator(schema_file)
    
    # Migrate protocols
    enhanced_protocols = []
    validation_errors = []
    
    for i, legacy_protocol in enumerate(legacy_protocols):
        logger.info(f"Migrating protocol {i+1}/{len(legacy_protocols)}: {legacy_protocol.get('title', 'Unknown')}")
        
        try:
            enhanced_protocol = migrator.migrate_protocol(legacy_protocol)
            
            # Validate migrated protocol
            is_valid, errors = validator.validate_protocol(enhanced_protocol)
            if is_valid:
                enhanced_protocols.append(enhanced_protocol)
                logger.info(f"Successfully migrated and validated protocol: {enhanced_protocol['title']}")
            else:
                logger.warning(f"Validation failed for protocol: {enhanced_protocol['title']}")
                for error in errors:
                    logger.warning(f"  - {error}")
                validation_errors.append({
                    'protocol': enhanced_protocol['title'],
                    'errors': errors
                })
                # Still add the protocol but mark it for review
                enhanced_protocol['status'] = 'Under Review'
                enhanced_protocols.append(enhanced_protocol)
                
        except Exception as e:
            logger.error(f"Failed to migrate protocol {i+1}: {e}")
            validation_errors.append({
                'protocol': legacy_protocol.get('title', f'Protocol {i+1}'),
                'errors': [f"Migration error: {str(e)}"]
            })
    
    # Save enhanced protocols
    with open(output_file, 'w') as f:
        json.dump(enhanced_protocols, f, indent=2, ensure_ascii=False)
    
    # Save validation report
    if validation_errors:
        error_report_file = output_file.replace('.json', '_validation_errors.json')
        with open(error_report_file, 'w') as f:
            json.dump(validation_errors, f, indent=2)
        logger.warning(f"Validation errors saved to {error_report_file}")
    
    logger.info(f"Migration completed. {len(enhanced_protocols)} protocols saved to {output_file}")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) != 4:
        print("Usage: python data_validator.py <input_file> <output_file> <schema_file>")
        sys.exit(1)
    
    input_file, output_file, schema_file = sys.argv[1:4]
    migrate_legacy_data(input_file, output_file, schema_file)

