/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
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
  
  if (!this.length) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  ++this.length;
  return true;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.length) return undefined;
  if (this.length === 1) {
    this.head = this.tail = null;
    this.length = 0;
    return;
  }

  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    --this.length;
    return;
  }

  let curr = this.head;
  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;

      if (curr.prev) {
        if (curr.next) {
          curr.next.prev = curr.prev.next;
        } else {
          this.tail = curr;
        }
      } else {
        curr.next.prev = this.head;
      }

      --this.length;
      return;
    }

    curr = curr.next;
  }
};

module.exports = LinkedList;

// const LL = new LinkedList();
// LL.add(4);
// LL.add(3);
// LL.add(8);
// LL.remove(8)
// console.log(LL);
