// Direct role consolidation fix for GitHub Pages
// This script directly modifies the DOM to consolidate roles in the UI
// It should be added to the index.html file just before the closing </body> tag

document.addEventListener('DOMContentLoaded', function() {
    console.log("Role consolidation script running...");
    
    // Wait for the page to fully load
    setTimeout(function() {
        // Function to update role links and hide empty roles
        function consolidateRoles() {
            console.log("Consolidating roles...");
            
            // Get all role links
            const roleLinks = document.querySelectorAll('a[href*="role="]');
            
            // Roles to consolidate
            const rolesToConsolidate = {
                'Primary Care Provider': 'Nurse Care Manager',
                'Nurse': 'Nurse Care Manager',
                'Care Manager': 'Nurse Care Manager',
                'Behavioral Health Specialist': 'Social Worker (Clinical/Therapy)'
            };
            
            // Process each role link
            roleLinks.forEach(link => {
                const linkText = link.textContent.trim();
                const roleName = linkText.split('(')[0].trim();
                
                // Check if this role should be consolidated
                if (rolesToConsolidate[roleName]) {
                    console.log(`Found role to consolidate: ${roleName} -> ${rolesToConsolidate[roleName]}`);
                    
                    // Hide this role link (it will be consolidated into another)
                    link.parentElement.style.display = 'none';
                    
                    // Find the target role link to update its count
                    const targetRoleName = rolesToConsolidate[roleName];
                    const targetRoleLinks = Array.from(roleLinks).filter(l => 
                        l.textContent.trim().startsWith(targetRoleName + ' ('));
                    
                    if (targetRoleLinks.length > 0) {
                        const targetLink = targetRoleLinks[0];
                        const currentCount = parseInt(targetLink.textContent.match(/\((\d+)\)/)[1]);
                        const thisCount = parseInt(link.textContent.match(/\((\d+)\)/)[1] || '0');
                        
                        // Update the target role count
                        if (!isNaN(currentCount) && !isNaN(thisCount)) {
                            const newCount = currentCount + thisCount;
                            targetLink.textContent = `${targetRoleName} (${newCount})`;
                            console.log(`Updated ${targetRoleName} count to ${newCount}`);
                        }
                    }
                }
            });
            
            // Update the repository description
            const descriptionElements = document.querySelectorAll('p');
            descriptionElements.forEach(p => {
                if (p.textContent.includes('evidence-based protocols for healthcare professionals')) {
                    p.textContent = "A comprehensive collection of protocols for non-physician population health team members. While physicians receive standard national guidelines from specialty societies, this repository is intended to support non-physician population health roles with evidence-based, peer-reviewed protocols, with a focus on marginalized and underserved patients.";
                    console.log("Updated repository description");
                }
            });
            
            console.log("Role consolidation complete");
        }
        
        // Run the consolidation
        consolidateRoles();
        
        // Also run after a delay to ensure it catches any dynamically loaded content
        setTimeout(consolidateRoles, 1000);
    }, 500);
});
