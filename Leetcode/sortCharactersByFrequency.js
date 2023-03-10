const sorter = (string) => {
  const map = new Map();

  // for(let i=0; i<string.length;i++){
  for (let i of string) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  const array = Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map(([i, f]) => i.repeat(f))
    .join("");
  console.log(array);
};
sorter("appearance!");
