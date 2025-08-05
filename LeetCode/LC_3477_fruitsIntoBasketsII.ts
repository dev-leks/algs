// Simulation, Easy
// Time: O(n^2)
// Space: O(1)
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    let unplacedCount = 0;

    for (let fruit of fruits) {
        let foundBasket = false;
        for (let i = 0; i < baskets.length; i++) {
            if (baskets[i] >= fruit) {
                baskets[i] = 0;
                foundBasket = true;
                break;
            }
        }

        if (!foundBasket) unplacedCount++;
    }

    return unplacedCount;
};
