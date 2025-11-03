import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// Sorting, Easy (Expected solution)
// Time: O(nlog(n))
// Space: O(n) for output array
function numberGame(nums: number[]): number[] {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const arr: number[] = [];

    for (let i = 0; i < n; i += 2) {
        const aliceNum = nums[i];
        const bobNum = nums[i + 1];

        arr.push(bobNum);
        arr.push(aliceNum);
    }

    return arr;
};

// Heap, Easy (My first solution with custom implementation of Heap)
// Time: O(nlog(n))
// Space: O(n) for output array
function numberGame1(nums: number[]): number[] {
    const n = nums.length;

    buildMinHeap(nums);

    const arr: number[] = [];

    for (let i = 0; i < n / 2; i++) {
        const aliceNum = extractMin(nums);
        const bobNum = extractMin(nums);

        arr.push(bobNum);
        arr.push(aliceNum);
    }

    return arr;
};

function buildMinHeap(arr: number[]) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, n, i);
    }
}

function heapifyDown(arr: number[], n: number, index: number) {
    while (index < n) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < n && arr[left] < arr[smallest]) smallest = left;
        if (right < n && arr[right] < arr[smallest]) smallest = right;

        if (smallest === index) break;

        [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
        index = smallest;
    }   
}

function extractMin(arr: number[]) {
    const min = arr[0];
    const last = arr.pop();

    if (last !== undefined && arr.length) {
        arr[0] = last;
        heapifyDown(arr, arr.length, 0);
    }

    return min;
}

// Heap, Easy (With built-in MinPriorityQueue)
// Time: O(nlog(n))
// Space: O(n) for output array
function numberGame2(nums: number[]): number[] {
    const n = nums.length;
    const heap = MinPriorityQueue.fromArray(nums);
    const arr: number[] = [];

    for (let i = 0; i < n / 2; i++) {
        const aliceNum = heap.dequeue()!;
        const bobNum = heap.dequeue()!;

        arr.push(bobNum);
        arr.push(aliceNum);
    }

    return arr;
};
