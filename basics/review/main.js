//number, string, boolean, null, undefined, array

let fname = 'sydney';

let age = 18;

const active = true;

let name = ['sydney', 'manny', 55, 'hanah', 'imani', 'elvis'];

console.log(name[1]);

name[1]= 'zach';
console.log(name[1]);

let lname = 'clark';

console.log("My full name is " +fname +" " + lname + ".");

console.log(`Hi my name is ${fname} ${lname}`);

let person = {
    nName: 'luke',
    aAge: 8,
    aActive: true
}

console.log(person.nName);

//varibles only start with letters, $, or _
//you also can't use any words from javascript be the name of a varible, aka no 'let let= 'no'

const website = 'google';
// const url = 'http://www.' +website+'.com';

const url = `https://www.${website}.com`;
console.log(url);

let numAge = 'pants';
//loosly typed

// let ageNum: number = 34;
// //forces the data to be a number

const pizzaSlices = 10;
const kids = 3;

const slices = pizzaSlices % kids;

console.log(`elvis will get ${slices}`);

let num2321 = 123;

let num123 = 'pants';

console.log(num2321 - num123);