const {healthHandler} = require('../handlers/health');

module.exports = [{
  method: 'GET',
  path: '/health',
  handler: healthHandler,
}];
