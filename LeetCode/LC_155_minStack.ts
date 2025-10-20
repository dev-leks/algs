// Stack of Value/ Minimum Pairs, Medium
// Time: O(1) for each method
// Space: O(n)
class MinStack {
  stack: Array<{ val: number, minVal: number }>;

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.push({ val, minVal: val });
      return;
    }

    const prevMinVal = this.stack[this.stack.length - 1].minVal ?? val;
    this.stack.push({ val, minVal: Math.min(prevMinVal, val) });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].minVal;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Two stacks, Medium
// Note: minStack can be optimized be storing [val, count] pairs to reduce space usage
// Time: O(1) for each method
// Space: O(n)
class MinStack2 {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);

    if (
      !this.minStack.length ||
      this.minStack[this.minStack.length - 1] >= val
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const val = this.stack.pop();

    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
