// Monotonic Stack, Medium
// Time: O(1) - amortized
// Space: O(n)
class StockSpanner {
  prices: [number, number][];

  constructor() {
    this.prices = [];
  }

  next(price: number): number {
    let span = 1;

    while (this.prices.length && this.prices[this.prices.length - 1][0] <= price) {
      span += this.prices.pop()![1];
    }

    this.prices.push([price, span]);

    return span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// Monotonic Stack, Medium (My first solution)
// Time: O(n)
// Space: O(n)
class StockSpanner1 {
  prices: number[];

  constructor() {
    this.prices = [];
  }

  next(price: number): number {
    this.prices.push(price);

    let count = 0;
    const stack = [...this.prices];

    while (stack.length && stack[stack.length - 1] <= price) {
      stack.pop();
      count++;
    }

    return count;
  }
}
