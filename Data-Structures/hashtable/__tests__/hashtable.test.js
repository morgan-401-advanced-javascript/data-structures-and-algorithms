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
    expect(table.bucket[110182]).toEqual({one: 42});
  });
  // Retrieving based on a key returns the value stored
  it(' Retrieving based on a key returns the value stored', ()=>{
    expect(table.get('one')).toEqual(42);
  });
  // Successfully returns null for a key that does not exist in the hashtable
  it('Successfully returns null for a key that does not exist in the hashtable', ()=>{
    expect(table.get('blue')).toEqual(null);
  });
  // Successfully handle a collision within the hashtable
  it('Successfully handle a collision within the hashtable', ()=>{
    
    expect(table.add('one', 42)).toEqual('non unique key');
  });

});



// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value