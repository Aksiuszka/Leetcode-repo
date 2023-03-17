var addTwoNumbers = function (l1, l2) {
  const revertedL1 = Array.from(l1).reverse();
  const revertedL2 = Array.from(l2).reverse();
  let sum;
  let addition = 0;
  const arr = [];

  if (revertedL1.length >= revertedL2.length || addition !== 0) {
    for (let i = 0; i < revertedL1.length; i++) {
      sum = revertedL1[i] + revertedL2[i] + addition;
      //console.log(sum)
      addition = sum > 9 ? 1 : 0;
      //console.log(addition)
      let digit = sum % 10;
      arr.push(digit);
    }

    return arr.reverse();
  }
};
// but array
