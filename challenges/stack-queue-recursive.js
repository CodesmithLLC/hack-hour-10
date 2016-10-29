/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
    this.pop = function() {
      return (this.index > 0) ? this.storage[--this.index] : undefined;
    }
    this.push = function(val) {
      this.storage[this.index++] = val;
    }
}


/**
* Queue Class
*/


function Queue() {
  this.stack = new Stack();
  this.enqueue = function(val) {
    const temp = this.stack.pop();
    if (temp) {
      const top = this.stack.pop();
      this.enqueue(val);
      this.stack.push(top);
    } else this.stack.push(val);
  }
  this.dequeue = function() {
    return this.stack.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
ourQueue = new Queue();
ourQueue.enqueue(1)
ourQueue.enqueue(2)
ourQueue.enqueue(3)
ourQueue.enqueue(4)
ourQueue.enqueue(5)
console.log(ourQueue.dequeue())
console.log(ourQueue.dequeue())
console.log(ourQueue.dequeue())
console.log(ourQueue.dequeue())
console.log(ourQueue.dequeue())
