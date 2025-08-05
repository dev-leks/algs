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
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const values: number[][] = [];

    let level = 0;

    while (queue.length) {
        const levelSize = queue.length;
        values[level] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (!node) break;

            values[level].push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        level++;
    }

    return values;
};
