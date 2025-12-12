// Binary Search, Easy
// Time: O(nlog(n))
// Space: O(1)
function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let min = 0;
    let max = nums.length - 1;
    let avg = 0;

    while (min <= max) {
        avg = Math.floor((min + max) / 2);

        if (nums[avg] === avg) {
            min = avg + 1
        } else {
            max = avg - 1
        }
    }

    return min;
};
