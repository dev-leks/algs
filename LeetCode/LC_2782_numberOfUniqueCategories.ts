/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     constructor(categories: number[]);
 *     public haveSameCategory(a: number, b: number): boolean;
 * }
 */

// Union Find (Union by Size + Path Compression), Medium
// Time: O(n^2)
// Space: O(n)
class UnionFind {
  parent: number[] = [];
  size: number[] = [];
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

function numberOfCategories(n: number, categoryHandler: CategoryHandler): number {
  if (n === 1) return 1;

  const uf = new UnionFind(n);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (categoryHandler.haveSameCategory(i, j)) {
        uf.union(i, j);
      }
    }
  }

  return uf.getCount();
};

// Greedy, Medium
// Time: O(n^2)
// Space: O(1)
function numberOfCategories2(n: number, categoryHandler: CategoryHandler): number {
  let count = n;

  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (categoryHandler.haveSameCategory(i, j)) {
        count--;
        break;
      }
    }
  }

  return count;
};
