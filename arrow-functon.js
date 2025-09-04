/// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// function expression
const addtion = function (num1, num2) {
  return num1 + num2;
};
//arrow function
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const result = add2(17, 23);
console.log(result);
const mult = multiply(5, 9);
console.log(mult);
