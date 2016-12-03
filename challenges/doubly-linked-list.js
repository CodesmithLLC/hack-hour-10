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
  const newNode = new Node(val);
  newNode.prev = this.tail;
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
  if (newNode.prev !== null) {
    newNode.prev.next = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  const self = this;
  function helper(node) {
    console.log('Called!');
    if (node === null) { return undefined; }
    if (node.val === val) {
      console.log('Match!');
      if(node.prev === null) {
        self.head = node.next;
      } else {
        node.prev.next = node.next;
      }
      if (node.next === null) {
        self.tail = node.prev;
      } else {
        node.next.prev = node.prev;
      }
      return node;
    }
    return helper(node.next);
  }

  return helper(this.head);
};

const ll = new LinkedList();
ll.add(7);
ll.add(8);
ll.add(9);
ll.remove(9);

console.log(ll);

module.exports = LinkedList;
