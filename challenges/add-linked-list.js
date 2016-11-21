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
function createll(constr, leng) {
  var nu = new Node(Math.floor(Math.random() * 9));
  var holder = nu;
  for(var i = 1; i <= leng; i++) {
    holder.next = new Node(Math.floor(Math.random() * 9));
    holder = holder.next;
  }
  return nu;
}
var test1 = createll(Node, 1);
var test2 = createll(Node, 1);
//
function addLinkedList(l1, l2) {
  var nu = new Node();
  function add(newNode, first, second, carryover) {
    if(!first && !second && !carryover) return null;
    var sum = carryover;
    if(l1) sum += l1.value;
    if(l2) sum += l2.value;
    newNode.next = new Node(sum % 10);
    add(newNode.next, first.next ? first.next: null, second.next ? second.next: null, Math.floor(sum / 10))
  }
}
console.log('this is result', JSON.stringify(addLinkedList(test1, test2)))
module.exports = {Node: Node, addLinkedList: addLinkedList};
