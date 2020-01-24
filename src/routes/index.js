const healthRoutes = require('./heatlh');
const todoRoutes = require('./todo');
const quoteRoutes = require('./quote');

module.exports = [
  ...healthRoutes,
  ...todoRoutes,
  ...quoteRoutes,
];
