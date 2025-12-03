// Union Find (Union by Size + Path Compression), Medium
// Time: O(N+MlogM+Mα(N))
// Space: O(N+M)
// n - number of people, m - number of logs
class UnionFind {
  parent: number[];
  size: number[];

  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.size = Array(size).fill(1);
  }

  find(x: number): number {
    if (this.parent[x] === x) return x;
    return this.parent[x] = this.find(this.parent[x]);
  }

  union(x: number, y: number) {
    const xRoot = this.find(x);
    const yRoot = this.find(y);

    if (xRoot === yRoot) return false;

    if (this.size[xRoot] > this.size[yRoot]) {
      this.size[xRoot] += this.size[yRoot];
      this.parent[yRoot] = xRoot;
    } else {
      this.size[yRoot] += this.size[xRoot];
      this.parent[xRoot] = yRoot;
    }

    return true;
  }
}

function earliestAcq(logs: number[][], n: number): number {
  logs.sort((a, b) => a[0] - b[0]);

  const uf = new UnionFind(n);
  let count = n;

  for (const log of logs) {
    if (uf.union(log[1], log[2])) count--;
    if (count === 1) return log[0]
  }

  return -1;
};
