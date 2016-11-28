/**
 * Write a function deleteDups that removes duplicates from an unsorted linkedlist.
 * 
 * Example: 
 * 1->2->3->3
 * 
 * deleteDups(head); ==> 1->2->3
 * 
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  // if (head.constructor !== Node) {
  //   throw new Error('Input must be a node.');
  // }
  if (head.next === null) {
    return head;
  }

  let prevNode = head;
  let curNode = head.next;
  let nodeInstances = {};

  nodeInstances[head.value] = 1;

  if (head.value === curNode.value && curNode.next === null) {
    head.next = null
    return head;
  }

  while (curNode !== null) {
    console.log(nodeInstances[curNode.value] === 1)
    if (nodeInstances[curNode.value] === 1) {
      console.log('removing dupes')
      prevNode.next = curNode.next;
    }
    else { nodeInstances[curNode.value] = 1; }
    prevNode = prevNode.next;
    curNode = curNode.next;
  }
return head;
}

let n1 = new Node(1); 
let n2 = new Node(1); 
let n3 = new Node(1); 
let n4 = new Node(1); 

n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(deleteDups(n1));

module.exports = deleteDups;

/* Solution #1: O(n) time and O(n) space

function deleteDups(head) {
  // if (head.constructor !== Node) {
  //   throw new Error('Input must be a node.');
  // }
  if (head.next === null) {
    return head;
  }

  let prevNode = head;
  let curNode = head.next;
  let nodeInstances = {};

  nodeInstances[head.value] = 1;

  if (head.value === curNode.value && curNode.next === null) {
    head.next = null
    return head;
  }

  while (curNode !== null) {
    if (nodeInstances[curNode.value] === 1) {
      prevNode.next = curNode.next;
    }
    else { nodeInstances[curNode.value] = 1; }
    prevNode = prevNode.next;
    curNode = curNode.next;
  }
  
return head;
}

*/

/*

Solution #2: O(n^n) time and O(1) space - Work in progress

function deleteDups(head) {
  // if (head.constructor !== Node) {
  //   throw new Error('Input must be a node.');
  // }
  if (head.next === null) {
    return head;
  }

  let prevNode = head;
  let curNode = head.next;
  let checkNode = head;
  let curLen = 1;  
  let checkLen = 0;

  if (head.value === curNode.value && curNode.next === null) {
    head.next = null
    return head;
  }

// Use nested while loops

  while (curNode !== null) {
    while (checkNode !== null) {
      if (curLen !== checkLen && head.value === curNode.value) {
        checkLen++;
        prevNode.next = curNode.next;
      }
      checkLen++;
      checkNode = checkNode.next;
    }
    checkNode = head;
    checkLen = 0;
    prevNode = prevNode.next;
    curNode = curNode.next;
    curLen++;
  }
  
return head;
}

*/
