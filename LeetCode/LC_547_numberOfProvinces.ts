// DFS for Graph, Medium
// Time: O(n^2)
// Space: O(n)
function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provincesCount = 0;

    function dfs(node: number) {
        visited[node] = true;

        for (let i = 0; i < n; i++) {
            if (isConnected[node][i] && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provincesCount++;
            dfs(i);
        }
    }

    return provincesCount;
};
