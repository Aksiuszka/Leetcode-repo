// String.prototype.trim() is commonly used when processing strings.

// It is very easy, can you implement your own one?

// There are many ways to do it, can you think of different approaches?

//really easy approach
const trim = (str) => {
  const iterable = str.split("");
  const filteredIterable = iterable.filter((item) => item !== " ").join("");
  return filteredIterable;
};

// with regexp, works better

function customTrim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
