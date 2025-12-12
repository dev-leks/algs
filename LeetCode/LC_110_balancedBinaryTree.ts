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

// DFS, Easy (With global variable)
// Time: O(n)
// Space: O(h), h - height of the tree
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  let isBalanced = true;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (Math.abs(left - right) > 1) isBalanced = false;

    return Math.max(left, right) + 1;
  }

  dfs(root);

  return isBalanced;
};

// DFS, Easy (Bottom-Up, calculate height of each node)
// Time: O(n)
// Space: O(h), h - height of the tree
function isBalanced2(root: TreeNode | null): boolean {
  if (!root) return true;

  function getHeight(node: TreeNode | null): number {
    if (!node) return 0;

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    if (Math.abs(left - right) > 1 || left === -1 || right === -1) return -1;

    return Math.max(left, right) + 1;
  }

  return getHeight(root) !== -1;
};
