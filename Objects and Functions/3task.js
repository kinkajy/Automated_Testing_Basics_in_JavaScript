/*Your name is saved in the payment terminal, 
write a function to define the name in the terminal 
(if you entered your name, then hello + name, if not, 
then there is no such name)*/

const prompt=require("prompt-sync")({sigint:true});

let userName = prompt('Enter your name ');

const terminal ={
    userName: 'Volha'
}

function nameCheck (){
    if (userName === terminal.userName){
        console.log('Hello, '+userName);
    } else {
        console.log('There is no such name');
    }
}

nameCheck ();
