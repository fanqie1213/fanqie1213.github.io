// Vercel Speed Insights
// Load and inject Speed Insights for vanilla JavaScript
(function() {
  // Import the injectSpeedInsights function from the module
  import('https://cdn.jsdelivr.net/npm/@vercel/speed-insights@1/dist/index.mjs')
    .then(function(module) {
      module.injectSpeedInsights({
        debug: false
      });
    })
    .catch(function(error) {
      console.error('Failed to load Speed Insights:', error);
    });
})();
