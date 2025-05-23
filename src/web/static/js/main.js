/**
 * Main JavaScript for Signal Evidence Library
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load domains
    loadDomains();
    
    // Load roles
    loadRoles();
    
    // Load featured recommendations
    loadFeaturedRecommendations();
});

/**
 * Load domains from API
 */
function loadDomains() {
    fetch('/api/domains')
        .then(response => response.json())
        .then(domains => {
            const domainGrid = document.getElementById('domain-grid');
            domainGrid.innerHTML = '';
            
            domains.forEach(domain => {
                const domainCard = createDomainCard(domain);
                domainGrid.appendChild(domainCard);
            });
        })
        .catch(error => {
            console.error('Error loading domains:', error);
            document.getElementById('domain-grid').innerHTML = '<p class="error">Error loading domains. Please try again later.</p>';
        });
}

/**
 * Create domain card element
 */
function createDomainCard(domain) {
    const card = document.createElement('div');
    card.className = 'domain-card';
    
    card.innerHTML = `
        <div class="domain-card-header">
            <h3>${domain.name}</h3>
        </div>
        <div class="domain-card-body">
            <p>${domain.description}</p>
            <a href="/recommendations?domain_id=${domain.id}">View Recommendations</a>
        </div>
    `;
    
    return card;
}

/**
 * Load roles from API
 */
function loadRoles() {
    fetch('/api/roles')
        .then(response => response.json())
        .then(roles => {
            const roleGrid = document.getElementById('role-grid');
            roleGrid.innerHTML = '';
            
            roles.forEach(role => {
                const roleCard = createRoleCard(role);
                roleGrid.appendChild(roleCard);
            });
        })
        .catch(error => {
            console.error('Error loading roles:', error);
            document.getElementById('role-grid').innerHTML = '<p class="error">Error loading roles. Please try again later.</p>';
        });
}

/**
 * Create role card element
 */
function createRoleCard(role) {
    const card = document.createElement('div');
    card.className = 'role-card';
    
    card.innerHTML = `
        <div class="role-card-header">
            <h3>${role.name}</h3>
        </div>
        <div class="role-card-body">
            <p>${role.description}</p>
            <a href="/recommendations?role_id=${role.id}">View Recommendations</a>
        </div>
    `;
    
    return card;
}

/**
 * Load featured recommendations from API
 */
function loadFeaturedRecommendations() {
    fetch('/api/recommendations?limit=6')
        .then(response => response.json())
        .then(recommendations => {
            const recommendationGrid = document.getElementById('featured-recommendations');
            recommendationGrid.innerHTML = '';
            
            if (recommendations.length === 0) {
                recommendationGrid.innerHTML = '<p class="no-results">No recommendations found.</p>';
                return;
            }
            
            recommendations.forEach(recommendation => {
                const recommendationCard = createRecommendationCard(recommendation);
                recommendationGrid.appendChild(recommendationCard);
            });
        })
        .catch(error => {
            console.error('Error loading recommendations:', error);
            document.getElementById('featured-recommendations').innerHTML = '<p class="error">Error loading recommendations. Please try again later.</p>';
        });
}

/**
 * Create recommendation card element
 */
function createRecommendationCard(recommendation) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    // Get domain and role names
    let domainName = 'Unknown Domain';
    let roleName = 'Unknown Role';
    
    // In a real implementation, these would be fetched or passed with the recommendation
    fetch(`/api/domains`)
        .then(response => response.json())
        .then(domains => {
            const domain = domains.find(d => d.id === recommendation.domain_id);
            if (domain) {
                domainName = domain.name;
                updateCardHeader();
            }
        });
    
    fetch(`/api/roles`)
        .then(response => response.json())
        .then(roles => {
            const role = roles.find(r => r.id === recommendation.role_id);
            if (role) {
                roleName = role.name;
                updateCardHeader();
            }
        });
    
    function updateCardHeader() {
        const headerElement = card.querySelector('.meta');
        if (headerElement) {
            headerElement.innerHTML = `
                <span>${domainName}</span>
                <span>${roleName}</span>
            `;
        }
    }
    
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
