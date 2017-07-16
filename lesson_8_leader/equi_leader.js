/*
If there are equi leaders, the leaders for the sub arrays must be the leader of the whole array.
If there is no leader for the whole array, there is no equi leader.
*/

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const findLeader = arr => {
        const len = arr.length;
        if (len === 0) return false;
        let value, size = 0;
        for (let i = 0; i < len; i++) {
            if (size === 0) {
                value = arr[i];
                size++;
            } else {
                if (arr[i] !== value) {
                    size--;
                } else {
                    size++;
                }
            }
        }
        if (size > 0) {
            let counter = 0;
            for (let i = 0; i < len; i++) {
                if (arr[i] === value) counter++;
            }
            if (counter > len / 2) return value;
            return false;
        } else {
            return false;
        }
    };
    
    const leader = findLeader(A);
    
    // no leader means no equi leader
    if (leader === false) return 0;
    
    const len = A.length;
    const leaderPositions = [];
    const prefixLeaders = [];
    for (let i = 0; i < len; i++) {
        if (A[i] === leader) leaderPositions.push(i);
        prefixLeaders[i] = leaderPositions.length;
    }
    const totalNumOfLeaders = leaderPositions.length;

    let counter = 0
    for (let i = 0; i < len - 1; i++) {
        if (prefixLeaders[i] > (i + 1) / 2 && (totalNumOfLeaders - prefixLeaders[i]) > (len - i - 1) / 2) counter++;
    }
    return counter;
}