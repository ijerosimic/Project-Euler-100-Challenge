const largestPrimeFactor = (num) => {
    let maxFactor = 0;
    let limit = Math.sqrt(num);

    if (isPrime(num))
        return num;

    for (let i = 2; i < limit; i++) {
        if (isPrime(i) && (num % i === 0))
            maxFactor = i;
    }

    return maxFactor;
}

const isPrime = n => {
    let limit = Math.sqrt(n);

    for (let i = 2; i < limit; i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}