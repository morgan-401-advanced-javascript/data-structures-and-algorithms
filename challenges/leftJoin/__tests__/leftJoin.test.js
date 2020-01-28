'use strict';

'use strict';
const HashTable = require('../leftJoin');

describe('Test', () => {

  it('true', ()=>{
    expect(HashTable).toBeTruthy();
  });
});
describe('Test HashTable', () => {
  let table1 = new HashTable;
  let table2 = new HashTable;
  table1.add('one', 42);
  table2.add('one', 3);
  let table3 = new HashTable;
  table3.leftJoin(table1, table2);
  console.log(table3.bucket);
  

  // Adding a key/value to your hashtable results in the value being in the data structure
  it('Adding a key/value to your hashtable results in the value being in the data structure', ()=>{
    expect().toEqual();
  });

});


