const morseCodeDictionary = require("./morse-code-dictionary.json");
//Iris Beckham and Kenia Decoteau 
/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(stringArr) {
  const sortedStrings = [];
 stringArr.sort((a, b) => a.length - b.length)
  return stringArr;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
//hello -> elloH
function textScroller(word) {
  const scrollArray =[];
  const letters = word.split("")
  console.log(word)
  for(let i = 0; i < word.length; i++){
    letters.push(letters.shift())
    scrollArray.push(letters.join(''))
    console.log(letters)
      }
  console.log(scrollArray)
  return scrollArray;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  const high = Math.max(...numbers);
  const low = Math.min(...numbers);
  let diff = high -low ;

   return diff || numbers;

 }

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(string, dictionary) {
  let result = [];
  let words = string.split(" ");
  let letters = words.join('').split('');
  for(let letter of letters){
    result .push(dictionary[letter.toUpperCase()]);
    console.log(`letter: ${letter} morse: ${dictionary[letter.toUpperCase()]}`)
  }
  return result.join(" ");
 }

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
