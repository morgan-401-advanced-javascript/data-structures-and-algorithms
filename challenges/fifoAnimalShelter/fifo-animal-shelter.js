'Use Strict';
const Node = require('./node.js');

class Dog {
  constructor(){
    this.name = '';
  }
  print(){
    return this.name + ' is a good dog!';
  }
}

class Cat {
  constructor(){
    this.name = '';
  }
  print(){
    return this.name + ' is a sweet cat!';
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(animal){
    if(animal === Cat || Dog){
      let newItem = new Node(animal);
      if(this.rear === null){
        this.rear = newItem;
        this.front = newItem;
      }else{
        this.rear.next = newItem;
        this.rear = newItem;
      }
    }else{
      return 'Cats & Dogs only!';
    }
  }
  dequeue(pref){

  }
}

module.exports =  { Dog, Cat, AnimalShelter};

