var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  Object.assign(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {

  if (this.value === target) { return true; }

  for (let i = 0; i < this.children.length; i++) {
    let childTree = this.children[i];
    if (childTree.contains(target)) { return true; }
  }
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var sampleTree = Tree();

// Test Case
sampleTree.addChild(5);