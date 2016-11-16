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
  let l1num = 0;
  let l2num = 0;
  let sum;
  let sumArr;
  let currl1 = l1;
  let currl2 = l2;

  while(currl1){
      l1num += currl1.val;
      currl1 = currl1.next;
  }

  while(currl2){
      l2num += currl2.val;
      currl2 = currl2.next;
  }

  sum = l1num + l2num;
  sumArr = String(sum).split('');
  let count = 0;
  let newNode;

  while(count < sumArr.length){
    newNode = new Node(sumArr[count]);
    newNode = newNode.next;
    count++;
  }

  return newNode;
  
}

module.exports = {
  Node: Node,
  addLinkedList: addLinkedList
};
