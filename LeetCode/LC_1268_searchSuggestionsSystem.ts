// Binary Search, Medium (Expected solution)
// Time: O(n*log(n))+O(m*log(n))
// Space: O(m) - output
function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort();

  const n = searchWord.length;
  const output: string[][] = Array.from({ length: n }, () => []);

  let left = 0;
  let right = products.length - 1;

  let query = '';
  for (let i = 0; i < n; i++) {
    query += searchWord[i];

    while (left <= right && !products[left].startsWith(query)) left++;

    while (left <= right && !products[right].startsWith(query)) right--;

    for (let j = left; j < Math.min(left + 3, right + 1); j++) {
      output[i].push(products[j]);
    }
  }

  return output;
};

// String + Sorting, Medium (Brute force)
// Time: O(k*n*logn)+O(m*n*l)
// Space: O(m) - output
function suggestedProducts1(products: string[], searchWord: string): string[][] {
  products.sort();

  const n = searchWord.length;
  const output: string[][] = Array.from({ length: n }, () => []);

  let query = '';
  for (let i = 0; i < n; i++) {
    query += searchWord[i];

    for (const product of products) {
      if (output[i].length >= 3) break;

      if (product.startsWith(query)) {
        output[i].push(product);
      }
    }
  }

  return output;
};

// Trie + DFS, Medium (Not really optimal)
// Time: O(n⋅k)+O(m2+m⋅k)
// Space: O(n)+O(m)
namespace TrieAndDFS {
  class TrieNode {
    children: Array<TrieNode | null>;
    isEndOfWord: boolean;

    constructor() {
      this.children = Array(26).fill(null);
      this.isEndOfWord = false;
    }
  }

  class Trie {
    root: TrieNode;

    constructor() {
      this.root = new TrieNode();
    }

    insert(word: string) {
      let curr = this.root;

      for (const char of word) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

        if (!curr.children[index]) {
          curr.children[index] = new TrieNode();
        }

        curr = curr.children[index];
      }

      curr.isEndOfWord = true;
    }

    getWordsStartingWith(prefix: string): string[] {
      let curr = this.root;

      for (const char of prefix) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!curr.children[index]) return [];
        curr = curr.children[index];
      }

      const words: string[] = [];
      this.dfsWithPrefix(curr, prefix, words);

      return words;
    }

    private dfsWithPrefix(node: TrieNode, prefix: string, words: string[]) {
      if (words.length === 3) return;

      if (node.isEndOfWord) words.push(prefix);

      for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode('a'.charCodeAt(0) + i);

        if (!node.children[i]) continue;

        this.dfsWithPrefix(node.children[i]!, prefix + char, words);
      }
    }
  }

  function suggestedProducts(products: string[], searchWord: string): string[][] {
    const n = searchWord.length;
    const output: string[][] = Array.from({ length: n }, () => []);

    const trie = new Trie();
    products.forEach(product => trie.insert(product));

    let query = '';
    for (let i = 0; i < n; i++) {
      query += searchWord[i];
      output[i] = trie.getWordsStartingWith(query);
    }

    return output;
  };
}
