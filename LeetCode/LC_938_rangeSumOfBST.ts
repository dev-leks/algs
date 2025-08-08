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

// DFS for BST, Easy
// Time: worst (skewed) - O(n), best (balanced) - O(logn)
// Space: worst (skewed) - O(n), best (balanced) - O(logn)
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (!root) return 0;

    let count = 0;

    if (root.val >= low && root.val <= high) count += root.val;

    if (root.val > low) count += rangeSumBST(root.left, low, high);
    if (root.val < high) count += rangeSumBST(root.right, low, high);

    return count;
};
