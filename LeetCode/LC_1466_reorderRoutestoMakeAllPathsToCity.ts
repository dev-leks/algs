// DFS for Graph, Medium
// Time: O(n)
// Space: O(n)
function minReorder(n: number, connections: number[][]): number {
    const adj: Array<Array<[number, boolean]>> = Array.from({ length: n }, () => []);

    for (const [from, to] of connections) {
        adj[from].push([to, true]); 
        adj[to].push([from, false]);
    }

    let edgesCount = 0;

    function dfs(node: number, parent: number) {
        for (const [child, isForward] of adj[node]) {
            if (child !== parent) {
                if (isForward) edgesCount++;
                dfs(child, node);
            }
        }
    }

    dfs(0, -1);

    return edgesCount;
};

// DFS for Graph, Medium
// Time: O(n)
// Space: O(n)
function minReorder1(n: number, connections: number[][]): number {
    const graphConnections = new Map<number, Record<number, boolean>>();

    for (let i = 0; i < connections.length; i++) {
        const [from, to] = connections[i];
        graphConnections.set(from, { ...graphConnections.get(from), [to]: true });
        graphConnections.set(to, { ...graphConnections.get(to), [from]: false });
    }

    const visited = new Array(n).fill(false);
    let edgesCount = 0;

    function dfs(node: number) {
        visited[node] = true;

        Object.entries(graphConnections.get(node) || {}).forEach(([child, isForward]) => {
            if (!visited[+child]) {
                if (isForward) edgesCount++;
                dfs(+child);
            }
        });
    }

    dfs(0);

    return edgesCount;
};
