// DFS + Graph, Medium
// Time: O(n + k), n - number of rooms, k - number of keys (edges)
// Space: O(n)
function canVisitAllRooms(rooms: number[][]): boolean {
    if (!rooms.length) return false;

    const visited = new Set([0]);
    const stack: number[] = [0];

    while (stack.length) {
        const roomNumber = stack.pop();

        (rooms[roomNumber!] ?? []).forEach((key) => {
            if (!visited.has(key)) {
                stack.push(key);
                visited.add(key);
            }
        });
    }

    return visited.size === rooms.length;
};
