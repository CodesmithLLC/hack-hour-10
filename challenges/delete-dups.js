/*jshint esversion: 6 */
/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
 function Node (val) {
 	this.val = val;
   this.next = null;
 }

 function deleteDups(head) {
 	let valArr = [];
   let curr = head;
   let resultNode;
   let resultNodeHead;

   while(curr){
   	if(valArr.indexOf(curr.val) < 0) valArr.push(curr.val);
     curr = curr.next;
   }

   for(let i = 0; i < valArr.length; i++){
   	if (resultNode === undefined){
     	resultNode = new Node(valArr[i]);
       resultNodeHead = resultNode;
     }
     else {
     resultNode.next = new Node(valArr[i]);
     resultNode = resultNode.next;
     }
   }
   return resultNodeHead;
 }

module.exports = deleteDups;
