// Two pointers, Medium
// Time: O(n)
// Space: O(1)
function sortColors(nums: number[]): void {
  function swap(nums: number[], x: number, y: number) {
    [nums[x], nums[y]] = [nums[y], nums[x]];
  }

  let zeroP = 0;
  let twoP = nums.length - 1;

  let i = 0;
  while (i <= twoP) {
    if (nums[i] === 0) {
      swap(nums, i, zeroP);
      zeroP++;
    } else if (nums[i] === 2) {
      swap(nums, i, twoP);
      twoP--;
      i--;
    }

    i++;
  }
};

// Hash table, Medium (Not optimal space)
// Time: O(n)
// Space: O(n)
function sortColors1(nums: number[]): void {
  const colorsKeys = [0, 1, 2];
  const countsMap = new Map([[0, 0], [1, 0], [2, 0]]);

  for (let i = 0; i < nums.length; i++) {
    countsMap.set(nums[i], (countsMap.get(nums[i]) ?? 0) + 1);
  }

  let i = 0;
  for (const colorKey of colorsKeys) {
    let count = countsMap.get(colorKey)!;

    while (count) {
      nums[i] = colorKey;
      count--;
      i++;
    }
  }
};
