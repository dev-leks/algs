// Boyer-Moore Voting Algorithm, Easy
// Time: O(n)
// Space: O(1)
function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += (candidate === num ? 1 : -1);
  }

  return candidate;
};

// Sorting, Easy
// Time: O(nlog(n))
// Space: O(1)
function majorityElement3(nums: number[]): number {
  nums.sort((a, b) => a - b);

  return nums[Math.floor(nums.length / 2)];
};

// Hash table, Easy (1 loop)
// Time: O(n)
// Space: O(n)
function majorityElement2(nums: number[]): number {
  const frequencyMap = new Map<number, number>();

  for (const num of nums) {
    const frequency = (frequencyMap.get(num) ?? 0) + 1;
    frequencyMap.set(num, frequency);

    if (frequency > nums.length / 2) return num;
  }

  return 0;
};

// Hash table, Easy (2 loops)
// Time: O(n)
// Space: O(n)
function majorityElement1(nums: number[]): number {
  const frequencyMap = new Map<number, number>();

  for (const num of nums) {
    const frequency = (frequencyMap.get(num) ?? 0) + 1;
    frequencyMap.set(num, frequency);
  }

  for (const [num, frequency] of frequencyMap) {
    if (frequency > nums.length / 2) return num;
  }

  return 0;
};
