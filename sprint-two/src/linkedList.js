var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (isListEmpty(list.head)) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.prev = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {

    if (isListEmpty(list.head)) { return undefined; }

    if (hasOneNode(list.head.next)) {
      let oldHead = list.head;
      list.head = null;
      list.tail = null;
      return oldHead.value;
    }
    // otherwise
    let oldHead = list.head;
    list.head = list.head.next;
    list.head.prev = null;
    return oldHead.value;
  };

  list.contains = function(target) {
    var currentHead = list.head;

    while (currentHead !== null) {
      var currentValue = currentHead.value;
      if (isValuePresent(currentValue, target)) { return true; }
      currentHead = currentHead.next;
    }

    return false;
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

var isListEmpty = function(headNode) {
  return headNode === null;
};

var hasOneNode = function(nextHead) {
  return nextHead === null;
};

var isValuePresent = function(value, target) {
  return value === target;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail is O(1) [constant time] because we have a tail pointer to add a new value into the list. We move the tail pointer
 * forward after we have added a new value which is done in constant time since it takes the same amount of operations
 * regardless of the size of the linkedList.
 *
 * removeHead is O(1) [constant time] because we have a pointer to the head which we move forward to the current head's
 * following node. We return the value from the old head's reference. Again, this method takes the same amount of operations
 * regarless of the size of the linkedList therefore it is constant time.
 *
 * contains is O(n) [linear time] because you must traverse the whole list to know if it doesn't contain a value.
 *
 */
