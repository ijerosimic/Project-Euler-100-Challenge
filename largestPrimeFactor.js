const largestPrimeFactor = num => {
    let maxFactor = 0;
    let limit = Math.sqrt(num);

    for (let i = 2; i < limit; i++) {
        if (isPrime(i) && (num % i === 0))
            maxFactor = i;
    }

    return Array.from(Array(limit).keys())
        .filter(x => isPrime(x) && (num % x === 0))
        .map((x, y) => x - y);

    return maxFactor === 0 ?
        num :
        maxFactor;
}

const isPrime = n => {
    let limit = Math.sqrt(n);

    for (let i = 2; i < limit; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}