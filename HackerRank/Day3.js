/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/

function getSecondLargest(nums) {
  const max = nums
    .join()
    .split(",")
    .sort((a, b) => a - b)
    .slice(-1);

  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max) {
      arr.push(nums[i]);
    }
  }
  const res = arr.sort((a, b) => a - b).slice(-1);

  return res[0];
}

//part2

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log("s.split is not a function");
  }
  console.log(s);
}
// part 3

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a === 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
}
