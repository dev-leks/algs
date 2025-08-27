import { MinPriorityQueue, PriorityQueue } from "@datastructures-js/priority-queue";

// Heaps, Medium (Two heaps)
// Time: O(k log(candidates))
// Space: O(candidates)
function totalCost(costs: number[], k: number, candidates: number): number {
    if (costs.length <= 1) return costs[0] ?? 0;

    const leftMinHeap = new MinPriorityQueue<number>();
    const rightMinHeap = new MinPriorityQueue<number>();

    let leftLastIndex = -1;
    let rightLastIndex = costs.length;

    for (let i = 0; i < Math.min(candidates, Math.ceil(costs.length / 2)); i++) {
        leftMinHeap.enqueue(costs[++leftLastIndex]);
        if (leftLastIndex < rightLastIndex - 1) rightMinHeap.enqueue(costs[--rightLastIndex]);
    }

    let totalCosts = 0;

    for (let i = 0; i < k; i++) {
        const leftMin = leftMinHeap.front() ?? Infinity;
        const rightMin = rightMinHeap.front() ?? Infinity;
        const isLeftSmaller = leftMin <= rightMin;

        if (isLeftSmaller) {
            totalCosts += leftMinHeap.dequeue()!;
            if (leftLastIndex < rightLastIndex - 1) leftMinHeap.enqueue(costs[++leftLastIndex]);
        } else {
            totalCosts += rightMinHeap.dequeue()!;
            if (rightLastIndex > leftLastIndex + 1) rightMinHeap.enqueue(costs[--rightLastIndex]);
        }
    }

    return totalCosts;
};

// Heap, Medium (One heap, video solution)
// Time: O(k log(candidates))
// Space: O(candidates)
function totalCost2(costs: number[], k: number, candidates: number): number {
    const heap = new PriorityQueue<[number, number]>(
        (a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
    );

    let leftLastIndex;
    for (leftLastIndex = 0; leftLastIndex < candidates; leftLastIndex++) {
        heap.enqueue([costs[leftLastIndex], leftLastIndex]);
    }
    leftLastIndex--;

    let rightLastIndex = Math.max(leftLastIndex + 1, costs.length - candidates);
    for (let i = rightLastIndex; i < costs.length; i++) {
        heap.enqueue([costs[i], i]);
    }

    let totalCosts = 0;

    for (let i = 0; i < k; i++) {
        const [cost, index] = heap.dequeue()!;
        totalCosts += cost;

        if (leftLastIndex < rightLastIndex - 1) {
            if (index <= leftLastIndex) {
                leftLastIndex++;
                heap.enqueue([costs[leftLastIndex], leftLastIndex]);
            } else {
                rightLastIndex--;
                heap.enqueue([costs[rightLastIndex], rightLastIndex]);
            }
        }
    }

    return totalCosts;
};

