// Greedy, Easy
// Time: O(n)
// Space: O(1)
function balancedStringSplit(s: string): number {
  let count = 0;
  let curr = 0;

  for (const char of s) {
    curr += (char === 'R' ? 1 : -1);

    if (curr === 0) {
      count++;
    }
  }

  return count;
};
