function solution(N) {
    let counter = 0;
    for (let i = Math.floor(Math.sqrt(N)); i > 0; i--) {
        if (N % i === 0) {
            if (N / i === i) counter++;
            else counter += 2;
        }
    }
    return counter;
}