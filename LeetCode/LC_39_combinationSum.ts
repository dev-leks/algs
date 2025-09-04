// Backtracking, Medium (My solution)
// Time: O((t / min(candidates))^n) - t is target
// Space: O(t / min(candidates)) - recursion stack
function combinationSum(candidates: number[], target: number): number[][] {
    const combinations: number[][] = [];

    function backtrack(index: number, combination: number[], sum: number) {
        if (sum > target) return;

        if (sum === target) {
            combinations.push([...combination]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            const candidate = candidates[i];
            combination.push(candidate);
            backtrack(i, combination, sum + candidate);
            combination.pop();
        }
    }

    backtrack(0, [], 0);

    return combinations;
};

// Backtracking, Medium (Expected solution)
// Time: O((t / min(candidates))^n) - t is target
// Space: O(t / min(candidates)) - recursion stack
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);

    const combinations: number[][] = [];

    function backtrack(index: number, combination: number[], remainingTarget: number) {
        if (remainingTarget === 0) {
            combinations.push([...combination]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            const candidate = candidates[i];
            if (candidate > remainingTarget) break;

            combination.push(candidate);
            backtrack(i, combination, remainingTarget - candidate);
            combination.pop();
        }
    }

    backtrack(0, [], target);

    return combinations;
};
