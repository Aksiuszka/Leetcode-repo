// You are given a list of sorted non-descending integer arrays, write a function to merge them into one sorted non-descending array.

// merge(
//   [
//     [1,1,1,100,1000,10000],
//     [1,2,2,2,200,200,1000],
//     [1000000,10000001],
//     [2,3,3]
//   ]
// )
const array = [
  [1, 1, 1, 100, 1000, 10000],
  [1, 2, 2, 2, 200, 200, 1000],
  [1000000, 10000001],
  [2, 3, 3],
];

const merge = (arrayList) => {
  return arrayList.flat(Infinity).sort((a, b) => a - b);
};
merge(array);

//task from leetcode. Easy

var merge2 = function (nums1, m, nums2, n) {
  const getProperArr = (arr, n) => {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  };
  const newNums1 = getProperArr(nums1, m);

  const newNums2 = getProperArr(nums2, n);

  const arrayList = newNums1.concat(newNums2).sort((a, b) => a - b);
  console.log(arrayList);
  return arrayList;
};
