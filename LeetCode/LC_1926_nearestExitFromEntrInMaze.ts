const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

// BFS for Graph, Matrix, Medium
// Time: O(n*m)
// Space: O(n*m)
function nearestExit(maze: string[][], entrance: number[]): number {
    const n = maze.length;
    const m = maze[0].length;
    const queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];
    maze[entrance[0]][entrance[1]] = '+';

    while (queue.length) {
        const [x, y, steps] = queue.shift()!;

        for (const dir of DIRECTIONS) {
            const i = x + dir[0];
            const j = y + dir[1];

            if (i >= 0 && j >= 0 && i < n && j < m && maze[i][j] === '.') {
                if (i === 0 || j === 0 || i === n - 1 || j === m - 1) return steps + 1;

                maze[i][j] = '+';
                queue.push([i, j, steps + 1]);
            }
        }
    }

    return -1;
};
