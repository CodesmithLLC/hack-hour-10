/**
 * Create a stack.Then create a queue using two stacks.
 */

/**
 * All operations are O(1) a la javascript array methods. Thanks Javascript!
 */
function Stack() {
  this.data = [];
  this.push = (item) => {
    //console.log(`push ${item}`);
    this.data.push(item);
  };
  this.pop = (item) => {
    //console.log(`pop ${this.data[this.data.length - 1]}`);
    return this.data.pop();
  };
  this.print = () => {
    console.log(this.data);
  };
  this.isEmpty = () => { return this.data.length === 0; };
  this.peek = () => {return this.data[ this.data.length - 1 ];};
  this.length = () => {return this.data.length;};

  this.enqueue = (item) => this.push(item);
  this.dequeue = () => this.pop();
}


/**
* Queue Class
*/

/**
 * This Queue is implemented greedily.
 * When using continuously using push or continuously using pop, it operates at O(1)
 * When push calls are followed by first pop call, that pop operation is O(n) due to the stack switch
 *      such is so for push operations as well
 * Worst case behavior for this Queue is when there are continuously altering push and pop calls. 
 * It is better average case than a flip and flop solution.
 *      Where pop would operate O(n) and push would be O(1) by filling ds2 with ds1
 *       then popping and then pushing back to ds1 or vice versa ... O(1) ... O(n)
 */     
function Queue() {
  this.ds1 = new Stack(); // this stack will always maintain a stack where queue.pop is stack.data[0]
  this.ds2 = new Stack(); // this stack will always maintain an inverted list where stack.pop will be the same as queue.pop
  this.activeStack = 1;
  this.push = (item) => {
    if(this.activeStack === 1){ // active stack is ds1 -- we can push to ds1
      this.ds1.push(item);
    }else{ // active stack is ds2 -- we need to pus contents to ds1, push to ds1 and set active stack to ds1
      while(!this.ds2.isEmpty()){
        this.ds1.push(this.ds2.pop());
      }
      this.ds1.push(item);
      this.activeStack = 1;
    }
  };

  this.pop = (item) => {
    if(this.activeStack === 1){ // active stack is ds1 -- we need to push contents to ds2, pop from ds2 and return that value;
      while(!this.ds1.isEmpty()){
        this.ds2.push(this.ds1.pop());
      }
      this.activeStack = 2;
    }
    // else case to if active stack is ds2 -- pop from ds2 and return that value
    // also since we pushed to ds2 when we had active ds1 we can just pop ds2 here after.
    return this.ds2.pop();
  };
  
  this.print = (str) => {
    if(str) console.log(str);
    console.log(`activeStack for Queue: ${this.activeStack}`);
    this.activeStack === 1 ? this.ds1.print() : this.ds2.print();
  };

  this.enqueue = (item) => this.push(item);
  this.dequeue = () => this.pop();
}


/*
console.log("Stack");
let s = new Stack();
s.push(0);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(100);
s.pop();
s.print();
console.log('======');
let q = new Queue();
q.push(0);
q.print("pushed 0");
q.push(1);
q.print("pushed 1");
q.push(2);
q.print("pushed 2");
console.log(q.pop());
q.print("popped /\\");
q.push(5);
q.print("pushed 5");
q.push(5);
q.push(6);
q.push(7);
q.push(8);
q.print("pushed 5 6 7 8");
console.log(q.pop());
q.print("popped /\\");
q.push(100);
q.print("pushed 100");
// give me results or give me tacos
*/

module.exports = {Stack: Stack, Queue: Queue};
