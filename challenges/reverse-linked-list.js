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
<<<<<<< HEAD
// function factory(listConst, num) { 
//   var head = new listConst(Math.floor(Math.random() * 5000));
//   var dummy = head; 
//   for (var i = 1; i <= num; i++) { 
//     dummy.next = new listConst(Math.floor(Math.random() * 5000));
//     dummy = dummy.next;
//   }
//   return head;
  
// }
// var test = factory(Node, 5);
// console.log(JSON.stringify(test, null, 4));
// console.log(JSON.stringify(reverseLinkedList(test), null, 4));

function reverseLinkedList(head) {
  if (!head) return undefined;
  if (!head.next) return head;
  var node = head;
  var store = [];
  while(node) {
    store.unshift(node);
    node = node.next;
  }
  var nu = store[0];
  for (var i = 0; i < store.length -1 ; i++) { 
    store[i].next = store[i + 1];
  }
  store[store.length - 1].next = null;
  return nu;
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
=======

function reverseLinkedList(head) {

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
>>>>>>> 1fc71476c68176665849c71dab3cf9ea5913440d
