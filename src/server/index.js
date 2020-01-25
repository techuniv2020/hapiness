const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');

const plugins = require('../plugins');
const routes = require('../routes');


const setupServer = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });
  await server.register(plugins);
  await server.validator(Joi);
  server.route(routes);
  return server;
};

module.exports = {
  setupServer,
};
