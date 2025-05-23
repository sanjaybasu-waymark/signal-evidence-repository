/**
 * JavaScript for search page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    // If query parameter exists, perform search
    if (query) {
        document.getElementById('search-input').value = query;
        performSearch(query);
    }
    
    // Add event listener for search form
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchQuery = document.getElementById('search-input').value.trim();
        
        if (searchQuery) {
            performSearch(searchQuery);
            
            // Update URL with query parameter
            const url = new URL(window.location);
            url.searchParams.set('q', searchQuery);
            window.history.pushState({}, '', url);
        }
    });
});

/**
 * Perform search
 */
function performSearch(query) {
    document.getElementById('results-heading').textContent = `Search Results for "${query}"`;
    
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(results => {
            const container = document.getElementById('search-results-container');
            container.innerHTML = '';
            
            if (results.length === 0) {
                container.innerHTML = '<div class="no-results">No recommendations found matching your search.</div>';
                return;
            }
            
            // Get domain and role data for display
            Promise.all([
                fetch('/api/domains').then(response => response.json()),
                fetch('/api/roles').then(response => response.json())
            ])
            .then(([domains, roles]) => {
                // Create maps for quick lookup
                const domainMap = {};
                domains.forEach(domain => {
                    domainMap[domain.id] = domain.name;
                });
                
                const roleMap = {};
                roles.forEach(role => {
                    roleMap[role.id] = role.name;
                });
                
                // Display search results
                results.forEach(result => {
                    const card = createSearchResultCard(result, domainMap, roleMap);
                    container.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error loading domain/role data:', error);
            });
        })
        .catch(error => {
            console.error('Error performing search:', error);
            document.getElementById('search-results-container').innerHTML = 
                '<div class="error">Error performing search. Please try again later.</div>';
        });
}

/**
 * Create search result card
 */
function createSearchResultCard(result, domainMap, roleMap) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    const domainName = domainMap[result.domain_id] || 'Unknown Domain';
    const roleName = roleMap[result.role_id] || 'Unknown Role';
    
    card.innerHTML = `
        <div class="recommendation-card-header">
            <h3>${result.title}</h3>
            <div class="meta">
                <span>${domainName}</span>
                <span>${roleName}</span>
            </div>
        </div>
        <div class="recommendation-card-body">
            <p>${result.recommendation_text}</p>
        </div>
        <div class="recommendation-card-footer">
            <span class="evidence-level ${result.evidence_level ? result.evidence_level.toLowerCase() : 'unknown'}">
                Evidence Level: ${result.evidence_level || 'Unknown'}
            </span>
            <a href="/recommendation/${result.id}">View Details</a>
        </div>
    `;
    
    return card;
}
