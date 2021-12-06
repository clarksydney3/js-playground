// console.log('hi');
// //functions
 
// let fname = 'sydney';
// function hi(fname, lname){
//     console.log('hi ' + fname + " " + lname);
// }
// // you can use multiple parameters, and arguments

// hi(fname, "clark");
// //1 inch = 2.54 cm. 
// // const len = 40;
// // const wid = 20;

// // let dimensions = [len, wid];
// // console.log(dimensions);


// function calc(pants){
//     console.log("your wall is " + (pants* 2.54) + " centimeters");
//     return pants * 2.54;
//     let newValue = pants * 2.54;
//     return newValue;
// }
// // calc(len);
// // calc(wid);

// const len = calc(40);
// // console.log(len);
// const wid = 20;
// calc(wid);


function addValue(num1, num2){
    return num1 * num2;
}

console.log(addValue(5,4));

let firstValue = addValue(2,3);
console.log(firstValue);

let exp = addValue(3,'pants');
console.log(exp);

//function expression
//you do not need to name these funciton since you are giving
//it a name already
let add = function (num1, num2){
    return num1 * num2;
};

console.log(add(5,5))

//functions are the building blocks of javscript

//arrow expressions?? idk they are different, >
//only as expression or call back functions!

let mult = (num1, num2) => num1*num2;

// console.log(mult(5, 6));

//objects are collecions of properties --key/value pairs
//methods functions
//dot notation

let person = {
    name: 'sydney',
    age: 18,
    education: false,
    married: false,
    friends: ['imani', 'abby', 'hanah', 'alex', 'manny'],
    greeting: function(){
        console.log('Hi my name is sydney')
    }
};

//dot notation
console.log(person.name);
console.log(person.friends[1]);
person.greeting();

person.name = 'madison';

console.log(person);

//assigning to a varible
let age = person.age;
console.log(age);

//conditional statements
// <, >,=<, =>, ==, ===, !=, !===

let userActive = false; 

if(userActive) {
    console.log('This user is active');
} else {
    console.log('This user is not active');
}

// let value = 5 > 25;
// if (value){
//     console.log('this is incorrect');
// } 
// else {
//     console.log('this is dumb');
// }

let num3 = 6;
let num4 = 6;
const result = num3 >= num4;

if (num3 > num4){
    console.log('first number is bigger than the second');
} 
else if(result){
    console.log('the numbers are equal to each other.')
}
else {
    console.log('second number is bigger than the first');
}

let fname = 'joe';

if(fname != 'joe') {
    console.log('you are not joe.')
}
else {
    console.log('hi joe!!');
}