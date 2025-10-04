// Dynamic programming (top-down) , Medium
// Time: O(n)
// Space: O(n)
function countVowelStrings1(n: number): number {
    const memo: Map<string, number> = new Map();

    function count(n: number, lastCharacter: number): number {
        if (n < 1) return 1;

        const key = `${n}-${lastCharacter}`;
        if (memo.has(key)) return memo.get(key)!;

        let answer = 0;
        for (let i = lastCharacter; i < 5; i++) {
            answer += count(n - 1, i);
        }

        memo.set(key, answer);

        return answer;
    }

    return count(n, 0);
};

// Dynamic programming (bottom-up), Medium (ChatGPT solution)
// Time: O(n)
// Space: O(n)
function countVowelStrings2(n: number): number {
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(6).fill(0));

    for (let i = 1; i <= 5; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 5; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[n][5];
};
