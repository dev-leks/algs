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

function reverseListRecursively(head: ListNode | null): ListNode | null {
    function reverse(node: ListNode | null, prevNode: ListNode | null): ListNode | null {
        if (!node) return prevNode

        const nextNode = node.next
        node.next = prevNode

        return reverse(nextNode, node)
    }

    return reverse(head, null)
};


function reverseListIteratively(head: ListNode | null): ListNode | null {
    let prevNode: ListNode | null = null

    while(head) {
        const nextNode = head.next
        head.next = prevNode
        prevNode = head
        head = nextNode
    }

    return prevNode
};
