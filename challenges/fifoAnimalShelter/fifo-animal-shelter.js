'Use Strict';
const Node = require('./node.js');

class Dog {
  constructor(name){
    this.name = name;
  }
  print(){
    return `${this.name} is a good dog!`;
  }
}

class Cat {
  constructor(name){
    this.name = name;
  }
  print(){
    return `${this.name} is a sweet cat!`;
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(animal){
    let species = animal.constructor.name;

    if(species === 'Cat'|| species === 'Dog'){
      let newItem = new Node(animal);
      if(this.rear === null){
        this.rear = newItem;
        this.front = newItem;
        return;
      }else{
        this.rear.next = newItem;
        this.rear = newItem;
        return;
      }
    }else{
      return 'Cats & Dogs only!';
    }
  }
  dequeue(pref){

    let current = this.front;

    if(current.data.constructor.name === pref || pref === undefined){
      this.temp = this.front;
      this.front = this.temp.next;
      return this.temp.data.print();
    }
    while(current.next){
      if(current.next.data.constructor.name === pref){
        if(current.next === this.rear){
          this.temp = current.next;
          current.next= current;
          this.rear = current;
          return this.temp.data.print();
        }
        this.temp = current.next;
        current.next = current.next.next;
        return this.temp.data.print();
      } 
      current = current.next;
    }
    return 'we do not have that animal';
  }
}


module.exports =  { Dog, Cat, AnimalShelter};

