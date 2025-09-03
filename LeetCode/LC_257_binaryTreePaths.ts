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

// Backtracking, DFS, Binary Tree, Easy
// Time: O(n) - visit each node once
// Space: O(h) - recursion stack, h - tree height
function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) return [];

    const paths: string[] = [];

    function dfs(node: TreeNode | null, path: string) {
        if (!node) return;

        const currPath = path ? `${path}->${node.val}` : `${node.val}`;

        if (!node.left && !node.right) {
            paths.push(currPath);
        }

        dfs(node.left, currPath);
        dfs(node.right, currPath);
    }

    dfs(root, '');

    return paths;
};
