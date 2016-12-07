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
  let currL1 = l1;
  let currL2 = l2;
  let nodeTotal = 0; 
  let tempSumOver = null;
  let result = new Node(null);

  
  while (currL1 || currL2 || tempSumOver) {
    if (result.value) let currResultNode = new Node();
    if (tempSumOver) nodeTotal += tempSumOver;  
    if (currL1) nodeTotal += currL1.value;
    if (currL2) nodeTotal += currL2.value;

    if (nodeTotal > 9) {
      result.value = nodeTotal.toString().split("").pop();
      tempSumOver = Number(nodeTotal.toString().split("").splice(0, this.length - 1).join(""));
    }
    else if (nodeTotal < -9) {
      result.value = nodeTotal.toString().split("").pop() * -1;
      tempSumOver = Number(nodeTotal.toString().split("").splice(0, this.length - 1).join(""));
    }
    else {
      result.value = nodeTotal;
      tempSumOver = null;
    }

    currL1 = currL1.next;
    currL2 = currL2.next;
    
    nodeTotal = 0;
  }

  return l1;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
