/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  if (!head) return undefined;
  if (!head.next) return head;

  // Track two nodes for inner loop deletion
  let currNode, nextNode

  // Track value for dupe checking at each position
  let value;

  // Traverse LL one node at a time using outer loop
  let curr = head;
  
  while (curr) {

    // Store value to check against rest of list
    value = curr.value;

    // Begin at current outer position, then traverse rest of LL in inner loop
    currNode = curr;

    // Track node after current node for easier deletion
    nextNode = currNode.next;

    while (nextNode) {
      
      // If dupe found, delete it. Otherwise, move forward by one.
      nextNode.value === value ? currNode.next = nextNode.next : currNode = nextNode;

      // Will always move to next node, even if dupe.
      nextNode = nextNode.next;
    }

    // Outer loop traversal
    curr = curr.next;
  }

  // LL will be modified in place
  return head;
}

// function deleteDups(head) {

//   // Store values to check dupes while traversing
//   const values = {};
  
//   // Helper function that deletes nodes by redirecting pointers
  // const removeNextNode = node => node.next = node.next.next ? node.next.next : null;

//   // Checks if next node's value is a dupe and either deletes or stores value
  // function traverse(LL) {
  //   if (!LL.next) return;
  //   values[LL.next.value] ? removeNextNode(LL) : values[LL.next.value] = 1;
  //   traverse(LL.next);
  // }

//   traverse(head);
//   return head;
// }

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(2);
// const f = new Node(2);
// const d = new Node(3);
// const e = new Node(4);

// a.next = b;
// b.next = c;
// c.next = f;
// c.next = d;
// d.next = e;

// console.log(deleteDups(a));

module.exports = deleteDups;
