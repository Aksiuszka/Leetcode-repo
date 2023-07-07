// Given an array containing all kinds of data, please implement a function deduplicate() to remove the duplicates.

// You should modify the array in place. Order doesn't matter.

const array = [1, 1, 2, 3, 1, 2, 1, 2, 3, 4, 3, 5, 6, 7, 8];

// Ani approach z setem
const removeDupes = (array) => {
  const removedDupes = new Set(array);
  console.log(removedDupes);
};

// Ania approach z includes
const removeDupes2 = (array) => {
  const newArr = [];
  array.forEach(element, (index) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  console.log(newArr);
};

// Ania approach z filtrem
const removeDupes3 = (array) => {
  const newArr = array.filter((element, idx) => array.indexOf(element) === idx);
  console.log(newArr);
};
