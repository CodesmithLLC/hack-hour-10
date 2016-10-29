/**
 * Create a stack.Then create a queue using two stacks.
 */

// LIFO
function Stack() {
  this.stack = []
  this.length = 0;
}
Stack.prototype.push = function (val) {
  this.stack.push(val);
  this.length++;
}
Stack.prototype.pop = function () {
  if (this.length !== 0) {
    this.length--;
  }
  return this.stack.pop();
}

/**
* Queue Class
*/

// FIFO
function Queue() {
  this.stack_1 = new Stack();
  this.stack_2 = new Stack();
}
Queue.prototype.enqueue = function (val) {
  this.stack_1.push(val);
}
Queue.prototype.dequeue = function () {
  let dequeueVal = undefined;
  while (this.stack_1.length > 0) {
    dequeueVal = this.stack_1.pop();
    if ( this.stack_1.length !== 0 ) {
      this.stack_2.push(dequeueVal);
    }
  }
  while (this.stack_2.length > 0) {
    this.stack_1.push(this.stack_2.pop());
  }
  return dequeueVal;
}

const queue = new Queue();
// console.log(queue.dequeue());
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
