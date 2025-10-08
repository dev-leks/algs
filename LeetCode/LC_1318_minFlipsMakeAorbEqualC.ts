// Bit manipulation, Medium (Expected solution)
// Time: O(log(max(a,b,c)))
// Space: O(1)
function minFlips(a: number, b: number, c: number): number {
  let operations = 0;

  while (a || b || c) {
    const aBit = a & 1;
    const bBit = b & 1;
    const cBit = c & 1;

    if ((aBit | bBit) !== cBit) {
      if (cBit === 0) {
        operations += (aBit + bBit);
      } else {
        operations++;
      }
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return operations;
};

// Bit manipulation, Medium (My solution)
// Time: O(log(max(a,b,c)))
// Space: O(log(max(a,b,c)))
function minFlips1(a: number, b: number, c: number): number {
  const aBits = a.toString(2);
  const bBits = b.toString(2);
  const cBits = c.toString(2);

  const n = Math.max(aBits.length, bBits.length, cBits.length);

  let operations = 0;

  for (let i = 0; i < n; i++) {
    const aBit = +(aBits[aBits.length - i - 1] ?? 0);
    const bBit = +(bBits[bBits.length - i - 1] ?? 0);
    const cBit = +(cBits[cBits.length - i - 1] ?? 0);

    if ((aBit | bBit) !== cBit) {
      if (cBit === 0) {
        operations += (aBit && bBit ? 2 : 1);
      } else {
        operations += 1;
      }
    }
  }

  return operations;
};
