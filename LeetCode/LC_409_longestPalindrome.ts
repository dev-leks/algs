// Hast table (Set), Easy
// Time: O(n)
// Space: O(1) - O(52) unique characters
function longestPalindrome(s: string): number {
  const chars = new Set<string>();
  let length = 0;

  for (const char of s) {
    if (chars.has(char)) {
      chars.delete(char);
      length += 2;
    } else {
      chars.add(char);
    }
  }

  if (chars.size) length++;

  return length;
};

// Hash table, Easy
// Time: O(n)
// Space: O(1) - O(52) unique characters
function longestPalindrome1(s: string): number {
  const frequencyMap = new Map<string, number>();

  for (const char of s) {
    const count = (frequencyMap.get(char) ?? 0) + 1;
    frequencyMap.set(char, count);
  }

  let length = 0
  frequencyMap.forEach((count) => {
    if (count >= 2) {
      length += Math.floor(count / 2) * 2
    }
    // OR: if (count % 2 === 0) length += count
    // else length += count - 1
  })

  return length < s.length ? length + 1 : length
};
