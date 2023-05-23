const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */


function sortByStringLength(words) {

  const sortByStringLength= (a,b)=>{
    return element = a-b;
  }
  return words.sort(sortByStringLength)
}
sortByStringLength(sentence)

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
const string= "Hello"


function textScroller(word) {
  const scramblerFunc = () => {
    for (i = 0; i < word.length; i++) {


      newArray = string.split("");//to split character in array
      newArray[0] = string[4]//replace first index of new array with last index of string
      newArray[4] = string[0]//replace  last index of new array with first index of string
    }
    return [newArray.join("")]//to remove the commas and pust back into array
  }
  return scramblerFunc()

}
console.log(textScroller(string))


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
const numbers = [3, 8, 44, -33, 20, 400, 6, 16, 2, 2, 2, 200];

function betweenExtremes(num) {

  for(i=0; i<num.length; i++){

    return (Math.max(...numbers)-(Math.min(...numbers)))
  }
}
console.log(betweenExtremes(numbers))

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
