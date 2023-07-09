// A palindromic string reads the same backward as forward, such as 'madam'.

// Now given a string, count how many substrings it has?

// Like 'madam', it has following palindromic strings:

// 'm'
// 'a'
// 'd'
// 'a'
// 'm'
// 'ada'
// 'madam'

const countPalindromicSubstr = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.substring(i, j);
      console.log(substr);
      if (substr === substr.split("").reverse().join("")) {
        counter++;
      }
    }
  }
  return counter;
};
countPalindromicSubstr("abacacacaca");
