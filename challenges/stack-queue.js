/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.length = 0;
  this.pop = () => {
    if (this.length) {
      this.length--;
      return this.storage.pop();
    }
  }
  this.push = (val) => {
    this.length++;
    this.storage.push(val);
  }
}


/**
* Queue Class
*/


function Queue() {
  this.last = new Stack();
  this.next = new Stack();
  this.enqueue = (val) => this.next.push(val);
  this.dequeue = () => {
    if (!this.last.length) while (this.next.length) this.last.push(this.next.pop());
    return this.last.length ? this.last.pop() : null;
  }
}

module.exports = { Stack: Stack, Queue: Queue };
