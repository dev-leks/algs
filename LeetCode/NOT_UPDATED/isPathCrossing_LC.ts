function isPathCrossing(path: string): boolean {
    const coordMap: Map<string, number> = new Map()
    let x = 0
    let y = 0

    coordMap.set('0,0', 1)

    for (let i = 0; i < path.length; i++) {
        const dir = path[i]

        if (dir == 'N') {
            y++
        }

        if (dir == 'E') {
            x++
        }

        if (dir == 'S') {
            y--
        }

        if (dir == 'W') {
            x--
        }

        if (coordMap.has(`${x},${y}`)) {
            return true
        }

        coordMap.set(`${x},${y}`, 1)
    }

    return false
};

console.log(isPathCrossing("NESWW"))
