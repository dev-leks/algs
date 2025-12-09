// Bit manipulation, Easy
// Time: O(N + M)
// Space: O(max(N,M))
// BigInt is used to avoid overflows
// XOR is a sum of two binaries without taking carry into account.
// Carry is AND of two input numbers, shifted one bit to the left
function addBinary(a: string, b: string): string {
  let x = BigInt(`0b${a}`)
  let y = BigInt(`0b${b}`)

  while (y) {
    let answer = x ^ y;
    let carry = (x & y) << BigInt(1);

    x = answer;
    y = carry;
  }

  return x.toString(2);
};

// Math, Easy
// Time: O(max(N,M))
// Space: O(max(N,M))
function addBinary2(a: string, b: string): string {
  let aP = a.length - 1;
  let bP = b.length - 1;
  let bitsLeft = 0;
  let output = '';

  while (aP >= 0 || bP >= 0 || bitsLeft) {
    const aNum = Number(a[aP] ?? 0);
    const bNum = Number(b[bP] ?? 0);
    const sum = aNum + bNum + bitsLeft;

    output = sum % 2 + output;
    bitsLeft = Math.floor(sum / 2);

    aP--;
    bP--;
  }

  return output;
};

// String manipulation, Easy
// Time: O(max(N,M))
// Space: O(max(N,M))
function addBinary1(a: string, b: string): string {
  const aLength = a.length;
  const bLength = b.length;

  let carryOne = false;
  let output = '';

  for (let i = 0; i < Math.max(aLength, bLength); i++) {
    const aChar = a[aLength - i - 1] ?? '0';
    const bChar = b[bLength - i - 1] ?? '0';

    let sum = '';
    if (aChar === '1' && bChar === '1') {
      sum = carryOne ? '1' : '0';
      carryOne = true;
    } else if (aChar === '0' && bChar === '0') {
      sum = carryOne ? '1' : '0';
      carryOne = false;
    } else {
      sum = carryOne ? '0' : '1';
    }

    output = sum + output;
  }

  return (carryOne ? '1' : '') + output;
};
