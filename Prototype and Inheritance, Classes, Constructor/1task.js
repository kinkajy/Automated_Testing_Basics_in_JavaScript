/*Create 2 objects: animal and cat, 
add move property to animal object, 
cat object must inherit move property from object animal*/

class Animal {
    move (){
        console.log('Animal is moving.');
    }
}

class Cat extends Animal {
}

let cat = new Cat();

cat.move();