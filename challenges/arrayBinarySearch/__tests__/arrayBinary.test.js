'use strict';

const arrayBinary = require('../array-binary-search.js');


describe('Testing challenge', () => {
  it('it should return the index of the array’s element that is equal to the search key', () => {
    expect(arrayBinary.BinarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
  });
  it('it should return -1 if the search key does not exist', () => {
    expect(arrayBinary.BinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
});
