function sum(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

sum(10, 20, 30, 40);

// ------------------>>>>>>>
function sum(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

sum(10);

// ------------------>>>>>>>
function sum(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

sum(10, 40);

// ----------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function multiply(num1 = 0, num2 = 0) {
  const result = num1 * num2;
  console.log(result);
}
multiply(10);
// ----------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function fullName(first, last = "") {
  const name = first + "" + last;
  console.log(name);
}

fullName("kamrul");
