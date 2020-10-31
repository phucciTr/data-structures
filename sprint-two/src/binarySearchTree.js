var BinarySearchTree = function(value) {
  let bstTree = {};
  bstTree.left = null;
  bstTree.right = null;
  bstTree.value = value;
  _.extend(bstTree, BSTreeMethods);
  return bstTree;
};

var BSTreeMethods = {};



BSTreeMethods.insert = function(v) {

  let root = this;

  // insert left
  if (shouldInsertLeft(root, v)) { root.left = BinarySearchTree(v); }

  // insert right
  if (shouldInsertRight(root, v)) { root.right = BinarySearchTree(v); }

  // traverse left
  if (shouldTraverseLeft(root, v)) { root.left.insert(v); }

  // tranverse right
  if (shouldTraverseRight(root, v)) { root.right.insert(v); }

};

BSTreeMethods.contains = function(v) {
  let root = this;

  // check root value
  if (doesValueMatch(root, v)) { return true; }
  if (shouldTraverseLeft(root, v)) { return root.left.contains(v); }
  if (shouldTraverseRight(root, v)) { return root.right.contains(v); }
  return false;
};

BSTreeMethods.depthFirstLog = function(callback) {
  let root = this;
  callback(root.value);

  if (root.left !== null) { root.left.depthFirstLog(callback); }
  if (root.right !== null) { root.right.depthFirstLog(callback); }
};


var shouldInsertLeft = function(root, value) {
  return value < root.value && root.left === null;
};

var shouldInsertRight = function(root, value) {
  return value > root.value && root.right === null;
};

var shouldTraverseLeft = function(root, value) {
  return value < root.value && root.left !== null;
};
var shouldTraverseRight = function(root, value) {
  return value > root.value && root.right !== null;
};

var doesValueMatch = function(root, value) {
  return root.value === value;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * For the insert method, worst case the time complexity is O(n), because we add node to only 1 side of the
 * tree, which leads to an unbalanced tree, in this case the BST is degenerated to a LinkedList, and we must
 * traverse the whole List to insert an new value
 *
 * For the insert method, the average time complexity is O(log n), because each node has 2 children, the
 * average length from the root to the leaf nodes is (log n), though (log n) is not guarenteed because it
 * depends on the order of the children nodes being added to the BST.
 *
 * The time complexity for contains method is dependent on the structure of the BST. If it is a stilted tree,
 * the time complexity is O(n), the average time complexity is (log n) because the search population is
 * halved, with each equality that is run. We are only searching one of the subtrees
 *
 * depthFirstLog is O(n) because if we're applying a callback function to every node, we must visit every node
 * in the tree.
 *
 *
 */



// TESTS
var array = [];
var func = function(value) { array.push(value); };
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.depthFirstLog(func);
expect(array).to.eql([5, 2, 3, 7]);

/**
 *               5
 *             /   \
 *            2     7
 *           / \
 *              3
 */