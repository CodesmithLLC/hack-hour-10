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
  let node = this.head;

  if (!this.head) this.head = this.tail = new Node(val);
  else {
    while (node.next) {
      node = node.next;
    }
    node.next = this.tail = new Node(val);
    node.next.prev = node;
  }
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let node = this.head;
  while (node) {
    if (node.val === val) {
      if(node.prev) {
        node.prev.next = node.next;
      }
      node.next.prev = node.prev;
      return node;
    }
    node = node.next;
  }
};

module.exports = LinkedList;

var list = new LinkedList();
list.add(3);
list.add(5);
list.add(2);
list.remove(3);

console.log(list);