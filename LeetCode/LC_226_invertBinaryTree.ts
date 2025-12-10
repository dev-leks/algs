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

// DFS, Binary Tree, Easy (Recursive)
// Time: O(n)
// Space: O(n)
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);

    return root;
};

// DFS, Binary Tree, Easy (Iterative)
// Time: O(n)
// Space: O(n)
function invertTree2(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const stack = [root];

  while (stack.length) {
    const node = stack.pop()!;

    const left = node.left;
    node.left = node.right;
    node.right = left;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
};

