'Use Strict';
const Stack = require('./stacks.js');



class PsuedoQueue extends Stack {
  // let stackTwo = new Stack();
  enqueue(value){
    this.push(value);
  }
  dequeue(){
    let first = this;
    let second = new PsuedoQueue;
    let firstArray = [];

    let currentnode = first.top;
    while(currentnode.next){
      firstArray.push(currentnode);
      currentnode = currentnode.next;
    }
    for (let i=0; i <= firstArray.length; i++){
        second.enqueue(first.pop());
    }
    second.pop();
  }
}


module.exports = PsuedoQueue;