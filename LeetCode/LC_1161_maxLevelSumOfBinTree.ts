
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
function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0;

    const queue: TreeNode[] = [root];
    let level = 1;

    let smallestLevel = 1;
    let maxSum = root.val;

    while (queue.length) {
        const levelSize = queue.length;

        let sum = 0;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (!node) break;
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
       
        if (sum > maxSum) {
            smallestLevel = level
            maxSum = sum;
        }

       level++;
    }

    return smallestLevel;
};
