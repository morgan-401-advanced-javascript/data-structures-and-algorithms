'use strict';
const tree = require('../tree');
const repeated = require('../tree-intersection');

describe('Tree tests', () => {
  let test1 = new tree;
  test1.add(150);
  test1.add(100);
  test1.add(75);
  test1.add(160);
  test1.add(125);
  test1.add(175);
  test1.add(250);
  test1.add(200);
  test1.add(350);
  test1.add(300);
  test1.add(500);
  let test2 = new tree;
  test2.add(42);
  test2.add(100);
  test2.add(15);
  test2.add(160);
  test2.add(125);
  test2.add(175);
  test2.add(600);
  test2.add(200);
  test2.add(350);
  test2.add(4);
  test2.add(500);

  let same = repeated(test1, test2);

  it('It works!', ()=>{
    expect(same).toEqual([100, 125, 160, 175, 200, 350, 500]);
  });
  let test3= new tree;
  let test4 = new tree;
  test3.add(42);
  test4.add(40);
  // Binary trees with no shared values
  it('Binary trees with no shared values', ()=>{
    expect(repeated(test3, test4)).toEqual([]);
  });
  // Identical binary trees (all values shared)
  let test5= new tree;
  let test6 = new tree;
  test5.add(42);
  test6.add(42);
  it(' Identical binary trees (all values shared)', ()=>{
    expect(repeated(test5, test6)).toEqual([42]);
  });
  // Binary trees of vastly different sizes (for example, one has just a single node, another has 20 nodes)
  it(' Binary trees of vastly different sizes (for example, one has just a single node, another has 20 nodes)', ()=>{
    expect(repeated(test2, test6)).toEqual([42]);
  });
  // Incorrect parameter
  it('Incorrect parameter', ()=>{
    expect(repeated(5, 'yellow')).toEqual('invalid');
  });
});

