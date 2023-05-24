const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(string) {
  return string.sort((a, b) => a.length - b.length); //sort is a method that requires atleast 2 elements to compare with
} // This function basically compares a length and b length (two strings), subtracts length of b from length of a resulting in a negative value if 'a' should come before 'b', a positive value of 'a' should come after 'b' or 0 if 'a' and 'b' have same length

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
const empArr = [];

for (let i = 0; i < word.length; i++) {
  const scrolled = word.slice(i) + word.slice(0, i);
  empArr.push(scrolled);
}

while (empArr[0] == word) { // Checks if the first element of scrolledWords is equal to word parameter
  const firstWord = empArr.shift();  // remove first element of scrolledWords array and assign it to first word
  empArr.push(firstWord); // push adds firstWord back to the end of scrolledWords
}

return empArr;
}


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (!Array.isArray(numbers)) { // checks if numbers is an array or not
    return []; // if not return empty array
  }

  for (let number of numbers) { // for of loop iterates over number
    if (typeof number !== 'number') { // typeof returns the "type" of number variable, !== then checks if the type of number is not equal to number. 
      // If true, current element that is being iterated through is not a number, false means the current element is a number.
      return numbers; // this indicates that an element in the array is not a number.
    }
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const difference = max - min;

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
function morseCodeTranslator(message, dictionary) { 
const translatedMessage = []

for(i = 0; i < message.length; i++){
  const morseCode = message[i].toUpperCase().split("");

  const messageDictionaryCompared = dictionary[morseCode]; // Used bracket notation to compare dictionary with the created vaariable morseCode i.e("A" = ".-",)
  if ( messageDictionaryCompared ) { // 
    translatedMessage.push(messageDictionaryCompared);
  }  
  Expected: ".... . .-.. .-.. --- .-- --- .-. .-.. -.."
    Received: undefined
}
return translatedMessage.join(" ")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
