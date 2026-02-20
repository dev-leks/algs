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

// Linked List, Math, Medium
// Time: O(max(m,n))
// Space: O(1) - without output list
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyNode = new ListNode();
  let currNode = dummyNode;
  let hasCarry = false;

  while (l1 || l2 || hasCarry) {
    const sum: number = (l1?.val ?? 0) + (l2?.val ?? 0) + (hasCarry ? 1 : 0);
    currNode.next = new ListNode(sum % 10);
    hasCarry = sum >= 10;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    currNode = currNode.next;
  }

  return dummyNode.next;
};
