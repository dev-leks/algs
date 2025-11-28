// Union Find (Union by Rank + Path Compression), Medium
// Time: O(mn)
// Space: O(mn)
class UnionFind {
  parent: number[] = [];
  rank: number[] = [];
  count = 0;

  constructor(grid: string[][]) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const index = i * n + j;

        this.parent[index] = index;
        this.rank[index] = 0;

        if (grid[i][j] == '1') {
          this.count++;
        }
      }
    }
  }

  find(x: number): number {
    if (x === this.parent[x]) return x;

    return this.parent[x] = this.find(this.parent[x]);
  }

  union(x: number, y: number): void {
    const xRoot = this.find(x);
    const yRoot = this.find(y);

    if (xRoot === yRoot) return;

    if (this.rank[xRoot] < this.rank[yRoot]) {
      this.parent[xRoot] = yRoot;
    } else if (this.rank[xRoot] > this.rank[yRoot]) {
      this.parent[yRoot] = xRoot;
    } else {
      this.parent[yRoot] = xRoot;
      this.rank[xRoot]++;
    }

    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}

function numIslands(grid: string[][]): number {
  const uf = new UnionFind(grid);

  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '0') continue;

      if (j < n - 1 && grid[i][j + 1] == '1') {
        uf.union(i * n + j, i * n + (j + 1));
      }

      if (i < m - 1 && grid[i + 1][j] == '1') {
        uf.union(i * n + j, (i + 1) * n + j);
      }
    }
  }

  return uf.getCount();
};

// DFS, Medium
// Time: O(mn)
// Space: O(mn) - recursion stack
function numIslands2(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  function dfs(i: number, j: number) {
    if (i < 0 || i > m - 1 || j > n - 1 || j < 0 || grid[i][j] == '0') return;

    grid[i][j] = '0';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

// DFS, Medium (My first solution)
// Time: O(mn)
// Space: O(mn)
function numIslands1(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  let count = 0;

  function dfs(i: number, j: number) {
    if (visited[i][j]) return;

    visited[i][j] = true;

    if (grid[i][j] == '0') return;

    if (i > 0) dfs(i - 1, j);
    if (i < m - 1) dfs(i + 1, j);
    if (j < n - 1) dfs(i, j + 1);
    if (j > 0) dfs(i, j - 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;

      if (grid[i][j] == '1') {
        dfs(i, j);
        count++;
      }

      visited[i][j] = true;
    }
  }

  return count;
};
