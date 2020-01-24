const quoteService = require('../services/quote');

const getRandomQuote = async (request, h) => {
  const {query: {number}} = request;
  const quotes = await quoteService.getRandomQuote(number);
  return h
      .response({
        quotes,
      })
      .code(200);
};

module.exports = {
  getRandomQuote,
};
