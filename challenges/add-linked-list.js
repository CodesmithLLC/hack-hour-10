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
  let cur1 = l1;
  let cur2 = l2;
  let num1 = '';
  let num2 = '';

  while(cur1){
    num1 = cur1.value + num1;
    cur1 = cur1.next;
  }
  while(cur2){
    num2 = cur2.value + num2;
    cur2 = cur2.next;
  }
  let result =  Number(num1) + Number(num2) + '';
  let nodeList;
  let curr;
  result.split('').reverse().forEach((ele, ind) => {
    if(ind === 0) {
      nodeList = new Node(Number(ele));
      curr = nodeList;
    }
    else {
      curr.next = new Node(Number(ele));
      curr = curr.next;
    }
  })
  return nodeList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
