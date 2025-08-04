// DFS, Easy
// Time: O(n)
// Space: O(h), h - height of the tree
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p || !q) return p === q;

    if (p.val !== q.val) return false;

    const isLeftSame = isSameTree(p.left, q.left);
    const isRightSame = isSameTree(p.right, q.right);

    return p.val === q.val && isLeftSame && isRightSame;
};
