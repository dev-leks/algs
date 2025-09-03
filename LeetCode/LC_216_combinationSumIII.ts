// Backtrack, Medium (My solution)
// Time: O(C(9, k)) - combinations of 9 numbers taken k at a time
// Space: O(k) - recursion stack
function combinationSum3(k: number, n: number): number[][] {
    if (k > n) return [];

    const combinations: number[][] = [];

    function backtrack(minNum: number, currentCombination: number[], currentSum: number) {
        if (currentCombination.length === k) {
            if (currentSum === n) {
                combinations.push([...currentCombination]);
            }
            return;
        }

        for (let num = minNum; num <= 9; num++) {
            currentCombination.push(num);
            backtrack(num + 1, currentCombination, currentSum + num);
            currentCombination.pop();
        }
    }

    backtrack(1, [], 0);

    return combinations;
};
