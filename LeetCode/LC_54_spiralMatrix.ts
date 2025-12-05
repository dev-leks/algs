// Matrix (Set up boundaries), Medium
// Time: O(m*n)
// Space: O(1) - without output array
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const output: number[] = [];

  function traverseRect(
    rowStart: number,
    rowEnd: number,
    colStart: number,
    colEnd: number,
  ) {
    // Left -> Right
    for (let col = colStart; col <= colEnd; col++) {
      output.push(matrix[rowStart][col]);
    }

    // Top -> Bottom
    for (let row = rowStart + 1; row < rowEnd; row++) {
      output.push(matrix[row][colEnd]);
    }

    // Left <- Right
    if (rowEnd > rowStart) {
      for (let col = colEnd; col >= colStart; col--) {
        output.push(matrix[rowEnd][col]);
      }
    }

    // Top <- Bottom
    if (colEnd > colStart) {
      for (let row = rowEnd - 1; row > rowStart; row--) {
        output.push(matrix[row][colStart]);
      }
    }
  }

  let rowStart = 0;
  let rowEnd = m - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (output.length < m * n) {
    traverseRect(rowStart, rowEnd, colStart, colEnd);

    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }

  return output;
};

// Matrix, Medium (Optimized solution)
// Time: O(m*n)
// Space: O(1) - without output array
function spiralOrder1(matrix: number[][]): number[] {
  let m = matrix.length;
  let n = matrix[0].length;

  let direction = 1;
  let i = 0;
  let j = -1;

  const output: number[] = [];

  while (m * n > 0) {
    // direction = 1, Right -> Left
    // direction = -1, Right <- Left
    for (let col = 0; col < n; col++) {
      j += direction;
      output.push(matrix[i][j]);
    }
    m--;

    // direction = 1, Top -> Bottom
    // direction = -1, Top <- Bottom
    for (let row = 0; row < m; row++) {
      i += direction;
      output.push(matrix[i][j]);
    }
    n--;

    direction *= -1;
  }

  return output;
};
