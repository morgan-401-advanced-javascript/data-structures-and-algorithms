const PsuedoQueue = require('../queue-with-stacks.js');

describe('Test Queue With Stacks', () => {
  // Can successfully enqueue into your pseudo queue
  it('Can successfully enqueue into your pseudo queue', ()=>{
    let queue = new PsuedoQueue();
    queue.enqueue('a');
    expect(queue.stackOne.top.data).toBe('a');
  });
  // Can successfully enqueue multiple values into your queue
  it('Can successfully enqueue multiple values into your queue', ()=>{
    let queue = new PsuedoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.stackOne.top.data).toBe('b');
    expect(queue.stackOne.top.next.data).toBe('a');
  });
  // Can successfully dequeue out of a queue the expected value
  it('Can successfully dequeue out of a queue the expected value', ()=>{
    let queue = new PsuedoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    // queue.dequeue();
    // expect(queue).toBe('b');
    expect(queue.dequeue()).toBe('a');
  });
  // Can successfully empty a queue after multiple dequeues
  it('Can successfully empty a queue after multiple dequeues', ()=>{
    let queue = new PsuedoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    // expect(queue).toBe('b');
    expect(queue.stackOne.top).toBe(null);
  });
  // Can successfully instantiate an empty queue
  it('Can successfully instantiate an empty queue', ()=>{
    let queue = new PsuedoQueue();
    // expect(queue).toBe('b');
    expect(queue).toBeTruthy();
  });
});
