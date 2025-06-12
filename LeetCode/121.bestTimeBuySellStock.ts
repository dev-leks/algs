function maxProfit(prices: number[]): number {
    if (prices.length <= 1) return 0

    let buyPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]

        if (price < buyPrice) {
            buyPrice = price
            continue
        }

        const profit = price - buyPrice
        maxProfit = Math.max(profit, maxProfit)
    }

    return maxProfit
};
