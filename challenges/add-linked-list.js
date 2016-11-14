/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
// function createll(constr, leng) {
//   var nu = new Node(Math.floor(Math.random() * 9));
//   var holder = nu;
//   for(var i = 1; i <= leng; i++) {
//     holder.next = new Node(Math.floor(Math.random() * 9));
//     holder = holder.next;
//   }
//   return nu;
// }
// var test1 = createll(Node, 5);
// var test2 = createll(Node, 3);
//
function addLinkedList(l1, l2) {
  var node1 = l1;
  var node2 = l2;
  var sumll = new Node();
  var hold = sumll;
  var carryover = 0;
  console.log(JSON.stringify(node1))
  console.log(JSON.stringify(node2));
  while(node1 && node2) {
    var value = node1.value + node2.value;
    var valused = value % 10;
    hold.value = valused + carryover;
    hold.next = new Node();
    hold = hold.next;
    node1 = node1.next;
    node2 = node2.next;
    carryover = Math.floor(value / 10);
  }

  if(node1) {
    hold.value = node1.value + carryover;
    hold.next = node1.next
  }
  else {
    hold.value = node2.value + carryover
    hold.next = node2.next;
  }
  return sumll
}
// console.log('this is result', JSON.stringify(addLinkedList(test1, test2)))
module.exports = {Node: Node, addLinkedList: addLinkedList};
