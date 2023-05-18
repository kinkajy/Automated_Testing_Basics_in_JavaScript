/*Pears and apples are accepted to the warehouse, 
write a function that returns the result of 
adding the number of accepted pears and apples*/

const prompt = require("prompt-sync")({sigint:true});

let pearsQty = prompt('Enter the quantity of pears: ');
let applesQty = prompt('Enter the quantity of apples: ');

let pearsQtyNum = Number(pearsQty);
let applesQtyNum = Number(applesQty);

function sum(pearsQtyNum, applesQtyNum) {
    return pearsQtyNum + applesQtyNum;
}

const result = sum(pearsQtyNum, applesQtyNum);
console.log('The number of accepted pears and apples:', result);
    
