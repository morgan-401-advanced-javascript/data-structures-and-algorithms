'use strict';
const HashTable = require('../hashtable');

describe('Test', () => {

  it('true', ()=>{
    expect(HashTable).toBeTruthy();
  });
});
describe('Test HashTable', () => {
  let table = new HashTable;
  table.add('one', 42);

  // Adding a key/value to your hashtable results in the value being in the data structure
  it('Adding a key/value to your hashtable results in the value being in the data structure', ()=>{
    expect(table.bucket[2][0]).toEqual(['one', 42]);
  });
  // Retrieving based on a key returns the value stored
  it(' Retrieving based on a key returns the value stored', ()=>{
    expect(table.get('one')).toEqual(42);
  });
  // Successfully returns null for a key that does not exist in the hashtable
  it('Successfully returns null for a key that does not exist in the hashtable', ()=>{
    expect(table.get('elephant')).toEqual(null);
  });
  // Successfully handle a collision within the hashtable
  it('Successfully handle a collision within the hashtable', ()=>{
    table.add('blue', 0);
    expect(table.bucket[2]).toEqual([ [ 'one', 42 ], [ 'blue', 0 ] ]);
  });
  // Successfully retrieve a value from a bucket within the hashtable that has a collision
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=>{
    table.add('blue', 0);
    expect(table.get('blue')).toEqual( 0  );
  });
  // Successfully hash a key to an in-range value
  it('Successfully hash a key to an in-range value', ()=>{
    expect(table.hash('onomatopoeia')).toEqual(3);
  });

});


