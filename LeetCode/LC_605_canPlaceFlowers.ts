// Easy
// Space: O(1)
// Time: O(n)
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let plantedCount = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] !== 0) continue;
        if (i > 0 && flowerbed[i - 1] !== 0) continue;
        if (i < flowerbed.length - 1 && flowerbed[i + 1]) continue;
        
        flowerbed[i] = 1;
        plantedCount++;

        if (plantedCount >= n) return true;
    }

    return plantedCount >= n;
};

// Old solution
function canPlaceFlowersOld(flowerbed: number[], n: number): boolean {
    let count = n
    let wasPlanted = false

    for (let i = 0; i < flowerbed.length; i++) {
        if (!count) break;

        if (flowerbed[i] == 0) {
            if (wasPlanted) {
                wasPlanted = false
            } else {
                const isPrevEmpty = !flowerbed[i - 1]
                const isNextEmpty = !flowerbed[i + 1]
                
                if (
                    (i == 0 && isNextEmpty)
                     || (isPrevEmpty && isNextEmpty)
                     || (i == flowerbed.length - 1 && isPrevEmpty)
                ) {
                    count--
                    wasPlanted = true
                }
            }

        }
    }

    return count == 0
};
