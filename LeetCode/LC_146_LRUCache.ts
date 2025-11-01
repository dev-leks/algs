// Hash table (One map), Medium
// Time: O(1) for each method
// Space: O(n)
class LRUCache {
  cache: Map<number, number>;
  capacity: number;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const val = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, val);

    return val;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value!);
    }
  }
}

// Hash table (Map + Set), Medium (My first solution)
// Time: O(1) for each method
// Space: O(n)
class LRUCache1 {
  cache: Map<number, number>;
  capacity: number;
  recentlyUsedKeys: Set<number>;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
    this.recentlyUsedKeys = new Set();
  }

  get(key: number): number {
    const val = this.cache.get(key);

    if (val !== undefined) this.updateRecentlyUsedKeys(key);

    return val ?? -1;
  }

  put(key: number, value: number): void {
    this.updateRecentlyUsedKeys(key);

    if (this.cache.size === this.capacity && !this.cache.has(key)) {
      for (const leastRecentlyUsedKey of this.recentlyUsedKeys) {
        this.cache.delete(leastRecentlyUsedKey);
        this.recentlyUsedKeys.delete(leastRecentlyUsedKey);
        break;
      }
    }

    this.cache.set(key, value);
  }

  private updateRecentlyUsedKeys(key: number) {
    if (this.recentlyUsedKeys.has(key)) {
      this.recentlyUsedKeys.delete(key);
    }

    this.recentlyUsedKeys.add(key);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

namespace WithDoublyLinkedList {
  class Node {
    key: number;
    val: number;
    prev: Node | null;
    next: Node | null;

    constructor(key: number, val: number) {
      this.key = key;
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }

  // Hash table + Doubly Linked List, Medium (With dummy head and tail nodes)
  // Time: O(1) for each method
  // Space: O(n)
  class LRUCache {
    cache: Map<number, Node>;
    capacity: number;
    head: Node;
    tail: Node;

    constructor(capacity: number) {
      this.cache = new Map();
      this.capacity = capacity;
      this.head = new Node(-1, 0);
      this.tail = new Node(-1, 0);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }

    get(key: number): number {
      if (!this.cache.has(key)) return -1;

      const node = this.cache.get(key)!;
      this.deleteNode(node);
      this.addNode(node);

      return node.val;
    }

    put(key: number, value: number): void {
      let node = this.cache.get(key);

      if (node) {
        node.val = value;
        this.deleteNode(node);
      } else {
        node = new Node(key, value);
        this.cache.set(key, node);
      }

      this.addNode(node);

      if (this.cache.size > this.capacity) {
        const nodeToDelete = this.head.next!;
        this.cache.delete(nodeToDelete.key);
        this.deleteNode(nodeToDelete);
      }
    }

    private deleteNode(node: Node) {
      const prev = node.prev!;
      const next = node.next!;
      prev.next = next;
      next.prev = prev;
    }

    private addNode(node: Node) {
      const previousEnd = this.tail.prev!;
      previousEnd.next = node;
      node.prev = previousEnd;
      node.next = this.tail;
      this.tail.prev = node;
    }
  }

  // Hash table + Doubly Linked List, Medium
  // Time: O(1) for each method
  // Space: O(n)
  class LRUCache1 {
    cache: Map<number, Node>;
    capacity: number;
    head: Node | null;
    tail: Node | null;

    constructor(capacity: number) {
      this.cache = new Map();
      this.capacity = capacity;
      this.head = null;
      this.tail = null;
    }

    get(key: number): number {
      if (!this.cache.has(key)) return -1;

      const node = this.cache.get(key)!;
      this.deleteNode(node);
      this.addNode(node);

      return node.val;
    }

    put(key: number, value: number): void {
      let node = this.cache.get(key);

      if (node) {
        node.val = value;
        this.deleteNode(node);
      } else {
        node = new Node(key, value);
        this.cache.set(key, node);
      }

      this.addNode(node);

      if (this.cache.size > this.capacity) {
        this.cache.delete(this.head!.key);
        this.deleteNode(this.head!);
      }
    }

    private deleteNode(node: Node) {
      const prev = node.prev!;
      const next = node.next!;
      prev.next = next;
      next.prev = prev;

      if (node === this.tail) this.tail = prev;
      if (node === this.head) this.head = next;
    }

    private addNode(node: Node) {
      if (!this.head) this.head = node;
      if (!this.tail) this.tail = node;

      node.next = this.head;
      node.prev = this.tail;

      this.tail.next = node;
      this.tail = node;
      this.head.prev = this.tail;
    }
  }
}
