/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
    this.value = val;
    this.next = null;
}

function addLinkedList(l1, l2) {
    let value = 0;
    let other;
    let answer;
    while (l1 || l2) {
        if (l1) {
            value += l1.value;
            l1 = l1.next;
        }
        if (l2) {
            value += l2.value;
            l2 = l2.next;
        }

        if (other) {
            other.next = new Node(value % 10);
            other = other.next;
        } else {
            answer = new Node(value % 10);
            other = answer;
        }
    }
    if (value) {
        other.next = new Node(value);
    }
    console.log(value, 'val', answer);
    return answer;
}

let newNode1 = new Node(1);
newNode1.next = new Node(8);
newNode1.next.next = new Node(3);

let newNode2 = new Node(1);
newNode2.next = new Node(2);
newNode2.next.next = new Node(3);
addLinkedList(newNode1, newNode2);
module.exports = {
    Node: Node,
    addLinkedList: addLinkedList
};
