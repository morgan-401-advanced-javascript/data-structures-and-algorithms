'Use Strict';
const Stack = require('./stacks.js');



class PsuedoQueue{
  constructor(){
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(value){
    this.stackOne.push(value);
  }
  dequeue(){

    while(this.stackOne.top !== null){
      let current  = this.stackOne.pop();
      this.stackTwo.push(current);
    }
    return this.stackTwo.pop();
  }
}


module.exports = PsuedoQueue;