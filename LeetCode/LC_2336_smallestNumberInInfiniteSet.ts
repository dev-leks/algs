import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// Heap for added back only, Medium (ChatGPT solution)
// Time: O(logn) for methods
// Space: O(k), k - max number of added-back elements 
class SmallestInfiniteSet {
    current: number;
    heap: number[];
    addedBack: Set<number>;

    constructor() {
        this.current = 1;
        this.heap = [];
        this.addedBack = new Set();
    }

    popSmallest(): number {
        if (!this.heap.length) return this.current++;

        const min = this.heap[0];
        this.addedBack.delete(min);
        
        const last = this.heap.pop();
        if (last && this.heap.length) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return min;
    }

    addBack(num: number): void {
        if (num >= this.current || this.addedBack.has(num)) return;

        this.addedBack.add(num);
        this.heap.push(num);
        this.bubbleUp();
    }

    private bubbleDown() {
        const n = this.heap.length;
        let index = 0;

        while (index < n) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;

            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;

            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    private bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
}

// Heap (built-in MinPriorityQueue) for added back only, Medium
// Time: O(logn) for methods
// Space: O(k), k - max number of added-back elements 
class SmallestInfiniteSet0 {
    current: number;
    heap: MinPriorityQueue<number>;
    addedBack: Set<number>;

    constructor() {
        this.current = 1;
        this.heap = new MinPriorityQueue();
        this.addedBack = new Set();
    }

    popSmallest(): number {
        if (!this.heap.size()) return this.current++;

        const min = this.heap.dequeue()!;
        this.addedBack.delete(min);

        return min;
    }

    addBack(num: number): void {
        if (num >= this.current || this.addedBack.has(num)) return;

        this.addedBack.add(num);
        this.heap.enqueue(num);
    }
}

// Heap, Medium (My first solution with storing all 1000 elements in heap)
// Time: O(logn) for methods
// Space: O(m), m - number of elements (1000)
class SmallestInfiniteSet1 {
    heap: number[];
    removed: Set<number>;

    constructor() {
        this.heap = Array.from({ length: 1000 }, (_, index) => index + 1);
        this.removed = new Set();
    }

    popSmallest(): number {
        const min = this.heap[0];
        this.removed.add(min);
        const last = this.heap.pop()
        if (last !== undefined && this.heap.length) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    addBack(num: number): void {
        if (!this.removed.has(num)) return;

        this.removed.delete(num);
        this.heap.push(num);
        this.bubbleUp();
    }

    private bubbleDown() {
        const n = this.heap.length;
        let index = 0;

        while (index < n) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;

            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;

            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    private bubbleUp() {
        let index = this.heap.length - 1;
        
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
}

// Hash Table, Medium (Solution from video without Heap)
// Time: addBack - O(1); popSmallest - O(1) amortized, O(k) - worst-case
// Space: O(m)
class SmallestInfiniteSet2 {
    current: number;
    removed: Set<number>;

    constructor() {
        this.current = 1;
        this.removed = new Set();
    }

    popSmallest(): number {
        const min = this.current;
        this.removed.add(min);
        this.current++;

        while (this.removed.has(this.current)) {
            this.current++;
        }

        return min;
    }

    addBack(num: number): void {
        if (!this.removed.has(num)) return;
        this.removed.delete(num);
        if (num < this.current) this.current = num;
    }
}
