const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt("Enter X: "))
let num2 = Number(prompt("Enter Y: "))

while (num1 % num2 !== 0){
    num1 ++;
    console.log(num1);
}


console.log(`The sum ${num1} is divisible by ${num2}`);