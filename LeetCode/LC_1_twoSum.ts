// Hash table, Easy
// Time: O(n)
// Space: O(n)
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff)!, i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [-1, -1];
};

// Brute force, Easy
// Time: O(n^2)
// Space: O(1)
function twoSum2(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j];
        }
      }
  }

  return [-1, -1];
};
