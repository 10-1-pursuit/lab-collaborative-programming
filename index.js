const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrOfWords) {
  for (words of arrOfWords) {
    if (typeof words != "string") {
      return arrOfWords
    };
  };
  let sortedStringLength = arrOfWords.sort((a, b) => a.length - b.length)
  return sortedStringLength
};

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const arrOfSameWord = [];
  for (let i = word.length; i > word.length; i--) {
    const scrolledWord = word.slice(i) + word.slice(0, i);
    arrOfSameWord.push(scrolledWord);
  };
  //console.log(arrOfSameWord)
  return arrOfSameWord
};

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbersArr) {
  const HigestNum = Math.max(...numbersArr) // Using a spread op to access all the numbers and using .Math to find the largest
  const LowestNum = Math.min(...numbersArr) // Using a spread op to access all the numbers and using .Math to find the smallest
  if (numbersArr === "") {  // A hedge case: if someone gives us an empty string instead of array
    return [];
  } for (let nums of numbersArr) { // looping through to verify that they are numbers
    if (typeof nums != "number") {  
      return numbersArr;
    };
  };
  return HigestNum - LowestNum   // finding the distance by subraction on Higest to lowest
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
  
    //split the word into individual letters
    const words = message.toUpperCase().split(" ");
  
   // Map over each letter to get its Morse code rep 
    const morseCode = words.map((word) => {
      const letters = word.split("");
      const morseWord = letters.map((letter) => dictionary[letter]).join(" ");
     // Return the Morse code rep of the word 
      return morseWord;
    }).join(" ");
    
  
    // Return the complete Morse code rep of the message
    return morseCode;
  }
  

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
