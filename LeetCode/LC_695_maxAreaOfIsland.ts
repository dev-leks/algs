// DFS for Graph (Recursive), Medium
// Time: O(m*n)
// Space: O(m*n)
function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const seen: boolean[][] = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

  function getIslandArea(x: number, y: number): number {
    if (x < 0 || x > m - 1 || y < 0 || y > n - 1 || seen[x][y] || grid[x][y] === 0) return 0;

    seen[x][y] = true;

    return 1 + getIslandArea(x, y - 1)
      + getIslandArea(x + 1, y)
      + getIslandArea(x, y + 1)
      + getIslandArea(x - 1, y);
  }

  let maxArea = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      maxArea = Math.max(maxArea, getIslandArea(i, j));
    }
  }

  return maxArea;
};

// DFS for Graph (Recursive), Hash table, Medium
// Time: O(m*n)
// Space: O(m*n)
function maxAreaOfIsland1(grid: number[][]): number {
  const DIRECTIONS = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  const ones: number[][] = []
  const visited = new Set<string>();
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        ones.push([i, j]);
      }
    }
  }

  function getIslandArea(x0: number, y0: number): number {
    const hash = `${x0};${y0}`;

    if (visited.has(hash)) return 0;

    visited.add(hash);
    let area = 1;

    for (const [dx, dy] of DIRECTIONS) {
      const x = x0 + dx;
      const y = y0 + dy;

      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
        area += getIslandArea(x, y);
      }
    }

    return area;
  }

  let maxArea = 0;
  while (ones.length) {
    const [x0, y0] = ones.pop()!;

    if (visited.has(`${x0};${y0}`)) continue;

    maxArea = Math.max(maxArea, getIslandArea(x0, y0));
  }

  return maxArea;
};

// DFS for Graph (Iterative), Stack, Medium
// Time: O(m*n)
// Space: O(m*n)
function maxAreaOfIsland2(grid: number[][]): number {
  const DIRECTIONS = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  const m = grid.length;
  const n = grid[0].length;
  const seen: boolean[][] = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
  let maxArea = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !seen[i][j]) {
        seen[i][j] = true;

        let area = 0;
        const stack: number[][] = [[i, j]];

        while (stack.length) {
          const [x0, y0] = stack.pop()!;
          area++;

          for (const [dx, dy] of DIRECTIONS) {
            const x = x0 + dx;
            const y = y0 + dy;

            if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1 && !seen[x][y]) {
              stack.push([x, y]);
              seen[x][y] = true;
            }
          }
        }

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};
