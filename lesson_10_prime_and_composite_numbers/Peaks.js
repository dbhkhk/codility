function solution(A) {
    if (A.length < 3) return 0; // no peak

    // find index of all peaks
    const peakIndexes = [];
    for (let i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peakIndexes.push(i);
        }
    }
    const numOfPeaks = peakIndexes.length;
    if (numOfPeaks === 0) return 0; // no peak
    
    const eachBlockHasPeak = blockLength => {
        const blocks = A.length / blockLength;

        let blockIndex = 0;
        for (let i = 0; i < numOfPeaks; i++) {
            if (peakIndexes[i] >= blockIndex * blockLength && peakIndexes[i] <= (blockIndex + 1) * blockLength - 1) {
                blockIndex++;
            }
        }
        if (blockIndex === blocks) return true;
        return false;
    };
    
    // num of blocks <= num of peaks
    for (let blocks = numOfPeaks; blocks > 0; blocks--) {
        if (A.length % blocks === 0) {
            const blockLength = A.length / blocks;
            if (eachBlockHasPeak(blockLength)) return blocks;
        }
    }
    return 0;
}