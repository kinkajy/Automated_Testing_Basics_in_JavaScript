//Implement a loop that prints odd numbers to the console

const prompt=require("prompt-sync")({sigint:true});

let lowerNum = (prompt('Enter lower number: '));
let lowerNumber = Number(lowerNum);
let higherNum = (prompt('Enter higher number: '));
let higherNumber = Number(higherNum);


for (let i = lowerNumber; i <= higherNumber; i++) {
    if (i % 2 != 0)
    console.log(i);
}