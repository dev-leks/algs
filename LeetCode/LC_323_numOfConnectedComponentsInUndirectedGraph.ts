class UnionFind {
  parent: number[];
  size: number[];
  count: number;

  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.size = Array(size).fill(1);
    this.count = size;
  }

  find(x: number): number {
    if (x === this.parent[x]) return x;

    return this.parent[x] = this.find(this.parent[x]);
  }

  union(x: number, y: number): void {
    const xRoot = this.find(x);
    const yRoot = this.find(y);

    if (xRoot === yRoot) return;

    if (this.size[xRoot] > this.size[yRoot]) {
      this.size[xRoot] += this.size[yRoot];
      this.parent[yRoot] = xRoot;
    } else {
      this.size[yRoot] += this.size[xRoot];
      this.parent[xRoot] = yRoot;
    }

    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}

// Union Find (Union by Size + Path Compression), Medium
// Time: O(V+E*a(n))
// Space: O(V)
// E - number of edges, V - number of vertices, α(n) - inverse Ackermann function
function countComponents(n: number, edges: number[][]): number {
  const uf = new UnionFind(n);

  for (let i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1]);
  }

  return uf.count;
};

// DFS, Medium
// Time: O(V+E)
// Space: O(V+E)
function countComponents1(n: number, edges: number[][]): number {
  const adj: number[][] = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    adj[edges[i][0]].push(edges[i][1]);
    adj[edges[i][1]].push(edges[i][0]);
  }

  const visited = new Set<number>();

  function dfs(vertex: number) {
    visited.add(vertex);

    for (let i = 0; i < adj[vertex].length; i++) {
      if (visited.has(adj[vertex][i])) continue;

      dfs(adj[vertex][i]);
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;

    dfs(i);
    count++;
  }

  return count;
};

// DFS, Medium (My solution)
// Time: O(n^2)
// Space: O(n^2)
function countComponents2(n: number, edges: number[][]): number {
  const adj: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < edges.length; i++) {
    adj[edges[i][0]][edges[i][1]] = true;
    adj[edges[i][1]][edges[i][0]] = true;
  }

  const visited = new Set<number>();

  function dfs(vertex: number) {
    visited.add(vertex);

    for (let i = 0; i < adj[vertex].length; i++) {
      if (visited.has(i)) continue;
      if (!adj[vertex][i]) continue;

      dfs(i);
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;

    dfs(i);
    count++;
  }

  return count;
};
