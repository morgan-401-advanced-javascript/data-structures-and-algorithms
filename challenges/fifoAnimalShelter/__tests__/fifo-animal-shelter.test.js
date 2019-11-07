const fifoAnimalShelter = require('../fifo-animal-shelter.js');
const Dog = fifoAnimalShelter.Dog;
const Cat = fifoAnimalShelter.Cat;
const AnimalShelter =  fifoAnimalShelter.AnimalShelter;

describe('Fifo Animal Shelter Tests!', () => {
  // Can successfully enqueue a Dog
  it('Can successfully enqueue a Dog', ()=>{
    let fido = 1;
    // fido.name = 'fido';
    let home = new AnimalShelter;
    home.enqueue(fido);
    console.log(home);

    expect(home.front.data.name).toBe('fido');
  });
});

// Can successfully enqueue a Cat
// Error handling when you try to enqueue something that is neither a Dog nor a Cat
// Can successfully dequeue a Dog
// Can successfully dequeue a Cat
// Can successfully dequeue the front of the AnimalShelter queue when you pass no parameters to dequeue
// Error handling when you try to dequeue something that is neither a 'cat', 'dog' or an empty string
// Can successfully print the resulting object from a dequeue action