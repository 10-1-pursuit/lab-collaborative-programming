const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(list) {
  new_list = []

  if(new_list == list.length) {
    return new_list.sort()
  } else {
    return list.sort((a,b) => a.length - b.length);
  }
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  if (word === '') {
    return [];
  }
  const result = [];
  for (let i = 0; i < word.length; i++) {
    let combo = '';
    for (let j = i; j < i + word.length; j++) {
      combo += word[j % word.length];
    }
    result.push(combo);
  }
  return result;
}



/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (numbers === '') {
    return [];
  }
  const allNumbers = numbers.every((element) => typeof element === 'number');
  if (!allNumbers) {
    return numbers;
  }
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return max - min;
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

}



module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};

