// Dynamic programming (Bottom-Up), Medium (Optimized space)
// Time: O(n+k), k is the max number in nums
// Space: O(n)
function deleteAndEarn(nums: number[]): number {
  let maxNum = 0;
  const points = new Map<number, number>();

  for (const num of nums) {
    points.set(num, (points.get(num) ?? 0) + num);
    maxNum = Math.max(maxNum, num);
  }

  let twoBack = 0;
  let oneBack = points.get(1) ?? 0;

  for (let i = 2; i <= maxNum; i++) {
    const temp = oneBack;
    oneBack = Math.max(oneBack, twoBack + (points.get(i) ?? 0));
    twoBack = temp;
  }

  return oneBack;
};

// Dynamic programming (Bottom-Up), Medium
// Time: O(n+k), k is the max number in nums
// Space: O(n+k)
function deleteAndEarn2(nums: number[]): number {
  let maxNum = 0;
  const points = new Map<number, number>();

  for (const num of nums) {
    points.set(num, (points.get(num) ?? 0) + num);
    maxNum = Math.max(maxNum, num);
  }

  const maxPoints = Array(maxNum + 1).fill(0);
  maxPoints[1] = points.get(1) ?? 0;

  for (let i = 2; i < maxPoints.length; i++) {
    const gain = points.get(i) ?? 0;
    maxPoints[i] = Math.max(maxPoints[i - 1], maxPoints[i - 2] + gain);
  }

  return maxPoints[maxNum];
};

// Dynamic programming (Top-Down), Medium
// Time: O(n+k), k is the max number in nums
// Space: O(n+k)
function deleteAndEarn1(nums: number[]): number {
  let maxNum = 0;
  const points = new Map<number, number>();

  for (const num of nums) {
    points.set(num, (points.get(num) ?? 0) + num);
    maxNum = Math.max(maxNum, num);
  }

  const cache = new Map<number, number>();

  function getMaxPoints(num: number): number {
    if (num === 0) return 0;

    if (num === 1) return points.get(1) ?? 0;

    if (cache.has(num)) return cache.get(num)!;

    const gain = points.get(num) ?? 0;
    const value = Math.max(getMaxPoints(num - 1), getMaxPoints(num - 2) + gain);
    cache.set(num, value);

    return value;
  }

  return getMaxPoints(maxNum);
};
