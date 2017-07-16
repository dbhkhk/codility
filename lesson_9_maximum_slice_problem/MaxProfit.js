function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (A.length < 2) return 0;
    let minPrice = A[0], maxProfit = 0;
    for (let i = 1; i < A.length; i++) {
        maxProfit = Math.max(maxProfit, (A[i] - minPrice));
        minPrice = Math.min(minPrice, A[i]);
    }
    return maxProfit;
}