//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

var rotate = function (nums, k) {
  let counter = 1;
  if (k === 0 || nums.length === 0) {
    return nums;
  }
  while (counter <= k) {
    let firstAndLast = nums[nums.length - 1];
    nums.pop();

    nums.unshift(firstAndLast);

    counter++;
  }
  return nums;
};
