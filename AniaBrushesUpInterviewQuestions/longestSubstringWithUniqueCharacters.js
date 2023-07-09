const longestUniqueSubstr = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) {
      break;
    } else {
      console.log(str[i]);
      arr.push(str[i]);
    }
  }
  return arr.join("");
};
longestUniqueSubstr("abcabc");
