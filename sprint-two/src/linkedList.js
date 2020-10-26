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

    // empty list
    if (list.head === null) {
      return undefined;

    // list of only (1 element)
    } else if (list.head.next === null) {
      let oldHead = list.head;
      list.head = null;
      list.tail = null;
      return oldHead.value;

    // more than (1 node)
    } else {
      // save reference to currentHead
      let oldHead = list.head;
      // set a (new head) -> currentHead.next
      list.head = list.head.next;
      list.head.prev = null;
      // will return (value) of currentHead from method
      return oldHead.value;
    }

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
// console.log(list.removeHead());

list.addToTail(1);
list.addToTail(2);

list.removeHead();
// console.log('head = ', list.head);
// console.log(list.removeHead());
// console.log('head = ', list.head);
//
// list.addToTail(2);
// list.addToTail(3);
// list.addToTail(4);
// console.log(list.removeHead());


// console.log(list.head);
// console.log(list.tail);
// console.log(list.tail.prev);
// console.log(JSON.stringify(list));


