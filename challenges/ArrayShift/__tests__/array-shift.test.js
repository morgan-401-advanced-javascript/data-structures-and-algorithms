'use strict';

const arrayShift = require('../array-shift.js');


describe('Testing challenge', () => {
  it('return an array with the new value added at the middle index', () => {
    expect(arrayShift.insertShiftArray([2,4,6,8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    expect(arrayShift.insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
  
});
