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
  const cache = [];
  let current = head;
  
  while(current) {
    cache.push(current.value);
    current = current.next;
  }
  
  return cache
    .filter((el, pos, self) => self.indexOf(el) === pos)
    .reduce((newNode, cur, ind) => {
      if (ind === 0) { return newNode; }
      let current = newNode;
      while(current.next) { current = current.next; }
      current.next = new Node(cur);
      return newNode;
    }, new Node(cache.shift()))
}

module.exports = deleteDups;
