const prompt = require('prompt-sync')({sigint: true});

let str = String((prompt("Enter a string: ")));

let string = ""
while(string.length <= 10) {
    console.log(string);
    string += str
    
}
// console.log(string);

