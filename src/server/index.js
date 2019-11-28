const Hapi = require('@hapi/hapi');
const plugins = require('../plugins');

const setupServer = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  await server.register(plugins);
  return server;
};

module.exports = {
  setupServer
};
