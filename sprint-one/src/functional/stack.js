var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage['length'] = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    let currentIndex = storage.length;
    storage[currentIndex] = value;
    storage.length++;
  };

  someInstance.pop = function() {
    if (someInstance.size() > 0) { storage.length--; }
    let currentIndex = storage.length;
    let poppedVal = storage[currentIndex];
    delete storage[currentIndex];
    return poppedVal;
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
