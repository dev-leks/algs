/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// DFS, Medium (1 dfs, without global count variable)
// Time: O(n)
// Space: O(h), h - height of the tree
function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;

    function dfs(root: TreeNode | null, maxVal: number) {
        if (!root) return 0;

        let count = root.val >= maxVal ? 1 : 0;
        count += dfs(root.right, Math.max(root.val, maxVal));
        count += dfs(root.left, Math.max(root.val, maxVal));

        return count;
    }

    return dfs(root, -Infinity);
};

// DFS, Medium (1 dfs, with global count variable)
// Time: O(n)
// Space: O(h), h - height of the tree
function goodNodes1(root: TreeNode | null): number {
    if (!root) return 0;

    let count = 0;

    function dfs(root: TreeNode | null, maxVal: number) {
        if (!root) return;

        if (root.val >= maxVal) count++;

        dfs(root.right, Math.max(root.val, maxVal));
        dfs(root.left, Math.max(root.val, maxVal));
    }

    dfs(root, -Infinity);

    return count;
};
