function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const maxLeftSum = [], maxRightSum = [];
    maxLeftSum[1] = 0;
    maxRightSum[A.length - 2] = 0;
    for (let i = 2; i < A.length - 1; i++) {
        maxLeftSum[i] = Math.max(0 , (maxLeftSum[i - 1] + A[i - 1]));
        maxRightSum[A.length - i - 1] = Math.max(0, (maxRightSum[A.length - i] + A[A.length - i]));
    }
    
    let max = 0;
    for (let i = 1; i < A.length - 1; i++) {
        max = Math.max(max, maxLeftSum[i] + maxRightSum[i]);
    }
    return max;    
}