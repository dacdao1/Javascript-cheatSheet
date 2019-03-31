// call stack and memory Heap

const number = 610; // pleasae allocate memory for number variable, which contain 610.
const string = 'some text'; // allocate memory for a string variable, which contain 'some text'.
const human = { // allocate memory for an object name human that point to a region in the memory heap that have these values.
  first: 'dac',
  last: 'dao'
}

function substractTwo(num){
  return num - 2;
};

function calculate(){
  const sumTotal = 4 + 5;
  return substractTwo(sumTotal);
}

// causing a stack overflow

function inExempt(){
  inExempt() // doing a little bit of recursion
}
