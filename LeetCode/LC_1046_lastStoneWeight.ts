// Heap, Easy
// Time: O(nlogn)
// Space: O(n)
function lastStoneWeight(stones: number[]): number {
    const heap = MaxPriorityQueue.fromArray(stones);

    while (heap.size() > 1) {
        const first = heap.dequeue();
        const second = heap.dequeue();

        if (first !== second) {
            heap.enqueue(first - second);
        }
    }

    return heap.front() ?? 0;
};

// Sorting, Easy
// Time: O(n^2logn)
// Space: O(1)
function lastStoneWeight2(stones: number[]): number {
    stones.sort((a, b) => a - b);

    while (stones.length > 1) {
        const first = stones.pop()!;
        const second = stones.pop()!;

        if (first !== second) {
            stones.push(first - second);
            stones.sort((a, b) => a - b);
        }
    }

    return stones[0] ?? 0;
};
