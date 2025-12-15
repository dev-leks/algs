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

// DFS, Medium (Iterative)
// Time: O(n)
// Space: O(1)
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  const pVal = p?.val!;
  const qVal = q?.val!;
  let node = root;

  while (node) {
    const parentVal = node.val;

    if (pVal > parentVal && qVal > parentVal) {
      node = node.right;
    } else if (pVal < parentVal && qVal < parentVal) {
      node = node.left;
    } else {
      return node;
    }
  }

  return null;
};

// DFS, Medium (Recursion)
// Time: O(n)
// Space: O(h), h - height of the tree
function lowestCommonAncestor1(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const parentVal = root.val;
  const pVal = p?.val!;
  const qVal = q?.val!;

  if (pVal > parentVal && qVal > parentVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parentVal && qVal < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
};

// DFS, Medium (Recursion) (Not optimal for Binary Search Tree)
// Time: O(n)
// Space: O(h), h - height of the tree
function lowestCommonAncestor2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || root.val == p?.val || root.val === q?.val) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left ?? right;
};
