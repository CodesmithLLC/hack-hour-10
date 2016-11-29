'use strict';

function EventEmitter() {
  this.e = {};
}

EventEmitter.prototype.on = function (funcName, func) {
  if (!this.e[funcName]) this.e[funcName] = [func];
  else this.e[funcName].push(func);
};

EventEmitter.prototype.trigger = function (funcName, ...args) {
  this.e[funcName].forEach(func => func.apply(this, ...args));
};

module.exports = EventEmitter;
