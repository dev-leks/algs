const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = -Math.pow(2, 31);

// String, Medium (From Editorial, optimal for no BigInt support)
// Time: O(n)
// Space: O(1)
function myAtoi(s: string): number {
  const n = s.length;
  let index = 0;
  let sign = 1;
  let num = 0;

  while (s[index] === ' ' && index < n) {
    index++;
  }

  if (index >= n) return 0;

  if (s[index] === '-') {
    sign = -1;
    index++;
  } else if (s[index] === '+') {
    index++;
  }

  while (index < n && s[index] >= '0' && s[index] <= '9') {
    const digit = Number(s[index]);

    if (
      num > Math.floor(MAX_INT / 10) ||
      (num === Math.floor(MAX_INT / 10) && digit > MAX_INT % 10)
    ) {
      return sign === 1 ? MAX_INT : MIN_INT;
    }

    num = num * 10 + digit;
    index++;
  }

  return sign * num;
};

// String, Medium (Optimized)
// Time: O(n)
// Space: O(1)
function myAtoi2(s: string): number {
  const n = s.length;
  let index = 0;
  let sign = 1;
  let num = 0;

  while (s[index] === ' ' && index < n) {
    index++;
  }

  if (index >= n) return 0;

  if (s[index] === '-') {
    sign = -1;
    index++;
  } else if (s[index] === '+') {
    index++;
  }

  while (index < n && s[index] >= '0' && s[index] <= '9') {
    const digit = Number(s[index]);
    num = num * 10 + digit;
    index++;
  }

  num *= sign;

  if (num > MAX_INT) num = MAX_INT;

  if (num < MIN_INT) num = MIN_INT;

  return num;
};

// String, Medium (My solution)
// Time: O(n)
// Space: O(1)
function myAtoi1(s: string): number {
  let res = '';
  let sign = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === ' ') {
      if (!res.length && !sign) continue;
      else break;
    }

    if (['-', '+'].includes(char) && !sign && !res.length) {
      sign = char;
      continue;
    }

    if (!(/[0-9]/.test(char))) break;

    if (!sign) sign = '+';

    if (char === '0' && !res.length) continue;

    res += char;
  }

  let resNum = Number(res ? (sign === '-' ? sign + res : res) : '0');

  if (resNum > MAX_INT) resNum = MAX_INT;

  if (resNum < MIN_INT) resNum = MIN_INT;

  return resNum;
};
