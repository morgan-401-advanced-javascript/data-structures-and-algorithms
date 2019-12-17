'use strict';
const InsertionSort = require('../insertion-sort');

describe('Test', () => {
  it('true', ()=>{
    expect(true).toBeTruthy();
  });
});

// Sort array of length 1
describe('Insertion Sort Tests', () => {
  it('Sort array of length 1', ()=>{
    let array = [ 13 ];
    let sortedArray = InsertionSort(array);
    console.log(sortedArray);
    expect(sortedArray).toEqual([13]);
  });
  // Sort array of length 2
  it('Sort array of length 2', ()=>{
    let array = [13, 5];
    let sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([5, 13]);
  });
  // Sort array of length 10
  it('Sort array of length 10', ()=>{
    let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  // Incorrect parameter error handling
  xit('Incorrect parameter error handling', ()=>{
    let sortedArray = InsertionSort();
    expect(sortedArray).toBe('Incorrect parameter');
  });
  // Not an array
  it('Not an array', ()=>{
    let array = 'animal';
    let sortedArray = InsertionSort(array);
    expect(sortedArray).toBe('Not an array');
  });
  // Empty array
  it('Empty array', ()=>{
    let array = [];
    console.log(array[0]);
    let sortedArray = InsertionSort(array);
    expect(sortedArray).toBe('Empty array');
  });
  // Array with non-numerical values
  it('Array with non-numerical values', ()=>{
    let array = ['blue'];
    let sortedArray = InsertionSort(array);
    expect(sortedArray).toBe('Array with non-numerical values');
  });
});