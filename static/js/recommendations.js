/**
 * JavaScript for recommendations page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const domainId = urlParams.get('domain_id');
    const roleId = urlParams.get('role_id');
    
    // Set initial filter values
    if (domainId) {
        document.getElementById('domain-filter').value = domainId;
    }
    
    if (roleId) {
        document.getElementById('role-filter').value = roleId;
    }
    
    // Load domains for filter
    loadDomainOptions();
    
    // Load roles for filter
    loadRoleOptions();
    
    // Load recommendations
    loadRecommendations();
    
    // Add event listeners for filters
    document.getElementById('domain-filter').addEventListener('change', loadRecommendations);
    document.getElementById('role-filter').addEventListener('change', loadRecommendations);
    document.getElementById('evidence-filter').addEventListener('change', loadRecommendations);
});

/**
 * Load domain options for filter
 */
function loadDomainOptions() {
    fetch('/api/domains')
        .then(response => response.json())
        .then(domains => {
            const domainFilter = document.getElementById('domain-filter');
            
            domains.forEach(domain => {
                const option = document.createElement('option');
                option.value = domain.id;
                option.textContent = domain.name;
                domainFilter.appendChild(option);
            });
            
            // Set selected value from URL if present
            const urlParams = new URLSearchParams(window.location.search);
            const domainId = urlParams.get('domain_id');
            if (domainId) {
                domainFilter.value = domainId;
            }
        })
        .catch(error => {
            console.error('Error loading domains:', error);
        });
}

/**
 * Load role options for filter
 */
function loadRoleOptions() {
    fetch('/api/roles')
        .then(response => response.json())
        .then(roles => {
            const roleFilter = document.getElementById('role-filter');
            
            roles.forEach(role => {
                const option = document.createElement('option');
                option.value = role.id;
                option.textContent = role.name;
                roleFilter.appendChild(option);
            });
            
            // Set selected value from URL if present
            const urlParams = new URLSearchParams(window.location.search);
            const roleId = urlParams.get('role_id');
            if (roleId) {
                roleFilter.value = roleId;
            }
        })
        .catch(error => {
            console.error('Error loading roles:', error);
        });
}

/**
 * Load recommendations based on filters
 */
function loadRecommendations() {
    const domainId = document.getElementById('domain-filter').value;
    const roleId = document.getElementById('role-filter').value;
    const evidenceLevel = document.getElementById('evidence-filter').value;
    
    // Build query parameters
    let queryParams = new URLSearchParams();
    if (domainId) {
        queryParams.append('domain_id', domainId);
    }
    if (roleId) {
        queryParams.append('role_id', roleId);
    }
    
    // Fetch recommendations
    fetch(`/api/recommendations?${queryParams.toString()}`)
        .then(response => response.json())
        .then(recommendations => {
            const container = document.getElementById('recommendations-container');
            container.innerHTML = '';
            
            // Filter by evidence level if selected
            if (evidenceLevel) {
                recommendations = recommendations.filter(rec => rec.evidence_level === evidenceLevel);
            }
            
            if (recommendations.length === 0) {
                container.innerHTML = '<p class="no-results">No recommendations found matching the selected filters.</p>';
                return;
            }
            
            // Get domain and role data for display
            Promise.all([
                fetch('/api/domains').then(response => response.json()),
                fetch('/api/roles').then(response => response.json())
            ])
            .then(([domains, roles]) => {
                // Create a map for quick lookup
                const domainMap = {};
                domains.forEach(domain => {
                    domainMap[domain.id] = domain.name;
                });
                
                const roleMap = {};
                roles.forEach(role => {
                    roleMap[role.id] = role.name;
                });
                
                // Display recommendations
                recommendations.forEach(recommendation => {
                    const card = createRecommendationCard(recommendation, domainMap, roleMap);
                    container.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error loading domain/role data:', error);
            });
        })
        .catch(error => {
            console.error('Error loading recommendations:', error);
            document.getElementById('recommendations-container').innerHTML = 
                '<p class="error">Error loading recommendations. Please try again later.</p>';
        });
}

/**
 * Create recommendation card element
 */
function createRecommendationCard(recommendation, domainMap, roleMap) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    const domainName = domainMap[recommendation.domain_id] || 'Unknown Domain';
    const roleName = roleMap[recommendation.role_id] || 'Unknown Role';
    
    card.innerHTML = `
        <div class="recommendation-card-header">
            <h3>${recommendation.title}</h3>
            <div class="meta">
                <span>${domainName}</span>
                <span>${roleName}</span>
            </div>
        </div>
        <div class="recommendation-card-body">
            <p>${recommendation.recommendation_text}</p>
        </div>
        <div class="recommendation-card-footer">
            <span class="evidence-level ${recommendation.evidence_level ? recommendation.evidence_level.toLowerCase() : 'unknown'}">
                Evidence Level: ${recommendation.evidence_level || 'Unknown'}
            </span>
            <a href="/recommendation/${recommendation.id}">View Details</a>
        </div>
    `;
    
    return card;
}
