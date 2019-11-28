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

module.exports = {
  plugin: laabr,
  options
};
