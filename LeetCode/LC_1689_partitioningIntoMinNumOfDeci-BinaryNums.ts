// Greedy, Medium (The max digit is the min partition)
// Time: O(n)
// Space: O(1)
function minPartitions(n: string): number {
  let res = +n[0];

  for (let i = 1; i < n.length; i++) {
    const digit = +n[i];

    if (digit > res) {
      res = digit;
    }
  }

  return res;
};
