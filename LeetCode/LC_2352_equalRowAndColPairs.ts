// Array, Hash table, Medium (Optimized)
// Time: O(n^2)
// Space: O(n)
function equalPairs(grid: number[][]): number {
    const rowFrequencyMap = new Map();

    for (let rowId = 0; rowId < grid.length; rowId++) {
        const row = grid[rowId].join('|');
        rowFrequencyMap.set(row, (rowFrequencyMap.get(row) ?? 0) + 1);
    }

    let pairsCount = 0;

    for (let columnId = 0; columnId < grid[0].length; columnId++) {
        const column: number[] = [];
        for (let rowId = 0; rowId < grid.length; rowId++) {
            column.push(grid[rowId][columnId]);
        }
        const columnHash = column.join('|');

        const frequency = rowFrequencyMap.get(columnHash);
        if (frequency) pairsCount += frequency;
    }

    return pairsCount;
};

// Array, Hash table, Medium (my first solution)
// Time: O(n^2)
// Space: O(n^2)
function equalPairs1(grid: number[][]): number {
    const rowsMap = new Map();
    const columnsMap = new Map();

    for (let rowI = 0; rowI < grid.length; rowI++) {
        for (let columnI = 0; columnI < grid[rowI].length; columnI++) {
            const row = rowsMap.get(rowI);
            rowsMap.set(rowI, (row ? row + ',' : '') + grid[rowI][columnI]);
            const column = columnsMap.get(columnI);
            columnsMap.set(columnI, (column ? column + ',' : '') + grid[rowI][columnI]);
        }
    }

    let pairsCount = 0;
    rowsMap.forEach((row) => {
        columnsMap.forEach((column) => {
            if (row === column) pairsCount++;
        })
    });

    return pairsCount;
};

// Array, Hash table, Medium (Optimized with help)
// Time: O(n^2)
// Space: O(n^2)
function equalPairs2(grid: number[][]): number {
    const rowFrequencyMap = new Map();
    const columns: string[] = [];

    for (let rowId = 0; rowId < grid.length; rowId++) {
        const row = grid[rowId].join('|');
        rowFrequencyMap.set(row, (rowFrequencyMap.get(row) ?? 0) + 1);

        for (let columnId = 0; columnId < grid[rowId].length; columnId++) {
            const column = String(grid[rowId][columnId]);
            columns[columnId] = columns[columnId] ? columns[columnId] + '|' + column : column;
        }
    }

    let pairsCount = 0;
    for (const column of columns) {
        const frequency = rowFrequencyMap.get(column);
        if (frequency) pairsCount += frequency;
    }

    return pairsCount;
};
