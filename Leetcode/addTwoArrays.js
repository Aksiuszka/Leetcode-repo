const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

function addTwoNumbers(l1, l2) {
  const result = [];
  for (let i = 0; i < l1.length; i++) {
    console.log(i);
    result.push(l1[i] + l2[i]);
  }
  console.log(result);
}
addTwoNumbers(arr1, arr2);
