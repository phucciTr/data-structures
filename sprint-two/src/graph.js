

// Instantiate a new graph
var Graph = function() {
  this.nodeSet = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeSet[node] = { value: node };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeSet[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodeSet[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  let node1 = this.nodeSet[fromNode];
  let node2 = this.nodeSet[toNode];

  if (!node1 || !node2) { return false; }

  let edgeSet1 = node1.edgeSet;
  let edgeSet2 = node2.edgeSet;

  return edgeSet1.targets[toNode] === node2 &&
         edgeSet2.targets[fromNode] === node1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let node1 = this.nodeSet[fromNode];
  let node2 = this.nodeSet[toNode];

  this.addEdgeFromTo(node1, node2);
  this.addEdgeFromTo(node2, node1);
};

// Helper func
Graph.prototype.addEdgeFromTo = function(node1, node2) {
  if (node1.edgeSet === undefined) { node1.edgeSet = {}; }
  node1.edgeSet.source = node1;

  if (node1.edgeSet.targets === undefined) { node1.edgeSet.targets = {}; }
  node1.edgeSet.targets[node2.value] = node2;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  let node1 = this.nodeSet[fromNode];
  let node2 = this.nodeSet[toNode];

  let edgeSet1 = node1.edgeSet;
  let edgeSet2 = node2.edgeSet;

  delete edgeSet1.targets[node2.value];
  delete edgeSet2.targets[node1.value];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodeSet) {
    let currentNode = this.nodeSet[key].value;
    cb(currentNode);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode() is O(1)
 * contains() is O(1)
 * removeNode() is O(1)
 * hasEdge() is O(1)
 * addEdge() is O(1)
 * addEdgeFromTo() O(1)
 * removeEdge() O(1)
 * forEachNode() O(N), because we're iterating thru every node n visit each of them once to apply the callback()
 */


