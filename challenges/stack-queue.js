/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.stack = [];
  this.push = function (value) {
    this.stack.push(value);
  }
  this.pop = function () {
    return this.stack.pop();
  }
}


/**
* Queue Class
*/

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();

  this.enqueue = function (value) {
    this.stack1.push(value);
  }

  this.dequeue = function () {
    while (this.stack1.stack.length)
      this.stack2.push(this.stack1.pop());
    let popped = this.stack2.pop();
    while (this.stack2.stack.length)
      this.stack1.push(this.stack2.pop());
    return popped;
  }
}

module.exports = { Stack: Stack, Queue: Queue };

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue);

queue.dequeue();

console.log(queue);