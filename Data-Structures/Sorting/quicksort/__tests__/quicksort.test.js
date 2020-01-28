const quicksort = require('../quicksort');
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
    expect( quicksort(testArray)).toBe('Not an array');
  });
  // Empty array
  it('Empty array', ()=>{
    let testArray = [];
    expect( quicksort(testArray)).toBe('Empty array');
  });
  // Array with non-numerical values
  it('Array with non-numerical values', ()=>{
    let testArray = ['a', 'c'];
    expect( quicksort(testArray)).toBe('Not an array of only numerical values');
  });
});
describe('Sorting tests', () => {
  // Sort array of length 1
  it('Sort array of length 1', ()=>{
    let testOne = [42];
    let eIndx = testOne.length -1;
    expect(quicksort(testOne, 0, eIndx)).toEqual([42]);
  });
  // Sort array of length 2
  it('Sort array of length 2', ()=>{
    let testTwo = [4, 2];
    let eIndxTwo = testTwo.length - 1;
    expect(quicksort(testTwo, 0, eIndxTwo)).toEqual([2, 4]);
  });
  // Sort array of length 10
  it('Sort array of length 10', ()=>{
    let testTen = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let eIndxTen = testTen.length - 1;
    expect(quicksort(testTen, 0, eIndxTen)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});