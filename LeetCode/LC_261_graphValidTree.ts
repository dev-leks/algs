namespace WithUnionFind {
  // Union Find (Union by Size + Path Compression), Medium (+Advanced Graph Theory)
  // Time: O(N*α(N)
  // Space: O(N)
  // N - number of nodes, E - number of edges, α(N) - inverse Ackermann function ~= O(1)
  class UnionFind {
    parent: number[];
    size: number[];

    constructor(size: number) {
      this.parent = Array.from({ length: size }, (_, i) => i);
      this.size = Array(size).fill(1);
    }

    find(node: number): number {
      if (node === this.parent[node]) return node;
      return this.parent[node] = this.find(this.parent[node]);
    }

    union(xNode: number, yNode: number) {
      const xRoot = this.find(xNode);
      const yRoot = this.find(yNode);

      if (xRoot === yRoot) return false;

      if (this.size[xRoot] < this.size[yRoot]) {
        this.size[yRoot] += this.size[xRoot];
        this.parent[xRoot] = yRoot;
      } else {
        this.size[xRoot] += this.size[yRoot];
        this.parent[yRoot] = xRoot;
      }

      return true;
    }
  }

  function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) return false;

    const uf = new UnionFind(n);

    for (const edge of edges) {
      if (!uf.union(edge[0], edge[1])) return false;
    }

    return true;
  };
}

namespace WithDFS {
  // DFS (Iterative), Medium (Advanced Graph Theory)
  // Graph is tree, if
  // 1. Edges = Nodes - 1
  // 2. It is fully connected from 0 node
  // Time: O(N)
  // Space: O(N)
  // -> since E = N - 1 => E = N
  // N - number of nodes, E - number of edges
  function validTree4(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) return false;

    const adj: number[][] = Array.from({length: n}, () => []);
    for (let i = 0; i < edges.length; i++) {
      adj[edges[i][0]].push(edges[i][1]);
      adj[edges[i][1]].push(edges[i][0]);
    }

    const visited = new Set<number>();
    visited.add(0);
    const stack: number[] = [0];

    while (stack.length) {
      const node = stack.pop()!;

      for (const neighbor of adj[node]) {
        if (visited.has(neighbor)) continue;

        stack.push(neighbor);
        visited.add(neighbor);
      }
    }

    return visited.size === n;
  };

  // DFS (Iterative), Medium
  // Time: O(N+E)
  // Space: O(N+E)
  // N - number of nodes, E - number of edges
  function validTree3(n: number, edges: number[][]): boolean {
    const adj: number[][] = Array.from({length: n}, () => []);
    for (let i = 0; i < edges.length; i++) {
      adj[edges[i][0]].push(edges[i][1]);
      adj[edges[i][1]].push(edges[i][0]);
    }

    const parent = new Map<number, number>();
    parent.set(0, -1);

    const stack: number[] = [0];

    while (stack.length) {
      const node = stack.pop()!;

      for (const neighbor of adj[node]) {
        if (parent.get(node) === neighbor) continue;

        // Cycle detected, it's not a tree
        if (parent.has(neighbor)) {
          return false;
        }

        stack.push(neighbor);
        parent.set(neighbor, node);
      }
    }

    // Check if all nodes are visited, it's a tree
    return parent.size === n;
  };

  // DFS (Recursive), Medium (Count visited nodes)
  // Time: O(N+E)
  // Space: O(N+E)
  // N - number of nodes, E - number of edges
  function validTree2(n: number, edges: number[][]): boolean {
    const adj: number[][] = Array.from({length: n}, () => []);
    for (let i = 0; i < edges.length; i++) {
      adj[edges[i][0]].push(edges[i][1]);
      adj[edges[i][1]].push(edges[i][0]);
    }

    const visited = new Set<number>();

    function dfs(vertex: number, parent: number) {
      if (visited.has(vertex)) return false;

      visited.add(vertex);

      for (const neighbor of adj[vertex]) {
        if (neighbor === parent) continue;
        // Cycle detected, it's not a tree
        if (!dfs(neighbor, vertex)) return false;
      }

      return true;
    }

    // It is a tree if all nodes are visited and there are no cycles
    return dfs(0, -1) && visited.size === n;
  };

  // DFS (Recursive), Medium (My solution)
  // Time: O(N+E)
  // Space: O(N+E)
  // N - number of nodes, E - number of edges
  function validTree1(n: number, edges: number[][]): boolean {
    const adj: number[][] = Array.from({length: n}, () => []);
    for (let i = 0; i < edges.length; i++) {
      adj[edges[i][0]].push(edges[i][1]);
      adj[edges[i][1]].push(edges[i][0]);
    }

    const nodes = new Set<number>();
    for (let i = 0; i < n; i++) {
      nodes.add(i);
    }

    function dfs(vertex: number, parent: number) {
      if (!nodes.has(vertex)) return false;

      nodes.delete(vertex);

      for (const neighbor of adj[vertex]) {
        if (neighbor === parent) continue;
        // Cycle detected, it's not a tree
        if (!dfs(neighbor, vertex)) return false;
      }

      return true;
    }

    // It is a tree if all nodes are visited and there are no cycles
    return dfs(0, -1) && !nodes.size;
  };
}
