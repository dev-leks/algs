function bestHand(ranks: number[], suits: string[]): string {
    const ranksMap = {}
    const suitsMap = {}

    if (!ranks.length || !suits.length) return ''

    let hasFlush = false
    let hasThreeOfKind = false
    let hasPair = false   

    // O(n)
    for (let i = 0; i < ranks.length; i++) {
        const suitCount = suitsMap[suits[i]] || 0
        const newSuitCount = suitCount + 1
        suitsMap[suits[i]] = newSuitCount

        // The highest poker hand
        if (newSuitCount === 5) {
            hasFlush = true
        }

        const rankCount = ranksMap[ranks[i]] || 0
        const newRankCount = rankCount + 1
        ranksMap[ranks[i]] = newRankCount

        if (newRankCount >= 3) {
            hasThreeOfKind = true
        }

        if (newRankCount >= 2) {
            hasPair = true
        }
    }

    // The highest poker hand
    if (hasFlush) {
        return "Flush"
    }

    if (hasThreeOfKind) {
        return "Three of a Kind"
    }

    if (hasPair) {
       return "Pair"
    }

    return "High Card"
};
