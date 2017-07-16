function solution(A, B) {
    const stack = [];
    
    const fish = i => {
        return {size: A[i], dir: B[i]};
    };
    
    const eat = newFish => {
        if (stack.length === 0) return stack.push(newFish);
        
        if (stack[stack.length - 1].dir === newFish.dir) return stack.push(newFish);
        
        if (stack[stack.length - 1].dir === 0) return stack.push(newFish);
        
        // lastFish is going downstream, newFish is going upstream
        while (stack.length && stack[stack.length - 1].dir) {
            const lastFish = stack.pop();
            
            if (lastFish.size > newFish.size) {
                return stack.push(lastFish);
            }
        }
        stack.push(newFish);
    };
    
    for (let i = 0; i < A.length; i++) {
        const newFish = fish(i);
        eat(newFish);
    }
    
    return stack.length;
}