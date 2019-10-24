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
        return true;
      }
      currentNode = currentNode.next; 
    }
    return false;
  }
  //   A function called toString which takes in no arguments and returns a string representing all the values in the linked list
  toString(){
    let stringList = [];
    let currentNode = this.head;
    while(currentNode){
      stringList.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return stringList.toString();

  }
  //   A function called append which adds a Node to the end of the list
  append(data){
    let appendedItem = new Node(data);
    let currentNode = this.head;
    if(this.head === null){
      this.head = appendedItem;
      return this.head;
    } else{
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = appendedItem;
    }
  }
  insertBefore(data, before){
    let insertedItem = new Node(data);
    let currentNode = this.head;
    if(currentNode.data === before){
      this.insert(data);
      return;
    } 

    while(currentNode.next){
      if(currentNode.next.data === before){
        insertedItem.next = currentNode.next;
        currentNode.next = insertedItem;
        return;
      }
      currentNode = currentNode.next;           
    }

  }

  insertAfter(data, after){
    let insertedItem = new Node(data);
    let currentNode = this.head;

    while(currentNode){
      if(currentNode.data === after){
        insertedItem.next = currentNode.next;
        currentNode.next = insertedItem;
        return;
      }
      currentNode = currentNode.next;           
    }

  }

  kthFromEnd(k){
    let listArray = [];
    let currentNode = this.head;
    while(currentNode){
      listArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    if(k < 0){
      return 'k needs to be a postive integer';
    }
    let kIndex = ((listArray.length - 1) - k);
    if(kIndex < 0){
      return 'error';
    } else {
      return listArray[kIndex];
    }
  }
  mergeLists(list1, list2){
    let array1 = list1.toString().split(', ');
    let array2= list2.toString().split(', ');
    let final = new LinkedList;
    if (array1.length - array2.length > 1 || array2.length - array1.length > 1){
      return 'Linked Lists are not close enough in length';
    }
    if( array1 === null || array2 === null){
      return 'Not valid Linked List';
    }
    if (array1.length >= array2.length) {
      let answer = [];
      for(let i = 0; i < array1.length; i++) {
        answer.push([array1[i], array2[i]]);
      }
      answer.forEach(item=>{
        final.append(item);
      });
      return final;
    }
    if (array1.length <= array2.length){
      let answer = [];
      for(let i = 0; i < array2.length; i++){
        answer.push([array2[i], array1[i]]);
      }
      answer.forEach(item=>{
        final.append(item);
      });
      return final;
    }
    return null;


  }


}


module.exports = LinkedList;