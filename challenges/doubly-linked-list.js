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
LinkedList.prototype.add = function (val) {
    if (!this.head) {
        this.head = new Node(val)
        this.tail = this.head
    }
    else {
        this.tail.next = new Node(val)
        this.tail.next.prev = this.tail
        this.tail = this.tail.next
    }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
    let cur = this.head
    while (cur) {
        if (cur.val === val) {
            cur.prev.next = cur.next
            cur.next.prev = cur.prev
            break
        }
        cur = cur.next
    }
};

module.exports = LinkedList;
