// Heap (class implementation of MinHeap), Medium
// Time: O(nlogn)
// Space: O(n)
class HeapItem {
    val: number;
    priority: number;

    constructor(val: number, priority: number = val) {
        this.val = val;
        this.priority = priority;
    }
}

class MinHeap {
    heap: HeapItem[];
    
    constructor() {
        this.heap = [];
    }

    push(node: HeapItem): void {
        this.heap.push(node);
        this.bubbleUp();
    }

    pop(): HeapItem | undefined {
        const min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.bubbleDown();

        return min;
    }

    peak(): HeapItem | undefined {
        return this.heap[0];
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
       
        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (parent.priority <= element.priority) break;

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    private bubbleDown(): void {
        let smallest = 0;
        let minIndex = smallest;
        const n = this.heap.length;

        while (smallest < n) {
            const left = 2 * smallest + 1;
            const right = left + 1;
            const isLeftSmaller = left < n && this.heap[left].priority < this.heap[minIndex].priority;
            const isRightSmaller = right < n && this.heap[right].priority < this.heap[minIndex].priority;

            if (isLeftSmaller || isRightSmaller) {
                if (right < n) minIndex = this.heap[left].priority < this.heap[right].priority ? left : right;
                else minIndex = left;
            }

            if (minIndex === smallest) break;

            [this.heap[minIndex], this.heap[smallest]] = [this.heap[smallest], this.heap[minIndex]];
            smallest = minIndex;
        }
    }
}

function findKthLargest1(nums: number[], k: number): number {
    const heap = new MinHeap();

    for (const num of nums) {
        heap.push(new HeapItem(-1 * num));
    }

    for (let i = 0; i < k; i++) {
        if (i === k - 1) return -1 * heap.peak()!.val;
        heap.pop();
    }

    return 0;
};

// Heap (helpers for MaxHeap), Medium
// Time: O(n)+O(klog⁡n)
// Space: O(1)
function heapifyMax(arr: number[], n: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
   
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyMax(arr, n, largest);
    }
}

function buildMaxHeap(arr: number[]) {
    const n = arr.length;
    
    for (let i = Math.floor(n / 2) - 1; i >=0; i--) {
        heapifyMax(arr, n, i);
    }
}

function extractMax(arr: number[]): number {
    const max = arr[0];
    const last = arr.pop();

    if (arr.length > 0 && last) {
        arr[0] = last;
        heapifyMax(arr, arr.length, 0);
    }

    return max;
}

function findKthLargest2(nums: number[], k: number): number {
    buildMaxHeap(nums);

    for (let i = 0; i < k; i++) {
        if (i === k - 1) return extractMax(nums);
        extractMax(nums);
    }

    return 0;
};

// Heap (helpers for MinHeap), Medium
// Time: O(n+klog⁡n)
// Space: O(1)
function heapify(arr: number[], n: number, i: number) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) smallest = left;
   
    if (right < n && arr[right] < arr[smallest]) smallest = right;

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

function buildMinHeap(arr: number[]) {
    const n = arr.length;
    
    for (let i = Math.floor(n / 2) - 1; i >=0; i--) {
        heapify(arr, n, i);
    }
}

function extractMin(arr: number[]): number | null {
    if (!arr.length) return null;

    const min = arr[0];
    const last = arr.pop();

    if (arr.length > 0 && last) {
        arr[0] = last;
        heapify(arr, arr.length, 0);
    }

    return min;
}

function findKthLargest3(nums: number[], k: number): number {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = -1 * nums[i];
    }
    buildMinHeap(nums);

    for (let i = 0; i < k; i++) {
        const num = extractMin(nums) ?? 0;
        if (i === k - 1) return -1 * num;
    }

    return 0;
};
