/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let head = l1;
  let temp = l1;
  l1 = l1.next;

  while (l1 && l2) {
    temp.next = l2;
    l2 = l2.next;
    temp = temp.next;

    temp.next = l1;
    l1 = l1.next;
    temp = temp.next;
  }

  temp.next = l2 ? l2 : l1;
  return head;

};


module.exports = {Node: Node, zip: zip};

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// a.next = b;
// b.next = c;
// c.next = d;
//
//
// var A = new Node('a');
// var B = new Node('b');
// var C = new Node('c');
// var D = new Node('d');
// A.next = B;
// B.next = C;
// C.next = D;
//
// console.log(zip(a, A));
