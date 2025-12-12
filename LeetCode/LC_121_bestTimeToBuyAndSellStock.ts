// Greedy, Easy
// Time: O(n)
// Space: O(1)
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let maxProfit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
      continue;
    }

    maxProfit = Math.max(maxProfit, prices[i] - buyPrice);
  }

  return maxProfit;
};

// Brute force, Easy (Time Limit Exceeded)
// Time: O(n^2)
// Space: O(1)
function maxProfit1(prices: number[]): number {
  const n = prices.length;
  let maxProfit = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
  }

  return maxProfit;
};
