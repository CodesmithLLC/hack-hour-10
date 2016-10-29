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
    const inStack = new Stack();
    const outStack = new Stack();
    this.enqueue = (val) => { inStack.push(val); outStack.push(inStack.pop()) }
    this.dequeue = () => { return outStack.pop() }
}

module.exports = {Stack: Stack, Queue: Queue};
