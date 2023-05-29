const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
const sortByStringLength = (a) => a.sort((a, b) => a.length - b.length)

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
const textScroller = (word) => {
  wordArray = []
  for (let i = 0; i < word.length; i++) {
    scrollWord = word.slice(i) + word.slice(0, i)
    wordArray.push(scrollWord)
  }
  wordArray.shift()  
  wordArray.push(word)

  return (word === "") ? [] : wordArray
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
//function betweenExtremes() { }
const betweenExtremes = (arrOfNums) => 
arrOfNums === String ? [] : 
arrOfNums.some((num) => typeof num !== 'number') ? arrOfNums : 
Math.max(...arrOfNums) - Math.min(...arrOfNums)

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
const morseCodeTranslator = (message, dictionary) => {
  code = message.toUpperCase().split("")
  morseCode = []
  for (let index of code) {
    for (let key in dictionary) {
      index === key ? morseCode.push(dictionary[key]) : message
    }
  }
  return morseCode.join(' ')
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
