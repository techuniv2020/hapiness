const quoteHandler = require('../handlers/quote');

module.exports = [{
  method: 'GET',
  path: '/quote',
  handler:  quoteHandler.getRandomQuote
}];
