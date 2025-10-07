// Dynamic programming + Bit manipulation, Easy (Optimized solution)
// Time: O(n)
// Space: O(n)
function countBits(n: number): number[] {
  const dp: number[] = [0];

  for (let i = 1; i <= n; i++) {
    // i >> 1 -> i / 2
    // i & 1 -> 1 if odd, 0 if even
    dp.push(dp[i >> 1] + (i & 1));
  }

  return dp;
};

// Dynamic programming + Bit manipulation, Easy (My solution)
// Time: O(n)
// Space: O(n)
function countBits3(n: number): number[] {
  const dp: number[] = [0];

  let offset = 0;
  let bit = 1;

  for (let i = 1; i <= n; i++) {
    dp.push(dp[i - offset - bit] + bit);
    if (bit) offset++;
    bit ^= 1;
  }

  return dp;
};

// Bit manipulation, Easy (Optimized naive solution)
// Time: O(n)
// Space: O(1)
function countBits2(n: number): number[] {
  const output: number[] = [0];

  function countSetBites(n: number) {
    let count = 0;

    while (n) {
      count += n & 1;
      n >>= 1;
    }

    return count;
  }

  for (let i = 1; i <= n; i++) {
    output.push(countSetBites(i));
  }

  return output;
};

// Bit manipulation, Easy (My naive solution)
// Time: O(n*log n)
// Space: O(n)
function countBits1(n: number): number[] {
  const output: number[] = [0];

  for (let i = 1; i <= n; i++) {
    // 1. i to binary
    const binStr = Number(i).toString(2);
    // 2. count 1
    const count = binStr.split('').reduce((sum, curr) => sum + +curr, 0);
    // 3. push to output
    output.push(count);
  }

  return output;
};
