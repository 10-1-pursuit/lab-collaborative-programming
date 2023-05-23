const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrOfWords) {
for(words of arrOfWords){
 if(typeof words != "string"){
  return arrOfWords
 }
}
let sortedStringLength = arrOfWords.sort((a,b) => a.length - b.length)
return sortedStringLength
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
const arrOfSameWord=[];
for(let i = word.length; i > word.length; i--){
const scrolledWord = word.slice(i) + word.slice(0,i);
arrOfSameWord.push(scrolledWord);
}
console.log(arrOfSameWord)
return arrOfSameWord
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbersArr) {
  const HigestNum = Math.max(...numbersArr)
  const LowestNum = Math.min(...numbersArr)
  if (numbersArr === "") {
    return [];
  } for (let nums of numbersArr) {
    if (typeof nums != "number") {
      return numbersArr;
    };
  };
  return HigestNum - LowestNum
};


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
