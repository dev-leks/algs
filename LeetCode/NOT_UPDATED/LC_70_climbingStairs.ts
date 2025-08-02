function climbStairs(n: number): number {
    let ways = 1
    let prevWays = 1

    for (let i = 0; i < n - 1; i++) {
        let temp = ways
        ways = ways + prevWays
        prevWays = temp
    }

    return ways
};
