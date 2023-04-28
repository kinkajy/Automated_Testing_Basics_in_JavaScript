/*Given the string '2 + 3 223 2223'. 
Write a regex that finds line 2 + 3 without capturing the rest*/

const testStr = '2 + 3 223 2223';

const re = /2 \+ 3/g;
console.log(testStr.match(re));