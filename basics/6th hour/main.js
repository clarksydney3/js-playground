//string propetires and methods

//a method is a function inside an object

//google js string methods

let text = "Sydney Clark";

let result = text.length;

console.log(result); //it counts white space lol


console.log(text.toLowerCase());
//if it had the monkey face (); its a method

console.log(text.toUpperCase());

console.log(text.charAt(3));

console.log(text.charAt(text.length -1));
//get last value by property and method


console.log(text.indexOf('z'));
//if it doesn't exist in the string it will return -1

console.log(text.indexOf('y'));
//if there are multiple of the same letter, it will only return the first one of it


console.log(text.trim());
//takes out the white space around the string

let lowerText = text.toLowerCase();
//save methods to varibles
console.log(lowerText.startsWith('s'));

console.log(text.trim().toLowerCase().startsWith('sydney'));

console.log(text.includes('cla'));//checks if those letters are in the given string

console.log(text.slice(0,4)); //new string from existing (substring)


console.log(text.slice(-1));
//gives you the last letter

//template literals ES6+ last major update
//backtick character update!

//Interpolation ${} - insert ecpression (value)

let fname = 'John';
let age = 100;

let sentence = 'Hi my name is ' + fname + ' and I am ' + age;

let sentence2 = `Hi my name is ${fname} and I am ${age} years old!`;

//array properties and methods

let anything = ['pants', 'shoes', 'hat', 'sleep', 'soccer'];

//length

console.log(anything.length);

console.log(anything[3]);

//last index

let lastThing = anything.length;

console.log(anything[lastThing-1]);

//concat new array and combine two arrays

let something = ['suit', 'phone', 'hotel', 'cat', 'bruh'];

const everything = anything.concat(something);

console.log(everything);

//reverse array

console.log(everything.reverse());

//unshift -adds at the start of an array

everything.unshift('computer');
console.log(everything);

//removes first item of the array
everything.shift();
console.log(everything);

// push - adds at the end of the array

everything.push('abby');
console.log(everything);

//pop - removes from the end of the array
everything.pop();
console.log(everything);

//splice mutates orignal array (updates it)!
//first number where do you want to start (index)
//second number how many do you want to include

let nothing = everything.splice(2,1);
console.log(nothing);


function calculate(num1, num2){
    newValue = num1 * num2;
    return newValue;
}

console.log(calculate(5,6));