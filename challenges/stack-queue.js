function Stack() {
  this.stack = [];
  this.push = value => this.stack.push(value);
  this.pop = () => this.stack.pop()
}

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
