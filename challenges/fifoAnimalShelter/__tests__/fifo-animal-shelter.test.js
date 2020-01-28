const fifoAnimalShelter = require('../fifo-animal-shelter.js');
const Dog = fifoAnimalShelter.Dog;
const Cat = fifoAnimalShelter.Cat;
const AnimalShelter =  fifoAnimalShelter.AnimalShelter;

describe('Fifo Animal Shelter Tests!', () => {
  // Can successfully enqueue a Dog
  it('Can successfully enqueue a Dog', ()=>{
    let dog = new Dog('Hachi');
    let home = new AnimalShelter;
    home.enqueue(dog);
    expect(home.front.data.name).toBe('Hachi');
  });
  // Can successfully enqueue a Cat
  it('Can successfully enqueue a Cat', ()=>{
    let cat = new Cat('Luna');
    let home = new AnimalShelter;
    home.enqueue(cat);
    expect(home.front.data.name).toBe('Luna');
  });
  
  // Error handling when you try to enqueue something that is neither a Dog nor a Cat
  it('Error handling when you try to enqueue something that is neither a Dog nor a Cat', ()=>{
    let kangaroo = 'yellow kangaroo';
    let home = new AnimalShelter;
    expect(home.enqueue(kangaroo)).toBe('Cats & Dogs only!');
  });

  // Can successfully dequeue a Dog
  it('Can successfully dequeue a Dog', ()=>{
    let dog = new Dog('Hachi');
    let cat = new Cat('Luna');
    let home = new AnimalShelter;
    home.enqueue(dog);
    home.enqueue(cat);
    expect(home.dequeue('Dog')).toBe('Hachi is a good dog!');
  });

  // Can successfully dequeue a Cat
  it('Can successfully dequeue a Cat', ()=>{
    let cat = new Cat('Luna');
    let cat2 = new Cat('Mao');
    let dog = new Dog('Hachi');
    let home = new AnimalShelter;
    home.enqueue(cat);
    home.enqueue(cat2);
    home.enqueue(dog);
    home.dequeue('Dog');
    expect(home.dequeue('Cat')).toBe('Luna is a sweet cat!');
  });

  // Can successfully dequeue the front of the AnimalShelter queue when you pass no parameters to dequeue
  it('Can successfully dequeue the front of the AnimalShelter queue when you pass no parameters to dequeue', ()=>{
    let cat = new Cat('Luna');
    let dog = new Dog('Hachi');
    let home = new AnimalShelter;
    home.enqueue(cat);
    home.enqueue(dog);
    
    expect(home.dequeue()).toBe('Luna is a sweet cat!');
  });

  // Error handling when you try to dequeue something that is neither a 'cat', 'dog' or an empty string
  it('Error handling when you try to dequeue something that is neither a "cat" or "dog" or an empty string', ()=>{
    let cat = new Cat('Luna');
    let home = new AnimalShelter;
    home.enqueue(cat);
    expect(home.dequeue('lizard')).toBe('we do not have that animal');
  });

  // Can successfully print the resulting object from a dequeue action
  it('Can successfully print the resulting object from a dequeue action', ()=>{
    let cat = new Cat('Luna');
    let home = new AnimalShelter;
    home.enqueue(cat);
    expect(home.dequeue('Cat')).toBe('Luna is a sweet cat!');
  });

});
