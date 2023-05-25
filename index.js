const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */


function sortByStringLength(words) {

  const sortByStringLength= (a,b)=>{
    return element = a.length-b.length;
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
newArray = string.split(""); newArray1 = string.split("");newArray2 = string.split("");
newArray3 = string.split("");newArray4 = string.split("");//to split array
newArray[0] = string[4]//change index of string inside array lines "34-49"
   newArray1[1]= string[2]
   newArray1[0]= string[3]
   newArray1[3]= string[0]
   newArray1[4]= string[1]
   newArray1[2]= string[4]
      newArray2[0]= string[3]
      newArray2[1]= string[4]
      newArray2[2]= string[0]
      newArray2[3]= string[1]
      newArray2[4]= string[2]
        newArray3[0]= string[4]
        newArray3[1]= string[0]
        newArray3[2]= string[1]
        newArray3[3]= string[2]
        newArray3[4]= string[3]
        
    }
    return [newArray.join(""),newArray1.join(""),newArray2.join(""),newArray3.join(""),newArray4.join("")]//to remove the commas and put back into array
  }
  if(string === " "){
    return [];
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

  for(i=0; i<num.length; i++){//looping through nums array

    return (Math.max(...numbers)-(Math.min(...numbers)))//Difference of Largest num located and smallest num located
  }
  if(num===""){
    return [];
  }
  if(num.includes("string")){
    return num
  }
}
console.log(betweenExtremes(numbers))

/**
 * Returns string translated to morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */

function morseCodeTranslator(string){
       
  for(i=0; i <string.length ;i++){
    return string.toUpperCase().split("").map(element=>{
    
   
    if(element.toUpperCase().split("")[i] === Object.keys(morseCode) && Object.values(morseCode).join("") === string) {

 
   }
    })
  }
};

console.log(morseC("Hello World",morseCode));

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
