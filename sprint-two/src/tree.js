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
  stepCount++;
  for (let i = 0; i < this.children.length; i++) {
    let childTree = this.children[i];
    if (childTree.contains(target)) { return true; }
  }
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild is O(1) because we are pushing the new node to the end of the array. The time complexity of push is O(1).
 * contains is O(n) where n is the number of nodes (subtrees) in the root tree because we only have to visit each of the
 * subtrees once in order to find if target is present within that subtrees. Worst case scenario is having to visit each
 * subtree because target is not present.
 *
 */

var sampleTree = Tree();

// Test Case


var stepCount = 0;

sampleTree.addChild(5);
sampleTree.addChild(6);
sampleTree.children[0].addChild(7);
sampleTree.children[1].addChild(8);
sampleTree.contains(8);
console.log(stepCount);