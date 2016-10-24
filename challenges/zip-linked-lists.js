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
  // if either is null, return the other
  if (!l1) return l2;
  if (!l2) return l1;

  let i1 = l1;
  let i2 = l2;

  let head;
  let h;
  let first = true;
  while (i1 || i2) {
    if (i1) {
      console.log(i1.val);
      const newNode = new Node(i1.val);
      if (first) {
        head = newNode;
        h = head;
        first = false;
      }
      h.next = newNode;
      h = h.next;
      i1 = i1.next;
    }
    if (i2) {
      console.log(i2.val);
      const newNode = new Node(i2.val);
      h.next = newNode;
      h = h.next;
      i2 = i2.next;
    }
  }
  return head;
};

const L1 = new Node('A');
L1.next = new Node('B');
L1.next.next = new Node('C');

const L2 = new Node('1');
L2.next = new Node('2');

function printAll(list) {
  let i = list;
  while (i) {
    console.log(i.val);
    i = i.next;
  }
}

printAll(zip(L1, L2));

module.exports = {Node: Node, zip: zip};
