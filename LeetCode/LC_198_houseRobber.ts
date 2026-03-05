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
    if (!nums.length) return 0;

    if (nums.length === 1) return nums[0];

    const n = nums.length;
    const dp: number[] = [];

    dp[0] = 0;
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max((nums[i - 1] + dp[i - 2]), dp[i - 1]);
    }

    return dp[dp.length - 1];
};

function rob0(nums: number[]): number {
    if (!nums.length) return 0;

    const memo = new Map<number, number>();

    function dp(index: number): number {
        if (memo.has(index)) {
            return memo.get(index)!;
        }

        if (index === 0) {
            memo.set(0, nums[0]);
            return nums[0];
        }

        if (index === 1) {
            const val = Math.max(nums[0], nums[1]);
            memo.set(1, val);
            return val;
        }

        const val = Math.max(nums[index] + dp(index - 2), dp(index - 1));
        memo.set(index, val);

        return val;
    }

    return dp(nums.length - 1);
}
