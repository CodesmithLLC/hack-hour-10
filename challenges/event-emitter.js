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
  this.listeners = {};
}

EventEmitter.prototype.on = function(eventName, func) {
  if (this.listeners[eventName]) this.listeners[eventName].push(func);
  else this.listeners[eventName] = [func];
};

EventEmitter.prototype.trigger = function(eventName, ...args) {
  if (Object.keys(this.listeners).includes(eventName)) {
    this.listeners[eventName].forEach(func => func(...args));
  }
};

module.exports = EventEmitter;

// Testing follows
// const instance = new EventEmitter();
// let counterA = 0;
// let counterB = 0;
// instance.on('add', function (x) {
//   counterA += x;
// });
// instance.on('add', function(x) {
//   counterB += x;
// })
// instance.trigger('add', 5);
// console.log(counterA, counterB);
// instance.trigger('add', 2);
// console.log(counterA, counterB);
