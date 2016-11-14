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
  // convert both lists to numbers
  let num1 = convertToNum(l1);
  let num2 = convertToNum(l2);
  // return list version of their sum
  return convertToList(num1 + num2);

  // helpler function converts a list to a number
  function convertToNum(head) {
    let cur = head;
    let numStr = '';
    while (cur) {
      numStr = String(cur.value) + numStr;
      cur = cur.next;
    }
    return Number(numStr);
  }
  
  // helper function converts a number to a list
  function convertToList(num) {
    num = String(num).split('');
    let head, cur;
    while (num.length) {
      const newNode = new Node(num.shift());
      if (!head) {
        head = newNode;
        cur = head;
      } else {
        cur.next = newNode;
        cur = cur.next;
      }
    }
    return head;
  }
}

// function printList(node) {
//   let count = 0;
//   while (node) {
//     console.log(`node ${count++}: ${node.value}`);
//     node = node.next;
//   }
// }
//
// let num1 = new Node(3);
// num1.next = new Node(1);
// num1.next.next = new Node(5);
// console.log(convertToNum(num1));
//
// let num2 = new Node(5);
// num2.next = new Node(9);
// num2.next.next = new Node(3);
// console.log(convertToNum(num2));

// console.log(addLinkedList(num1, num2));

// printList(convertToList(908));

module.exports = {Node: Node, addLinkedList: addLinkedList};
