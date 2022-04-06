const { getQuoteToGuess } = require("../src/utils/quotes");

describe("Testing quotes", () => {
  test("quote length to not be null", () => {
    expect(getQuoteToGuess().length).not.toBeNull();
  });
});
