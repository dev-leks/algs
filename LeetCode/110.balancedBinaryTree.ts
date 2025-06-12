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

function isBalanced(root: TreeNode | null): boolean {
    let isBalanced = true

    function bfs(root: TreeNode | null) {
        if (!root) return -1

        const rightHeight = bfs(root.right)
        const leftHeight = bfs(root.left)
    
        if (isBalanced) {
            isBalanced = Math.abs(leftHeight - rightHeight) <= 1
        }

        return Math.max(rightHeight, leftHeight) + 1
    }

    bfs(root)

    return isBalanced
};
