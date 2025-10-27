// 2 stacks approach
// push/empty - O(1); 
// pop/peek - amortized O(1). Each element is moved from stackIn to stackOut at most once,
//  making the amortized cost of each operation O(1)
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
        this.shiftStacks();
        return this.outputStack.pop()!;
    }

    peek(): number {
        this.shiftStacks();
        return this.outputStack[this.outputStack.length - 1];
    }

    empty(): boolean {
        return !this.inputStack.length && !this.outputStack.length;
    }

    private shiftStacks() {
        if (this.outputStack.length) return;

        while (this.inputStack.length) {
            this.outputStack.push(this.inputStack.pop()!);
        }
    }
}

// Approach with 1 stack and pointer:
// not cover the task description + has extra elements
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
