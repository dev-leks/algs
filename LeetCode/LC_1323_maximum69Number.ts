// Math, Greedy, Easy (Without converting to string)
// Time: O(n)
// Space: O(1)
function maximum69Number(num: number): number {
  let firstSixIndex = -1;
  let temp = num;
  let index = 0;

  while (temp) {
    if (Math.floor(temp % 10) === 6) firstSixIndex = index;
    temp = Math.floor(temp / 10);
    index++;
  }

  if (firstSixIndex === -1) return num;

  return num + 3 * Math.pow(10, firstSixIndex);
};

// Greedy, Easy (Convert to array and replace 6 with 9)
// Time: O(n)
// Space: O(n)
function maximum69Number3(num: number): number {
  const nums = String(num).split('');

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === '6') {
      nums[i] = '9';
      break;
    }
  }

  return +nums.join('');
};

// Built-in methods, Greedy, Easy
// Time: O(n)
// Space: O(n)
function maximum69Number2(num: number): number {
  return +String(num).replace('6', '9');
};

// Math, Greedy, Easy (My solution with math only)
// Time: O(n)
// Space: O(n)
function maximum69Number1(num: number): number {
  const n = String(num).length;
  let maxNum = num;

  for (let power = n - 1; power >= 0; power--) {
    const k = Math.pow(10, power);
    const digit = Math.floor(num / k % 10);
    const replacedDigit = digit === 6 ? 9 : 6;
    const prefix = Math.floor(num / (k * 10)) * (k * 10);
    const newNum = prefix + replacedDigit * k + num % k;

    maxNum = Math.max(maxNum, newNum);
  }

  return maxNum;
};
