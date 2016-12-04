/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  // this.length = 0;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let node = new Node(val)

  if (!this.head) this.head = this.tail = node;
  else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    let current = this.head;
    while (current) {
      if (current.val === val && current === this.tail) {

        // reassign this.tail
        current.prev.next = current.next;
        this.tail = current.prev;
        return current;
      } else if (current.val === val) {

        // remove the link in between the nodes
        current.next.prev = current.prev;
        current.prev.next = current.next;
        return current;
      }
      current = current.next;
    }
    return undefined;
  }
};

// // TESTS:
// let ll = new LinkedList();
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// let node5 = new Node(5);
// ll.head = node1;
// ll.tail = node5;
// node1.next = node2;
// node2.prev = node1;
// node2.next = node3;
// node3.prev = node2;
// node3.next = node4;
// node4.prev = node3;
// node4.next = node5;
// node5.prev = node4;

// ll.remove(2);
// console.log(ll);

// TESTS v2:
// let ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// console.log(ll.remove(5));
// console.log(ll);


module.exports = LinkedList;
