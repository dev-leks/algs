function calc(num1: number, num2: number, operator: string): number {
  switch(operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }

  return 0;
}

function isDigit(str: string): boolean {
  return str >= '0' && str <= '99';
}

// Divide and Conquer, Recursion, Medium
// Time: O(n * 2^n)
// Space: O(2^n)
function diffWaysToCompute1(expression: string): number[] {
  if (!expression.length) return [];

  const results: number[] = [];

  if (expression.length === 1) {
    return [+expression];
  }

  if (expression.length === 2 && isDigit(expression[0])) {
    return [+expression];
  }

  for (let i = 0; i < expression.length; i++) {
    const currentChar = expression[i];

    if (isDigit(currentChar)) continue;

    const leftResults = diffWaysToCompute1(expression.slice(0, i));
    const rightResults = diffWaysToCompute1(expression.slice(i + 1));

    for (const leftValue of leftResults) {
      for (const rightValue of rightResults) {
        const result = calc(leftValue, rightValue, currentChar);
        results.push(result);
      }
    }
  }

  return results;
};

// Memoization, Recursion, Medium
// Time: O(n * 2^n)
// Space: O(n^2 * 2^n)
function diffWaysToCompute2(expression: string): number[] {
  const n = expression.length;
  const memo = Array.from({ length: n }, () => Array(n));

  function calcGroups(memo: number[][][], expression: string, start: number, end: number): number[] {
    if (memo[start][end]) return memo[start][end];

    if (!expression.length) return [];

    // 1-digit number
    if (start === end) {
      return [+expression[start]];
    }

    // 2-digits number
    if (end - start === 1 && isDigit(expression[start])) {
      return [+expression.slice(start, end + 1)];
    }

    const results: number[] = [];

    for (let i = start; i <= end; i++) {
      const currentChar = expression[i];

      if (isDigit(currentChar)) continue;

      const leftResults = calcGroups(memo, expression, start, i - 1);
      const rightResults = calcGroups(memo, expression, i + 1, end);

      for (const leftValue of leftResults) {
        for (const rightValue of rightResults) {
          const result = calc(leftValue, rightValue, currentChar);
          results.push(result);
        }
      }
    }

    memo[start][end] = results;

    return results;
  };

  return calcGroups(memo, expression, 0, n - 1);
}
