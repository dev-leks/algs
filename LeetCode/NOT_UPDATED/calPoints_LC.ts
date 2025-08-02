function calPoints(operations: string[]): number {
    const scores: number[] = []
    let scoresSum = 0

    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i]

        if (!['+', 'D', 'C'].includes(operation)) {
            scores.push(+operation)
            scoresSum += +operation
        }

        if (operation == '+') {
            const scoresCount = scores.length
            const prevFirstScore = scores[scoresCount - 2] || 0
            const prevSecondScore = scores[scoresCount - 1]
            const sum = prevFirstScore + prevSecondScore
           
            scores.push(sum)
            scoresSum += sum
        }

        if (operation == 'D') {
            const prevScore = scores[scores.length - 1] || 0
            const value = prevScore * 2
            scores.push(value)
            scoresSum += value
        }

        if (operation == 'C') {
            const prevScore = scores[scores.length - 1] || 0
            scores.pop()
            scoresSum -= prevScore
        }
    }

    return scoresSum
};
