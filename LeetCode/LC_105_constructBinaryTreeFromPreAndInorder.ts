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

// Divide and Conquer, Hash table, Binary Tree, Medium
// Time: O(n)
// Space: O(n)
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const inorderMap = new Map();
  inorder.forEach((val, i) => inorderMap.set(val, i));

  let preIndex = 0;

  function buildTree(inStart: number, inEnd: number): TreeNode | null {
    if (inStart > inEnd) return null;

    const val = preorder[preIndex++];
    const node = new TreeNode(val);
    const inIndex = inorderMap.get(val);

    node.left = buildTree(inStart, inIndex - 1);
    node.right = buildTree(inIndex + 1, inEnd);

    return node;
  }

  return buildTree(0, inorder.length - 1);
};
