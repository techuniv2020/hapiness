const axios = require('axios');

const getRandomQuote = async() => {
  return await axios.get('http://api.quotable.io/random');
};

module.exports = {
  getRandomQuote
};