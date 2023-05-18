/*Create a car object, 
add a color property to it 
with the value equals 'black'*/

const objectCar = {
    color: 'black'
}

console.log(objectCar);

//Change the color property of the car object to 'green'

objectCar.color = 'green';
console.log(objectCar);

/* Add the power property to the car object, 
which is a function and displays 
the engine power to the console*/

objectCar.enginePower = function ()  {console.log('170kW')};
objectCar.enginePower();
