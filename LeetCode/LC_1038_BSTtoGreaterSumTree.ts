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

// DFS, Medium
// Time: O(n)
// Space: O(n)
function bstToGst(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    let sum = 0;

    function dfs(node: TreeNode | null) {
        if (!node) return;

        if (node.right) dfs(node.right);

        sum += node.val;
        node.val = sum;

        if (node.left) dfs(node.left);
    }

    dfs(root);

    return root;
};
