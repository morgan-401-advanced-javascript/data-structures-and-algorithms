const Node = require('./node.js');

// instantiate an empty linked list
class LinkedList {
  constructor(){
    this.head = null;
  }
  // insert item into the beginning of the list
  insert(data){
    let inserted = new Node(data);
    inserted.next = this.head;
    this.head = inserted;
    return this.head;
  }
  //   A function called includes which takes in a value and returns a boolean if that value exists in the linked list
  includes(searchValue) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.data === searchValue){
        return currentNode;
      }
      currentNode = currentNode.next; 
    }
    return null;
  }
  //   A function called toString whcih takes in no arguments and returns a string representing all the values in the linked list
  toString(){
    let stringList = [];
    let currentNode = this.head;
    while(currentNode != this.tail){
      stringList.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return stringList.toString();

  }
}
// * The head property will properly point to the first node in the linked list
// * Can properly insert multiple nodes into the linked list
// * Will return true when finding a value within the linked list that exists
// * Will return false when searching for a value in the linked list that does not exist
// * Can properly return a collection of all the values that exist in the linked list

module.exports = LinkedList;