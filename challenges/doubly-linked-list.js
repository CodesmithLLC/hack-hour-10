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
  if (this.head === null && this.tail === null) {
    this.tail = this.head = new Node(val);
    this.tail.prev = this.head;
    return true;
  }
  else {
    let nodeToAdd = new Node(val);
    nodeToAdd.prev = this.tail.prev = this.tail;
    this.tail.next = this.tail = nodeToAdd;
    return true;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let prevNode;
  let curNode = this.head;

  if (this.head.val === val && this.tail.val === val) {
    console.log('removing head and tail')
    let nodeToRemove = curNode;
    this.head = this.tail = null;
    return nodeToRemove;
  }

  else if (this.head.val === val) {
    console.log('removing head')
    let nodeToRemove = curNode;
    this.head = this.head.next;
    this.head.prev = null;
    return nodeToRemove;
  }

  else if (this.tail.val === val) {
    console.log('removing tail')
    let nodeToRemove = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return nodeToRemove;
  }
  
  while (curNode) {
    if (curNode.val === val) {
      console.log('removing body node')
      let nodeToRemove = curNode;
      prevNode.next = nodeToRemove.next;
      if (nodeToRemove.next) { nodeToRemove.next.prev = prevNode; }
      return nodeToRemove;
    }
    else {
      prevNode = curNode;
      curNode = curNode.next;
    }
  }
  return false;
};

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.remove(4);
list.remove(3);
// list.remove(2);
// list.remove(1);
console.log(list);

// module.exports = LinkedList;
