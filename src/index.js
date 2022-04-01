const clearConsole = require("clear");
const prompt = require("prompt-sync")();

const quotes = require("../quotes/quotes.json");

const HEADER = "!! MANDRIL LYKKEHJULET !!";
const QUESTION =
  "Choose character [e.g. 'a', 'm', 'x' and os on] or try to guess the entire quote: ";

// Get quote to guess
const quoteToGuess = getQuoteToGuess();

let chosenCharsByUser = [];
let userQuoteGuess = "";

// While the user hasn't guessed to the quote keep playing
while (userQuoteGuess !== quoteToGuess) {
  keepPlayingGame();
}

printGoodbyeMessage();

function keepPlayingGame() {
  clearConsole();
  printHeader();
  displayQuoteToGuess();
  letUserGuessQuote();
}

function getQuoteToGuess() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex].toLowerCase();
}

function printHeader() {
  console.log(HEADER);
}

function displayQuoteToGuess() {
  let stringToPrint = "\n";

  for (let index in quoteToGuess) {
    if (quoteToGuess[index] === " ") {
      stringToPrint += "  ";
    } else if (chosenCharsByUser.includes(quoteToGuess[index])) {
      stringToPrint += `${quoteToGuess[index]} `;
    } else {
      stringToPrint += "_ ";
    }
  }

  console.log(stringToPrint + "\n");
}

function letUserGuessQuote() {
  let userGuess = prompt(QUESTION);
  checkUserGuess(userGuess.toLowerCase());
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

function printGoodbyeMessage() {
  console.log("HEEYYYYY!!! Du gættede det ..");
  console.log("Slesvig? Det tror nok vi hør!");
}
