// Stack, Medium
// Time: O(n)
// Space: O(n)
function evalRPN(tokens: string[]): number {
  const numsStack: number[] = [];

  for (const token of tokens) {
    if (!isNaN(+token)) {
      numsStack.push(+token);
      continue;
    }

    const num2 = numsStack.pop()!;
    const num1 = numsStack.pop()!;
    let res = 0;

    if (token === '+') {
      res = num1 + num2;
    } else if (token === '-') {
      res = num1 - num2;
    } else if (token === '*') {
      res = num1 * num2;
    } else if (token === '/') {
      res = Math.trunc(num1 / num2);
    }

    numsStack.push(res);
  }

  return numsStack[numsStack.length - 1];
};
