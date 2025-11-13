// Dynamic programming, Easy
// Time: O(n*m)
// Space: O(n)
function maxRepeating(sequence: string, word: string): number {
  const n = sequence.length;
  const m = word.length;
  const dp: number[] = Array(n).fill(0);
  let maxCount = 0;

  for (let i = 0; i <= n - m; i++) {
    if (sequence.substring(i, i + m) === word) {
      if (i >= m) {
        dp[i] = dp[i - m] + 1;
      } else {
        dp[i] = 1;
      }

      maxCount = Math.max(maxCount, dp[i]);
    }

  }

  return maxCount;
};

// Brute force, Easy (My solution)
// Time: O(n^2)
// Space: O(1)
function maxRepeating1(sequence: string, word: string): number {
  const n = sequence.length;
  const m = word.length;
  let maxCount = 0;

  for (let i = 0; i < n; i++) {
    let count = 0;

    if (sequence[i] !== word[0]) continue;

    let p2 = 0;
    for (let j = i; j < n; j++) {
      if (sequence[j] !== word[p2]) break;

      if (p2 === m - 1) {
        p2 = 0;
        count++;
      } else {
        p2++;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
