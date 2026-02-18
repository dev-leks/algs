/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Linked List, Medium (Optimized)
// Time: O(n)
// Space: O(1)
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!k || !head || !head.next) return head;

  let n = 1;
  // close the ring (tail with head)
  let oldTail: ListNode | null = head;
  while (oldTail.next) {
    n++;
    oldTail = oldTail.next;
  }
  oldTail.next = head;

  let newTail = head;
  const newTailIndex = n - (k % n) - 1;
  let i = 0;
  while (i < newTailIndex) {
    newTail = newTail.next!;
    i++;
  }

  // the node after the new tail becomes a new head
  const newHead = newTail.next;
  // break the ring
  newTail.next = null

  return newHead;
};

// Linked List, Medium (Optimized time)
// Time: O(n)
// Space: O(1)
function rotateRight3(head: ListNode | null, k: number): ListNode | null {
  if (!k || !head || !head.next) return head;

  let n = 0;
  let tempNode: ListNode | null = head;
  while(tempNode) {
    n++;
    tempNode = tempNode.next;
  }

  const tailIndex = n - (k % n) - 1;

  let i = 0;
  let currNode: ListNode | null = head;
  let tailNode: ListNode | null = null;

  while (i < n) {
    if (i === tailIndex) {
      tailNode = currNode;
    }

    if (i === n - 1) {
      currNode!.next = head;
      break;
    }

    currNode = currNode!.next;
    i++;
  }

  const headNode = tailNode!.next!;
  tailNode!.next = null;

  return headNode;
};

// Linked List, Medium (Brute force, but with reduced rotations)
// Time: O(n)
// Space: O(1)
function rotateRight2(head: ListNode | null, k: number): ListNode | null {
  if (!k || !head || !head.next) return head;

  let n = 0;
  let tempNode: ListNode | null = head;
  while(tempNode) {
    n++;
    tempNode = tempNode.next;
  }
  // Reduce k to be in range [0, n]
  k = k % n;

  function rotate(head: ListNode) {
    let beforeLastNode: ListNode | null = null;
    let lastNode: ListNode | null = null;

    let curr = head;
    while (curr) {
      if (!curr.next?.next) {
        beforeLastNode = curr;
        lastNode = curr.next;
        break;
      }

      curr = curr.next;
    }

    beforeLastNode!.next = null;
    lastNode!.next = head;

    return lastNode!;
  }

  let currNode = head;
  while (k) {
    currNode = rotate(currNode);
    k--;
  }

  return currNode;
};

// Linked List, Medium (Brute force - not optimal)
// Time: O(k*n)
// Space: O(1)
function rotateRight1(head: ListNode | null, k: number): ListNode | null {
  if (!k || !head || !head.next) return head;

  function rotate(head: ListNode): ListNode {
    let beforeLastNode: ListNode | null = null;
    let lastNode: ListNode | null = null;

    let curr = head;
    while (curr) {
      if (!curr.next?.next) {
        beforeLastNode = curr;
        lastNode = curr.next;
        break;
      }

      curr = curr.next;
    }

    beforeLastNode!.next = null;
    lastNode!.next = head;

    return lastNode!;
  }

  let currNode = head;
  while (k) {
    currNode = rotate(currNode);
    k--;
  }

  return currNode;
};
