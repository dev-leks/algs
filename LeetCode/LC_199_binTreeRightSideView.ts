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

// BFS, Medium
// Time: O(n)
// Space: O(n)
function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const rightNodes: number[] = [];

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (!node) break;

            if (i === levelSize - 1) rightNodes.push(node.val);
      
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return rightNodes;
};
