const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */

function sortByStringLength(strings) {
  //used the "sort" method because it allows us to sort elements in an array
  return strings.sort((a, b) => a.length - b.length); //compared the lengths of two strings, "a" and "b".
}

let colors = ["Purple", "Blue", "Red", "Pink"]; //Created "colors" array representing four values
let sortedColors = sortByStringLength(colors); //This function will sort the colors in the array depending on the legnth
console.log(sortedColors); //colors sorted based on the length, from shortest to longest

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(greeting) {
  let allGreetings = [];

  for (let i = 0; i < greeting.length; i++) {
    let scrollingGreeting = greeting.slice(i) + greeting.slice(0, i);
    allGreetings.push(scrollingGreeting);
  }
  return allGreetings;
}

let greeting = "Hello";
let scrollingGreeting = textScroller(greeting);
console.log(scrollingGreeting);

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  //Math.max() and Math.min()method
  let largest = Math.max(...numbers);
  let smallest = Math.min(...numbers);
  let extreme = largest - smallest;
  return extreme;
}
let numbers = [8, 4, 10, 2, 6];
let result = betweenExtremes(numbers);
console.log(result);

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
