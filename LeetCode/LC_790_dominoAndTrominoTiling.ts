const MODULO_CONSTANT = 1_000_000_007;

// Dynamic programming, Medium (Optimized space)
// Time: O(n)
// Space: O(1)
function numTilings(n: number): number {
    if (n === 0 || n === 1) return 1;
    if (n === 2) return 2;

    let dp0 = 1;
    let dp1 = 1;
    let dp2 = 2;

    for (let i = 3; i <= n; i++) {
        const current = (2 * dp2 + dp0) % MODULO_CONSTANT;
        dp0 = dp1;
        dp1 = dp2;
        dp2 = current;
    }

    return dp2;
};

// Dynamic programming, Medium (With help)
// Time: O(n)
// Space: O(n)
function numTilings1(n: number): number {
    const dp: number[]= [];

    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MODULO_CONSTANT;
    }

    return dp[n];
};
