const { createProxyMiddleware } = require('http-proxy-middleware');
console.log("🚀 Proxy setup loaded");

module.exports = function (app) {
  console.log("✅ Proxy middleware initialized");
  // For 8742
  app.use(
    '/api/middleware',
    createProxyMiddleware({
      target: 'http://192.168.15.35:8742',
      changeOrigin: true,
    })
  );

  // For 8743 — switch middleware
  app.use(
    '/switch/api/middleware',
    createProxyMiddleware({
      target: 'http://192.168.15.35:8743',
      changeOrigin: true,
      pathRewrite: {
        '^/switch': '', // removes /switch from the beginning
      },
    })
  );

  // For 8744 — integration platform
  app.use(
    '/integration/api/integrationplatformmw',
    createProxyMiddleware({
      target: 'http://192.168.15.35:8744',
      changeOrigin: true,
      pathRewrite: {
        '^/integration': '', // removes /integration from the beginning
      },
    })
  );
};
