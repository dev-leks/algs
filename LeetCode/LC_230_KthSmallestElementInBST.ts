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

// BFS for BST (inorder traversal - iterative), Medium
// Time: O(H+k) - H is height of the tree
// Space: O(H) - for stack
function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let node: TreeNode | null = root;

  while (true) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop()!;
    k--;

    if (!k) return node.val;
    node = node.right;
  }
};

// BFS for BST (inorder traversal - recursive), Medium (Without copying array)
// Time: O(n)
// Space: O(n)
function kthSmallest2(root: TreeNode | null, k: number): number {
  const items: number[] = [];

  function inorder(node: TreeNode | null): void {
    if (!node) return;

    inorder(node.left)
    items.push(node.val);
    inorder(node.right)
  }

  inorder(root);

  return items[k - 1];
};

// BFS for BST (inorder traversal - recursive), Medium
// Time: O(n)
// Space: O(n)
function kthSmallest1(root: TreeNode | null, k: number): number {
  function inorder(node: TreeNode | null): number[] {
    if (!node) return [];

    return [...inorder(node.left), node.val, ...inorder(node.right)];
  }

  return inorder(root)[k - 1];
};
