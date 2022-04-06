const quotes = require("../../quotes/quotes.json");

function getQuoteToGuess() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex].toLowerCase();
}

module.exports = {
  getQuoteToGuess,
};
