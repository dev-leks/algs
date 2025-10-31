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

// Linked List (Iterative approach), Easy
// Time: O(n + m)
// Space: O(1)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const beforeHead = new ListNode();
    let curr = beforeHead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    if (list1) curr.next = list1;
    else curr.next = list2;

    return beforeHead.next;
};

// Linked List (Recursive approach), Easy
// Time: O(n + m)
// Space: O(n + m)
function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2;

  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);

    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);

  return list2;
};
