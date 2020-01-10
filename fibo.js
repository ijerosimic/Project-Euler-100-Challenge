const fibo = limit => {
  let fibo = initFibo(limit);

  return fibo
    .filter(x => isEven(x))
    .reduce((acc, x) => acc + x);
};

const initFibo = limit => {
  let fibo = [1, 2];

  for (let i = 2; i < limit; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }

  return fibo;
}

const isEven = num => {
  return num % 2 === 0;
}


console.log(fibo(10))