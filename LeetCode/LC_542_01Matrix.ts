// Dynamic programming, Medium
// Time: O(m*n)
// Space: O(m*n)
function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const output: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        output[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!output[i][j]) continue;
      if (i > 0) output[i][j] = Math.min(output[i][j], output[i - 1][j] + 1);
      if (j > 0) output[i][j] = Math.min(output[i][j], output[i][j - 1] + 1);
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (!output[i][j]) continue;
      if (i < m - 1) output[i][j] = Math.min(output[i][j], output[i + 1][j] + 1);
      if (j < n - 1) output[i][j] = Math.min(output[i][j], output[i][j + 1] + 1);
    }
  }

  return output;
};

// BFS, Medium
// Time: O(m*n)
// Space: O(m*n)
function updateMatrix1(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const output: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const queue: [number, number][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        output[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift()!;

    const checks = [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ];

    for (const [row, col] of checks) {
      if (row < 0 || row >= m) continue;
      if (col < 0 || col >= n) continue;

      if (output[row][col] > output[i][j]) {
        output[row][col] = output[i][j] + 1;
        queue.push([row, col]);
      }
    }
  }

  return output;
};
