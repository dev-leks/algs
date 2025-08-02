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

// Linked list, 2 pointers, Medium (With help)
// Time: O(n)
// Space: O(1)
function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let odd: ListNode | null = head;
    let even: ListNode | null = head.next;
    const evenHead = even;
   
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
};

// Linked List, Medium (My first solution)
// Time: O(n)
// Space: O(1)
function oddEvenList1(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let count = 0;
    let tempHead: ListNode | null = head;
    while (tempHead) {
        count++;
        tempHead = tempHead.next;
    }

    let originalHead: ListNode | null = head;
    let originalSecondNode: ListNode | null = head.next;

    while (head) {
        const nextNode: ListNode | null = head.next;
       
        if (!nextNode) head.next = count % 2 == 0 ? null : originalSecondNode;
        else if (!nextNode.next) head.next = count % 2 == 0 ? originalSecondNode : null;
        else head.next = nextNode.next;
      
        head = nextNode;
    }

    return originalHead;
};
