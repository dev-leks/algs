// Trie, Hash table
// Time: O(n)
// Space: insert - O(n), search/startsWith - O(1), remove - O(n*m) (n - length of the longest word, m - number of words)
namespace TrieWithArray {
  const ALPHABET_SIZE = 26;

  class TrieNode {
    children: Array<TrieNode | null>;
    isEndOfWord: boolean;

    constructor() {
      this.children = Array(24).fill(null);
      this.isEndOfWord = false;
    }
  }

  class Trie {
    root: TrieNode;

    constructor() {
      this.root = new TrieNode();
    }

    insert(word: string): void {
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

    search(word: string): boolean {
      let curr = this.root;

      for (const char of word) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

        if (!curr.children[index]) {
          return false;
        }

        curr = curr.children[index];
      }

      return curr.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
      let curr = this.root;

      for (const char of prefix) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

        if (!curr.children[index]) {
          return false;
        }

        curr = curr.children[index];
      }

      return true;
    }
  }

  /**
   * Your Trie object will be instantiated and called as such:
   * var obj = new Trie()
   * obj.insert(word)
   * var param_2 = obj.search(word)
   * var param_3 = obj.startsWith(prefix)
   */
}

namespace TrieWithHashmap {
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

    insert(word: string): void {
      let curr = this.root;

      for (const char of word) {
        if (!curr.children.has(char)) {
          curr.children.set(char, new TrieNode());
        }

        curr = curr.children.get(char)!;
      }

      curr.isEndOfWord = true;
    }

    search(word: string): boolean {
      let curr = this.root;

      for (const char of word) {
        if (!curr.children.has(char)) {
          return false;
        }

        curr = curr.children.get(char)!;
      }

      return curr.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
      let curr = this.root;

      for (const char of prefix) {
        if (!curr.children.has(char)) {
          return false;
        }

        curr = curr.children.get(char)!;
      }

      return true;
    }
  }
}

/* Deletion operation:
  isEmpty(root: TrieNode) {
    for (const child of [...root.children]) {
      if (child)
        return false;
    }

    return true;
  }

  remove(root: TrieNode | null = this.root, key: string, depth = 0) {
    // If the tree is empty
    if (!root) return null;

    // If last character of key is being processed
    if (depth === key.length) {
      // This node is no more end of word after removal of given key
      if (root.isEndOfWord) root.isEndOfWord = false;

      // If given is not prefix of any other word
      if (this.isEmpty(root)) root = null;

      return root;
    }

    const node = this.remove(root.children.get(key[depth])!, key, depth + 1);
    node ? root.children.set(key[depth], node) : root.children.delete(key[depth]);

    // If root does not have any child (its only child got deleted), and it is not end of another word.
    if (this.isEmpty(root) && !root.isEndOfWord) {
      root = null;
    }

    return root;
  }
 */
