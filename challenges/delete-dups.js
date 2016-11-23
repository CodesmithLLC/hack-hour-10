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



function deleteDups(head, look = head ? head : null, look2 = look ? look : null) {
    do {
        while (look2 && look2.next) {
            console.log(look.value, look2.next.value)
            while (look.value === look2.next.value) look2.next = look2.next.next
            look2 = look2.next
        }
        look = look.next
        look2 = look ? look: null
    } while (look);
    return head
}

module.exports = deleteDups;
