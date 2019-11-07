const LinkedList = require('../ll-merge.js');

xdescribe('Test', () => {
  it('true', ()=>{
    expect(true).toBeTruthy();
  });
});

// * Can successfully instantiate an empty linked list
xdescribe('instantiate an empty linked list', ()=>{
  let list = new LinkedList();
  it('empty list',()=>{
    expect(list).toBeTruthy();
  });
});

// * Can properly insert into the linked list
xdescribe('insert into the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');

  it('successfully inserts into list', ()=>{
    expect(list.head.data).toBe('yellow');

  });

});
// * The head property will properly point to the first node in the linked list
xdescribe('The head property will properly point to the first node in the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');

  it('first node is correct', ()=>{
    expect(list.head.data).toBe('blue');
  });

});
// * Can properly insert multiple nodes into the linked list
xdescribe('Can properly insert multiple nodes into the linked list', ()=>{
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

xdescribe('Will return true when finding a value within the linked list that exists', ()=>{
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
xdescribe('Can properly return a collection of all the values that exist in the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.insert('blue');
  list.insert('green');
  let allItems = list.toString();
  it('returns a collection', ()=>{
    expect(allItems).toBe('green,blue,yellow');
  });

});

// Can successfully add a node to the end of the linked list
xdescribe('Can successfully add a node to the end of the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.append('green');
  list.append('blue');

  it('Items should be added to the end of the list', ()=>{
    expect(list.head.next.data).toBe('green');
  });
  // Can successfully add multiple nodes to the end of a linked list
  it('Can add multiple nodes to the end of a list',()=>{
    expect(list.head.next.next.data).toBe('blue');
  });

});

// Can successfully insert a node before a node located in the middle of a linked list

xdescribe('Can successfully insert a node before a node located in the middle of a linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.append('blue');
  list.insertBefore('green', 'blue');
  it('inserts in middle', ()=>{
    expect(list.head.next.data).toBe('green');
  });
  it('blue should be at the end', ()=>{
    expect(list.head.next.next.data).toBe('blue');
  });
  it('head should stay the same', ()=>{
    expect(list.head.data).toBe('yellow');
  });
});
// Can successfully insert a node before the first node of a linked list
xdescribe('Can successfully insert a node before a node located in the middle of a linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.append('blue');
  list.insertBefore('green', 'yellow');
  it('inserts at the head', ()=>{
    expect(list.head.data).toBe('green');
  });
  it('blue should be at the end', ()=>{
    expect(list.head.next.next.data).toBe('blue');
  });
  it('head should move over', ()=>{
    expect(list.head.next.data).toBe('yellow');
  });
});
// Can successfully insert after a node in the middle of the linked list
xdescribe('Can successfully insert a node after a node located in the middle of a linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.append('blue');
  list.insertAfter('green', 'yellow');
  it('head stays the same', ()=>{
    expect(list.head.data).toBe('yellow');
  });
  it('blue should be at the end', ()=>{
    expect(list.head.next.next.data).toBe('blue');
  });
  it('new node should be in the middle', ()=>{
    expect(list.head.next.data).toBe('green');
  });
});
// Can successfully insert a node after the last node of the linked list
xdescribe('Can successfully insert a node after last node of a linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  list.append('blue');
  list.insertAfter('green', 'blue');
  it('head stays the same', ()=>{
    expect(list.head.data).toBe('yellow');
  });
  it('green should be at the end', ()=>{
    expect(list.head.next.next.data).toBe('green');
  });
  it('blue should be in the middle', ()=>{
    expect(list.head.next.data).toBe('blue');
  });
});

// Where k is greater than the length of the linked list
xdescribe(' Where k is greater than the length of the linked list', ()=>{
  let list = new LinkedList();
  list.insert('yellow');
  let k = list.kthFromEnd(3);

  it('head stays the same', ()=>{
    expect(list.head.data).toBe('yellow');
  });
  it('k should return error', ()=>{
    expect(k).toBe('error');
  });
});


// Where k and the length of the list are the same
xdescribe('Where k and the length of the list are the same', ()=>{
  let list = new LinkedList();
  list.insert('green');
  list.insert('yellow');
  let k = list.kthFromEnd(2);

  it('head stays the same', ()=>{
    expect(list.head.data).toBe('yellow');
  });
  it('k should return error', ()=>{
    expect(k).toBe('error');
  });
});

// Where k is not a positive integer
xdescribe('Where k is not a positive integer', ()=>{
  let list = new LinkedList();
  list.insert('green');
  list.insert('yellow');
  let k = list.kthFromEnd(-3);
  it('head stays the same', ()=>{
    expect(list.head.data).toBe('yellow');
  });
  it('k should return an error message', ()=>{
    expect(k).toBe('k needs to be a postive integer');
  });
});
// Where the linked list is of a size 1
xdescribe('Where the linked list is of a size 1', ()=>{
  let list = new LinkedList();
  list.insert('green');
  let k = list.kthFromEnd(0);
  it('head stays the same', ()=>{
    expect(list.head.data).toBe('green');
  });
  it('k should return green', ()=>{
    expect(k).toBe('green');
  });
});
// Where k is not at the end, but somewhere in the middle of the linked list
xdescribe('Where k is not at the end, but somewhere in the middle of the linked list', ()=>{
  let list = new LinkedList();
  list.insert('green');
  list.insert('blue');
  list.insert('yellow');
  let k = list.kthFromEnd(1);
  it('head stays the same', ()=>{
    expect(list.head.data).toBe('yellow');
  });
  it('k should return blue', ()=>{
    expect(k).toBe('blue');
  });
});

// Where list1 is the same length as list2
xdescribe('Where list1 is the same length as list2', ()=>{
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  list1.insert('1');
  list1.append('2');
  list2.insert('a');
  list2.append('b');
  let merged = new LinkedList();
  merged = merged.mergeLists(list1, list2);
  
  it('should return an alternating list', ()=>{
    expect(merged.head.data).toBe('1');
    expect(merged.head.next.data).toBe('a');
    expect(merged.head.next.next.data).toBe('2');
    expect(merged.head.next.next.next.data).toBe('b');
  });
});
// Where list1 is shorter than list2
xdescribe('Where list1 is shorter than list2', ()=>{
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  list1.insert('1');
  list2.insert('a');
  list2.append('b');
  let merged = new LinkedList();
  merged = merged.mergeLists(list1, list2);
  
  it('should return an alternating list', ()=>{
    expect(merged.head.data).toBe('a');
    expect(merged.head.next.data).toBe('1');
    expect(merged.head.next.next.data).toBe('b');
  });
});
// Where list1 is longer than list2
xdescribe('Where list1 is longer than list2', ()=>{
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  list1.insert('1');
  list1.append('2');
  list2.insert('a');
  let merged = new LinkedList();
  merged = merged.mergeLists(list1, list2);
  
  it('should return an alternating list', ()=>{
    expect(merged.head.data).toBe('1');
    expect(merged.head.next.data).toBe('a');
    expect(merged.head.next.next.data).toBe('2');
  });
});
// Where list1 is null
xdescribe('Where list1 is null', ()=>{
  let list1 = null;
  let list2 = new LinkedList();
  list2.insert('a');
  list2.insert('b');
  let merged = new LinkedList();
  merged = merged.mergeLists(list1, list2);
  
  it('should return an alternating list', ()=>{
    expect(merged).toBe('Not valid Linked List');
  });
});
// Where both lists are of length 1
xdescribe('Where both lists are of length 1', ()=>{
  let list1 = new LinkedList();
  let list2 = new LinkedList();
  list1.insert('1');
  list2.insert('a');
  let merged = new LinkedList();
  merged = merged.mergeLists(list1, list2);
  
  it('should return an alternating list', ()=>{
    expect(merged.head.data).toBe('1');
    expect(merged.head.next.data).toBe('a');
  });
});