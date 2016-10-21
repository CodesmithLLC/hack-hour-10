/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

 function Node(val) {
   this.value = val;
   this.next = null;
 }

 function zip(l1, l2) {

   let result;
   let start;

   function getVals(ll) {
     let arr = [];
     while(ll) {
       arr.push(ll.value);
       ll=ll.next;
     }
     return arr.reverse();
   }

   let l1Vals = getVals(l1);
   let l2Vals = getVals(l2);

   let tail = new Node(l2Vals[0]);
   l2Vals.shift();
   let head = tail;
   let last = l2Vals;

   while (last) {
     if (last === l2Vals) {
        let temp = head;
        head = new Node(l1Vals[0]);
        l1Vals.shift();
        head.next = temp;
     if (l1Vals) {
        last = l1Vals;
     }
     if (last === l1Vals)
        let temp = head;
        head = new Node(l2Vals[0]);
        l2Vals.shift();
        head.next = temp;
        last = l2Vals;
     }
   }

   return head;
};

module.exports = {Node: Node, zip: zip};
