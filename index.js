const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrayOfStrings) {
  // let strLength = 0;
  // let newArray = [];
  // for (let i = 0; i < arrayOfStrings.length; i++) {
  //   // console.log(arrayOfStrings[i])
  //   if (arrayOfStrings[i].length > strLength) {
  //     strLength = arrayOfStrings[i]
  //     console.log(strLength)
  //   }
  // }

  const result = arrayOfStrings.sort((a, b) => {
    return a.length - b.length
  });
  return result;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller() {
  let emptyArr = [];

}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  const diff = (numbers) => Math.max(...numbers) - Math.min(...numbers);
  return diff(numbers) || numbers;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator() { }

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
