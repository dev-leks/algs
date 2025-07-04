// Middle
// 1 approach (brut force) time: O(n^2) space: O(1)
//  1) loop in loop 2) add to res arr if more then floor(n/3) 3) reverse arr

// 2 approach (using hashmaps) time: O(n) space: O(n)
//  1) create hashmaps with frequency 
//  2) check every if more then floor(n/3) and push to res arr

// 3 approach (Moore's voting alg) time: O(n) space: O(1)
const findMajorityII = (arr: number[]) => {
    let firstCand = -1;
    let secondCand = -1;
    let firstCount = 0;
    let secondCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let cand = arr[i];
        
        if (firstCand === cand) {
            firstCount++;
        } else if (secondCand === cand) {
            secondCount++;
        } else if (firstCount === 0) {
            firstCand = cand;
            firstCount++;
        } else if (secondCount === 0) {
            secondCand = cand;
            secondCount++;
        } else {
            firstCount--;
            secondCount--;
        }
    }
    
    firstCount = 0;
    secondCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === firstCand) {
            firstCount++;
        }
        if (arr[i] === secondCand) {
            secondCount++;
        }
    }

    let res: number[] = [];
    if (firstCount > arr.length / 3) {
        res.push(firstCand);
    }
    if (secondCount > arr.length / 3 && firstCand !== secondCand) {
        res.push(secondCand);
    }
    
    if (res.length === 2 && res[0] > res[1]) {
        return [res[1], res[0]];
    }
    
    return res;
};
