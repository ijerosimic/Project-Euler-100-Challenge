const multiplesOf3and5 = num => {
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (isMultiple(i)) sum += i;
  }

  return sum;
};

const isMultiple = num => {
  return num % 3 === 0 || num % 5 === 0;
};

console.log(multiplesOf3and5(19564));
