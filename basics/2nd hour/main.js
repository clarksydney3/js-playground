age1 = 34;

const age = 44;
// not reassinging later

age1= 15;
// override the 'let' varible before, cannot work for the 'const'

console.log(age);

// let lastName;

// lastName = 'clark';

// console.log(lastName);

// you can start varible names with letters, underscores, or $ never numbers
// do not use the keywords in varible names, also they are case sensitive
// use camel case or underscores for varible names

const skill = "Elvis's skills are the best.";

const skill2 = 'Elvis\'s skills are the best.';
// when you use single quotes, you should use a slash to avoid the error with apostrophies.


console.log(skill);
console.log(skill2);

const firstName = "Sydney";
const lastName = "Clark";

let fullName;

fullName = firstName + " " + lastName;

console.log("Hi, my full name is " + fullName);
console.log(`Hi, my full name is ${fullName}`);
// used backticks and didn't need to add a space

const basic = 'Hello';
const greeting = 'World';

console.log(basic + " " + greeting);

const website = 'google';

const url = "https://www." + website + ".com";
console.log(url);

// let a = 5; 
// let b = 10;

// console.log( `Fiften is ${age}`);

let catName = "frankie"; // string is characters within "" or ''
let myAge = 18; //number, and will always show up in blue in the console

let userProfile = true; //boolean