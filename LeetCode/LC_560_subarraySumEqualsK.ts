// Hash table, Medium (Optimal)
// Time: O(n)
// Space: O(n)
function subarraySum(nums: number[], k: number): number {
  let sum = 0;
  let count = 0;

  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) ?? 0) + 1)
  }

  return count;
};

// Brute force, Medium
// Time: O(n^2)
// Space: O(1)
function subarraySum0(nums: number[], k: number): number {
  if (nums.length === 1) {
    return nums[0] === k ? 1 : 0;
  }

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }

  return count;
};
