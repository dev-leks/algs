import { PriorityQueue } from "@datastructures-js/priority-queue";

// Binary search, Medium
// Time: O(n)
// Space: O(n)
function kClosest(points: number[][], k: number): number[][] {
  const distances = points.map((point) => Math.pow(point[0], 2) + Math.pow(point[1], 2));
  let remaining = points.map((_, i) => i);
  let low = 0;
  let high = Math.max(...distances);
  let closest: number[] = [];

  while (k) {
    const mid = low + (high - low) / 2;
    const [closer, farther] = splitDistances(remaining, distances, mid);

    if (closer.length > k) {
      remaining = closer;
      high = mid;
    } else {
      k -= closer.length;
      closest.push(...closer);
      remaining = farther;
      low = mid;
    }
  }

  function splitDistances(remaining: number[], distances: number[], mid: number) {
    const closer = [];
    const farther = [];

    for (const index of remaining) {
      if (distances[index] <= mid) {
        closer.push(index);
      } else {
        farther.push(index);
      }
    }

    return [closer, farther];
  }

  return closest.map(i => points[i]);
};

// Heap, Medium (Store only k closest points in max heap)
// Time: O(nlog(k))
// Space: O(k)
function kClosest2_1(points: number[][], k: number): number[][] {
  if (points.length === k) return points;

  const maxHeap = new PriorityQueue<[number[], number]>(
    (a, b) => b?.[1] - a?.[1]
  );

  for (const point of points) {
    const distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));

    if (maxHeap.size() < k) {
      maxHeap.enqueue([point, distance]);
    } else if (distance < maxHeap.front()![1]) {
      maxHeap.dequeue();
      maxHeap.enqueue([point, distance]);
    }
  }

  return maxHeap.toArray().map(item => item[0]);
};

// Heap, Medium (Store all distances in min heap)
// Time: O(nlog(n))
// Space: O(n)
function kClosest2(points: number[][], k: number): number[][] {
  if (points.length === k) return points;

  const minHeap = new PriorityQueue<[number, [number, number]]>(
    (a, b) => a?.[0] - b?.[0]
  );

  for (const [x, y] of points) {
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    minHeap.enqueue([distance, [x, y]]);
  }

  const output: number[][] = [];
  while (k) {
    output.push(minHeap.dequeue()![1]);
    k--;
  }

  return output;
};

// Sorting, Medium
// Time: O(nlog(n))
// Space: O(log(n)) - sort the array
function kClosest1_1(points: number[][], k: number): number[][] {
  if (points.length === k) return points;

  const getDistance = ([x, y]: number[]): number => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  };

  points.sort((a, b) => getDistance(a) - getDistance(b));

  return points.slice(0, k);
};

// Sorting, Medium (My first solution)
// Time: O(nlog(n))
// Space: O(n)
function kClosest1(points: number[][], k: number): number[][] {
  if (points.length === k) return points;

  const distances: [number, number[]][] = [];
  for (const [x, y] of points) {
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    distances.push([distance, [x, y]]);
  }

  distances.sort((a, b) => a[0] - b[0]);

  const output: number[][] = [];
  for (const distance of distances) {
    output.push(distance[1]);
    k--;
    if (!k) return output;
  }

  return [];
};
