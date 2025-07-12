// Sliding window, Medium
// Time: O(n)
// Space: O(1)
function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let zeroesCount = 0;
    let maxCons = 0;

    while (right < nums.length) {
       if (nums[right] === 0) zeroesCount++;

        while (zeroesCount > k) {
            if (nums[left] === 0) zeroesCount--;
            left++;
        }

        maxCons = Math.max(maxCons, right - left + 1);

        right++;
    }

    return maxCons;
};
