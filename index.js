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
  let scrolledArr = [];

  let wordArr = word.split(""); // this is final

  for (let i = 0; i < wordArr.length; i++) {
    wordArr.push(wordArr.shift());

    scrolledArr.push(wordArr.join(""));
  }
  return scrolledArr;
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
    if (typeof number !== "number") {
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
function morseCodeTranslator(message, dictionary) {
  const translatedMessage = [];

  for (let i = 0; i < message.length; i++) {
    const morseCode = message[i].toUpperCase().split("");

    const messageDictionaryCompared = dictionary[morseCode];
    if (messageDictionaryCompared) {
      translatedMessage.push(messageDictionaryCompared);
    }
  }
  return translatedMessage.join(" ");
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
