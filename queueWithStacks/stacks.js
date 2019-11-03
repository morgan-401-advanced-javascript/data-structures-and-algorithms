'Use Strict';
const Node = require('./node.js');

class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    if(value !== null){
      let newItem = new Node(value);
      if(this.top !== null){
        newItem.next = this.top;
        this.top = newItem;
      } else {
        this.top = newItem;
      }
    
    } else {
      return 'bad value';
    }
  }
  pop(){
    if(this.top !== null){
      this.temp = this.top;
      this.top = this.temp.next;
      return this.temp.data;
    } else {
      return 'null';
    }
  }
  peek(){
    if(this.top !== null){
      return this.top.data;
    }else{
      return 'no data!';
    }
    
  }
}

module.exports = Stack;