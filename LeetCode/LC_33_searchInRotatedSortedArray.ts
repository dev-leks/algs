// Binary search, Medium (Find pivot index + Binary search)
// Time: O(log(n))
// Space: O(1)
function search(nums: number[], target: number): number {
  const n = nums.length;

  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[n - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  function binarySearch(start: number, end: number): number {
    let min = start;
    let max = end;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      const value = nums[mid];

      if (value === target) return mid;
      if (value > target) max = mid - 1;
      if (value < target) min = mid + 1;
    }

    return -1;
  }

  const leftResult = binarySearch(0, left - 1);

  if (leftResult === -1) {
    return binarySearch(left, nums.length - 1);
  }

  return leftResult;
};

// Binary search, Medium (Find pivot index + Shifted binary search)
// Time: O(log(n))
// Space: O(1)
function search2(nums: number[], target: number): number {
  const n = nums.length;

  // Find the index of the smallest number
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[n - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  function shiftedBinarySearch(pivot: number): number {
    let min = 0;
    let max = n - 1;
    const shift = n - pivot;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      const shiftedMid = (mid - shift + n) % n;
      const value = nums[shiftedMid];

      if (value === target) return shiftedMid;
      if (value > target) max = mid - 1;
      if (value < target) min = mid + 1;
    }

    return -1;
  }

  return shiftedBinarySearch(left);
};

// Binary search, Medium (One Binary search)
// Time: O(log(n))
// Space: O(1)
function search3(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = nums[mid];

    if (value === target) return mid;

    else if (value >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

// Binary search, Medium (My solution, not accepted for O(log(n))
// Time: O(n) - findMinValueIndex
// Space: O(1)
function search1(nums: number[], target: number): number {
  function binarySearch(start: number, end: number): number {
    let min = start;
    let max = end;

    while (min <= max) {
      const avg = Math.floor((min + max) / 2);
      const value = nums[avg];

      if (value === target) return avg;
      if (value > target) max = avg - 1;
      if (value < target) min = avg + 1;
    }

    return -1;
  }

  function findMinValueIndex(): number {
    let minValue = nums[0];
    let minIndex = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < minValue) {
        minValue = nums[i];
        minIndex = i;
      }
    }

    return minIndex;
  }

  const minIndex = findMinValueIndex();
  const leftResult = binarySearch(0, minIndex - 1);

  if (leftResult === -1) {
    return binarySearch(minIndex, nums.length - 1);
  }

  return leftResult;
};
