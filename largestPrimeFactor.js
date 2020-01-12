const largestPrimeFactor = (num) => {
    let maxFactor = 0;
    let limit = Math.sqrt(num);

    for (let i = 2; i < limit; i++) {
        if (isPrime(i) && (num % i === 0))
            maxFactor = i;
    }

    return maxFactor === 0 ?
        num :
        maxFactor;
}

const isPrime = n => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0 &&
            i < Math.sqrt(n)) {
            return false;
        }

    }
    return true;
}