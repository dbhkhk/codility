function solution(A) {
    const len = A.length;

    if (len < 3) return 0; // no peak

    // find all peaks
    const peaks = [];
    for (let i = 1; i < len - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);
    }
    const numOfPeaks = peaks.length;
    
    if (numOfPeaks < 2) return numOfPeaks; // no peak or 1 peak
    
    const flagsValid = flags => {
        let count = 1, last = peaks[0];
        for (let i = 1; i < numOfPeaks; i++) {
            if (peaks[i] - last >= flags) {
                count++;
                if (count >= flags) return true;
                last = peaks[i];
            }
        }
        
        return false;
    };
    
    // numOfPeaks >= 2

    /*
    (k - 1) * k <= len - 1
    possible maximum k is (Math.sqrt(len) + 1)
    */
    for (let flags = Math.min(numOfPeaks, Math.floor(Math.sqrt(len)) + 1); flags >= 2; flags--) {
        // check if flags is valid
        if (flagsValid(flags)) return flags;
    }
    
    return 1;
}