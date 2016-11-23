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



function deleteDups(head) {
  if(!head || !head.next) return;
  while(head){
    let prev;
    let run = head;
    while(run){
      if(prev && prev.value === run.value) {
       prev.next = run.next;
       run = run.next;
       continue;
      }
      prev = run = run.next;
    }
    head = head.next;
  }
}

module.exports = deleteDups;
