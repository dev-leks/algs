// Binary Search, Medium (Optimal solution)
// Time: O((n + m) log(m)))
// Space: O(1)
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);

    const m = potions.length;
    const pairs: number[] = [];

    for (const spell of spells) {
        const minPotion = Math.ceil(success / spell);
        let left = 0;
        let right = m - 1;
        let index = m;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (potions[mid] >= minPotion) {
                index = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        pairs.push(m - index);
    }

    return pairs;
};

// Binary Search, Medium (My solution)
// Time: O((n + m) log(m))
// Space: O(1)
function successfulPairs1(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);

    const m = potions.length;
    const pairs: number[] = [];

    for (const spell of spells) {
        let left = 0;
        let right = m - 1;
        let index = m;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const product = spell * potions[mid];

            if (product >= success) {
                index = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        pairs.push(m - index);
    }

    return pairs;
};
