// Dynamic programming (Bottom-up, tabulation), Medium
// Time: O(m*n)
// Space: O(m*n)
function longestCommonSubsequence1(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;

    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};

// Dynamic programming (Top-down, memoization), Medium
// Time: O(m*n)
// Space: O(m*n)
function longestCommonSubsequence2(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;

    const memo: number[][] = Array.from({ length: m }, () => new Array(n).fill(-1));

    function dp(i: number, j: number) {
        if (i < 0 || j < 0) return 0;

        if (memo[i][j] !== -1) return memo[i][j];

        if (text1[i] === text2[j]) {
            memo[i][j] = 1 + dp(i - 1, j - 1);
        } else {
            memo[i][j] = Math.max(dp(i, j - 1), dp(i - 1, j));
        }

        return memo[i][j];
    }

    return dp(m - 1, n - 1);
};
