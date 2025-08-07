// DFS + Prefix sum, Medium (With help)
// Time: O(n)
// Space: O(h), h - height of the tree
function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefixSumMap = new Map<number, number>();
    prefixSumMap.set(0, 1);
  
    let count = 0;

    function dfs(node: TreeNode | null, currSum: number) {
        if (!node) return;

        currSum += node.val;

        if (prefixSumMap.get(currSum - targetSum)) {
            count += (prefixSumMap.get(currSum - targetSum) ?? 0);
        }

        prefixSumMap.set(currSum, (prefixSumMap.get(currSum) || 0) + 1);

        dfs(node.left, currSum);
        dfs(node.right, currSum);

        prefixSumMap.set(currSum, (prefixSumMap.get(currSum) || 0) - 1);
    }

    dfs(root, 0);

    return count;
};

// DFS, Medium (My own solution with little help)
// Time: O(n^2)
// Space: O(n)
function pathSum1(root: TreeNode | null, targetSum: number): number {
    let count = 0;

    function dfs(node: TreeNode | null, values: number[]) {
        if (!node) return;

        values = values.map((val) => {
            const newVal = val + node.val;

            if (newVal === targetSum) count++;

            return newVal;
        });
        values.push(node.val);

        if (node.val === targetSum) count++
    
        dfs(node.left, values);
        dfs(node.right, values);
    }

    dfs(root, []);

    return count;
};
