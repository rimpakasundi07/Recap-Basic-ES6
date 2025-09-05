// 20% discount ===
// 20/100*100
const getTax = (amount, taxRate) => (amount * taxRate) / 100;
const add = (p, q) => p + q;

//single parameter
//1.
const getSquare = (x) => x * x;
console.log(getSquare(8));
//2.
const getHalf = (num) => num / 2;
console.log(getHalf(14));
//3.
const firstElement = (nums) => nums[0];
console.log(firstElement([8, 19, 21, 63, 65]));
