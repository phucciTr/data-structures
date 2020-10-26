// branch two

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    // if null, then empty list
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.prev = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// TEST CASES
var list = LinkedList();
list.addToTail(1);
list.addToTail(2);
console.log(list.head);
console.log(list.tail);
console.log(list.tail.prev);
// console.log(JSON.stringify(list));