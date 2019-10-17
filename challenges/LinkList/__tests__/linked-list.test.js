const LinkedList = require('../linked-list.js');

describe('Test', () => {
  it('true', ()=>{
    expect(true).toBeTruthy();
  });
});

// * Can successfully instantiate an empty linked list
describe('instantiate an empty linked list', ()=>{
  let list = new LinkedList();
  it('empty list',()=>{
    expect(list).toBeTruthy();
  });
});

// * Can properly insert into the linked list
describe('insert into the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');

  it('successfully inserts into list', ()=>{
    expect(list.head.value).toBe('yellow');

  });

});
// * The head property will properly point to the first node in the linked list
describe('The head property will properly point to the first node in the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');

  it('first node is correct', ()=>{
    expect(list.head.value).toBe('blue');
  });

});
// * Can properly insert multiple nodes into the linked list
describe('Can properly insert multiple nodes into the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');

  it('successfully added head', ()=>{
    expect(list.head.value).toBe('blue');
  });
  it('successfully added 2nd value', ()=>{
    expect(list.head.next.value).toBe('yellow');
  });
});

// * Will return true when finding a value within the linked list that exists
// * Will return false when searching for a value in the linked list that does not exist
// * Can properly return a collection of all the values that exist in the linked list