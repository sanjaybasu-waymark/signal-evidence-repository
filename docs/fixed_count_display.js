// Fixed count calculation for GitHub Pages protocol display
// This script ensures protocols display correctly regardless of variable naming and accurately counts all protocols

// Check if allRecommendations exists (from all_recommendations.js)
if (typeof allRecommendations !== 'undefined' && !Array.isArray(window.allProtocols)) {
  console.log("Compatibility fix: Using allRecommendations as data source");
  window.allProtocols = allRecommendations;
}

// Check if allProtocols exists (from protocols-data.js)
if (typeof allProtocols !== 'undefined' && !Array.isArray(window.allRecommendations)) {
  console.log("Compatibility fix: Using allProtocols as data source");
  window.allRecommendations = allProtocols;
}

// If neither exists, create empty arrays to prevent errors
if (typeof allRecommendations === 'undefined') {
  console.warn("Warning: No recommendations data found");
  window.allRecommendations = [];
}

if (typeof allProtocols === 'undefined') {
  console.warn("Warning: No protocols data found");
  window.allProtocols = [];
}

// Calculate and log the actual count for debugging
const totalProtocols = window.allProtocols.reduce((sum, category) => {
  if (category.recommendations && Array.isArray(category.recommendations)) {
    return sum + category.recommendations.length;
  }
  return sum;
}, 0);

console.log(`Total protocols/recommendations available: ${totalProtocols}`);

// Function to count protocols by domain
function countProtocolsByDomain(domain) {
  let count = 0;
  window.allProtocols.forEach(category => {
    if (category.recommendations) {
      count += category.recommendations.filter(protocol => protocol.domain === domain).length;
    }
  });
  return count;
}

// Function to count protocols by role
function countProtocolsByRole(role) {
  let count = 0;
  window.allProtocols.forEach(category => {
    if (category.recommendations) {
      count += category.recommendations.filter(protocol => protocol.role === role).length;
    }
  });
  return count;
}

// Function to get unique domains
function getUniqueDomains() {
  const domains = new Set();
  window.allProtocols.forEach(category => {
    if (category.recommendations) {
      category.recommendations.forEach(protocol => {
        if (protocol.domain) {
          domains.add(protocol.domain);
        }
      });
    }
  });
  return Array.from(domains);
}

// Function to get unique roles
function getUniqueRoles() {
  const roles = new Set();
  window.allProtocols.forEach(category => {
    if (category.recommendations) {
      category.recommendations.forEach(protocol => {
        if (protocol.role) {
          roles.add(protocol.role);
        }
      });
    }
  });
  return Array.from(roles);
}

// Update domain link counts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Update domain link counts
  document.querySelectorAll('.domain-link').forEach(link => {
    const domain = link.getAttribute('data-domain');
    if (domain) {
      const count = countProtocolsByDomain(domain);
      link.textContent = `${domain} (${count})`;
    }
  });

  // Update role link counts
  document.querySelectorAll('.role-link').forEach(link => {
    const role = link.getAttribute('data-role');
    if (role) {
      const count = countProtocolsByRole(role);
      link.textContent = `${role} (${count})`;
    }
  });

  // Update statistics
  const totalDomainsElement = document.getElementById('total-domains');
  const totalRolesElement = document.getElementById('total-roles');
  const totalProtocolsElement = document.getElementById('total-protocols');
  
  if (totalDomainsElement) {
    totalDomainsElement.textContent = getUniqueDomains().length;
  }
  
  if (totalRolesElement) {
    totalRolesElement.textContent = getUniqueRoles().length;
  }
  
  if (totalProtocolsElement) {
    totalProtocolsElement.textContent = totalProtocols;
  }
});
