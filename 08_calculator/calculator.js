const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	total = 0;
  for(let num of array) {
    total += num;
  }
  return total;
};

const multiply = function(array) {
  total = 1;
  for(let num of array) {
    total *= num;
  }
  return total;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
  total = 1;
	for(let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
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
