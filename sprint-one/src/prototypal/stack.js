// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  var stackInstance = Object.create(stackMethods);
  stackInstance.length = 0;
  return stackInstance;
};

var stackMethods = {
  push: function(value) {
    let currentIndex = this.size();
    this[currentIndex] = value;
    this.length++;
  },

  pop: function() {
    if (this.size() > 0) { this.length--; }
    var currentIndex = this.length;
    var poppedVal = this[currentIndex];
    delete this[currentIndex];
    return poppedVal;
  },

  size: function() {
    return this.length;
  }
};


