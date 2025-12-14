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

namespace BFSFirstSolution {
  const EMPTY_NODE = 'E';

  // BFS, Hard (My first solution)
  // Time: O(n)
  // Space: O(n)
  /*
   * Encodes a tree to a single string.
   */
  function serialize(root: TreeNode | null): string {
    if (!root) return '';

    const nodes: Array<string> = [];
    let queue: Array<TreeNode | null> = [root];

    while (queue.length) {
      const levelSize = queue.length;
      const newQueue = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue[i];
        nodes.push(node ? String(node.val) : EMPTY_NODE);

        if (node) {
          newQueue.push(node.left);
          newQueue.push(node.right);
        }
      }

      queue = newQueue;
    }

    /*
    OR without resetting queue:
     while (queue.length) {
        const node = queue.shift();

        if (node) {
            nodes.push(String(node.val));
            queue.push(node.left);
            queue.push(node.right);
        } else {
            nodes.push(EMPTY_NODE);
        }
    }
     */

    while (nodes[nodes.length - 1] === EMPTY_NODE) {
      nodes.pop();
    }

    return nodes.join(',');
  };

  // BFS, Hard (Optimal solution)
  // Time: O(n)
  // Space: O(n)
  /*
   * Decodes your encoded data to tree.
   */
  function deserialize(data: string): TreeNode | null {
    if (!data) return null;

    const nodeValues = data.split(',');

    if (!nodeValues.length || nodeValues[0] === EMPTY_NODE) return null;

    const n = nodeValues.length;
    let root: TreeNode = new TreeNode(+nodeValues[0]);
    let index = 1;
    let queue: TreeNode[] = [root];

    while (queue.length && index < n) {
      const node = queue.shift()!;

      if (index < n && nodeValues[index] !== EMPTY_NODE) {
        node.left = new TreeNode(+nodeValues[index]);
        queue.push(node.left);
      }
      index++;

      if (index < n && nodeValues[index] !== EMPTY_NODE) {
        node.right = new TreeNode(+nodeValues[index]);
        queue.push(node.right);
      }
      index++;
    }

    return root;
  };

  // BFS, Hard (My first solution)
  // Time: O(n)
  // Space: O(n)
  /*
   * Decodes your encoded data to tree.
   */
  function deserialize1(data: string): TreeNode | null {
    if (!data) return null;

    const nodeValues = data.split(',');

    let root: TreeNode | null = null;
    let isLeftDirection = false;
    let index = 0;
    let levelSize = 1;
    let prevLevelNodes: TreeNode[] = [];

    while (index < nodeValues.length) {
      let parentIndex = 0;
      const currentLevelNodes: TreeNode[] = [];

      for (let i = 0; i < levelSize && index < nodeValues.length; i++) {
        const value = nodeValues[index++];

        if (value !== EMPTY_NODE) {
          const node = new TreeNode(+value, null, null);

          if (!root) root = node;

          if (prevLevelNodes.length) {
            if (isLeftDirection) {
              prevLevelNodes[parentIndex].left = node;
            } else {
              prevLevelNodes[parentIndex].right = node;
            }
          }

          currentLevelNodes.push(node);
        }

        if (!isLeftDirection) parentIndex++;
        isLeftDirection = !isLeftDirection;
      }

      prevLevelNodes = currentLevelNodes;
      levelSize = prevLevelNodes.length * 2;
    }

    return root;
  };
}

namespace DFSLeetCodeSolution {
  const EMPTY_NODE = 'E';

  // DFS, Hard (LeetCode solution)
  // Time: O(n)
  // Space: O(n)
  /*
   * Encodes a tree to a single string.
   */
  function serialize(root: TreeNode | null): string {
    function dfs(node: TreeNode | null, str: string) {
      if (!node) {
        str += (EMPTY_NODE + ',');
      } else {
        str += String(node.val) + ',';
        str = dfs(node.left, str);
        str = dfs(node.right, str);
      }

      return str;
    }

    return dfs(root, '');
  };

  // DFS, Hard (LeetCode solution)
  // Time: O(n)
  // Space: O(n)
  /*
   * Decodes your encoded data to tree.
   */
  function deserialize(data: string): TreeNode | null {
    function dfs(nodes: string[]) {
      if (nodes[0] === EMPTY_NODE || !nodes[0]) {
        nodes.shift();
        return null;
      }

      const root = new TreeNode(+nodes[0]);
      nodes.shift();
      root.left = dfs(nodes);
      root.right = dfs(nodes);

      return root;
    }

    const nodeValues = data.split(',');

    return dfs(nodeValues);
  };
}
