import { PriorityQueue } from "@datastructures-js/priority-queue";

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

// Divide and Conquer, Linked List, Hard
// Time: O(Nlog(k)) - N - total nodes, k - number of lists
// Space: O(1)
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const n = lists.length;
  let interval = 1;

  while (interval < n) {
    for (let i = 0; i < n - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }

  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let curr = dummy;

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

    curr.next = list1 ?? list2;

    return dummy.next;
  }

  return n > 0 ? lists[0] : null;
};

// Linked List + Heap, Hard
// Time: O(Nlog(K)) - N - total nodes, k - number of lists
// Space: O(n + k) - to create new linked list + heap
function mergeKLists2(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new PriorityQueue<ListNode>(
    (a, b) => a?.val - b?.val
  );

  /*
    Alternative way to iterate over lists:
    for (let i = 0; i < lists.length; i++) {
        while (lists[i]) {
            minHeap.enqueue(lists[i]);
            lists[i] = lists[i].next;
        }
    }
   */
  let hasNodes = true;
  while (hasNodes) {
    hasNodes = false;

    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue;

      minHeap.enqueue(lists[i]!);
      lists[i] = lists[i]!.next;
      hasNodes = true;
    }
  }

  const dummy = new ListNode();
  let curr = dummy;

  while (curr) {
    curr.next = minHeap.dequeue() as ListNode;
    curr = curr.next;
  }

  return dummy.next;
};

// Linked List, Hard (My own solution)
// Time: O(N*k) - N - total nodes, k - number of lists
// Space: O(n) - to create new linked list
function mergeKLists1(lists: Array<ListNode | null>): ListNode | null {
  const dummy = new ListNode();
  let curr = dummy;
  let hasNodes = true;

  while (hasNodes) {
    hasNodes = false;
    let minNode = null;
    let minNodeIndex = -1;

    for (let i = 0; i < lists.length; i++) {
      if (!minNode || (lists[i] && lists[i]!.val < minNode.val)) {
        minNode = lists[i];
        minNodeIndex = i;
      }

      if (lists[i]) hasNodes = true;
    }

    if (lists[minNodeIndex]) {
      lists[minNodeIndex] = lists[minNodeIndex]!.next;
    }

    curr.next = minNode!;
    curr = curr.next;
  }

  return dummy.next;
};

// Brute force, Hard
// Time: O(Nlog(N)))
// Space: O(N)
function mergeKLists0(lists: Array<ListNode | null>): ListNode | null {
  let nodes: number[] = [];
  let dummy: ListNode = new ListNode(0);
  let point: ListNode = dummy;

  lists.forEach((l) => {
    while (l) {
      nodes.push(l.val);
      l = l.next;
    }
  });
  nodes
    .sort((a, b) => a - b)
    .forEach((n) => {
      point.next = new ListNode(n);
      point = point.next;
    });
  return dummy.next;
}
