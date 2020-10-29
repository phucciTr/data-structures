var BinarySearchTree = function(value) {
  let newBSTree = {};
  newBSTree.left = null;
  newBSTree.right = null;
  newBSTree.value = value;
  _.extend(newBSTree, BSTreeMethods);
  return newBSTree;
};

var BSTreeMethods = {};



BSTreeMethods.insert = function(v) {
  if (this.value === null) {
    this.value = v;
    return this.value;
  }
  if (this.left === null && v < this.value) {
    let newLeftChild = BinarySearchTree(v);
    this.left = newLeftChild;
  }
  if (this.right === null && v > this.value) {
    let newRightChild = BinarySearchTree(v);
    this.right = newRightChild;
  }

  if (v < this.value) {
    this.left.value = this.left.insert(v);
  }
  if (v > this.value) {
    this.right.value = this.right.insert(v);
  }

};

BSTreeMethods.contains = function(v) {

};

BSTreeMethods.depthFirstLog = function(callback) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
