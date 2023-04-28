//Convert numeric array to Boolean

const numArray = [0, 1, 1, 1, 0, 1, 0, 0];
console.log(numArray);

const bollArray = numArray.map(el => !!el);
console.log(bollArray);
