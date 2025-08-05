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

// DFS, Medium (With LC help)
// Time: O(n)
// Space: O(n)
function reverseOddLevelsDFS(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    function dfs(leftChild: TreeNode | null, rightChild: TreeNode | null, level: number) {
        if (!leftChild && !rightChild) return;

        if (level % 2 === 0) {
            const rightChildVal = rightChild!.val;
            rightChild!.val = leftChild!.val;
            leftChild!.val = rightChildVal;
        }

        dfs(leftChild!.left, rightChild!.right, level + 1);
        dfs(leftChild!.right, rightChild!.left, level + 1);
    }

    dfs(root.left, root.right, 0);
    
    return root;
};

// BFS, Medium (With LC help)
// Time: O(n)
// Space: O(n)
function reverseOddLevelsBFS(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const queue: TreeNode[] = [root];
    let level = 0;

    while (queue.length) {
        const levelSize = queue.length;
        const levelNodes: TreeNode[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (!node) break;

            levelNodes.push(node);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (level % 2 !== 0) {
            let left = 0;
            let right = levelNodes.length - 1;

            while (left < right) {
                const leftNodeVal = levelNodes[left].val;
                levelNodes[left].val = levelNodes[right].val;
                levelNodes[right].val = leftNodeVal;

                left++;
                right--;
            }
        }

        level++;
    }
    
    return root;
};
