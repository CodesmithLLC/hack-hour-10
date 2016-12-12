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
  this.eventHandlers = {};
}

EventEmitter.prototype.on = function(eventName, func) {
  if (!this.eventHandlers[eventName]) this.eventHandlers[eventName] = [];
  this.eventHandlers[eventName].push(func);
};

EventEmitter.prototype.trigger = function(eventName, ...args) {
  this.eventHandlers[eventName].forEach(func => {
    func(...args);
  })
};

module.exports = EventEmitter;
