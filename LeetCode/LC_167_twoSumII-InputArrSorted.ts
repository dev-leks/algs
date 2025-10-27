// Two pointers, Medium
// Time: O(n)
// Space: O(1)
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum > target) {
      right--;
    }

    if (sum < target) {
      left++;
    }
  }

  return [-1, -1];
};
