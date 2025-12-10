// Hash table (Set), Easy
// Time: O(n)
// Space: O(n)
function containsDuplicate(nums: number[]): boolean {
  const uniqueNums = new Set<number>();

  for (const num of nums) {
    if (uniqueNums.has(num)) return true;
    uniqueNums.add(num);
  }

  return false;
};

// Sorting, Easy
// Time: O(nlog(n))
// Space: O(1)
function containsDuplicate1(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  let prevNum;

  for (const num of nums) {
    if (prevNum === num) return true;
    prevNum = num;
  }

  return false;
};
