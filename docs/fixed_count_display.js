// Fixed count calculation for GitHub Pages
// This script ensures accurate protocol counts are displayed

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, running protocol count calculation");
    updateProtocolCounts();
});

// Fallback timer in case DOMContentLoaded already fired
setTimeout(function() {
    console.log("Running protocol count calculation from timer");
    updateProtocolCounts();
}, 1000);

function updateProtocolCounts() {
    // Ensure compatibility between allProtocols and allRecommendations
    if (typeof allProtocols === 'undefined' && typeof allRecommendations !== 'undefined') {
        window.allProtocols = allRecommendations;
        console.log("Created allProtocols from allRecommendations for compatibility");
    } else if (typeof allRecommendations === 'undefined' && typeof allProtocols !== 'undefined') {
        window.allRecommendations = allProtocols;
        console.log("Created allRecommendations from allProtocols for compatibility");
    }
    
    // Ensure we have protocols data to work with
    const protocols = window.allProtocols || window.allRecommendations || [];
    console.log("Total protocols/recommendations available: " + protocols.length);
    
    if (protocols.length === 0) {
        console.error("No protocols/recommendations data found!");
        return;
    }
    
    // Update repository description
    const repoDescription = document.querySelector('.repo-description');
    if (repoDescription) {
        repoDescription.innerHTML = "A comprehensive collection of protocols for non-physician population health team members. While physicians receive standard national guidelines from specialty societies, this repository is intended to support non-physician population health roles with evidence-based, peer-reviewed protocols, with a focus on marginalized and underserved patients.";
    }
    
    // Count protocols by domain
    const domainCounts = {};
    protocols.forEach(protocol => {
        // Handle domain counts
        if (protocol.domain) {
            if (!domainCounts[protocol.domain]) {
                domainCounts[protocol.domain] = 0;
            }
            domainCounts[protocol.domain]++;
        }
    });
    
    // Update domain counts in the UI
    Object.keys(domainCounts).forEach(domain => {
        const count = domainCounts[domain];
        const domainElement = document.querySelector(`.domain-count[data-domain="${domain}"]`);
        if (domainElement) {
            domainElement.textContent = count;
        }
    });
    
    // Consolidate roles
    const consolidatedRoles = {
        "Nurse Care Manager": ["Nurse Care Manager", "Primary Care Provider", "Nurse", "Care Manager"],
        "Social Worker (Clinical/Therapy)": ["Social Worker (Clinical/Therapy)", "Behavioral Health Specialist"]
    };
    
    // Count protocols by role (with consolidation)
    const roleCounts = {};
    protocols.forEach(protocol => {
        if (protocol.role) {
            let roleToCount = protocol.role;
            
            // Check if this role should be consolidated
            for (const [mainRole, aliases] of Object.entries(consolidatedRoles)) {
                if (aliases.includes(protocol.role)) {
                    roleToCount = mainRole;
                    break;
                }
            }
            
            if (!roleCounts[roleToCount]) {
                roleCounts[roleToCount] = 0;
            }
            roleCounts[roleToCount]++;
        }
    });
    
    // Update role counts in the UI
    Object.keys(roleCounts).forEach(role => {
        const count = roleCounts[role];
        const roleElement = document.querySelector(`.role-count[data-role="${role}"]`);
        if (roleElement) {
            roleElement.textContent = count;
        }
    });
    
    // Hide consolidated roles from the UI
    for (const [mainRole, aliases] of Object.entries(consolidatedRoles)) {
        aliases.forEach(alias => {
            if (alias !== mainRole) {
                const roleSection = document.querySelector(`.role-section[data-role="${alias}"]`);
                if (roleSection) {
                    roleSection.style.display = 'none';
                }
            }
        });
    }
    
    // Update total count
    const totalElement = document.getElementById('total-count');
    if (totalElement) {
        totalElement.textContent = protocols.length;
    }
    
    console.log("Protocol counts updated successfully");
}
