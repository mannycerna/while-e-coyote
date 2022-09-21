const prompt = require('prompt-sync')({sigint: true});

/* 
Write a program, `fibonacci.js` that accepts a number, `n`, from the user and consequently logs the first `n` values in the fibonacci sequence.

The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:
*/

let n = prompt("Enter a number of values that will be used in this Fibonacci Sequence engine: ");

let num1 = 0;
let num2 = 1;
let nextNum = 0;
let cycles = 0;


while (cycles < n) {
    console.log(num1);  //
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
    cycles = cycles + 1;
}

