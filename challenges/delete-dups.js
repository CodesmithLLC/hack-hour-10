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

// USING A TEMP BUFFER
function deleteDups(head) {
  let values = [];
  let current = head;
  let previous;
  while (current) {
    if (values.includes(current.value)) {
      previous.next = current.next;
    }
    values.push(current.value);
    previous = current;
    current = current.next;
  }

  return head;
}

// // WITHOUT USING A TEMP BUFFER
// function deleteDups(head) {
//   let current = head;
//   let previous;

//   let tempCurrent = head;
//   let tempPrevious;

//   while (current) {
//     console.log('--------------');
//     console.log('current: ', current);
//     while (tempCurrent) {
//       console.log('- - - - - - - -');
//       console.log('tempCurrent: ', tempCurrent);
//       if (tempCurrent.value = current.value) {
//         console.log('previous: ', previous);
//         tempPrevious.next = current.next;
//       }
//       tempPrevious = tempCurrent;
//       tempCurrent = tempCurrent.next;
//     }

//     previous = current;
//     current = current.next;
//   }

//   return head;
// }


// var Node = function(value) {
//   this.value = value;
//   this.next = null;
// }

// var node1 = new Node('1');
// var node2 = node1.next = new Node('2');
// var node3 = node2.next = new Node('2');
// // var node4 = node3.next = new Node('3');
// // var node5 = node4.next = new Node('5');
// console.log(node1);
// console.log(deleteDups(node1)); // =>



module.exports = deleteDups;
