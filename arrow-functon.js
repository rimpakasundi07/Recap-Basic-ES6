/// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// function expression
const addtion = function (num1, num2) {
  return num1 + num2;
};
//arrow function
// 1.
const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
// 2.
const result = add2(17, 23);
console.log(result);
// 3.
const mult = multiply(5, 9);
console.log(mult);
//4.
const logIt = () => console.log(78);
console.log(logIt());

// annymous function
//1.
document.getElementById("").addEventListener("click", () => {});
//2.
document.getElementById("btn-click").addEventListener("click", (event) => {});
