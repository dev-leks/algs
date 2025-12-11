// Stack, Easy (Two stacks)
// Time: O(1) (amortized) for pop, O(1) - for other methods
// Space: O(n) for push, O(1) for other methods
class MyQueue {
    private inputStack: number[];
    private outputStack: number[];

    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    push(x: number): void {
        this.inputStack.push(x);
    }

    pop(): number {
        if (!this.outputStack.length) {
            while (this.inputStack.length) {
              this.outputStack.push(this.inputStack.pop()!);
            }
        }

      return this.outputStack.pop()!;
    }

    peek(): number {
        return this.outputStack[this.outputStack.length - 1] ?? this.inputStack[0];
    }

    empty(): boolean {
       return !this.inputStack.length && !this.outputStack.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Stack + Pointer, Easy (Not acceptable, not cover the task description + store all elements in the stack)
// Time: O(1) for each method
// Space: O(n)
class MyQueue0 {
    private stack: number[];
    private pointer: number;
    private size: number;

    constructor() {
        this.stack = [];
        this.pointer = 0;
        this.size = 0;
    }

    push(x: number): void {
        this.stack.push(x);
        this.size++;
    }

    pop(): number {
        const value = this.stack[this.pointer];
        this.pointer++;
        this.size--;

        return value;
    }

    peek(): number {
        return this.stack[this.pointer];
    }

    empty(): boolean {
        return this.size === 0;
    }
}
