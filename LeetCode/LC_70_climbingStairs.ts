// Fibonacci number, Easy
// Time: O(n)
// Space: O(1)
function climbStairs2(n: number): number {
    if (n === 1) return 1;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }

    return second;
};

// Dynamic programming, Easy (Fibonacci number, Optimized space)
// Time: O(n)
// Space: O(1)
function climbStairs(n: number): number {
    let ways = 1;
    let prevWays = 1;

    for (let i = 0; i < n - 1; i++) {
        const temp = ways;
        ways = ways + prevWays;
        prevWays = temp;
    }

    return ways;
};

// Dynamic programming, Easy
// Time: O(n)
// Space: O(n)
function climbStairs1(n: number): number {
  const dp: number[] = [1, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
