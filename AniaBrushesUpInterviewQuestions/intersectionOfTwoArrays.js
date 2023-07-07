// Given two arrays, find the intersection(items occur in both arrays)

// arrays are not sorted, and might have duplicates.
// you can modify the arrays
// you can return the items in any order, but without duplicates.

const array = [1, 1, 2, 3, 1, 2, 1, 2, 3, 4, 3, 5, 6, 7, 8, 342];
const array1 = [1, 1, 2, 3, 1, 2, 1, 2, 3, 4, 3, 5, 6, 7, 8, 909, 675];

const getIntersection = (array, array2) => {
  let intersectors = [];
  for (let index = 0; index < array.length; index++) {
    if (array2.includes(array[index]) && !intersectors.includes(array[index])) {
      intersectors.push(array[index]);
    }
  }
  return intersectors;
};
