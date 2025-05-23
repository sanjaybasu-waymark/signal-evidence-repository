document.addEventListener('DOMContentLoaded', function() {
  // Initialize the recommendations display
  displayRecommendationsByClusters();
  
  // Populate filter dropdowns
  populateFilters();
  
  // Set up event listeners
  setupEventListeners();
});

function populateFilters() {
  const domainSelect = document.getElementById('domain-filter');
  const roleSelect = document.getElementById('role-filter');
  
  // Add default "All" options
  domainSelect.innerHTML = '<option value="all">All Domains</option>';
  roleSelect.innerHTML = '<option value="all">All Roles</option>';
  
  // Populate domains
  domains.forEach(domain => {
    const option = document.createElement('option');
    option.value = domain.id;
    option.textContent = domain.name;
    domainSelect.appendChild(option);
  });
  
  // Populate roles
  roles.forEach(role => {
    const option = document.createElement('option');
    option.value = role.id;
    option.textContent = role.name;
    roleSelect.appendChild(option);
  });
}

function setupEventListeners() {
  // Filter change events
  document.getElementById('domain-filter').addEventListener('change', filterRecommendations);
  document.getElementById('role-filter').addEventListener('change', filterRecommendations);
  
  // Search input event
  document.getElementById('search-input').addEventListener('input', filterRecommendations);
  
  // Close modal when clicking the X
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('recommendation-modal').style.display = 'none';
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('recommendation-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function filterRecommendations() {
  const domainFilter = document.getElementById('domain-filter').value;
  const roleFilter = document.getElementById('role-filter').value;
  const searchQuery = document.getElementById('search-input').value.toLowerCase();
  
  const filteredRecommendations = recommendations.filter(rec => {
    // Apply domain filter
    const domainMatch = domainFilter === 'all' || rec.domain_id.toString() === domainFilter;
    
    // Apply role filter
    const roleMatch = roleFilter === 'all' || rec.role_id.toString() === roleFilter;
    
    // Apply search filter
    const searchMatch = 
      rec.title.toLowerCase().includes(searchQuery) || 
      rec.recommendation_text.toLowerCase().includes(searchQuery) ||
      rec.implementation_guidance.toLowerCase().includes(searchQuery);
    
    return domainMatch && roleMatch && searchMatch;
  });
  
  displayRecommendationsByClusters(filteredRecommendations);
}

function displayRecommendationsByClusters(recs = recommendations) {
  const container = document.getElementById('domain-sections');
  
  if (recs.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h3>No recommendations found</h3>
        <p>Try adjusting your filters or search criteria.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  // Group recommendations by domain
  const domainGroups = {};
  
  recs.forEach(rec => {
    const domainId = rec.domain_id;
    if (!domainGroups[domainId]) {
      domainGroups[domainId] = [];
    }
    domainGroups[domainId].push(rec);
  });
  
  // Sort domains by ID
  const sortedDomainIds = Object.keys(domainGroups).sort((a, b) => parseInt(a) - parseInt(b));
  
  // Create sections for each domain
  sortedDomainIds.forEach(domainId => {
    const domainRecs = domainGroups[domainId];
    const domain = domains.find(d => d.id === parseInt(domainId)) || { name: 'Unknown Domain' };
    
    // Create domain section
    const domainSection = document.createElement('div');
    domainSection.className = 'domain-section';
    
    // Create domain header
    const domainHeader = document.createElement('div');
    domainHeader.className = 'domain-header';
    domainHeader.innerHTML = `<h2>${domain.name}</h2>`;
    domainSection.appendChild(domainHeader);
    
    // Group recommendations by role within this domain
    const roleGroups = {};
    
    domainRecs.forEach(rec => {
      const roleId = rec.role_id;
      if (!roleGroups[roleId]) {
        roleGroups[roleId] = [];
      }
      roleGroups[roleId].push(rec);
    });
    
    // Sort roles by ID
    const sortedRoleIds = Object.keys(roleGroups).sort((a, b) => parseInt(a) - parseInt(b));
    
    // Create sections for each role within this domain
    sortedRoleIds.forEach(roleId => {
      const roleRecs = roleGroups[roleId];
      const role = roles.find(r => r.id === parseInt(roleId)) || { name: 'Unknown Role' };
      
      // Create role section
      const roleSection = document.createElement('div');
      roleSection.className = 'role-section';
      
      // Create role header
      const roleHeader = document.createElement('div');
      roleHeader.className = 'role-header';
      roleHeader.innerHTML = `<h3>${role.name}</h3>`;
      roleSection.appendChild(roleHeader);
      
      // Create recommendations container for this role
      const recommendationsContainer = document.createElement('div');
      recommendationsContainer.className = 'recommendations';
      
      // Add recommendation cards
      roleRecs.forEach(rec => {
        const card = createRecommendationCard(rec, domain, role);
        recommendationsContainer.appendChild(card);
      });
      
      roleSection.appendChild(recommendationsContainer);
      domainSection.appendChild(roleSection);
    });
    
    container.appendChild(domainSection);
  });
}

function createRecommendationCard(rec, domain, role) {
  const card = document.createElement('div');
  card.className = 'recommendation-card';
  card.innerHTML = `
    <div class="card-header">
      <h3>${rec.title}</h3>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="domain-tag">${domain.name}</span>
        <span class="role-tag">${role.name}</span>
        <span class="evidence-tag ${rec.evidence_level?.toLowerCase()}">${rec.evidence_level || 'N/A'}</span>
      </div>
      <div class="card-text">
        <p>${truncateText(rec.recommendation_text, 150)}</p>
      </div>
    </div>
  `;
  
  // Add click event to show modal with details
  card.addEventListener('click', function() {
    showRecommendationDetails(rec, domain, role);
  });
  
  return card;
}

function showRecommendationDetails(rec, domain, role) {
  const modal = document.getElementById('recommendation-modal');
  
  // Populate modal content
  document.getElementById('modal-title').textContent = rec.title;
  
  document.getElementById('modal-tags').innerHTML = `
    <span class="domain-tag">${domain.name}</span>
    <span class="role-tag">${role.name}</span>
    <span class="evidence-tag ${rec.evidence_level?.toLowerCase()}">${rec.evidence_level || 'N/A'}</span>
  `;
  
  document.getElementById('recommendation-text').textContent = rec.recommendation_text;
  document.getElementById('implementation-guidance').textContent = rec.implementation_guidance;
  document.getElementById('expected-outcomes').textContent = rec.expected_outcomes;
  document.getElementById('target-population').textContent = rec.target_population || 'Not specified';
  document.getElementById('cost-effectiveness').textContent = rec.cost_effectiveness || 'Not specified';
  
  document.getElementById('citation').innerHTML = `
    <p><strong>Authors:</strong> ${rec.citation_authors || 'Not specified'}</p>
    <p><strong>Title:</strong> ${rec.citation_title || 'Not specified'}</p>
    <p><strong>Journal:</strong> ${rec.citation_journal || 'Not specified'}</p>
    <p><strong>Year:</strong> ${rec.citation_year || 'Not specified'}</p>
    <p><strong>DOI:</strong> ${rec.citation_doi ? `<a href="https://doi.org/${rec.citation_doi}" target="_blank">${rec.citation_doi}</a>` : 'Not specified'}</p>
  `;
  
  // Display the modal
  modal.style.display = 'block';
}

function truncateText(text, maxLength) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
