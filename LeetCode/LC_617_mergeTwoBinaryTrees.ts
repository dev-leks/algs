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

// Binary Tree, DFS, Easy (Recursive)
// Time: O(n) - n min num of nodes
// Space: O(h), h - height of the tree
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1) return root2;

  if (!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};

// Binary Tree, DFS, Easy (Iterative with stack)
// Time: O(n) - n min num of nodes
// Space: O(n)
function mergeTrees1(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1) return root2;

  const stack = [[root1, root2]];

  while (stack.length) {
    const [node1, node2] = stack.pop()!;

    if (!node1 || !node2) continue;

    node1.val += node2.val;

    if (!node1.left) {
      node1.left = node2.left;
    } else {
      stack.push([node1.left, node2.left]);
    }

    if (!node1.right) {
      node1.right = node2.right;
    } else {
      stack.push([node1.right, node2.right]);
    }
  }

  return root1;
};
