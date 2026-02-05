import { PriorityQueue } from "@datastructures-js/priority-queue";

// Dijkstra's algorithm, Heap, Medium (Optimized solution)
// Time: O(V + Elog(E)) - V is number of vertices, E is number of edges
// Space: O(V+E)
function minCost(n: number, edges: number[][]): number {
  const adj: [number, number][][] = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
    adj[v].push([u, 2 * w]);
  }

  const dist: number[] = Array(n).fill(Infinity);
  dist[0] = 0;
  const visited: boolean[] = Array(n).fill(false);
  const minHeap = new PriorityQueue<[number, number]>(
    (a, b) => a[1] - b[1]
  );

  minHeap.enqueue([0, 0]);

  while (!minHeap.isEmpty()) {
    const [u, weight] = minHeap.dequeue()!;

    if (u === n - 1) return weight;

    if (visited[u]) continue;
    visited[u] = true;

    for (const [v, w] of adj[u]) {
      if (weight + w < dist[v]) {
        dist[v] = weight + w;
        minHeap.enqueue([v, dist[v]]);
      }
    }
  }

  return -1;
};

// Dijkstra's algorithm, Heap, Medium
// Time: O((V+E)*log(V)) - V is number of vertices, E is number of edges
// Space: O(V+E)
function minCost1(n: number, edges: number[][]): number {
  const adj: [number, number][][] = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
    adj[v].push([u, 2 * w]);
  }

  const dist: number[] = Array(n).fill(Infinity);
  dist[0] = 0;
  const minHeap = new PriorityQueue<[number, number]>(
    (a, b) => a[1] - b[1]
  );

  minHeap.enqueue([0, 0]);

  while (!minHeap.isEmpty()) {
    const [u, weight] = minHeap.dequeue()!;

    if (weight > dist[u]) continue;

    for (const [v, w] of adj[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        minHeap.enqueue([v, dist[v]]);
      }
    }
  }

  if (dist[n - 1] === Infinity) return -1;

  return dist[n - 1];
};
