// DFS, Easy
// Time: O(n)
// Space: O(n)
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image[sr][sc] === color) return image;

    const m = image.length;
    const n = image[0].length;

    function dfs(row: number, col: number, originalColor: number) {
        if (image[row][col] !== originalColor) return;

        image[row][col] = color;

        if (row > 0) dfs(row - 1, col, originalColor);
        if (row < m - 1) dfs(row + 1, col, originalColor);
        if (col > 0) dfs(row, col - 1, originalColor);
        if (col < n - 1) dfs(row, col + 1, originalColor);
    }

    dfs(sr, sc, image[sr][sc]);

    return image;
};
