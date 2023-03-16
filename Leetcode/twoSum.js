var twoSum = function (nums, target) {
  const arr = [];
  let j;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push([i, j]);
      }
    }
  }

  console.log(arr);
  return arr;
};

twoSum([1, 2, 3, 4, 5, 6], 9);
