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
