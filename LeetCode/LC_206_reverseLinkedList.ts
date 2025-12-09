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

// Linked List, Easy (Iterative)
// Time: O(n)
// Space: O(1)
function reverseList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode | null = null

  while (head) {
    const nextNode = head.next
    head.next = prevNode
    prevNode = head
    head = nextNode
  }

  return prevNode
};

// Linked List, Easy (Recursive)
// Time: O(n)
// Space: O(n)
function reverseList1(head: ListNode | null): ListNode | null {
    function reverse(node: ListNode | null, prevNode: ListNode | null): ListNode | null {
        if (!node) return prevNode

        const nextNode = node.next
        node.next = prevNode

        return reverse(nextNode, node)
    }

    return reverse(head, null)
};
