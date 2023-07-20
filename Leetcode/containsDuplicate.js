//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const duplicates = nums.filter((num, idx) => nums.indexOf(num) !== idx);
  console.log(duplicates);
  if (duplicates.length !== 0) return true;
  return false;
};
