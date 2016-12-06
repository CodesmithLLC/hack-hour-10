/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
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
  let node = new Node(val);
  let current = this.head;
  while (current) {
    current = next;
  }
  current.next = node;
  node.prev = current;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current && current.val !== val) {
    current = current.next;
  }
  if (current) {
    if (current === this.head) {
      current.next.prev = null;
      this.head = current.next;
    } else {
      current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
    }
  }
};

function printll(ll) {
  let current = ll;
  while (current) {
    current = current.next;
    console.log(current);
  }
}

// let ll = new LinkedList();
// ll.add('a');
// ll.add('b');
// ll.add('c');
// printll(ll);

  // var a = new Node('A');
  // var b = new Node('B');
  // var c = new Node('C');
  // a.next = b;
  // b.next = c;



module.exports = LinkedList;
