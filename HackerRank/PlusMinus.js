function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  //count how many items
  const arrLength = arr.length;
  //count positive, negative, zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
    //calculate ratio
  }
  // Write your code here
  console.log(positive / arrLength);
  console.log(negative / arrLength);
  console.log(zero / arrLength);
}
