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

// Linked List, Two pointers (Floyd's Cycle Finding Algorithm), Easy
// Time: O(n)
// Space: O(1)
function middleNode(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast?.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
   
    return slow;
};
