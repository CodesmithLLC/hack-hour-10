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
  if(!l1) return l2;
  if(!l2) return l1;
  var node2 = l2;
  var node1 = l1;
  var cont = true;
  while(cont) {
    if (!node1) {
      console.log('this is node2', node2);
      temp1.next.next = node2;
      return l1;
    }
    else if (!node2) {
      //node1.next = temphold1;
      return l1;
    }
    var temp1 = node1;
    var temphold1 = node1.next != undefined ? node1.next : null;
    var temphold2 = node2.next != undefined ? node2.next : null;
    node1.next = node2;
    node2.next = temphold1;
    node2 = temphold2;
    node1 = temphold1;
  }

};

module.exports = {Node: Node, zip: zip};