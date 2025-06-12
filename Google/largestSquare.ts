function findLargestSquare(binArr: number[][]) {
    const n = binArr.length;
    const m = binArr[0].length;

    const dp: number[][] = [];
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < m; j++) {
            dp[i][j] = 0;
        }
    }

    let maxSquare = -1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (binArr[i][j] === 0) continue;

            let left = 0;
            let right = 0;
            let diag = 0;

            if (i > 0) left = dp[i - 1][j];
            if (j > 0) right = dp[i][j - 1];
            if (i > 0 && j > 0) diag = dp[i - 1][j - 1];

            dp[i][j] = Math.min(left, right, diag) + 1;
            maxSquare = Math.max(maxSquare, dp[i][j]);
        }
    }

    return maxSquare;
}

const testMatrix = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];

console.log(findLargestSquare(testMatrix));
