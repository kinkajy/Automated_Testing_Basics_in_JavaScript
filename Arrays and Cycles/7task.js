/*Write a function that takes two parameters - an array and a number 
and outputs the index of an array element equal to a number*/

const array = [0, 5, 3, 8, 9];

let num =8;

function aray (array, num) {
    for (let i = 0; i <= array.length; i++){
        if (array[i] == num) {
            return console.log(i);
        }
    }
}

aray (array, num);