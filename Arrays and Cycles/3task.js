/*Given an array of the names of your friends, 
add the words hello to each element of the array*/

const friendsArray = ['Aliaksandr', 'Dmytro', 'Sasha', 'Irena', 'Nina', 'Dzima'];
console.log(friendsArray);

const helloArray = friendsArray.map(el => 'Hello, ' + el);
console.log(helloArray);
