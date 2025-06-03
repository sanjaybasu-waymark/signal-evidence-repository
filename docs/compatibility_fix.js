// Compatibility fix for GitHub Pages protocol display
// This script ensures protocols display correctly regardless of variable naming

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

// Log the actual count for debugging
console.log(`Total protocols/recommendations available: ${window.allProtocols.length > 0 ? 
  window.allProtocols.reduce((sum, category) => sum + (category.recommendations ? category.recommendations.length : 0), 0) : 
  "None"}`);
