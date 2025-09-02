// Binary Search, Medium (Expected solution)
// Time: O(n*log(m)) - m is the maximum number of bananas in a pile
// Space: O(1)
function minEatingSpeed(piles: number[], h: number): number {
    let min = 1;
    let max = Math.max(...piles);

    while (min < max) {
        const k = Math.floor((min + max) / 2);
        let hours = 0;

        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }

        if (hours <= h) {
            max = k;
        } else {
            min = k + 1;
        }
    }

    return min;
};
