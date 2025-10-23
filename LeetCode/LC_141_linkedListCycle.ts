/* class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
} */

// Two pointers (Floyd's Cycle Finding Algorithm), Easy
// Time: O(n)
// Space: O(1)
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow!.next;
    fast = fast.next.next;
  }

  return false;
};

// Hash table, Easy
// Time: O(n)
// Space: O(n)
function hasCycle1(head: ListNode | null): boolean {
    const visitedMap = new Map<ListNode, boolean>();
    let node = head;

    while (node) {
        if (visitedMap.has(node)) return true;

        visitedMap.set(node, true);
        node = node.next;
    }

    return false;
};
