/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.content = {};
  this.length = 0;
  this.push = function (val) {
    for (var i = this.length; i > 0; i--) {
      this.content[i] = this.content[i - 1];
    }
    this.content[0] = val; 
    ++this.length;
  }
  this.pop = function() {
    if(this.length > 0) {
      var hold = this.content[0];
      for (var i = 0; i < this.length; i++) {
        this.content[i] = this.content[i + 1];
      }
      //delete this.content[this.length];
      --this.length;
      return hold;
    }
  }

}


/**
* Queue Class
*/


function Queue() {
  this.hold1 = new Stack();
  this.hold2 = new Stack();
  this.length = 0;
  this.enqueue = function (val) {
      this.hold1.unshift(val);
      //console.log(this.hold1)
      this.length++;
  } 
  this.dequeue = function () {
    if (this.length > 0) {
      var length = this.hold1.length
      for (var i = 0; i < length; i++) {
        this.hold2.unshift(this.hold1.shift());
      }
      var hold = this.hold2.shift();
      length = this.hold2.length;
      for (var j = 0; j < length ; j++) {
        this.hold1.unshift(this.hold2.shift());
      }
      // console.log(this.hold1);
      // console.log(this.hold2)
      this.length--;
      return hold;
    }
  }  
}

module.exports = { Stack: Stack, Queue: Queue };



