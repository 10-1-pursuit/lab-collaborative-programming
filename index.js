const morseCodeDictionary = require('./morse-code-dictionary.json');

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
	for (const word of words) {
		if (typeof word !== 'string') {
			return words;
		}
	}

	const sortedWords = words.sort((a, b) => {
		if (a.length < b.length) {
			return -1;
		} else if (a.length > b.length) {
			return 1;
		} else {
			return 0;
		}
	});

	return sortedWords;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */

// Plan:

// Goal: After getting an inputted `string`, go through the string character by character, and create an array where first the element is the string itself, then a new string is made from all the same characters but starting with each subsequent charcter and filling it in in that order but with the subsequent character being the first character in the new string. Finally, return the array.

// Steps:
// 1. Iterate over the entire inputted `word` string.
// 2. Create a new array to hold all the new strings.
// 3. Use the `.slice()` method and a template literal or string concatenation to make the new strings.
// 4. Keep slice original string with subsequent iterations of the next character becoming the first character.
// 5. Push each new string into the array.
// 6. Return the new array.

function textScroller(word) {}
const testWord = 'chookie';
console.log(textScroller(testWord));
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes() {}

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
