// Two pointers, Hard (Expected solution)
// Time: O(n)
// Space: O(1)
function trap(height: number[]): number {
  if (height.length < 2) return 0;

  const n = height.length;

  let leftMax = 0;
  let rightMax = 0;
  let leftIndex = 0;
  let rightIndex = n - 1;
  let water = 0;

  while (leftIndex < rightIndex) {
    if (height[leftIndex] < height[rightIndex]) {
      if (height[leftIndex] >= leftMax) {
        leftMax = height[leftIndex];
      } else {
        water += leftMax - height[leftIndex];
      }
      leftIndex++;
    } else {
      if (height[rightIndex] >= rightMax) {
        rightMax = height[rightIndex];
      } else {
        water += rightMax - height[rightIndex];
      }
      rightIndex--;
    }
  }

  return water;
};

// Stack, Monotonic Stack, Hard (LeetCode solution)
// Time: O(n)
// Space: O(n)
function trap3(height: number[]): number {
  if (height.length < 2) return 0;

  const n = height.length;

  let water = 0;
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack[stack.length - 1];
      stack.pop();

      if (!stack.length) break;

      const dist = i - stack[stack.length - 1] - 1;
      const boundedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];

      water += dist * boundedHeight;
    }

    stack.push(i);
  }

  return water;
};

// Dynamic Programming, Hard
// Time: O(n)
// Space: O(n)
function trap2(height: number[]): number {
  if (height.length < 2) return 0;

  const n = height.length;

  const leftLimits = Array.from({ length: n }, () => 0);
  leftLimits[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftLimits[i] = Math.max(leftLimits[i - 1], height[i]);
  }

  const rightLimits = Array.from({ length: n }, () => 0);
  rightLimits[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightLimits[i] = Math.max(rightLimits[i + 1], height[i]);
  }

  let water = 0;
  for (let i = 1; i < n - 1; i++) {
    water += Math.min(leftLimits[i], rightLimits[i]) - height[i];
  }

  return water;
};

// Two pointers, Hard (My first solution)
// Time: O(n)
// Space: O(1)
function trap1(height: number[]): number {
  if (height.length < 2) return 0;

  const n = height.length;

  function getWater(heights: number[]): number {
    let leftIndex = 0;
    while (!heights[leftIndex] && leftIndex < n) {
      leftIndex++;
    }

    if (leftIndex >= n - 1) return 0;

    let rightIndex = leftIndex + 1;
    let water = 0;

    while (leftIndex < rightIndex && rightIndex < n) {
      const leftH = heights[leftIndex];
      const rightH = heights[rightIndex];

      if (rightH < leftH) {
        rightIndex++;
        continue;
      }

      if (rightIndex - leftIndex > 1) {
        const minH = Math.min(leftH, rightH);

        let currWater = 0;
        for (let i = leftIndex + 1; i < rightIndex; i++) {
          const h = Math.max(0, minH - heights[i]);

          currWater += h;
          height[i] = minH;
        }

        water += currWater;
      }

      leftIndex = rightIndex;
      rightIndex = leftIndex + 1;
    }

    return water;
  }

  return getWater(height) + getWater(height.reverse());
};

// Brute force, Hard
// Time: O(n^2)
// Space: O(1)
function trap0(height: number[]): number {
  if (height.length < 2) return 0;

  const n = height.length;

  let water = 0;
  for (let i = 1; i < n - 1; i++) {
    let leftMax = 0;
    for (let left = 0; left <= i; left++) {
      leftMax = Math.max(leftMax, height[left]);
    }

    let rightMax = 0;
    for (let right = n - 1; right >= i; right--) {
      rightMax = Math.max(rightMax, height[right]);
    }

    water += Math.min(leftMax, rightMax) - height[i];
  }

  return water;
};
