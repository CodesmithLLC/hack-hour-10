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
    function dothis(node) { 
        if (node === null) return null;
        else {
            var value = node.value
            for (var current = node.next, prev = node; current != null; current = current.next) { 
                if (current.value === value) {
                    prev.next = current.next
                }
                else { 
                    prev = prev.next
                }
            }
            dothis(node.next);
        }
    }

    dothis(head);
    return head;
}


module.exports = deleteDups;