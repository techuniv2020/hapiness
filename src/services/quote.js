const axios = require('axios');

const getRandomQuote = async (number) => {
  const numbers = [...Array(parseInt(number)).keys()];
  const quotePromises = numbers.map((_) => {
    return axios.get('http://api.quotable.io/random');
  });
  const quoteResponses = await Promise.all(quotePromises);
  const quotes = quoteResponses.map((quoteResponse) => {
    return quoteResponse.data.content;
  });
  return quotes;
};

module.exports = {
  getRandomQuote,
};
