const Node = require('./node.js');

// instantiate an empty linked list
class LinkedList {
  constructor(){
    this.head = null;
  }
  // insert item into the beginning of the list
  insert(value){
    let inserted = new Node(value);
    inserted.next = this.head;
    this.head = inserted;
    return this.head;
  }
}
// * The head property will properly point to the first node in the linked list
// * Can properly insert multiple nodes into the linked list
// * Will return true when finding a value within the linked list that exists
// * Will return false when searching for a value in the linked list that does not exist
// * Can properly return a collection of all the values that exist in the linked list

module.exports = LinkedList;