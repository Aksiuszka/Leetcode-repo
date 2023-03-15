/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (i < j) {
          pairs++;
        }
      }
    }
  }

  return pairs;
};
