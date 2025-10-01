// Dynamic programming, Medium (Optimized space)
// Time: O(n)
// Space: O(1)
function maxProfit(prices: number[], fee: number): number {
    let notHolding = 0;
    let holding = -prices[0];

    for (const price of prices) {
        notHolding = Math.max(notHolding, holding + price - fee);
        holding = Math.max(holding, notHolding - price);
    }

    return notHolding;
};

// Dynamic programming, Medium
// Time: O(n)
// Space: O(n)
function maxProfit1(prices: number[], fee: number): number {
    const dpNotHolding: number[] = [0];
    const dpHolding: number[] = [-prices[0]];

    for (let i = 1; i < prices.length; i++) {
        dpNotHolding[i] = Math.max(dpNotHolding[i - 1], dpHolding[i - 1] + prices[i] - fee);
        dpHolding[i] = Math.max(dpHolding[i - 1], dpNotHolding[i - 1] - prices[i]);
    }

    return dpNotHolding[prices.length - 1];
};
