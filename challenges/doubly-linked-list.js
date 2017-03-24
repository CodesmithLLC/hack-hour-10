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
  const node = new Node(val);
  
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
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
  let curr = this.head;
  while (curr) {
    if (curr.val === val) {

      // Edge cases
      if (curr === this.head) {
        curr.next.prev = null;
        this.head = curr.next;
      } else if (curr === this.tail) {
        curr.prev.next = null;
        this.tail = curr.prev;

        // Middle nodes
      } else {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      }

      return curr;
    }

    curr = curr.next;
  }

  return 'Value does not exist';
}

module.exports = LinkedList;

// const LL = new LinkedList();
// LL.add(4);
// LL.add(3);
// LL.add(8);
// LL.remove(4);
// console.log(LL);
