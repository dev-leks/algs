// Monotonic stack, Hash table, Easy
// Time: O(n)
// Space: O(n)
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreaterMap: Map<number, number> = new Map();
  const stack: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }

    nextGreaterMap.set(
      nums2[i],
      stack.length ? stack[stack.length - 1] : -1,
    );

    stack.push(nums2[i]);
  }

  return nums1.map((num) => nextGreaterMap.get(num)!);
};
