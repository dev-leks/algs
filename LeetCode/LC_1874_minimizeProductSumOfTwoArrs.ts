// Counting sort, Medium
// Time: O(n + k), k - range of values in nums1 and nums2
// Space: O(k) - for counters
function minProductSum(nums1: number[], nums2: number[]): number {
  const counter1 = Array(101).fill(0);
  const counter2 = Array(101).fill(0);

  for (const num of nums1) {
    counter1[num]++;
  }

  for (const num of nums2) {
    counter2[num]++;
  }

  let p1 = 1;
  let p2 = 100;
  let sum = 0;

  while (p1 <= 100 && p2 > 0) {
    while (p1 <= 100 && !counter1[p1]) {
      p1++;
    }

    while (p2 > 0 && !counter2[p2]) {
      p2--;
    }

    if (p1 === 101 || p2 === 0) break;

    const occ = Math.min(counter1[p1], counter2[p2]);
    sum += occ * p1 * p2;
    counter1[p1] -= occ;
    counter2[p2] -= occ;
  }

  return sum;
};

// Greedy, Sorting, Medium
// Time: O(nlog(n))
// Space: O(n) - for sorting
function minProductSum1(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => b - a);
  nums2.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < nums1.length; i++) {
    sum += nums1[i] * nums2[i];
  }

  return sum;
};
