const mergeSort = require('../merge-sort');


describe('Test', () => {
  it('true', ()=>{
    expect(true).toBeTruthy();
  });
});


// Incorrect parameter error handling
describe('Incorrect parameter error handling', () => {
  // Not an array
  it('Not an array', ()=>{
    let testArray = {};
    expect( mergeSort(testArray)).toBe('Not an array');
  });
  // Empty array
  it('Empty array', ()=>{
    let testArray = [];
    expect( mergeSort(testArray)).toBe('Empty array');
  });
  // Array with non-numerical values
  it('Array with non-numerical values', ()=>{
    let testArray = ['a', 'c'];
    expect( mergeSort(testArray)).toBe('Not an array of only numerical values');
  });
});
describe('Sorting tests', () => {
  // Sort array of length 1
  it('Sort array of length 1', ()=>{
    let testOne = [42];
    expect(mergeSort(testOne)).toEqual([42]);
  });
  // Sort array of length 2
  it('Sort array of length 2', ()=>{
    let testOne = [4, 2];
    expect(mergeSort(testOne)).toEqual([2, 4]);
  });
  // Sort array of length 10
  it('Sort array of length 10', ()=>{
    let testOne = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(mergeSort(testOne)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});