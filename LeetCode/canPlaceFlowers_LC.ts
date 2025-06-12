function canPlaceFlowers(flowerbed: number[], n: number): boolean {
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
                
                if ((i == 0 && isNextEmpty) || (isPrevEmpty && isNextEmpty) || (i == flowerbed.length - 1 && isPrevEmpty)) {
                        count--
                        wasPlanted = true
                }
            }

        }
    }

    return count == 0
};
