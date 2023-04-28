/*Given the string 'ahb acb aeb aeeb adcb axeb'. 
Write a regular expression that matches the strings ahb, acb, aeb 
by pattern: letter 'a', any character, letter 'b'*/

const testStr = 'ahb acb aeb aeeb adcb axeb';

const re = /a.b/g;
console.log(testStr.match(re));
