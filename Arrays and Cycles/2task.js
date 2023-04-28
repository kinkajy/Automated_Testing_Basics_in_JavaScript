/*Given an array of car manufacturers, 
convert the array to a string and back to an array*/

const carManufactures = ['Porche', 'Mazda', 'Kia', 'Honda', 'Volvo'];

//const stringArray = carManufactures.toString();
//console.log(stringArray);
// const newArray= stringArray.split(",");
// console.log(newArray);
let stringArray = ""
for (let i =0; i < carManufactures.length; i++) {
    stringArray += carManufactures[i]+", "
}
console.log("Array to string: "+stringArray)

let manufacture = ""
let newArray = []
let c = 0
for (let i =0; i < stringArray.length; i++) {
    if (stringArray[i] !== "," && stringArray[i+1] !== " "){
        manufacture += stringArray[i]
    } else {
        newArray.push(manufacture)
        manufacture=''
    }
}
console.log(newArray)