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

// DFS, Medium (My solution)
// Time: O(n)
// Space: O(h), h - height of the tree
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;

    return left ?? right;
};

// DFS, Medium (My solution)
// Get 2 paths to p and q, then find the first different node, 
// the node before that is the LCA
// Time: O(n)
// Space: O(n)
function lowestCommonAncestor1(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	function getNodePath(root: TreeNode | null, node: TreeNode | null): TreeNode[] | null {
        if (!root) return null;

        if (root === node) return [node];

        const leftPath = getNodePath(root.left, node);
        const rightPath = getNodePath(root.right, node);

        if (leftPath) return [root, ...leftPath];
        if (rightPath) return [root, ...rightPath];

        return null;
    }

    const pPath = getNodePath(root, p);
    const qPath = getNodePath(root, q);

    if (!pPath || !qPath) return null;

    const n = Math.max(pPath.length, qPath.length);
    for (let i = 0; i < n; i++) {
        if (pPath[i] !== qPath[i] && i > 0) return pPath[i - 1];
    }

    return root;
};
