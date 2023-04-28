/*Get the day, month and year of the current date 
and output it to the console separately*/

let now = new Date;
const time = String(now);
console.log(time);

const day = time.slice(8,10);
console.log('Day:', day);

const month = time.slice(4, 7);
console.log('Month:', month);

const year = time.slice(11,15);
console.log('Year:', year);