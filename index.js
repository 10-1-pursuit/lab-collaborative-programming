const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(array) {
  if (!array.every((element) => typeof element === "string")) {
    return array;
  }
  return array.sort((a, b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  if (word.length === 0) {
    return [];
  }
  const arr = [];
  const size = word.length;

  for (let i = 1; i <= size; i++) {
    const newWord = word.slice(i) + word.slice(0, i);
    arr.push(newWord);
  }

  return arr;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(array) {
  if (array.length === 0) {
    return [];
  }

  if (!array.every((num) => typeof num === "number")) {
    return array;
  }

  const difference = Math.max(...array) - Math.min(...array);
  return difference;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(msg, dic) {
  const allChar = msg.toUpperCase().split("");

  return allChar.reduce((morseCode, char) => {
    const charCode = char !== " " ? dic[char] + " " : "";
    return morseCode + charCode;
  }, "").slice(0, -1);
}

//console.log(morseCodeTranslator("HELLO WORLD", morseCodeDictionary));

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
