const StackAndQueues = require('../stacks-and-queues.js');

describe('Test', () => {
  it('true', ()=>{
    expect(true).toBeTruthy();
  });
});

// Can successfully push onto a stack
describe('Can successfully push onto a stack', ()=>{
  let stack = new StackAndQueues.Stack();
  stack.push('a');
  it('adds to the stack', ()=>{
    expect(stack.top.data).toBe('a');
  });

});
// Can successfully push multiple values onto a stack
describe('Can successfully push multiple values onto a stack', ()=>{
  let stack = new StackAndQueues.Stack();
  stack.push('a');
  stack.push('b');
  it('should be b', ()=>{
    expect(stack.top.data).toBe('b');
  });
  it('should be a', ()=>{
    expect(stack.top.next.data).toBe('a');
  });
});
// Can successfully pop off the stack
describe('Can successfully pop off the stack', ()=>{
  let stack = new StackAndQueues.Stack();
  stack.push('a');
  stack.push('b');
  stack.pop();
  it('should be a', ()=>{
    expect(stack.top.data).toBe('a');
  });
  it('returns pop value', ()=>{
    expect(stack.pop()).toBe('a');
  });
});

// Can successfully empty a stack after multiple pops
describe('Can successfully empty a stack after multiple pops', ()=>{
  let stack = new StackAndQueues.Stack();
  stack.push('a');
  stack.push('b');
  stack.pop();
  stack.pop();
  it('should be a', ()=>{
    expect(stack.top).toBe(null);
  });
});
// Can successfully peek the next item on the stack
describe('Can successfully peek the next item on the stack', ()=>{
  let stack = new StackAndQueues.Stack();
  stack.push('a');
  stack.push('b');
  let peekItem= stack.peek();

  it('should be b', ()=>{
    expect(stack.top.data).toBe('b');
  });
  it('should be a', ()=>{
    expect(stack.top.next.data).toBe('a');
  });
  it('Peeked item should be b', ()=>{
    expect(peekItem).toBe('b');
  });
});
// Can successfully instantiate an empty stack
describe('Can successfully instantiate an empty stack', ()=>{
  let stack = new StackAndQueues.Stack();
  it('empty stack', ()=>{
    expect(stack.top).toBe(null);
  });
});
// Can successfully enqueue into a queue
describe('Can successfully enqueue into a queue', ()=>{
  let queue = new StackAndQueues.Queue();
  queue.enqueue('a');
  queue.enqueue('b');
  queue.enqueue('c');
  it('Can successfully enqueue into a queue', ()=>{
    expect(queue.front.data).toBe('a');
  });
  // Can successfully enqueue multiple values into a queue
  it('Can successfully enqueue multiple values into a queue', ()=>{
    expect(queue.front.data).toBe('a');
    expect(queue.front.next.data).toBe('b');
    expect(queue.rear.data).toBe('c');
  });
});

// Can successfully dequeue out of a queue the expected value
describe('Can successfully dequeue out of a queue the expected value', ()=>{
  let queue = new StackAndQueues.Queue();
  queue.enqueue('a');
  queue.enqueue('b');
  queue.enqueue('c');
  
  it('Can successfully dequeue', ()=>{
    expect(queue.dequeue()).toBe('a');
  });
});
// Can successfully peek into a queue, seeing the expected value
describe('Can successfully dequeue out of a queue the expected value', ()=>{
  let queue = new StackAndQueues.Queue();
  queue.enqueue('a');
  queue.enqueue('b');
  queue.enqueue('c');
  
  it('Can successfully dequeue', ()=>{
    expect(queue.peek()).toBe('a');
  });
});
// Can successfully empty a queue after multiple dequeues
describe('Can successfully empty a queue after multiple dequeues', ()=>{
  let queue = new StackAndQueues.Queue();
  queue.enqueue('a');
  queue.enqueue('b');
  queue.dequeue();
  queue.dequeue();
  
  it('Can successfully dequeue', ()=>{
    expect(queue.front).toBe(null);
  });
});
// Can successfully instantiate an empty queue
describe('Can successfully instantiate an empty queue', ()=>{
  let queue = new StackAndQueues.Queue();
  
  it('ITS ALIVE!', ()=>{
    expect(queue.front).toBe(null);
  });
});