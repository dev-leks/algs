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

// Linked List + Set, Medium
// Time: O(n)
// Space: O(m)
function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const numsSet = new Set(nums);
  let dummy = new ListNode(-1, head);
  let curr = dummy;

  while (curr.next) {
    if (numsSet.has(curr.next.val)) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};
