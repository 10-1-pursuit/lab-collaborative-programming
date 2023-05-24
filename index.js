const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  return words.sort((a, b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
let wordCombinations = []
if(word === ""){
  return wordCombinations
}
let wordArr = word.split("")
let firstLetter = wordArr.splice(0,1)
wordArr.push(firstLetter)
 let reverseWord = wordArr.join("")
wordCombinations.push(reverseWord)

while(reverseWord !== word){
  wordArr = reverseWord.split("");
  firstLetter = wordArr.splice(0,1)
  wordArr.push(firstLetter)
  reverseWord = wordArr.join("")
  wordCombinations.push(reverseWord)
}
return wordCombinations
}
    
// function textScroller(word) {
//   let wordCombinations = []
//   let comboString=""
//   let wordArr = word.split("")
  
//   for(let i = wordArr.length-1;i>=0;i--){
//   let index = wordArr[i]
//   comboString += index
  
  
//   }
//   wordCombinations.push(comboString)
//   console.log(wordCombinations)
//     return wordCombinations
//   }

  //   let wordsScroller = [];
  //   let characterArray = word.split("");
  //   let firstLetter = characterArray.shift();
  // characterArray.push(firstLetter)
  // wordsScroller.push(characterArray)
  //   return wordsScroller;
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  let emptyArr = [];
  for (let num of numbers) {
    if (typeof num === "string") {
      return numbers;
    }
  }
  let sort = numbers.sort((a, b) => a - b);
  let firstNumber = sort.shift();
  let lastNumber = sort.pop();
  return lastNumber - firstNumber;
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
  let morse;
  let morseCode = [];
  let upperCase = message.toUpperCase();
  let spacelessWord = upperCase.replace(" ", "");
  let singleCharacter = spacelessWord.split("");
  for (let letter of singleCharacter) {
    morseCode.push(dictionary[letter]);
    morse = morseCode.join(" ");
  }
  return morse;
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
