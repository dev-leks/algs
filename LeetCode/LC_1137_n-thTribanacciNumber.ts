// Dynamic Programming (Optimized space), Easy (Expected solution)
// Time: O(n)
// Space: O(1)
function tribonacci(n: number): number {
    if (n <= 0) return 0;

    if (n === 1 || n === 2) return 1;

    let t0 = 0;
    let t1 = 1;
    let t2 = 1;

    for (let i = 3; i <= n; i++) {
        const next = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = next;
    }

    return t2;
};

// Dynamic Programming (1D), Easy (My solution)
// Time: O(n)
// Space: O(n)
function tribonacci1(n: number): number {
    const dp: number[] = [0, 1, 1];

    if (n < 3) return dp[n];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }

    return dp[n];
};
