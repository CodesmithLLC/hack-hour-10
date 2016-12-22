'use strict'

/**
 * 
 * Make an EventEmitter that
 * 
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment, function () {
 * counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 * 
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should continue to call the old function(s) as well. That is to say, we can have listeners for one event.
 * - If 'obj.trigger' is called with additional arguments, pass those to the listeners.
 * - It is not necessary to write a way to remove listeners.
 * 
 */

function EventEmitter() {
}

EventEmitter.prototype.on = function(funcName, func) {
  !this.funcName ? this.funcName = [func] : this.funcName.push(func);
}

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (this.funcName) {
    return this.funcName.forEach(f => f(...args));
  }
  else {
    throw new Error('There is no listener for the event inputted.');
  }
}

module.exports = EventEmitter;
