const quotes = require("./quotes/quotes.json");

// Get quote to guess
const randomIndex = Math.floor(Math.random() * quotes.length);
const quoteToGuess = "Den pegede mod nord ik"; // const quoteToGuess = quotes[randomIndex];

let chosenCharsByUser = [];
let userQuoteGuess = "";

// First we diplay all the characters of the quote to guess with underscores or blanks
displayQuoteToGuess();

// Then the user gets to either choose a char or guess the entire quote

function displayQuoteToGuess() {
  let stringToPrint = "\n";

  for (let index in quoteToGuess) {
    if (quoteToGuess[index] === " ") {
      stringToPrint += "  ";
    } else {
      stringToPrint += "_ ";
    }
  }

  console.log(stringToPrint + "\n");
}
