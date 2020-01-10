const multiplesOf3and5 = num => {
  return Array.from(Array(num).keys())
    .filter(x => isMultiple(x))
    .reduce((acc, x) => acc + x)
};

const isMultiple = num => {
  return num % 3 === 0 || num % 5 === 0;
};