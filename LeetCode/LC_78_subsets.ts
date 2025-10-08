// Backtracking, Medium
// Time: O(2^n)
// Space: O(n)
function subsets(nums: number[]): number[][] {
  const output: number[][] = [];

  function generateSubsets(from: number, current: number[]) {
    output.push([...current]);

    for (let i = from; i < nums.length; i++) {
      current.push(nums[i]);
      generateSubsets(i + 1, current);
      current.pop();
    }
  }

  generateSubsets(0, []);

  return output;
};
