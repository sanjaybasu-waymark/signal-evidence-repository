/**
 * JavaScript for about page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load domains
    loadDomains();
    
    // Load roles
    loadRoles();
});

/**
 * Load domains for about page
 */
function loadDomains() {
    fetch('/api/domains')
        .then(response => response.json())
        .then(domains => {
            const domainsList = document.getElementById('about-domains-list');
            domainsList.innerHTML = '';
            
            const list = document.createElement('ul');
            
            domains.forEach(domain => {
                const item = document.createElement('li');
                item.innerHTML = `<strong>${domain.name}:</strong> ${domain.description}`;
                list.appendChild(item);
            });
            
            domainsList.appendChild(list);
        })
        .catch(error => {
            console.error('Error loading domains:', error);
            document.getElementById('about-domains-list').innerHTML = 
                '<p class="error">Error loading domains. Please try again later.</p>';
        });
}

/**
 * Load roles for about page
 */
function loadRoles() {
    fetch('/api/roles')
        .then(response => response.json())
        .then(roles => {
            const rolesList = document.getElementById('about-roles-list');
            rolesList.innerHTML = '';
            
            const list = document.createElement('ul');
            
            roles.forEach(role => {
                const item = document.createElement('li');
                item.innerHTML = `<strong>${role.name}:</strong> ${role.description}`;
                list.appendChild(item);
            });
            
            rolesList.appendChild(list);
        })
        .catch(error => {
            console.error('Error loading roles:', error);
            document.getElementById('about-roles-list').innerHTML = 
                '<p class="error">Error loading roles. Please try again later.</p>';
        });
}
