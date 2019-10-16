'use strict';

const arrayShift = require('../array-shift.js');


describe('Testing challenge', () => {
  it('return an array with the new value added at the middle index', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4,8,15,23,42], 16).length).toStrictEqual(4,8,15,16, 23,42);
  });
  
});

describe('Test', () => {
  // How might we repeat this to check on types?
  it('true', ()=>{
    expect(true).toBeTruthy();
  });
});
