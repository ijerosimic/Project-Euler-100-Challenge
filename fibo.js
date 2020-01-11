const fibo = limit => {
  let fibo = initFibo(limit);

  return fibo.filter(x => x % 2 === 0).reduce((acc, x) => acc + x);
};

const initFibo = limit => {
  let fibo = [1, 1];

  for (let i = 2; i < limit; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }

  return fibo;
};
