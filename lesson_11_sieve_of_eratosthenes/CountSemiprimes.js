function solution(N, P, Q) {
    // N is the upper bound of the range
    // P and Q are arrays representing ranges
    const result = [];
    
    const sieve = n => {
        const prime = [0, 0], semiprime = [0, 0];
        for (let i = 2; i < n + 1; i++) {
            prime[i] = 1;
            semiprime[i] = 0;
        }

        for (let i = 2; i * i <= n; i++) {
            if (prime[i]) {
                for (let k = i * i; k <= n; k += i) {
                    prime[k] = 0;
                }
            }
        }

        for (let i = 2; i * i <= n; i++) {
            if (prime[i]) {
                for (let k = i * i; k <= n; k += i) {
                    if (k % i === 0 && prime[k / i]) {
                        semiprime[k] = 1
                    }
                }
            }
        }

        return semiprime;
    };
    const semiprime = sieve(N);

    
    // semiprimes <array> semiprimes[i] is the number of semiprimes which are less or equal to i
    const semiprimes = [0, 0];
    for (let i = 2; i < N + 1; i++) {
        if (semiprime[i]) {
            semiprimes[i] = semiprimes[i - 1] + 1;
        } else {
            semiprimes[i] = semiprimes[i - 1];
        }
    }
    
    const semiprimesWithin = (a, b) => {
        return semiprimes[b] - semiprimes[a - 1];
    };
    
    for (let i = 0; i < P.length; i++) {
        result[i] = semiprimesWithin(P[i], Q[i]);
    }
    
    return result;
}