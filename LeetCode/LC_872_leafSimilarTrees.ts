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

// (LC Approach also) DFS, Easy (compare 2 arrays with leaves)
// Time: O(n + m)
// Space: O(max⁡(H1,H2) + L1 + L2)
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaves1: number[] = [];
    const leaves2: number[] = [];

    function dfs(root: TreeNode | null, leaves: number[]) {
        if (!root) return;

        if (!root.left && !root.right) {
            leaves.push(root.val);
        }

        dfs(root.left, leaves);
        dfs(root.right, leaves);
    }

    dfs(root1, leaves1);
    dfs(root2, leaves2);

    if (leaves1.length !== leaves2.length) return false;

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false;
    }

    return true;
};

// DFS, Easy (1 queue for leaves)
// Time: O(n + m)
// Space: O(max⁡(H1, H2, L1)), L1 is the number of leaves in root1
function leafSimilar1(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const queue: number[] = [];

    function dfs(root: TreeNode | null, isQueueFull: boolean) {
        if (!root) return;

        if (!root.left && !root.right) {
            if (!isQueueFull) {
                queue.push(root.val);
            } else {
                if (queue[0] === root.val) queue.shift();
                else queue.push(root.val);
            }
            
            return true;
        }

        dfs(root.left, isQueueFull);
        dfs(root.right, isQueueFull);
    }

    dfs(root1, false);
    dfs(root2, true);

    return !queue.length;
};

// DFS, Easy (2 dfs, 1 stack for leaves)
// Time: O(n + m)
// Space: O(max⁡(H1,H2,L1,L2))
function leafSimilar2(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaves: number[] = [];

    function dfs(root: TreeNode | null) {
        if (!root) return;

        if (!root.left && !root.right) {
            leaves.push(root.val);
        }

        dfs(root.left);
        dfs(root.right);
    }

    dfs(root1);

    function dfsRev(root: TreeNode | null) {
        if (!root) return;

        if (!root.left && !root.right) {
            if (leaves[leaves.length - 1] === root.val) leaves.pop();
            else leaves.push(root.val);
        }

        dfsRev(root.right);
        dfsRev(root.left);
    }

    dfsRev(root2);

    return !leaves.length;
};
