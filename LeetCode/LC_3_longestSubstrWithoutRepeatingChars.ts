// Sliding window, Hash table (Set), Medium
// Time: O(n)
// Space: O(n)
function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  let maxLength = 0;
  let startIndex = 0;
  const charsSet = new Set<string>();

  for (let i = 0; i < n; i++) {
    const char = s[i];

    while (charsSet.has(char)) {
      const prev = s[startIndex];
      charsSet.delete(prev);
      startIndex++;
    }

    maxLength = Math.max(maxLength, i - startIndex + 1);
    charsSet.add(char);
  }

  return maxLength;
};
