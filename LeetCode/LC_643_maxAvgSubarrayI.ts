// Sliding window, Easy
// Space: O(1)
// Time: O(n)
function findMaxAverage(nums: number[], k: number): number {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxAvg = windowSum / k;

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i]
        const avg = windowSum / k;
        maxAvg = Math.max(maxAvg, avg);
    }
    
    return maxAvg;
};
