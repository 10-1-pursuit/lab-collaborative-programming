const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let wordArr = word.split('')
  let y = word.length
  let newArr = []
  for(let x = 0; x < y; x++){
    let temp = wordArr[0]
    let newWord = NaN
    wordArr.splice(0,1)
    wordArr.push(temp)
    newWord = wordArr.join('')
    newArr.push(newWord)
  }
  return newArr;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(arr) {
  min = 9999999999
  max = 0
  let allNum = true
  arr.forEach((num) => {
    if(typeof(num) !== 'number'){
      allNum = false
    }
    if(num > max){
      max = num;
    }
    if(num < min){
      min = num;
    }
    return;
  })
  if(allNum){
    return max - min
  }else{
    return arr;
  }
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
  let messageArr = message.split('')
  let morseArr = []
  let keys = Object.keys(dictionary)
  for(let x of messageArr){
    const y = keys.find(letter => letter.toLowerCase() === x.toLowerCase())
    if(!!y){
      morseArr.push(`${dictionary[y]} `)
    }
  }
  morseArr = morseArr.join('')
  morseArr = morseArr.split('')
  morseArr.pop()

  return morseArr.join('')
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
