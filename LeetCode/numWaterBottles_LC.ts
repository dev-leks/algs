function numWaterBottles(numBottles: number, numExchange: number): number {
    let maxNumBottles = numBottles
    let bottles = numBottles

    while (Math.floor(bottles / numExchange) > 0) {
        const fullWatterBottles = Math.floor(bottles / numExchange)
        const emptyBottelsLeft = bottles % numExchange

        maxNumBottles += fullWatterBottles
        bottles = fullWatterBottles + emptyBottelsLeft
    }

    return maxNumBottles
};
