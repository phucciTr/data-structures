var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  let currentBucket = this._storage.get(index);
  if (currentBucket === undefined) { currentBucket = []; }

  // checking to see if k already exists
  // if k already exists, we replace previous value with new v
  for (let i = 0; i < currentBucket.length; i++) {
    let currentTuple = currentBucket[i];
    let key = currentTuple[0];
    if (key === k) {
      currentTuple[1] = v;
      return;
    }
  }

  let tuple = [k, v];
  currentBucket.push(tuple);
  this._storage.set(index, currentBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let currentBucket = this._storage.get(index);

  if (currentBucket === undefined) { return undefined; }

  for (let i = 0; i < currentBucket.length; i++) {
    let currentTuple = currentBucket[i];
    let key = currentTuple[0];
    if (key === k) { return currentTuple[1]; }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var valAtK = this.retrieve(k);

  if (valAtK) { this.insert(k, undefined); }

  return valAtK;

};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert    : Worst case scenario, our hashing function puts all the elements in the same bucket, therefore we must traverse all the elements and our time complexity is O(n)
 *             However, if our hashing function creates a uniformly distrubuted range of hash codes..
 *             the time complexity will model O(1), because there is a trivial number of tuples inside of each bucket relative to the size of our input
 * retrieve  : The time complexity is O(1) following the logic above
 * remove    : The time complexity is O(1) because it relies on the retrive() & insert() methods
 */