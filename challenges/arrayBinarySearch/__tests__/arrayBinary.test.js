'use strict';
const BinarySearch = require('../array-binary-search.js');
describe('Testing challenge', () => {
  console.log('background: #222; color: #bada55', `MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOxxOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMMWX0xolcllox0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNKkollllcllllldkKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKOdllllllllllllllloxOXWMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOxollllllllllllllllllllokKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0kolllllllllllllllllllllllllldOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKOdlllllllllllllllllllllllllllllllox0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOxllllllllllllllllllllllllllllllllllllldOKWMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMWN0kolllllllllllllllllllllllllllllllllllllllllox0XWMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMNKkdlllllllllllllllllllllllllllllllllllllllllllllld0WMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMWXOdllllllllllllllllllllllllllllllllllllllllllllllllxXWMMMXKWMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMWN0xolllllllllllllllllllllllllllllllllllllllllllllllllld0WWW0:'ckXWMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMWNK00Okxollllllllllllllllllllllllllllllllllllllllllllllllcc:'....,o0NMMMMMMMMMMMMMM
  MMMMMMMMMMMMWNNNNNNNWWWMWX0xlllllllllllllllllllllllllllllllllllllllllllll:...........:xKWMMMMMMMMMMM
  MMMMMMMMMWX0xdoooooddxkOKNWWOolllllllllllllloddolllllllllllllllllllllllld;.............'lONMMMMMMMMM
  MMMMMMMNKkdllllllllllllllOWMNxlllllllllllldOXNN0ollllllllllllllllllllldKNKd'..............;dKWMMMMMM
  MMMMWXOdlllllllllllllllllOWMXxllllllllllx0NMMMMKoclllllllllllllllllld0NMMWx.................'ckNMMMM
  MMMMWXKKKKKkllllllllllllkNMWOllllllllld0NMMMMMNxlllllllllllllllllloONWMMMX:.............:kkkkkOXMMMM
  MMMMMMMMMMMKollllllllloONMW0ollllllld0NMWNNMMNklllllllllllllllllokXWWWWMWx..............oWMMMMMMMMMM
  MMMMMMMMMMMKolllllllloOWMNOolllllldONWWXO0WMWOllllllllllllllllokXWWN0KWMK:..............oWMMMMMMMMMM
  MMMMMMMMMMMKollllllloOWMNklllllldONWMNOdONWW0ollllllllllllllokXWMN0dxXMWd...............oWMMMMMMMMMM
  MMMMMMMMMMMKolllllloOWWNkllllldONWWNOdlkNMWKdllllllllllllldOXWMN0xlo0WM0;...............oWMMMMMMMMMM
  MMMMMMMMMMMKollllloOWMNklllldONWWNOdlldKMMXxllllllllllllx0NWWN0dlllxNWNo................oWMMMMMMMMMM
  MMMMMMMMMMMKolllllkNMWOllld0NWWXOdllllOWMWOlllllllllldkKNMWXOdlllldKWWO;',;:cllooddxxxxxKWMMMMMMMMMM
  MMMMMMMMMMMKolllldKMMKolx0NMWXkdlllllo0MMXdlllllldxk0NWMNKkolllodx0WMMX0KNNWMMMMWWNNNNNXWMMMMMMMMMMM
  MMMMMMMMMMMKollllxNMWKOKNWNKkollllllllOWMXxooxkOKNWWMNKOdooxk0KXNWMMMNXKOkxdolcc:;;;,,,,xWMMMMMMMMMM
  MMMMMMMMMMMKolllldKWMWWNXOxllllllllllldKWWNNNWWMWXK0Okkk0XNWMWWXXWMM0c'.................oWMMMMMMMMMM
  MMMMMMMMMMMKollllloxOOkdolllllllllllllloxO0000OkOOOOKNWMWNX0OkddOWMXl...................oWMMMMMMMMMM
  MMMMMMMMMMMKollllllllllllllllllllllllllllllloxOKNWMMWXKOkdollllxNMWx....................oWMMMMMMMMMM
  MMMMMMMMMMMKolllllllllllllllllllllllllllldk0XWMWXK0OxolllllllldKWWO,....................oWMMMMMMMMMM
  MMMMMMMMMMMKollllllllllllllllllllllllldkKNWWNKOxollllllllllllo0WMK:.....................oWMMMMMMMMMM
  MMMMMMMMMMMKollllllllllllllllllllllokKNWWNKOdllllllllllllllllOWMNl......................oWMMMMMMMMMM
  MMMMMMMMMMMKolllllllllllllllllllox0NWMNKkdllllllllllllllllllkNMWx.......................oWMMMMMMMMMM
  MMMMMMMMMMMKollllllllllllllllldkKWWWKOdllllllllllllllllllllxXMWk'.......................oWMMMMMMMMMM
  MMMMMMMMMMMKollllllllllllllldOXWWN0xollllllllllllllllllllldXWWO,........................oWMMMMMMMMMM
  MMMMMMMMMMMKollllllllllllld0NMWXOdllllllllllllllllllllllldKWW0;.........................oWMMMMMMMMMM
  MMMMMMMMMMMKollllllllllldONMWXkolllllllllllllllllllllllldKWMK:..........................oWMMMMMMMMMM
  MMMMMMMMMMMKolllllllllokXWWXkollllllllllllllllllllllllldKWWK:...........................oWMMMMMMMMMM
  MMMMMMMMMMMKolllllllldKWMNOollllllllllllllllllllllllllxKWM0;............................oWMMMMMMMMMM
  MMMMMMMMMMMKolllllllkNMWKxlllllllllllllllllllllllllllxXMWO;.............................oWMMMMMMMMMM
  MMMMMMMMMMMKollllloONMNOollllllllllllllllllllllllllokNMWk'..............................oWMMMMMMMMMM
  MMMMMMMMMMMN0OOOOOKWMWX0OOOOOOOOOOOOOOOOOOOOOOOOOOOKWMMXxooooooooooooooooooooooooooooooo0WMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  `);
  it('it should return the index of the array’s element that is equal to the search key', () => {
    expect(BinarySearch([4,8,15,16,23], 15)).toStrictEqual(2);
  });
  it('it should return -1 if the search key does not exist', () => {
    expect(BinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
  it('it should return the index of the array’s element that is equal to the search key', () => {
    expect(BinarySearch([4,8,15,16,23,42,90], 8)).toStrictEqual(1);
  });
  it('it should return the index of the array’s element that is equal to the search key', () => {
    expect(BinarySearch([4,8,15,16,23,42], 42)).toStrictEqual(5);
  });
});