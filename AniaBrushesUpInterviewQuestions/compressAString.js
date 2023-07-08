// Given a string, compress the repeating letters with count number

// compress('a') // 'a'
// compress('aa') // 'a2'
// compress('aaa') // 'a3'
// compress('aaab') // 'a3b'
// compress('aaabb') // 'a3b2'
// compress('aaabba') // 'a3b2a'

const compress = (str) => {
  const arr = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      arr.push(str[i]);

      if (counter > 1) {
        arr.push(counter);
      }
      counter = 1;
    }
  }
  return arr.join("");
};
compress("a"); // 'a'
compress("aa"); // 'a2'
compress("aaa"); // 'a3'
compress("aaab"); // 'a3b'
compress("aaabb"); // 'a3b2'
compress("aaabba"); // 'a3b2a'
