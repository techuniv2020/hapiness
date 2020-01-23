const quoteService = require('../services/quote');

const getRandomQuote = async(request, h) => {
  const quote = await quoteService.getRandomQuote();
  const {data: {content}} = quote;
  return h.response({
    quote: content
  }).code(200);
};

module.exports = {
  getRandomQuote,
};