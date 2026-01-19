type FrequencyMap = Map<string, number>;

// Sliding window + Hash table, Medium (Optimized solution)
// Time: O(n)
// Space: O(K) -> O(26) -> O(1)
function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) return [];

  const output: number[] = [];
  const pMap: FrequencyMap = new Map();

  for (const char of p) {
    pMap.set(char, (pMap.get(char) ?? 0) + 1);
  }

  let startIndex = 0;
  let index = 0;
  const map: FrequencyMap = new Map();

  while (index < s.length) {
    const char = s[index];

    if (!pMap.has(char)) {
      map.clear();
      index++;
      startIndex = index;
      continue;
    }

    map.set(char, (map.get(char) ?? 0) + 1);

    while (map.get(char)! > pMap.get(char)! && startIndex <= index) {
      const firstChar = s[startIndex];
      map.set(firstChar, map.get(firstChar)! - 1);
      startIndex++;
    }

    if (index - startIndex + 1 === p.length) {
      output.push(startIndex);
    }

    index++;
  }

  return output;
};

// Sliding window + Hash table, Medium (My first optimal solution)
// Time: O(n)
// Space: O(K) -> O(26) -> O(1)
function findAnagrams1(s: string, p: string): number[] {
  if (p.length > s.length) return [];

  const output: number[] = [];
  const pMap: FrequencyMap = new Map();

  for (const char of p) {
    pMap.set(char, (pMap.get(char) ?? 0) + 1);
  }

  let startIndex = 0;
  let index = 0;
  const map: FrequencyMap = new Map();

  while (index < s.length) {
    const char = s[index];

    if (!pMap.has(char)) {
      map.clear();
      index++;
      startIndex = index;
      continue;
    }

    map.set(char, (map.get(char) ?? 0) + 1);

    while (map.get(char)! > pMap.get(char)! && startIndex <= index) {
      const firstChar = s[startIndex];
      map.set(firstChar, map.get(firstChar)! - 1);
      startIndex++;
    }

    if (index - startIndex + 1 === p.length && isMapsEqual(map, pMap)) {
      output.push(startIndex);
    }

    index++;
  }

  function isMapsEqual(map1: FrequencyMap, map2: FrequencyMap): boolean {
    if (map1.size !== map2.size) return false;

    for (const [char, count] of map1) {
      if (map2.get(char) !== count) {
        return false;
      }
    }

    return true;
  }

  return output;
};
