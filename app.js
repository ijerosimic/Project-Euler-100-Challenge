const largestPrimeFactor = (num) => {
    let maxFactor = 0;
    let limit = Math.sqrt(num);

    if (num < 4)
        return num;

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i) && (num % i === 0))
            maxFactor = i;
    }

    return maxFactor;
}

const isPrime = n => {
    if (n > 2 &&
        n % 2 === 0)
        return false;

    let limit = Math.sqrt(n);

    for (let i = 2; i < limit; i++) {
        if (n % i === 0 ||
            n % 2 === 0)
            return false;
    }

    return true;
}