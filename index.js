const clear = require("clear");
const prompt = require("prompt-sync")();

const quotes = require("./quotes/quotes.json");

const HEADER = "!! MANDRIL LYKKEHJULET !!";
const QUESTION =
  "Choose character [e.g. 'a', 'm', 'x' and os on] or try to guess the entire quote: ";

// Get quote to guess
const randomIndex = Math.floor(Math.random() * quotes.length);
const quoteToGuess = quotes[randomIndex].toLowerCase();

let chosenCharsByUser = [];
let userQuoteGuess = "";

// While the user hasn't guessed to the quote keep playing
while (userQuoteGuess !== quoteToGuess) {
  clear();
  console.log(HEADER);
  displayQuoteToGuess();
  let userGuess = prompt(QUESTION);
  checkUserGuess(userGuess.toLowerCase());
}

console.log("HEEYYYYY!!! Du gættede det :)");

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

function checkUserGuess(userGuess) {
  if (userGuess.length === 1) {
    if (chosenCharsByUser.includes(userGuess)) {
      console.log("You've already chosen that character");
    } else {
      chosenCharsByUser.push(userGuess);
      chosenCharsByUser.sort();
    }
  } else {
    if (userGuess === quoteToGuess) {
      userQuoteGuess = userGuess;
    }
  }
}
