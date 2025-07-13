// Sliding window, Medium
// Time: O(n)
// Space: O(1)
function longestSubarray(nums: number[]): number {
    let left = 0;
    let right = 0;
    let zeroesCount = 0;
    let maxCount = 0;

    while (right < nums.length) {
        if (nums[right] === 0) zeroesCount++;

        while (zeroesCount > 1) {
            if (nums[left] === 0) zeroesCount--;
            left++;
        }

        maxCount = Math.max(maxCount, right - left);

        right++;
    }

    return maxCount;
};
