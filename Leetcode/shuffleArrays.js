/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const half = Math.ceil(nums.length / 2);
  const result = [];
  const part1 = nums.slice(0, half);
  const part2 = nums.slice(half, nums.length);
  for (let i = 0; i < part1.length; i++) {
    result.push(part1[i]);
    result.push(part2[i]);
  }
  return result;
};
