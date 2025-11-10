/*
class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
*/

// DFS, Easy
// Time: O(n)
// Space: O(n)
function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  let maxDiameter = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return Math.max(left, right) + 1;
  }

  dfs(root);

  return maxDiameter;
};
