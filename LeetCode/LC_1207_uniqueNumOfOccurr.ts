// Hash table, Easy
// Space: O(n)
// Time: O(n)
function uniqueOccurrences(arr: number[]): boolean {
    const occursMap = new Map();

    for (const num of arr) {
        occursMap.set(num, (occursMap.get(num) ?? 0) + 1);
    }

    return occursMap.size === (new Set(occursMap.values())).size;
};
