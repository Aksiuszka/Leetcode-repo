var finalValueAfterOperations = function (operations) {
  var result = 0;
  for (let i = 0; i < operations.length; i++) {
    if ((operations[i] === "--X") | (operations[i] === "X--")) {
      result -= 1;
    } else if ((operations[i] === "++X") | (operations[i] === "X++")) {
      result += 1;
    }
  }

  return result;
};
