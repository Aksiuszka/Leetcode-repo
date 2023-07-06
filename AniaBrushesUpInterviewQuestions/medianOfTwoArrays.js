// Given two sorted array of integers, please return the median.

// median([1,2],[3,4,5])
// // 3
// If there are even numbers, return the average.

// median([1,2],[3,4])
// // 2.5
// follow-up

const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = arr1.concat(arr2);

const getMedian = (arr) => {
  const divider = arr.length;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  const resultDivided = result / divider;
  console.log(resultDivided);
};
getMedian(arr3);
