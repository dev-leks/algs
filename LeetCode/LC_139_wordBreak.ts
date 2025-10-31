// Dynamic programming + Trie, Medium
// Time: O(n^2 + m*k) - m*k - build trie, n^2 - for dp
// Space: O(n + m*k) - n - dp, m*k - trie
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  public insert(word: string) {
    let curr = this.root;

    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char)!;
    }

    curr.isEndOfWord = true;
  }
}

function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = Array(s.length).fill(false);

  const trie = new Trie();

  for (const word of wordDict) trie.insert(word);

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && !dp[i - 1]) continue;

    let curr = trie.root;

    for (let j = i; j < s.length; j++) {
      if (!curr.children.has(s[j])) break;

      curr = curr.children.get(s[j])!;

      if (curr.isEndOfWord) dp[j] = true;
    }
  }

  return dp[dp.length - 1];
};

// Dynamic programming (Bottom-Up), Medium
// Time: O(n*m*k)
// Space: O(n)
function wordBreak3(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    for (const word of wordDict) {
      if (i < word.length - 1) continue;

      if (i === word.length - 1 || dp[i - word.length]) {
        if (s.substring(i - word.length + 1, i + 1) === word) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[dp.length - 1];
};

// Dynamic programming (Bottom-Up), Medium
// (iterate over all possible substrings)
// Time: O(n^2 + m*k)
// Space: O(n + m*k)
function wordBreak2(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const dp: boolean[] = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      if (dp[start] && words.has(s.substring(start, end))) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[dp.length - 1];
};

// BFS, Medium
// Time: O(n^3 + m*k) - n (queue) * n (for) * n (substring)
// Space: O(n + m*k) - n - for queue and seen, m*k - for words set
function wordBreak1(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const queue = [0];
  const seen = new Set();

  while (queue.length) {
    const start = queue.shift()!;

    if (start === s.length) return true;

    for (let end = start + 1; end <= s.length; end++) {
      if (seen.has(end)) continue;

      if (words.has(s.substring(start, end))) {
        queue.push(end);
        seen.add(end);
      }
    }
  }

  return false;
};
