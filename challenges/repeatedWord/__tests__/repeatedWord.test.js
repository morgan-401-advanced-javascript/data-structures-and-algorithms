'use strict';
const repeatedWord = require('../repeatedWord');

describe('Test', () => {
  it('true', ()=>{
    expect(true).toBeTruthy();
  });
});
describe('Edge Cases', () => {
  // String which contains only one word
  it('String which contains only one word', ()=>{
    let oneWord = 'one';
    expect(repeatedWord(oneWord)).toBe('Nothing to compare');
  });
  // String where the repeated word happens immediately (‘hello hello’)
  it('String where the repeated word happens immediately (‘hello hello’)', ()=>{
    let immediately = 'hello hello';
    expect(repeatedWord(immediately)).toBe('hello');
  });
  // String where there are no repeated words
  it('String where there are no repeated words', ()=>{
    let none = 'no repeated words';
    expect(repeatedWord(none)).toBe('No repeated words');
  });
});

// Incorrect parameter error handling
describe('Incorrect parameter error handling', () => {
  // Not a string
  it('Not a string', ()=>{
    let numbers = 5;
    expect(repeatedWord(numbers)).toBe('Not a string');
  });
  // Empty string
  it('Empty string', ()=>{
    let empty = '';
    expect(repeatedWord(empty)).toBe('empty');
  });
});