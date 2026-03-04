import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// Math, Medium
// Time: O(N)
// Space: O(26) -> O(1)
function leastInterval(tasks: string[], n: number): number {
  const frequencies = new Map<string, number>();

  for (const task of tasks) {
    frequencies.set(task, (frequencies.get(task) ?? 0) + 1);
  }

  let maxFrequency = 0;
  let maxFrequencyCount = 0;

  for (const frequency of frequencies.values()) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      maxFrequencyCount = 1;
    } else if (frequency === maxFrequency) {
      maxFrequencyCount++;
    }
  }

  const minTime = (maxFrequency - 1) * (n + 1) + maxFrequencyCount;

  return Math.max(tasks.length, minTime);
};

// Greedy, Math, Medium
// Time: O(N)
// Space: O(26) -> O(1)
function leastInterval4(tasks: string[], n: number): number {
  const frequencies = Array(26).fill(0);
  let max = 0;
  let maxCount = 0;

  for (const task of tasks) {
    const index = task.charCodeAt(0) - 'A'.charCodeAt(0);
    frequencies[index]++;
    const freq = frequencies[index]

    if (max === freq) {
      maxCount++;
    } else if (max < freq) {
      max = freq;
      maxCount = 1;

    }
  }

  const partCount = max - 1;
  const partLength = n - (maxCount - 1);
  const emptySlots = partCount * partLength;
  const availableTasks = tasks.length - max * maxCount;
  const idles = Math.max(0, emptySlots - availableTasks);

  return tasks.length + idles;
};


// Sorting, Medium (Filling the Slots and Sorting)
// Time: O(N)
// Space: O(26) -> O(1)
function leastInterval3(tasks: string[], n: number): number {
  const frequencies = Array(26).fill(0);

  for (const task of tasks) {
    frequencies[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  frequencies.sort((a, b) => a - b);

  const maxFreq = frequencies[25] - 1;
  let idleSlots = maxFreq * n;

  for (let i = 24; i >= 0 && frequencies[i] > 0; i--) {
    idleSlots -= Math.min(maxFreq, frequencies[i]);
  }

  return tasks.length + (idleSlots > 0 ? idleSlots : 0);
};

// Heap, Max Priority Queue, Medium
// Time: O(N), O(Nlogk) -> k = 26 -> O(n)
// Space: O(26) -> O(1)
function leastInterval2(tasks: string[], n: number): number {
  const frequencies = Array(26).fill(0);

  for (const task of tasks) {
    frequencies[task.charCodeAt(0)-'A'.charCodeAt(0)]++;
  }

  const maxHeap = MaxPriorityQueue.fromArray(frequencies.filter(Boolean));

  let time = 0;

  while (!maxHeap.isEmpty()) {
    let cycle = n + 1;
    const store: number[] = [];
    let taskCount = 0;

    while (cycle > 0 && !maxHeap.isEmpty()) {
      cycle--;
      const freq = maxHeap.dequeue();

      if (freq > 1) {
        store.push(freq - 1);
      }

      taskCount++;
    }

    for (const freq of store) {
      maxHeap.enqueue(freq);
    }

    if (maxHeap.isEmpty()) {
      time += taskCount;
    } else {
      time += n + 1;
    }
  }

  return time;
};

// Brute force, simulation-based (hash table + sort), Medium (My first solution)
// Time: O(nlog(n))
// Space: O(n)
function leastInterval1(tasks: string[], n: number): number {
  const frequencies = new Map<string, number>();
  const intervals = new Map<string, number>();

  for (const task of tasks) {
    frequencies.set(task, (frequencies.get(task) ?? 0) + 1);
    if (!intervals.has(task)) intervals.set(task, 0);
  }

  let tasksCounts: [string, number][] = [];
  for (const [task, frequency] of frequencies) {
    tasksCounts.push([task, frequency]);
  }

  tasksCounts.sort((a, b) => b[1] - a[1] || b[0].localeCompare(a[0]));

  let count = 0;

  while (tasksCounts.length) {
    let i = 0;

    while (i < tasksCounts.length && intervals.get(tasksCounts[i][0])! > 0) {
      i++;
    }

    if (i === tasksCounts.length) {
      i = 0;

      while (intervals.get(tasksCounts[i][0])! > 0) {
        count++;
        decreaseIntervals();
      }
    }

    const currTask = tasksCounts[i];

    tasksCounts[i] = [currTask[0], currTask[1] - 1];
    tasksCounts = tasksCounts.filter(([,count]) => count);
    tasksCounts.sort((a, b) => b[1] - a[1] || b[0].localeCompare(a[0]));

    count++;
    decreaseIntervals();
    intervals.set(currTask[0], n);
  }

  function decreaseIntervals() {
    for (const [intervalTask, interval] of intervals) {
      if (interval > 0) {
        intervals.set(intervalTask, interval - 1);
      }
    }
  }

  return count;
};
