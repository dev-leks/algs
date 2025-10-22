// Definition for _Node.
class _Node {
  val: number
  neighbors: _Node[]

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}

// DFS, Medium
// Time: O(n + m), n = nodes (vertices), m = edges
// Space: O(n)
function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const cloned = new Map<number, _Node>();

  function dfs(node: _Node): _Node {
    if (cloned.has(node.val)) return cloned.get(node.val)!;

    const clonedNode = new _Node(node.val, []);
    cloned.set(node.val, clonedNode);
    clonedNode.neighbors = node.neighbors?.map(dfs);

    return clonedNode;
  }

  return dfs(node);
};
