// Dynamic programming (Bottom-Up), Hard
// Time: O(m^2)
// Space: O(m^2)
function maximumScore(nums: number[], multipliers: number[]): number {
  const n = nums.length;
  const m = multipliers.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => Array.from({ length: m + 1 }, () => 0));

  for (let i = m - 1; i >= 0; i--) {
    for (let left = i; left >= 0; left--) {
      const mult = multipliers[i];
      const right = n - 1 - (i - left);

      dp[i][left] = Math.max(
        mult * nums[left] + dp[i + 1][left + 1],
        mult * nums[right] + dp[i + 1][left],
      );
    }
  }

  return dp[0][0];
};

// Dynamic programming (Top-Down), Hard
// Time: O(m^2)
// Space: O(m^2)
function maximumScore1(nums: number[], multipliers: number[]): number {
  const n = nums.length;
  const m = multipliers.length;
  const memo: number[][] = Array.from({ length: m + 1 }, () => Array(m + 1));

  function getMaxScore(i: number, left: number): number {
    if (i === m) return 0;

    const cacheKey = `${i};${left}`;
    if (memo[i][left] !== undefined) return memo[i][left];

    const mult = multipliers[i];
    const right = n - 1 - (i - left);
    const score = Math.max(
      mult * nums[left] + getMaxScore(i + 1, left + 1),
      mult * nums[right] + getMaxScore(i + 1, left),
    );

    memo[i][left] = score;

    return score;
  }

  return getMaxScore(0, 0);
};
