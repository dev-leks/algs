// Dynamic programming, Medium (Optimized space)
// Time: O(n)
// Space: O(1)
function rob(nums: number[]): number {
    let first = 0;
    let second = 0;

    for (const num of nums) {
        const temp = second;
        second = Math.max((num + first), second);
        first = temp;
    }

    return second;
};

// Dynamic programming, Medium (My solution with help)
// Time: O(n)
// Space: O(n)
function rob1(nums: number[]): number {
    const n = nums.length;
    const dp: number[] = [];

    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max((nums[i - 1] + dp[i - 2]), dp[i - 1]);
    }

    return dp[dp.length - 1];
};
