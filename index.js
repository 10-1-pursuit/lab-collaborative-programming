const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrOfStrings) {
  // let arr = [];
  for (let string of arrOfStrings) {
    console.log("New Arr Sorted By Length", arrOfStrings.sort(function (a, b) { return a.length - b.length }))

    if (string != " ")
      return arrOfStrings
  }
}
// return arrOfStrings.sort(function (a, b) { return a - b })

// return string.sort((a, b){ => a.length - b.length
// objs.sort((a,b) => a.last_nom - b.last_nom);
// return arrOfStrings.sort()
// }

// let string= " " ;
// return string 
// }

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(wordString) {
  let wordArr = [];
  for (let word of wordString) {
    console.log(wordString)
  }
  {
    if (wordString = " ") {
      return wordArr
    }
  }
  console.log(word)

}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
// function betweenExtremes(numbers) {
//   let emptyInput = []
//  if (numbers= " ") {
//   return emptyInput
//  if (numbers.forEach(element => {Number
  
//  }); (let eacheElement of numbers) {
  
//  }
//   // if (numbers.every(areNotNumbers( eachElement = Number )=> nonNumbers)) {
//   // }
  
// }

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
  // betweenExtremes,
  morseCodeTranslator,
};
