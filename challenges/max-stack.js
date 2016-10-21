/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.max = -Infinity;
  this.push = (item) => {
    if(item > this.max){
      this.max = item;
    }
    this.storage.push(item);
    return this.storage.length;
  };
  this.pop = () => {
    let retVal = this.storage.pop();
    if(retVal === this.max){
      this.max = -Infinity;
      this.storage.forEach( (item) => {
        if(item > this.max){
          this.max = item;
        }
      } );
    }
    return retVal;
  };
  this.getMax = () => {
    return this.max;
  }
  this.print = () => {
    console.log(this.storage);
  }
}

let s = new Stack();
s.push(5);
s.print();
console.log(s.getMax());
s.push(20);
s.print();
console.log(s.getMax());
s.push(1);
s.print();
console.log(s.getMax());
s.push(12);
s.print();
console.log(s.getMax());
s.push(50);
s.print();
console.log(s.getMax());
s.push(0);
s.pop();
s.print();
console.log(s.getMax());
s.pop();
s.print();
console.log(s.getMax());
s.pop();
s.print();
console.log(s.getMax());
s.push(100);
s.print();
console.log(s.getMax());
s.push(2000);
s.print();
console.log(s.getMax());
s.pop();
s.print();
console.log(s.getMax());






module.exports = Stack;