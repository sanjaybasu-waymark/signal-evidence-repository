document.addEventListener('DOMContentLoaded', function() {
  // Initialize the recommendations display
  displayRecommendations(recommendations);
  
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
  
  displayRecommendations(filteredRecommendations);
}

function displayRecommendations(recs) {
  const container = document.getElementById('recommendations-container');
  
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
  
  recs.forEach(rec => {
    // Find domain and role names
    const domain = domains.find(d => d.id === rec.domain_id) || { name: 'Unknown Domain' };
    const role = roles.find(r => r.id === rec.role_id) || { name: 'Unknown Role' };
    
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
      showRecommendationDetails(rec);
    });
    
    container.appendChild(card);
  });
}

function showRecommendationDetails(rec) {
  const modal = document.getElementById('recommendation-modal');
  const domain = domains.find(d => d.id === rec.domain_id) || { name: 'Unknown Domain' };
  const role = roles.find(r => r.id === rec.role_id) || { name: 'Unknown Role' };
  
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
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
