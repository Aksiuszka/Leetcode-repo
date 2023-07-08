// Suppose we have an array of items - A, and another array of indexes in numbers - B

// const A = ['A', 'B', 'C', 'D', 'E', 'F']
// const B = [1,   5,   4,   3,   2,   0]
// You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

// For above example A should be modified inline to following

// ['F', 'A', 'E', 'D', 'C', 'B']
// The input are always valid.

const A = ["A", "B", "C", "D", "E", "F"];
const B = [1, 5, 4, 3, 2, 0];

const sort = (a, b) => {
  const newOrder = [];
  for (let i = 0; i < b.length; i++) {
    newOrder.push({ [b[i]]: a[i] });
  }
  const sortedArrayByKeys = newOrder.sort((a, b) => {
    const keyA = parseInt(Object.keys(a)[0]);
    const keyB = parseInt(Object.keys(b)[0]);
    return keyA - keyB;
  });
  const result = sortedArrayByKeys.map((item) => [Object.values(item)]);
  return result.flat(2);
};
