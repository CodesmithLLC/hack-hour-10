function Stack() {
  this.stack = [];
  this.index = 0;
  this.push = function (value) {
    this.stack[this.index] = value;
    this.index += 1;
  }
  this.pop = function () {
    const popped = this.stack.splice(this.index - 1, 1);
    this.index -= 1;
    return popped[0];
  }
  this.getMax = function () {
    return Math.max(...this.stack);
  }
}

module.exports = Stack;

let stack = new Stack();
console.log(stack.getMax());