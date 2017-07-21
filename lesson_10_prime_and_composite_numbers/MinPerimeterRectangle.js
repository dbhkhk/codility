function solution(N) {
    for (let i = Math.floor(Math.sqrt(N)); i > 0; i--) {
        if (N % i === 0) {
            return 2 * (i + N / i);
        }
    }
}