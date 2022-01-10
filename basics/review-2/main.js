//google what typeof mean

const bio = 34;

console.log(typeof bio);

//returns the type of varible


//declare function
function hello()  {
    console.log('hello world!');
}

//calling the function

hello();

//parameters and arguments
let person1 = 356;

function hi(fname) {
    console.log('hi, mrs. ' + fname);
}

hi('clark');

hi(person1);

//you can also use multiple parameters!

//more function practice below

const wallH = 11;

function calculate(value){
    console.log('the value in cm is ' + (value * 2.54));
    const newValue = value * 2.54;
    return newValue;
}

const height = calculate(wallH);

const width = calculate(15);

//you can create new varibles within a function aka you can save a value!

const dimensions = [width, height];

// function wall(value){
//     const newValue = value * 2.54;
//     console.log('the value in cm is: ' + value * 2.54 + ' cm');
//     reutnr value * 2.54;
// }

console.log('the wall dimension are ' + dimensions);

//we can finally work on the pythgorean theroem problem!

//object you should always think {} and dot notation

let person = {
    name: 'sydney',
    age: 18,
    address: null,
    education: 'high school senior',
    dreams: true
}

console.log(person.name);

const lightOn = true;

if(lightOn){
    console.log('the light is on!');
}
else{
    console.log('the light is off!');
}

//if , and else is takes parameters, else does not


//practifce if statement
const dog = 'chocolate lab';
const dogAge = '8';

if (dog == 'chocolate lab' && dogAge === 8)
{
    console.log('Our dogs are the same breed and age!');
}
else if (dog == 'chocolate lab' || dogAge === 8)
{
    console.log('our dogs have something in common');
}
else{
    console.log('our dogs are completely different lol!');
}

//switch cases
dice = 2;

switch(dice) {
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;
    case 3:
        console.log('you got three');
        break;
    case 4:
        console.log('you got four');
        break;
    case 5:
        console.log('you got five');
        break;
    case 6:
        console.log('you got six');
        break;
}

let socks = 10;

while (socks >= 0){
    console.log(`you have ${socks} left in the drawer`);
    socks = socks -2;
}

let i;

for (i = 0; i < 21; i++){
console.log(`i am ${i} years old`);
}