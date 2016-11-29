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



function deleteDups(head) {
  const store = [];

  function helper(node, prev) {
    if (store.indexOf(node.value) === -1) {
      // Record
      store.push(node.value);
    } else {
      // Remove
      prev.next = node.next;
    }
    // Continue
    if (node.next !== null) {
      return helper(node.next, node);
    } else {
      return head;
    }
  }
  return helper(head, null);
}

// function deleteDups(head) {
//   let prevNode = null;
//   let nodeInFocus = head;

//   function helper(value, node, prev) {
//     if (store.indexOf(node.value) === -1) {
//       // Record
//       store.push(node.value);
//     } else {
//       // Remove
//       prev.next = node.next;
//     }
//     // Continue
//     if (node.next !== null) {
//       return helper(node.next, node);
//     } else {
//       return head;
//     }
//   }
//   while (nodeInFocus.next !== null) {
//     helper(nodeInFocus.value, nodeInFocus, prevNode);
//     prevNode = nodeInFocus;
//     nodeInFocus = nodeInFocus.next;
//   }
// }

function Node(val) {
  this.value = val;
  this.next = null;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(3);
a.next = b;
b.next = c;
c.next = d;
console.log(deleteDups(a));

module.exports = deleteDups;