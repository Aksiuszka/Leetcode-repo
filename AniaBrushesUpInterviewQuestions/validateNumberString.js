// Give a number string, check if it is valid number.

// By "valid", we mean if it validates as one of below formats:

// integer, such as '0', '-1'
// decimal number like '1.0', '-2.335'
// exponential notation -12.3e45
// Formats such as BigInt, Infinity, NaN, octal and hexadecimal .etc are out of scope, you can treat them as invalid.

// Pay attention to the sign + -.

function validateNumberString(str) {
  return !isNaN(str) && str !== "";
}
