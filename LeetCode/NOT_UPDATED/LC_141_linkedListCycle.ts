class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    const visitedMap = new Map<ListNode, boolean>()

    let temp = head
    while (temp) {
        if (visitedMap.has(temp)) {
            return true
        }
        
        visitedMap.set(temp, true)
        temp = temp.next
    }

    return false
};
