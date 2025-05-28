// Combine all recommendation parts into a single file
document.addEventListener('DOMContentLoaded', function() {
  // Load all recommendation parts
  const script1 = document.createElement('script');
  script1.src = 'data/recommendations_part1.js';
  document.head.appendChild(script1);
  
  const script2 = document.createElement('script');
  script2.src = 'data/recommendations_part2.js';
  document.head.appendChild(script2);
  
  const script3 = document.createElement('script');
  script3.src = 'data/recommendations_part3.js';
  document.head.appendChild(script3);
  
  // Wait for all scripts to load before initializing
  let loadedScripts = 0;
  const totalScripts = 3;
  
  function checkAllLoaded() {
    loadedScripts++;
    if (loadedScripts === totalScripts) {
      initializeApp();
    }
  }
  
  script1.onload = checkAllLoaded;
  script2.onload = checkAllLoaded;
  script3.onload = checkAllLoaded;
  
  function initializeApp() {
    // Combine all recommendations from the different parts
    const allRecommendations = [
      ...window.recommendations_part1 || [],
      ...window.recommendations_part2 || [],
      ...window.recommendations_part3 || []
    ];
    
    // Now initialize the app with the combined recommendations
    initializeWithRecommendations(allRecommendations);
  }
  
  function initializeWithRecommendations(recommendations) {
    // Get DOM elements
    const recommendationsContainer = document.getElementById('recommendations-container');
    const searchInput = document.getElementById('search-input');
    const domainFilter = document.getElementById('domain-filter');
    const roleFilter = document.getElementById('role-filter');
    const modal = document.getElementById('recommendation-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    
    // Extract unique domains and roles for filters
    const domains = [...new Set(recommendations.map(rec => rec.domain))].sort();
    const roles = [...new Set(recommendations.map(rec => rec.role))].sort();
    
    // Populate filter dropdowns
    domainFilter.innerHTML = '<option value="">All Domains</option>';
    domains.forEach(domain => {
      domainFilter.innerHTML += `<option value="${domain}">${domain}</option>`;
    });
    
    roleFilter.innerHTML = '<option value="">All Roles</option>';
    roles.forEach(role => {
      roleFilter.innerHTML += `<option value="${role}">${role}</option>`;
    });
    
    // Function to display recommendations
    function displayRecommendations(recs) {
      // Group recommendations by domain
      const recsByDomain = {};
      recs.forEach(rec => {
        if (!recsByDomain[rec.domain]) {
          recsByDomain[rec.domain] = [];
        }
        recsByDomain[rec.domain].push(rec);
      });
      
      // Clear container
      recommendationsContainer.innerHTML = '';
      
      // Display recommendations grouped by domain
      Object.keys(recsByDomain).sort().forEach(domain => {
        // Create domain section
        const domainSection = document.createElement('div');
        domainSection.className = 'domain-section';
        domainSection.innerHTML = `<h2 class="domain-title">${domain}</h2>`;
        
        // Group by role within domain
        const recsByRole = {};
        recsByDomain[domain].forEach(rec => {
          if (!recsByRole[rec.role]) {
            recsByRole[rec.role] = [];
          }
          recsByRole[rec.role].push(rec);
        });
        
        // Display recommendations grouped by role within domain
        Object.keys(recsByRole).sort().forEach(role => {
          const roleSection = document.createElement('div');
          roleSection.className = 'role-section';
          roleSection.innerHTML = `<h3 class="role-title">${role}</h3>`;
          
          const roleCards = document.createElement('div');
          roleCards.className = 'recommendation-cards';
          
          recsByRole[role].forEach(rec => {
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            card.innerHTML = `
              <div class="card-header">
                <h3>${rec.title}</h3>
                <span class="evidence-level">Evidence Level: ${rec.evidence_level}</span>
              </div>
              <div class="card-body">
                <p>${rec.recommendation.substring(0, 150)}${rec.recommendation.length > 150 ? '...' : ''}</p>
              </div>
              <div class="card-footer">
                <span class="role-tag">${rec.role}</span>
                <button class="view-details-btn" data-id="${rec.id}">View Details</button>
              </div>
            `;
            roleCards.appendChild(card);
          });
          
          roleSection.appendChild(roleCards);
          domainSection.appendChild(roleSection);
        });
        
        recommendationsContainer.appendChild(domainSection);
      });
      
      // No results message
      if (recs.length === 0) {
        recommendationsContainer.innerHTML = '<div class="no-results">No recommendations found matching your criteria.</div>';
      }
      
      // Add event listeners to view details buttons
      document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const recId = parseInt(this.getAttribute('data-id'));
          const rec = recommendations.find(r => r.id === recId);
          if (rec) {
            showRecommendationDetails(rec);
          }
        });
      });
    }
    
    // Function to show recommendation details in modal
    function showRecommendationDetails(rec) {
      modalContent.innerHTML = `
        <h2>${rec.title}</h2>
        <div class="modal-meta">
          <span class="modal-domain">Domain: ${rec.domain}</span>
          <span class="modal-role">Role: ${rec.role}</span>
          <span class="modal-evidence">Evidence Level: ${rec.evidence_level}</span>
        </div>
        <div class="modal-section">
          <h3>Recommendation</h3>
          <p>${rec.recommendation}</p>
        </div>
        <div class="modal-section">
          <h3>Implementation</h3>
          <p>${rec.implementation}</p>
        </div>
        <div class="modal-section">
          <h3>Expected Outcomes</h3>
          <p>${rec.expected_outcomes}</p>
        </div>
        <div class="modal-section">
          <h3>Target Population</h3>
          <p>${rec.target_population}</p>
        </div>
        <div class="modal-section">
          <h3>Cost Effectiveness</h3>
          <p>${rec.cost_effectiveness}</p>
        </div>
        <div class="modal-section">
          <h3>Citation</h3>
          <p>
            ${rec.citation.authors} (${rec.citation.year}). 
            ${rec.citation.title}. 
            <em>${rec.citation.journal}</em>, 
            ${rec.citation.volume}${rec.citation.issue ? '(' + rec.citation.issue + ')' : ''}, 
            ${rec.citation.pages}.
            ${rec.citation.doi ? 'DOI: ' + rec.citation.doi : ''}
            ${rec.citation.url ? `<br><a href="${rec.citation.url}" target="_blank">View Source</a>` : ''}
          </p>
        </div>
      `;
      modal.style.display = 'block';
    }
    
    // Event listeners for filters and search
    function filterRecommendations() {
      const searchTerm = searchInput.value.toLowerCase();
      const selectedDomain = domainFilter.value;
      const selectedRole = roleFilter.value;
      
      const filtered = recommendations.filter(rec => {
        const matchesDomain = !selectedDomain || rec.domain === selectedDomain;
        const matchesRole = !selectedRole || rec.role === selectedRole;
        const matchesSearch = !searchTerm || 
          rec.title.toLowerCase().includes(searchTerm) || 
          rec.recommendation.toLowerCase().includes(searchTerm);
        
        return matchesDomain && matchesRole && matchesSearch;
      });
      
      displayRecommendations(filtered);
    }
    
    searchInput.addEventListener('input', filterRecommendations);
    domainFilter.addEventListener('change', filterRecommendations);
    roleFilter.addEventListener('change', filterRecommendations);
    
    // Close modal
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    // Initial display
    displayRecommendations(recommendations);
  }
});
