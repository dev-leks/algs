// Binary search, Easy
// Time: O(log(n))
// Space: O(1)
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

// Binary search (Find Upper bound), Easy
// Time: O(log(n))
// Space: O(1)
function search1(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];

    if (num <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (left > 0 && nums[left - 1] === target) {
    return left - 1;
  }

  return -1;
};

// Binary search (Find Lower bound), Easy
// Time: O(log(n))
// Space: O(1)
function search2(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];

    if (num >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (left < nums.length && nums[left] === target) {
    return left;
  }

  return -1;
};
