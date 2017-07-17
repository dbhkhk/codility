function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let maxSum = A[0], maxInclude = A[0];
    
    for (let i = 1; i < A.length; i++) {
        maxInclude = Math.max(maxInclude + A[i], A[i]);
        maxSum = Math.max(maxSum, maxInclude);
    }
    
    return maxSum;
}