// Hash table, Easy
// Time: O(n+m)
// Space: O(n) -> O(26+n)
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const patternCharMap = new Map<string, string>();
  const wordsSet = new Set<string>();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (!patternCharMap.has(char)) {
      if (wordsSet.has(word)) {
        return false;
      }

      patternCharMap.set(char, word);
      wordsSet.add(word);
    } else {
      if (word !== patternCharMap.get(char)) {
        return false;
      }
    }
  }

  return true;
};

// Hash table, Easy (One map where key is char/word, value is index)
// Time: O(n+m)
// Space: O(n)
function wordPattern2(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const wordIndexMap = new Map<string, number>();

  for (let i = 0; i < pattern.length; i++) {
    const char = 'char_' + pattern[i];
    const word = 'word_' + words[i];

    if (!wordIndexMap.has(char)) {
      wordIndexMap.set(char, i);
    }

    if (!wordIndexMap.has(word)) {
      wordIndexMap.set(word, i);
    }

    if (wordIndexMap.get(char) !== wordIndexMap.get(word)) {
      return false;
    }
  }

  return true;
};
