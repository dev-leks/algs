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

// DFS for BST (In-Order traversal, Iterative with Stack), Medium
// Time: O(n)
// Space: O(n)
function isValidBST3(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  let prev: number | null = null;
  let node = root;

  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop()!;

    if (prev !== null && node.val <= prev) return false;

    prev = node.val;
    node = node.right;
  }

  return true;
};

// DFS for BST (In-Order traversal, Recursive), Medium
// Time: O(n)
// Space: O(n)
function isValidBST(root: TreeNode | null): boolean {
  let prev: number | null = null;

  function inOrder(node: TreeNode | null) {
    if (!node) return true;

    if (!inOrder(node.left)) return false;

    if (prev !== null && node.val <= prev) return false;

    prev = node.val;
    return inOrder(node.right);
  }

  return inOrder(root);
};

// DFS for BST (Recursive traversal with Valid Range), Medium
// Time: O(n)
// Space: O(n)
function isValidBST2(
  root: TreeNode | null,
  min: number | null = null,
  max: number | null = null,
): boolean {
  if (!root) return true;

  if (min !== null && root.val <= min) return false;

  if (max !== null && root.val >= max) return false;

  return isValidBST2(root.left, min, root.val) && isValidBST2(root.right, root.val, max);
};

// DFS for BST, Medium (My first solution)
// Time: O(n)
// Space: O(h), h - height of the tree
function isValidBST1(root: TreeNode | null): boolean {
  let isValid = true;

  function dfs(node: TreeNode | null): { min: number, max: number } | null {
    if (!node) return null;

    if (!node.left && !node.right) {
      return {
        min: node.val,
        max: node.val,
      }
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    if ((left !== null && node.val <= left.max) || (right !== null && node.val >= right.min)) {
      isValid = false;
    }

    return {
      min: left?.min ?? node.val,
      max: right?.max ?? node.val,
    };
  }

  dfs(root);

  return isValid;
};
