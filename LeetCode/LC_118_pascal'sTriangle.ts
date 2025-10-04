// Dynamic programming, Easy
// Time: O(numRows^2)
// Space: O(numRows^2)
function generate(numRows: number): number[][] {
    const rows: number[][] = Array.from(
        { length: numRows },
        (_, index) => Array(index + 1).fill(1)
    );

    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < rows[i].length - 1; j++) {
            rows[i][j] = rows[i - 1][j - 1] + rows[i - 1][j];
        }
    }

    return rows;
};
