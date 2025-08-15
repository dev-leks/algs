const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

// BFS for Graph, Matrix, Medium
// Time: O(n*m)
// Space: O(n*m)
function orangesRotting(grid: number[][]): number {
    const n = grid.length;
    const m = grid[0].length;
    let rotten: number[][] = [];
    let fresh = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) rotten.push([i, j]);
            if (grid[i][j] === 1) fresh++;
        }
    }

    let minutes = 0;

    while (rotten.length && fresh) {
        minutes++;
        const fruits: number[][] = [];

        for (const [x, y] of rotten) {
            for (const dir of DIRECTIONS) {
                const i = x + dir[0];
                const j = y + dir[1];

                if (i >= 0 && j >= 0 && i < n && j < m && grid[i][j] === 1) {
                    grid[i][j] = 2;
                    fresh--;
                    fruits.push([i, j]);

                    if (!fresh) return minutes;
                }
            }
        }
        
        rotten = fruits;
    }

    return fresh !== 0 ? -1 : minutes;
};
