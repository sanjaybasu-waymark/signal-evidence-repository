// Compatibility fix for GitHub Pages
// This script ensures compatibility between 'recommendations' and 'protocols' naming

// Check if allRecommendations exists but allProtocols doesn't
if (typeof allRecommendations !== 'undefined' && typeof allProtocols === 'undefined') {
    console.log('Converting allRecommendations to allProtocols for compatibility');
    window.allProtocols = allRecommendations;
}

// Check if allProtocols exists but allRecommendations doesn't
if (typeof allProtocols !== 'undefined' && typeof allRecommendations === 'undefined') {
    console.log('Creating allRecommendations reference for backward compatibility');
    window.allRecommendations = allProtocols;
}

// If neither exists, create empty arrays to prevent errors
if (typeof allProtocols === 'undefined' && typeof allRecommendations === 'undefined') {
    console.error('No protocol or recommendation data found. Creating empty arrays to prevent errors.');
    window.allProtocols = [];
    window.allRecommendations = [];
}

// Log the data status
console.log(`Protocol data status: ${typeof allProtocols !== 'undefined' ? allProtocols.length + ' protocols available' : 'No protocols found'}`);
console.log(`Recommendation data status: ${typeof allRecommendations !== 'undefined' ? allRecommendations.length + ' recommendations available' : 'No recommendations found'}`);
