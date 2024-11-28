const add = function(a,b) {
  return a+b;	
};

const subtract = function(a,b) {
  return a-b;	
};

const sum = function(array) {
  return array.reduce((total, addend) => total + addend, 0);
};

const multiply = function(array) {
  return array.reduce((product, multiplier) =>  product*multiplier, 1);
};

const power = function(a,b) {
  return a**b;	
};

const factorial = function(a) {
  let result = 1;
  for(let i=0; i<(a-1); i++){
    result = result*(a-i);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
