const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(string) {
  return string.sort((a, b) => a.length - b.length); // returns the length of the array from least to greatest
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings01
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */

function textScroller(word) {
  let emptyArr = []; // Empty aarray created that will hold our finished array

  let splitWord = word.split(""); // each letter is converted into its own index element of an array

  //splitWord.push(splitWord.shift());
  {
    splitWord.push(splitWord.shift());
    emptyArr.push(array.join(""));
  }
  return emptyArr;
}
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (!Array.isArray(numbers)) {
    return [];
  }

  for (let number of numbers) {
    if (typeof number !== "numbers") {
      return numbers;
    }
  }
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  let diff = max - min;

  return diff;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator() {}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
