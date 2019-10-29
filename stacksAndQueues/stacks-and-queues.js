'use strict';
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

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    if(value !== null){
      let newItem = new Node(value);
      if(this.rear === null){
        this.rear = newItem;
        this.front = newItem;
      }else{
        this.rear.next = newItem;
        this.rear = newItem;
      }
    }else{
      return 'bad value';
    }
  }
  dequeue(){
    if(this.front !== null){
      this.temp = this.front;
      this.temp.next = this.front;
      return this.temp.data;
    }else{
      return 'empty queue';
    }
  }
  peek(){
    if(this.front !== null){
      return this.front.data;
    }else{
      return 'empty queue';
    }
  }


}

module.exports = { Stack, Queue};