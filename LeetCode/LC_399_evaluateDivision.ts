// DFS for Graph + Math, Medium (With help)
// Time: O(Q⋅(V+E))
// Space: O(V+E)
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const adj = new Map<string, Record<string, number>>();

    for (let i = 0; i < equations.length; i++) {
        const [nom, denom] = equations[i];
        adj.set(nom, { ...adj.get(nom), [denom]: values[i] });
        adj.set(denom, { ...adj.get(denom), [nom]: 1 / values[i] });
    }

    function findAnswer(node: string, target: string, current: number, visited: Set<string>): number {
        if (!adj.has(node) || !adj.has(target)) return -1;

        if (node === target) return 1;

        if (target in adj.get(node)!) return current * adj.get(node)![target];

        visited.add(node);

        for (const [conn, weight] of Object.entries(adj.get(node)!)) {
            if (!visited.has(conn)) {
                const ans = findAnswer(conn, target, current * weight, visited);
                if (ans !== -1) return ans;
            }
        }

        return -1;
    }

    const results: number[] = [];
    for (const [nom, denom] of queries) {
        results.push(findAnswer(nom, denom, 1, new Set<string>()));
    }

    return results;
};
