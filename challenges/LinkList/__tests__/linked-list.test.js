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
    expect(list.head.data).toBe('yellow');

  });

});
// * The head property will properly point to the first node in the linked list
describe('The head property will properly point to the first node in the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');

  it('first node is correct', ()=>{
    expect(list.head.data).toBe('blue');
  });

});
// * Can properly insert multiple nodes into the linked list
describe('Can properly insert multiple nodes into the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');

  it('successfully added head', ()=>{
    expect(list.head.data).toBe('blue');
  });
  it('successfully added 2nd value', ()=>{
    expect(list.head.next.data).toBe('yellow');
  });
});

describe('Will return true when finding a value within the linked list that exists', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');
  let searchResult = list.includes('yellow');
  let badSearchResult = list.includes('apple');
  
  //  Will return true when finding a value within the linked list that exists
  it('Returns true for items that exist', ()=>{
    expect(searchResult).toBeTruthy();
  });
  // * Will return false when searching for a value in the linked list that does not exist
  it('Returns false for items that do not exist', ()=>{
    expect(badSearchResult).toBeFalsy();
  });
});


// * Can properly return a collection of all the values that exist in the linked list
describe('Can properly return a collection of all the values that exist in the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');
  list.insert('green');
  let allItems = list.toString();

  
  it('returns a collection', ()=>{


    expect(allItems).toBe('green,blue,yellow');
  });

});
