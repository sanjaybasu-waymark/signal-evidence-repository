/**
 * JavaScript for recommendation detail page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get recommendation ID from URL
    const pathParts = window.location.pathname.split('/');
    const recommendationId = pathParts[pathParts.length - 1];
    
    // Load recommendation details
    loadRecommendationDetails(recommendationId);
});

/**
 * Load recommendation details
 */
function loadRecommendationDetails(recommendationId) {
    fetch(`/api/recommendations/${recommendationId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Recommendation not found');
            }
            return response.json();
        })
        .then(recommendation => {
            // Get domain and role data
            Promise.all([
                fetch(`/api/domains`).then(response => response.json()),
                fetch(`/api/roles`).then(response => response.json())
            ])
            .then(([domains, roles]) => {
                // Find domain and role names
                const domain = domains.find(d => d.id === recommendation.domain_id);
                const role = roles.find(r => r.id === recommendation.role_id);
                
                const domainName = domain ? domain.name : 'Unknown Domain';
                const roleName = role ? role.name : 'Unknown Role';
                
                // Display recommendation details
                displayRecommendationDetails(recommendation, domainName, roleName);
            })
            .catch(error => {
                console.error('Error loading domain/role data:', error);
                displayRecommendationDetails(recommendation, 'Unknown Domain', 'Unknown Role');
            });
        })
        .catch(error => {
            console.error('Error loading recommendation:', error);
            document.getElementById('recommendation-container').innerHTML = 
                '<div class="error">Recommendation not found or error loading details.</div>';
        });
}

/**
 * Display recommendation details
 */
function displayRecommendationDetails(recommendation, domainName, roleName) {
    const container = document.getElementById('recommendation-container');
    
    // Format citation
    let citation = '';
    if (recommendation.citation_authors) {
        citation += recommendation.citation_authors;
    }
    if (recommendation.citation_year) {
        citation += ` (${recommendation.citation_year})`;
    }
    if (recommendation.citation_title) {
        citation += `. "${recommendation.citation_title}"`;
    }
    if (recommendation.citation_journal) {
        citation += `. ${recommendation.citation_journal}`;
    }
    if (recommendation.citation_doi) {
        citation += `. DOI: ${recommendation.citation_doi}`;
    }
    
    container.innerHTML = `
        <div class="recommendation-card-header">
            <h2>${recommendation.title}</h2>
            <div class="meta">
                <span><strong>Domain:</strong> ${domainName}</span>
                <span><strong>Role:</strong> ${roleName}</span>
                <span class="evidence-level ${recommendation.evidence_level ? recommendation.evidence_level.toLowerCase() : 'unknown'}">
                    <strong>Evidence Level:</strong> ${recommendation.evidence_level || 'Unknown'}
                </span>
            </div>
        </div>
        <div class="recommendation-card-body">
            <div class="detail-section">
                <h3>Recommendation</h3>
                <p>${recommendation.recommendation_text}</p>
            </div>
            
            <div class="detail-section">
                <h3>Implementation Guidance</h3>
                <p>${recommendation.implementation_guidance || 'No implementation guidance provided.'}</p>
            </div>
            
            <div class="detail-section">
                <h3>Expected Outcomes</h3>
                <p>${recommendation.expected_outcomes || 'No expected outcomes provided.'}</p>
            </div>
            
            <div class="detail-section">
                <h3>Target Population</h3>
                <p>${recommendation.target_population || 'General population'}</p>
            </div>
            
            <div class="detail-section">
                <h3>Cost Effectiveness</h3>
                <p>${recommendation.cost_effectiveness || 'No cost effectiveness data provided.'}</p>
            </div>
            
            <div class="detail-section">
                <h3>Citation</h3>
                <p>${citation}</p>
            </div>
        </div>
    `;
}
