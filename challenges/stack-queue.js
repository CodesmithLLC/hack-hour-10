/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.stack = [];
  this.push = value => this.stack.push(value);
  this.pop = () => this.stack.pop()
}

/**
* Queue Class
*/

function Queue() {
  this.a = new Stack();
  this.b = new Stack();

  this.enqueue = value => this.a.push(value);

  this.dequeue = () => {
    while (this.a.stack.length) this.b.push(this.a.pop());
    let popped = this.b.pop();
    while (this.b.stack.length) this.a.push(this.b.pop());
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