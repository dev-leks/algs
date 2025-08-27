import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// Greedy + Heap, Medium
// Time: O(nlogn)
// Space: O(n + k)
function maxScore(nums1: number[], nums2: number[], k: number): number {
    const pairs = nums1.map((num, index) => [num, nums2[index]]);
    pairs.sort((a, b) => b[1] - a[1]);

    let score = 0;
    let sum = 0;
    const heap = new MinPriorityQueue<number>();

    for (const [num1, num2] of pairs) {
        heap.enqueue(num1);
        sum += num1;

        if (heap.size() > k) sum -= heap.dequeue()!;

        if (heap.size() === k) score = Math.max(score, sum * num2);
    }

    return score;
};
