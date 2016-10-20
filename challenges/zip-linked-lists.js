
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
  let current = l1.head;
  let temp = l2.head;
  const zipped = {};

  while (temp !== l2.tail) {
    current.next = temp;
    temp.next = current.next;
    current.next = temp;
    temp = temp.next;
  }

//not sure what to push this into, but need to return that at the end?

//i think this works for two linked lists with just two nodes each  
  // if (l1 && l2) {
  //   l1.head.next = l2.head;
  //   l2.head.next = l1.tail;
  //   l1.tail.next = l2.tail;
  // } else { 
  //   return l1;
  // }


  }
};

module.exports = {Node: Node, zip: zip};