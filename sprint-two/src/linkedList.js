var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }
    list.tail = newTail;

  };

  list.removeHead = function() {
    if (list.head === null) { /* if (!list.head)*/
      return null;
    }
    var firstHead = list.head;
    list.head = firstHead.next;
    return firstHead.value;
  };

  list.contains = function(target) {
    // var contain = function(target, linkList) {
    //   if (linkList === null) {
    //     return false;
    //   }
    //   if (linkList.value === target) {
    //     return true;
    //   }
    //   if (linkList.next === null) {
    //     return false;
    //   }
    //   return contain(target, linkList.next);
    // };
    // return contain(target, list.head);


    var CurrentNode = list.head;
    while (CurrentNode) {
      if (CurrentNode.value === target) {
        return true;
      }
      CurrentNode = CurrentNode.next;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

