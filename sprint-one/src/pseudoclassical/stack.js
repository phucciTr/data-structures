// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  this.length = 0;
};


Stack.prototype.stackMethods = {};

Stack.prototype.push = function(value) {
  let currentIndex = this.length;
  this[currentIndex] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  if (this.size() > 0) { this.length--; }
  let currentIndex = this.length;
  let poppedValue = this[currentIndex];
  delete this[currentIndex];
  return poppedValue;
};

Stack.prototype.size = function() {
  return this.length;
};

