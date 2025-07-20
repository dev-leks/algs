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

// Linked List, Medium
// Time: O(n)
// Space: O(1)
function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let beforeMiddle: ListNode | null = null;

    while (slow && fast && fast.next) {
        beforeMiddle = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (slow && beforeMiddle) beforeMiddle.next = slow.next;

    return head;
};
