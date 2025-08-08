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

// DFS for BST, Easy (With little help)
// Time: O(n)
// Space: O(n)
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    function getSuccessor(node: TreeNode): TreeNode | null {
        let curr = node.right;

        while (curr !== null && curr.left !== null) curr = curr.left;

        return curr;
    }

    if (root.val === key) {
        if (!root.left) return root.right;

        if (!root.right) return root.left;

        const successor = getSuccessor(root);
        root.val = successor!.val;
        root.right = deleteNode(root.right, successor!.val);
    }

    if (root.val > key) root.left = deleteNode(root.left, key);
    else root.right = deleteNode(root.right, key);

    return root;
};
