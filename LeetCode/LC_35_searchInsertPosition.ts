// Binary Search, Easy
// Time: O(log(n))
// Space: O(1)
function searchInsert(nums: number[], target: number): number {
    let min = 0;
    let max = nums.length - 1;

    while (min <= max) {
        const avg = Math.floor((min + max) / 2);

        if (nums[avg] === target) return avg;
        if (nums[avg] < target) min = avg + 1;
        if (nums[avg] > target) max = avg - 1;
    }

    return min;
};
