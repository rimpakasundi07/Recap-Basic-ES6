const numbers = [87, 8, 5, 91, 92, 85];
console.log(numbers);
console.log(...numbers);
// ------------------------------->>>>>>>>>>
const max = Math.max(1121, 56, 94, 112, 514, 23);
console.log(max);
// ------------------------------->>>>>>>>>>>
const first = [1, 2, 3, 4, 5];
const second = first;
second.push(6);
console.log(first);
// ------------------------------->>>>>>>>>>>>>>
const primary = [1, 2, 3, 4, 5];
const secondary = [...primary];
const third = [0, ...first, 97, 45, 12];
second.push(6);
console.log(primary);
console.log(secondary);
console.log(third);
// -------------------------------->>>>>>>>>>>>>>>>>>

const ages = [45, 45, 1];
const prices = [98, 65, 45];
const all = [...ages, ...prices];
// ------------------------------------>>>>>>>>>>
const person = { name: "rosey", age: 25 };
const employee = { designation: "dev", ...person };
console.log(employee);
// ------------------------------------>>>>>>>>>>

const total = (a, b, c) => a + b + c;
const result = total(45, 65, 21);
const digits = [78, 55, 66];
total(...digits);
