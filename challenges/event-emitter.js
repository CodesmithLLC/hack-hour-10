'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.store = {};
}

EventEmitter.prototype.on = function(eventName, func) {
  this.store[eventName] ? this.store[eventName].push(func) : this.store[eventName] = [func];
};

EventEmitter.prototype.trigger = function(eventName, ...args) {
  if (!this.store[eventName]) throw new Error('unrecognized event');
  this.store[eventName].forEach(func => {
    func(...args);
  });
};


// // TESTS:
// const instance = new EventEmitter();
// let counter = 0;
// let balance = 100;
// instance.on('increment', function() {
//   counter++;
// });
// instance.on('increment', function() {
//   balance--;
// });

// console.log(counter, balance); // counter should be 0
// console.log(instance.store);
// instance.trigger('increment');
// console.log(counter, balance); // counter should be 1
// console.log(instance.store);
// instance.trigger('increment');
// console.log(counter, balance); // counter should be 2
// console.log(instance.store);

module.exports = EventEmitter;
