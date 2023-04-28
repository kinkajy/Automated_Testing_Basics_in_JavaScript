/*In a try catch construction, wrap the code: 
console.log (a), let a = 3. 
And display an error - ‘let must be declared’ before use. 
When running 1/0, the error 'cannot be divided by zero'*/

try {
    console.log(a);
    let a=3;
} catch {
    console.error('let must be declared before use');
}

try {
    console.log(1/0); // no error
    throw new Error('divided by 0');
} catch {
    console.error('cannot be divided by zero');
}

