const {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
} = require("../index.js");
const morseCodeDictionary = require("../morse-code-dictionary.json");

const sentence = [
  "a",
  "brand",
  "new",
  "month",
  "to",
  "celebrate",
  "the",
  "passage",
  "of",
  "time",
];

const numbers = [3, 8, 44, -33, 20, 400, 6, 16, 2, 2, 2, 200];

describe("sortByStringLength()", () => {
  test("should sort the strings by size from smallest to largest", () => {
    const actual = sortByStringLength(sentence);
    expected = [
      "a",
      "to",
      "of",
      "new",
      "the",
      "time",
      "brand",
      "month",
      "passage",
      "celebrate",
    ];
    expect(actual).toStrictEqual(expected);
  });
  test("should return the original array if any element is not a string", () => {
    const actual = sortByStringLength([1000, "a", "to"]);
    expected = [1000, "a", "to"];
    expect(actual).toStrictEqual(expected);
  });
});

describe("textScroller()", () => {
  test("should have all the combinations", () => {
    const actual = textScroller("Aloha");
    const expected = ["lohaA", "ohaAl", "haAlo", "aAloh", "Aloha"];
    for (let word of actual) {
      expect(expected.includes(word)).toEqual(true);
    }
  });
  test("Should scroll in order", () => {
    const actual = textScroller("Aloha");
    const expected = ["lohaA", "ohaAl", "haAlo", "aAloh", "Aloha"];
    expect(actual).toStrictEqual(expected);
  });
  test("Should return an empty array if the input is an empty string", () => {
    const actual = textScroller("");
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("betweenExtremes()", () => {
  test("Should return an empty array if the input is an empty string", () => {
    const actual = betweenExtremes(numbers);
    const expected = 433;
    expect(actual).toEqual(expected);
  });
  test("Should return the original array if all the elements are not all numbers", () => {
    const actual = betweenExtremes([1, "clock", 5, 10]);
    const expected = [1, "clock", 5, 10];
    expect(actual).toEqual(expected);
  });
});

describe("morseCodeTranslator()", () => {
  test("Should translate text to morse code", () => {
    const actual = morseCodeTranslator("Hello world", morseCodeDictionary);
    const expected = ".... . .-.. .-.. --- .-- --- .-. .-.. -..";
    expect(actual).toEqual(expected);
  });
});
