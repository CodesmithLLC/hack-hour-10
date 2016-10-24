/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
   var previous = null;

   function hoonsFunction(head,)

   while(head) {
     // save next or you lose it!!!
     var node = head.next;
     // reverse pointer
     node.next = previous;
     // increment previous to current node
     previous = head;
     // increment node to next node or null at end of list
     head = node;
   }
   return previous;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
