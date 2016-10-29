/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = (val) => {
  this.storage[this.index++] = val;
}
Stack.prototype.pop = () => {
  let popped = this.storage[--this.index];
  delete this.storage[this.index];
  return popped;
}

/**
* Queue Class
*/


function Queue() {
  this.storage = new Stack;
  this.nextDequeue = new Stack;
}

Queue.prototype.enqueue = (val) => {
  if (!this.nextDequeue[0]) { this.nextDequeue.push(val) }
  else {
    this.storage.push(val);
  }
}

Queue.prototype.dequeue = () => {
  let dequeued = this.nextDequeue.pop();
  this.nextDequeue[0] = this.storage[0];
  delete this.storage[0];
  this.storage.index -= 1;
  return dequeued;
}

module.exports = {Stack: Stack, Queue: Queue};
