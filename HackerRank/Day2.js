//part 1
const factorial = (number) => {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
};
// part2

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  const r = readLine();
  const area = PI * (r * r);
  const perimeter = 2 * PI * r;

  // Print the area of the circle:
  console.log(area);

  // Print the perimeter of the circle:
  console.log(perimeter);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

// PART 3

("use strict");

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

function getGrade(score) {
  let grade;
  if (score < 5) {
    grade = "F";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else {
    grade = "A";
  }

  return grade;
}

//Part 4

function getLetter(s) {
  let letter = s.slice(0, 1);

  switch (letter) {
    case "a" || "e" || "i" || "o" || "u":
      letter = "A";
      break;
    case "b" || "c" || "d" || "f" || "g":
      letter = "B";
      break;
    case "h" || "j" || "k" || "l" || "m":
      letter = "C";
      break;
    default:
      letter = "D";
      break;
  }
  return letter;
}
