// Dynamic Programming (Optimized space), Easy
// Time: O(n)
// Space: O(1)
function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    let first = cost[0];
    let second = cost[1];

    for (let i = 2; i < n; i++) {
        const temp = second;
        second = cost[i] + Math.min(first, second);
        first = temp;
    }

    return Math.min(first, second);
};

// Dynamic Programming (1D), Easy (With LeetCode hints)
// Time: O(n)
// Space: O(n)
function minCostClimbingStairs1(cost: number[]): number {
    const dp: number[] = [];
    const n = cost.length;

    dp[n] = 0;

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1] ?? 0, dp[i + 2] ?? 0);
    }

    return Math.min(dp[0], dp[1]);
};

// Dynamic Programming (1D), Easy
// Time: O(n)
// Space: O(n)
function minCostClimbingStairs2(cost: number[]): number {
    const dp: number[] = [];
    const n = cost.length;

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[n - 1], dp[n - 2]);
};
