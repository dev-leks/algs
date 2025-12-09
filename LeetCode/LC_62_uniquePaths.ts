// Dynamic Programming, Medium
// Time: O(m*n)
// Space: O(m*n)
function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(1))

    for (let col = 1; col < m; col++) {
        for (let row = 1; row < n; row++) {
            dp[col][row] = dp[col - 1][row] + dp[col][row - 1];
        }
    }

    return dp[m - 1][n - 1];
};

