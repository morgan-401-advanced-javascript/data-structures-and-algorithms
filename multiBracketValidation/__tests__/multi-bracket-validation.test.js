'Use Strict';
const Multi = require('../multi-bracket-validation.js');
describe('multi-bracket-validation', () => {
    
  // {}	TRUE
  it('{}	TRUE', ()=>{

    expect(Multi('{}')).toBe(true);
  });
  // {}(){}	TRUE
  it('{}(){}	TRUE', ()=>{

    expect(Multi('{}(){}')).toBe(true);
  });

  // ()[[Extra Characters]]	TRUE
  it('()[[Extra Characters]]	TRUE', ()=>{

    expect(Multi('()[[Extra Characters]]')).toBe(true);
  });

  // (){}[[]]	TRUE
  it('(){}[[]]	TRUE', ()=>{

    expect(Multi('(){}[[]]')).toBe(true);
  });

  // {}{Code}[Fellows](())	TRUE
  it('{}{Code}[Fellows](())	TRUE', ()=>{

    expect(Multi('{}{Code}[Fellows](())')).toBe(true);
  });
  // [({}]	FALSE
  it('[({}]	FALSE', ()=>{

    expect(Multi('[({}]')).toBe(false);
  });

  // (](	FALSE
  it('(](	FALSE', ()=>{

    expect(Multi('(](')).toBe(false);
  });

  // {(})	FALSE
  it('{(})	FALSE', ()=>{

    expect(Multi('{(})')).toBe(false);
  });
});
