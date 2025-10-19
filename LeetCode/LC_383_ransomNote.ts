// Hash table, Easy
// Time: O(m)
// Space: O(k) / O(1), k = unique characters in ransomNote
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;

  const magazineMap = new Map<string, number>();

  for (const char of magazine) {
    magazineMap.set(char, (magazineMap.get(char) ?? 0) + 1);
  }

  for (const char of ransomNote) {
    if (!magazineMap.get(char)) return false;
    magazineMap.set(char, magazineMap.get(char)! - 1);
  }

  return true;
};
