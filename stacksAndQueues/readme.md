# Stacks and Queues

Implement a Stack and a Queue Data Structure

## Challenge

* Can successfully push onto a stack
* Can successfully push multiple values onto a stack
* Can successfully pop off the stack
* Can successfully empty a stack after multiple pops
* Can successfully peek the next item on the stack
* Can successfully instantiate an empty stack
* Can successfully enqueue into a queue
* Can successfully enqueue multiple values into a queue
* Can successfully dequeue out of a queue the expected value
* Can successfully peek into a queue, seeing the expected value
* Can successfully empty a queue after multiple dequeues
* Can successfully instantiate an empty queue

## Approach & Efficiency
Stack:
* push O(1) we only manipulate the first item in the stack
* pop O(1) we only manipulate the first item in the stack
* peek O(1) we only manipulate the first item in the stack

Queue:
* enqueue O(1) we only manipulate one item in the stack
* dequeue O(1) we only manipulate one item in the stack
* peek O(1) we only manipulate one item in the stack
## API
`class Stack {
  constructor(){
    this.top = null;
  }
  push(value)
  pop()
  peek()
}`

`class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value)
  dequeue()
  peek()
}`
