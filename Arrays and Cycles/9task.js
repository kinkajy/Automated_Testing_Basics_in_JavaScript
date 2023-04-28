//Implement a loop that prints prime numbers to the console

const prompt=require("prompt-sync")({sigint:true});

let lowerNum = (prompt('Enter lower number: '));
let lowerNumber = Number(lowerNum);
let higherNum = (prompt('Enter higher number: '));
let higherNumber = Number(higherNum);

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}