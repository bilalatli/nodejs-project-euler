const primes = [];

const isPrime = (num) => {
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num !== 1;
};

const nextPrime = () => {
    if (primes.length === 0) {
        primes.push(2);
        return 2;
    }

    const lastPrime = primes[primes.length - 1];
    for (let i = lastPrime + 1; ; i++) {
        if (isPrime(i)) {
            primes.push(i);
            return i;
        }
    }
};

const getNthPrime = (n) => {
    if (n < primes.length) {
        return primes[n];
    } else {
        let prime;
        const maxIterate = n - primes.length;
        for (let i = 0; i < maxIterate; i++) {
            prime = nextPrime();
        }
        return prime;
    }
};

const solve = () => {
    return getNthPrime(10001);
};

console.log(`#7 Result : ${solve()}`);
