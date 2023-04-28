//Filter array [1,6,7,8,3,4,5,6] by value> 3

const array = [1,6,7,8,3,4,5,6];

const filteredArray = array.filter(el => el % 3 === 0);
console.log(filteredArray);