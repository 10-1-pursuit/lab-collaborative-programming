const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrayOfWords) {
  return arrayOfWords.sort((a, b) => a.length - b.length);
};

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  if (word === "") {
    return [];
  }
  let arrayOfWord =
    word.padEnd(word.length + 1, " ")
      .repeat(word.length)
      .trimEnd()
      .split(" ");


  let scrolledPositions = arrayOfWord
    .map((_, index) => {
      const movedWord = word.slice(index) + word.slice(0, index);
      return movedWord;;
    });

  scrolledPositions.push(scrolledPositions.shift())
  const result = scrolledPositions

  return result;
}



/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  let sortedArray = numbers.sort((a, b) => a - b);
  let sortedArrayIsNotAllNumbers = false

  sortedArray.forEach(element => {
    if (typeof element !== 'number') {
      sortedArrayIsNotAllNumbers = true;
    }
  });

  if (sortedArrayIsNotAllNumbers) {
    return numbers
  }


  let firstElement = sortedArray.shift();
  let lastElement = sortedArray.pop();
  return (lastElement) - (firstElement);
};

/**
 * Returns a morse code translation of the given message.
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary (use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, morseCodeDictionary) {
  let arrayOfCharacters;

  arrayOfCharacters = message.toUpperCase().split("")

  let arrayOfMorseCharacters = []

  for (let character of arrayOfCharacters) {
    if (morseCodeDictionary.hasOwnProperty(character)) {
      arrayOfMorseCharacters.push(morseCodeDictionary[character]);
    }

  }
  return arrayOfMorseCharacters.join(" ")

}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
