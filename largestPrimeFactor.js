const largestPrimeFactor = (num) => {
    let prime = 2;
    while (prime <= num) {
        if (num % prime === 0) {
            num = num / prime;
        } else {
            prime++;
        }
    }

    return prime;
}