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
  // quick solutions
  if (!head || head.next === null) {
    return head;
  }
  // turn linked list into an array
  const list = [];
  for (let curr = head; curr; curr = curr.next) {
    list.push(curr.value);
  }
  // create a tracker object to handle duplicates
  const tracker = list.reduce((key, val) => {
    key[String(val)] = true;
    return key;
  }, {});
  // create new array without duplicates
  const uniq = list.reduce((arr, val) => {
    if (tracker[String(val)]) {
      arr.push(val);
      tracker[String(val)] = false;
    }
    return arr;
  }, []);
  // create a new linked list
  const newHead = new Node(null);
  let curr = newHead;
  while (uniq.length) {
    curr.next = new Node(uniq.shift());
    curr = curr.next;
  }
  // return head of new linked list
  return newHead.next;
}

// function Node(value, next = null) {
//   this.value = value;
//   this.next = next;
// };
// const head = new Node(1, new Node(2, new Node(3, new Node(3))));
// console.log(deleteDups(head));
// const h = new Node(3, new Node(2, new Node(3, new Node(3))));
// console.log(deleteDups(h));

module.exports = deleteDups;
