/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.pop = () => { return this.storage.pop(); }
    this.push = (val) => { this.storage.push(val); }
}


/**
* Queue Class
*/


function Queue() {
    this.last = new Stack();
    this.next = new Stack();
    this.enqueue = (val) => {
        while (this.last.length) { this.next.push(this.last.pop()) }
        this.next.push(val);
        while (this.next.length) { this.last.push(this.next.pop()) }
    }
    this.dequeue = () => { return this.last.pop() }
    this.push = (val) => { this.enqueue(val) }
    this.pop = () => { return this.dequeue(val) }
}

module.exports = { Stack: Stack, Queue: Queue };
