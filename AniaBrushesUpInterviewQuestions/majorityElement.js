var majorityElement = function (nums) {
  const majorityArr = [];
  const frequency = nums.reduce((accumulator, current) => {
    return (
      accumulator[current]
        ? ++accumulator[current]
        : (accumulator[current] = 1),
      accumulator
    );
  }, {});

  const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  const frequencyKey = sortedFrequency[0][0];
  const newKey = sortedFrequency[0].flat(1)[0];
  for (let item of nums) {
    if (item === Number(newKey)) {
      majorityArr.push(item);
    }
  }
  if (nums.length === 1) {
    return nums[0];
  }
  if (majorityArr.length > nums.length / 2) {
    console.log(frequencyKey, "wygrane");
    return newKey;
  }
};
