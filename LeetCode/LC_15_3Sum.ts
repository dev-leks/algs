// Two pointers, Medium
// Time: O(n^2)
// Space: O(n) - sort the array
function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  const output: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const target = nums[i];
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[left] + nums[right] + target;

      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
      }

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }

  return output;
};

// Hash table (Set), Medium
// Time: O(n^2)
// Space: O(n) - hash table
function threeSum2(nums: number[]): number[][] {
  const n = nums.length;
  const output: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const seen = new Set<number>();
    for (let j = i + 1; j < n; j++) {
      const complement = -(nums[i] + nums[j]);

      if (seen.has(complement)) {
        output.push([nums[i], nums[j], complement]);

        while (j < n - 1 && nums[j] === nums[j + 1]) j++;
      }

      seen.add(nums[j]);
    }
  }

  return output;
};

// Hash table with Triplet sorting for duplicate elimination, Medium
// (in case we don't want to sort initial array)
// Time: O(n^2)
// Space: O(n) - hash table
function threeSum3(nums: number[]): number[][] {
  const n = nums.length;
  const output = new Set<string>();
  const dups = new Set<number>();
  const seen = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    if (dups.has(nums[i])) continue;

    dups.add(nums[i]);

    for (let j = i + 1; j < n; j++) {
      const complement = -(nums[i] + nums[j]);

      if (seen.has(complement) && seen.get(complement) === i) {
        output.add(
          JSON.stringify([nums[i], nums[j], complement].sort((a, b) => a - b))
        );
      }

      seen.set(nums[j], i);
    }
  }

  return [...output].map((triplet) => JSON.parse(triplet));
};
