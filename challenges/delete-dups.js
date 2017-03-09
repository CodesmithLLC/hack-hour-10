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

// // WHILE LOOPS
// function deleteDups(head) {
//   if (!head) return;
//   if (!head.next) return head;

//   // Traverse LL one node at a time using outer loop
//   let compare = head;
  
//   while (compare) {

//     // Store value to check against rest of list
//     let value = compare.value;

//     // Begin at current outer position, then traverse rest of LL in inner loop
//     let currNode = compare;

//     // Track node after current node for easier deletion
//     let nextNode = currNode.next;

//     while (nextNode) {
      
//       // If dupe found, delete it. Otherwise, move forward by one.
//       nextNode.value === value ? currNode.next = nextNode.next : currNode = nextNode;

//       // Will always move to next node, even if dupe.
//       nextNode = nextNode.next;
//     }

//     // Outer loop traversal
//     compare = compare.next;
//   }

//   // LL will be modified in place
//   return head;
// }

// FOR LOOPS
// function deleteDups(head) {
//   if (!head) return;
//   if (!head.next) return head;
  
//   // Traverse LL starting at head
//   for (let compare = head; compare !== null; compare = compare.next) {
//     // Begin at outer position, then traverse rest of LL in inner loop
//     let currNode = compare;

//     // Traverse next nodes starting at currNode.next
//     for (let nextNode = currNode.next; nextNode !== null; nextNode = nextNode.next) {
//       // If dupe value found, point currNode.next to nextNode.next. Otherwise, move forward by assigning currNode to nextNode.
//       nextNode.value === compare.value ? currNode.next = nextNode.next : currNode = nextNode;
//     }
//   }

//   // Return head since LL was modified in place
//   return head;
// }

const a = new Node(1);
const b = new Node(1);
const c = new Node(2);
const d = new Node(2);
const e = new Node(2);
const f = new Node(3);
const g = new Node(2);
const h = new Node(2);
const i = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

console.log(deleteDups(a));

module.exports = deleteDups;

function deleteDups(head) {
  if (!head) return;
  if (head.next === null) return head;

  for (let compare = head; compare !== null; compare = compare.next) {

    /* You may think to begin at compare.next and assign possibleDuplicate to mayNeedNextNodeChanged, but
     * then you lose access to compare and can't overwrite a duplicate that comes immediately after compare.
     * e.g. 1 -> 1 -> 2 on first run-through will lose pointer to the first 1 in the inner loop; therefore,
     * you'd have to create an extra conditional statement to reassign compare.next to possibleDuplicate.next 
     */
    let mayNeedNextNodeChanged = compare;

    for (let possibleDuplicate = mayNeedNextNodeChanged.next; possibleDuplicate !== null; possibleDuplicate = possibleDuplicate.next) {
      if (possibleDuplicate.value === compare.value) mayNeedNextNodeChanged.next = possibleDuplicate.next;
      else mayNeedNextNodeChanged = possibleDuplicate;
    }
  }

  return head;
}