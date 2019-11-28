const healthRoutes = require('./heatlh');
const todoRoutes = require('./todo');

module.exports = [
  ...healthRoutes,
  ...todoRoutes
];
