/*
-prompt-sync:  get input from user
-while loop:  allows user input multiple numbers
-print out the sume at end:
variable to hold the sum
- += to add to our sum
-reprompt inside the while loop
*/

const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter some numbers (type 0 when complete): "));

let sum = 0;

while(num > 0){
    sum += num;
    num = Number(prompt(`> `));
}
console.log(sum);

