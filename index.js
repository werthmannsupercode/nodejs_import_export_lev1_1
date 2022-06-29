const { method, method2 } = require('./data.js');
const { compare } = require("./function");

const numbers = method.sort(compare);
console.log(numbers);

const cars = method2.sort(compare);
console.log(cars);