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
  let newNode = new Node(val);
  let currentNode = this.head;

  if (!this.head) {
  	this.head = newNode;
  } else {
  		while (currentNode.next){
  			currentNode = currentNode.next;
  		}
		currentNode.next = newNode;
  	newNode.prev = currentNode;
  	this.tail = newNode;
  }
};



/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
	let currentNode = this.head;

	while (currentNode.next) {
		if(currentNode.val === val) {
			let prevlink = currentNode.prev;
			let nextlink = currentNode.next;

			// currentNode.prev = currentNode.next;
			// currentNode.next = prevlink;
			// prevlink.next = null;
			// nextlink.next = null;

			currentNode.prev = null;
			currentNode.next = null;
			prevlink.next = nextlink;
			nextlink.prev = prevlink;
		}
		currentNode = currentNode.next;
	}
};

module.exports = LinkedList;
