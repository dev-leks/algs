// Easy O(n)
function findLucky(arr: number[]): number {
    const frequencyMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        frequencyMap.set(arr[i], (frequencyMap.get(arr[i]) ?? 0) + 1);
    }

    let largestLucky = -1;
    
    frequencyMap.forEach((count, num) => {
        if (num == count && num > largestLucky) {
            largestLucky = num;
        }
    });

    return largestLucky;
};
