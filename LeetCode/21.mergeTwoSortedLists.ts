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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode()
    let end = dummy
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            end.next = list1
            list1 = list1.next
        } else {
            end.next = list2
            list2 = list2.next
        }

        end = end.next
    }

    if (list1) end.next = list1
    else if (list2) end.next = list2

    return dummy.next
};
