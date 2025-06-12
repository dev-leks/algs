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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0

    function dfs(root: TreeNode | null) {
        if (!root) return -1

        const right = dfs(root.right)
        const left = dfs(root.left)
        maxDiameter = Math.max(maxDiameter, 2 + right + left)

        return 1 + Math.max(left, right)
    }

    dfs(root)

    return maxDiameter
};
