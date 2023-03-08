"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area;
  // Write your code here
  area = Number(length) * Number(width);
  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (Number(length) + Number(width));
  return perimeter;
}

function vowelsAndConsonants(s) {
  const vowels = [];
  const consonants = [];
  let splitted = s.split("");
  for (let i = 0; i < splitted.length; i++) {
    if (
      (splitted[i] === "a") |
      (splitted[i] === "e") |
      (splitted[i] === "i") |
      (splitted[i] === "o") |
      (splitted[i] === "u")
    ) {
      vowels.push(splitted[i]);
    } else {
      consonants.push(splitted[i]);
    }
  }

  const trimmedConsonants = consonants.filter((item) => item.trim(""));
  const result = vowels.concat(trimmedConsonants);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].toString());
  }
}
