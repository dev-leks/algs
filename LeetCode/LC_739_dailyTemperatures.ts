// Monotonic stack, Medium (Optimized - store only indexes in stack)
// Time: O(n)
// Space: O(n)
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const output: number[] = Array(n);
  const stack: number[] = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop();
    }

    output[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }

  return output;
};

// Monotonic stack, Medium
// Time: O(n)
// Space: O(n)
function dailyTemperatures1(temperatures: number[]): number[] {
  const n = temperatures.length;
  const output: number[] = Array(n);
  const stack: [number, number][] = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1][0] <= temperatures[i]) {
      stack.pop();
    }

    output[i] = stack.length ? stack[stack.length - 1][1] - i : 0;

    stack.push([temperatures[i], i]);
  }

  return output;
};
