const Hapi = require('@hapi/hapi');
const laabr = require('laabr');

const options = {
  formats: {
    onPostStart: '[:time] [:level] :message at :host[uri]',
    log: false 
  },
  tokens: { start:  () => '[start]' },
  indent: 0,
  colored: true
};

const setupServer = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  await server.register({
    plugin: laabr,
    options
  });
  return server;
};

module.exports = {
  setupServer
};
