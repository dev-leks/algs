// Binary Search (Medium)

// 1.O(n) solution
function binarySearch(nums: number[], start: number, end: number, target: number): number {
    let min = start;
    let max = end;

    while (min <= max) {
        const avg = Math.floor((min + max) / 2);
        const value = nums[avg];

        if (value === target) return avg;
        if (value > target) max = avg - 1;
        if (value < target) min = avg + 1;
    }

    return -1;
}

function findMinValueIndex(nums: number[]): number {
    let minValue = nums[0];
    let minIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minValue) {
            minValue = nums[i];
            minIndex = i;
        }
    }

    return minIndex;
}

function search(nums: number[], target: number): number {
    const minIndex = findMinValueIndex(nums);

    let leftResult = -1;
    leftResult = binarySearch(nums, 0, minIndex - 1, target);

    if (leftResult === -1) {
        return binarySearch(nums, minIndex, nums.length - 1, target);
    }

    return leftResult;
};
// --END-- O(n) solution

