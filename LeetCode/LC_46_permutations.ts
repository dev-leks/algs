// Backtracking, Medium
// Time: O(n * n!) - n! permutations, n - to create a copy
// Space: O(n * n!) - recursion stack and result storage
function permute(nums: number[]): number[][] {
    const permutations: number[][] = [];

    function backtrack(current: Set<number>) {
        if (current.size === nums.length) {
            permutations.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (current.has(nums[i])) continue;

            current.add(nums[i]);
            backtrack(current);
            current.delete(nums[i]);
        }
    }

    backtrack(new Set());

    return permutations;
};
