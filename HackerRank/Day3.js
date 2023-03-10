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
