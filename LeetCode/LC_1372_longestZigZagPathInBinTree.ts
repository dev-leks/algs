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

// DFS, Medium (With help)
// Time: O(n)
// Space: O(h), h - height of the tree
function longestZigZag(root: TreeNode | null): number {
    if (!root) return 0;

    let maxZigZagLength = 0;

    function maxZigZag(node: TreeNode | null, direction: 'right' | 'left', zigZagLength: number) {
        if (!node) return;

        maxZigZagLength = Math.max(maxZigZagLength, zigZagLength);

        if (direction === 'left') {
            maxZigZag(node.left, 'right', zigZagLength + 1);
            maxZigZag(node.right, 'left', 1);
        }
        if (direction === 'right') {
            maxZigZag(node.right, 'left', zigZagLength + 1);
            maxZigZag(node.left, 'right', 1);
        }
    }

    maxZigZag(root, 'left', 0);

    return maxZigZagLength;
};
