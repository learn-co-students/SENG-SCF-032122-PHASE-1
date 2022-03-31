//  === Callbacks and arrow functions ===

// reminder that our traditional function as converted to arrow function looks like this:
// function funcName(){} => const funcName = () => {}

// Declare the following functions using arrow function syntax:

// 1. Write a function 'add' with 2 parameters, num1 and num2. Return the sum of the two parameters.

const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 1));

// 2. Write a function 'sub' with 2 parameters, num1 and num2. Return the absolute (positive) value of the two parameters subtracted from one another. (There are a few ways to do this. Pick one!)

const sub = (num1, num2) => Math.abs(num1 - num2);
console.log(sub(1, 1));

// 3. Write a function 'compute' that will receive a callback function. Invoke the callback function within 'compute' with two arguments provided: 6 and 3.

// Invoke compute 2 times, each time passing it each of the functions defined for steps 1-2 (add and sub):

//  3a. - Example: compute(add) ➞ 9
//  3b. - Example: compute(sub) ➞ 3

const compute = (cb) => cb(6, 3);
console.log(compute(sum));
console.log(compute(sub));

// 4. Invoke #3a (or #3b) to directly pass in an arrow function as the callback argument returning the expected values i.e., do not use a variable as the callback function.

compute((num1, num2) => Math.abs(num1 - num2));

// 5. Invoke setInterval(), using the function keyword this time, to print a message to the console. The second argument should be set to 3000 milliseconds.
/*
setInterval(function () {
    console.log('Yo!');
}, 10000);
*/
