const add = function(a, b) {

  return a + b;	
};

const subtract = function(a, b) {
	
  return a - b;
};

const sum = function(array) {

  if (array.length == 0) {
    return 0;
  } else {
    let total = 0;
    for (let index = 0; index < array.length; index++) {
      total += array[index];
    }
    return total;
  }
  
  
};

const multiply = function(a) {

  let total = 1;
    for (let index = 0; index < a.length; index++) {
      total *= a[index];
    }
    return total;

};

const power = function(a, b) {

  return a ** b;
	
};

const factorial = function(a) {

  let factorial = 1;
  if (a == 0) {
    return 1;
  } else {
    for(let i = a; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  }
	
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
