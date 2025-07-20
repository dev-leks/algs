class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Linked List + Two pointers (With help)
// Time: O(n)
// Space: O(1)
function pairSum(head: ListNode | null): number {
    let slow = head, fast = head;

    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondListHead: ListNode | null = null;
    while (slow) {
        const nextNode = slow.next;
        slow.next = secondListHead;
        secondListHead = slow;
        slow = nextNode;
    }

    let maxSum = 0;
    while (head && secondListHead) {
        maxSum = Math.max(maxSum, head.val + secondListHead.val);
        head = head.next;
        secondListHead = secondListHead.next
    }

    return maxSum;
};

// Linked list + Stack (My first solution)
// Time: O(n)
// Space: O(n)
function pairSum1(head: ListNode | null): number {
    let n = 0;
    let tempHead = head;
    while (tempHead) {
        n++;
        tempHead = tempHead.next
    }

    const middle = n / 2;
    const stack: number[] = [];

    let index = 0;
    let maxSum = 0;
    while (head) {
        if (index < middle) stack.push(head.val);
        else maxSum = Math.max(maxSum, (stack.pop() ?? 0) + head.val);
        index++;
        head = head.next;
    }

    return maxSum;
};

// Linked list + Stack + Two pointers
//  (Optimized solution with slow/fast pointers - from ChatGPT)
// Time: O(n)
// Space: O(n)
function pairSum1_2(head: ListNode | null): number {
    let slow = head, fast = head;
    const stack: number[] = [];

    while (slow && fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    let maxSum = 0;
    while (slow) {
        maxSum = Math.max(maxSum, (stack.pop() ?? 0) + slow.val);
        slow = slow.next;
    }

    return maxSum;
};
