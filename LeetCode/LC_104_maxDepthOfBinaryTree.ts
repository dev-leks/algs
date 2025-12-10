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

// DFS, Easy (Recursive)
// Time: O(n)
// Space: O(n)
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(rightDepth, leftDepth) + 1;
};

// DFS, Easy (Iterative with stack)
// Time: O(n)
// Space: O(n), average O(logn)
function maxDepth1(root: TreeNode | null): number {
  if (!root) return 0;

  let maxDepth = 1;
  const stack = [{ node: root, depth: 1 }];

  while (stack.length) {
    const { node, depth } = stack.pop()!;

    maxDepth = Math.max(maxDepth, depth);

    if (node.left) stack.push({ node: node.left, depth: depth + 1 });
    if (node.right) stack.push({ node: node.right, depth: depth + 1 });
  }

  return maxDepth;
};

// BFS, Easy (Iterative with queue)
// Time: O(n)
// Space: O(n)
function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;

  let depth = 0;
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
};
