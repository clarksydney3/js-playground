//difference between charAt and indexOf

const sting = "this is an example";

console.log(sting.charAt(0));
//shows the character at that string
console.log(sting.indexOf('x'));
//shows the index of that character in the string
//opposites lmao

console.log(sting.length);

let fnames = ['hanah', 'elvis', 'jon'];
let lname = 'smith';

let fullName = [];

// for is needed

for (let i = 0; i < fnames.length; i++){
    console.log(i);
    //log the varible to see if the function works correctly
    console.log(fnames[i]);
    //log in here to see where to loop is in the array
    const name = `${fnames[i]} ${lname}`;
    //creating a new varible in string interoplation 
    fullName.push(name);
    //adds a varible a the end of a array

}
console.log(fullName);

//function, return, arrays, for loop
//end of month expenses

const gas = [20, 40, 100];
const food = [10, 45, 50];

function calcTotal(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++){
        total += array[i];
    }

    return total;
}

const gasTotal = calcTotal(gas);
const foodTotal = calcTotal(food);

console.log({
    gas: gasTotal,
    food: foodTotal
});

//reference vs value
//primative can not be broken down to a more simple data type
//strings, numbers, symbol, boolean, undefined, null

//arrays, functions, objects
//not primative, can be broken down even more

//when assigning primative dat types valye to a varible any chages are made directly

let num1 = 1;
console.log(num1);

let num2 = num1;
console.log(num2);

num2 = 7;
console.log(num2);

//can reassign let varible types in primative varibles

//when assigning non-primative fata type vale to a varible is done by a reference so any changes will affect all the references
let person = {fname: 'elvis'};
let person2 = person;

person2.fname = 'dave';
//this effected all references
console.log(`first person is ${person.fname}`);
console.log(`second person is ${person2.fname}`);

//null and undefined
//both represent an empty value

//undefined - js can not value for this varible

//null - empty place holder for this varible

let number = 22 + null; 
//22 + 0

let number2 = 22 + undefined;
//NaN

// truthy and falsy
// "", '', ``, 0, -0, NaN, false, null, undefined

//if it returns any of these values, it means falsy

const bool1 = true;
const bool2 = 2>1;

const text = '';

if (text){
    console.log(`hey the value is truthy`);
} else{
    console.log(`hey its falsy`);
}

function findAreaOfCube(length, width, height){
    let area = length * width * height;
    return `The area of this rectangle is ${area}`;
}

console.log(findAreaOfCube(3, 5, 6));

//calculating the radius, then adding that value into an array
piArr = []; //empty array place holder

function timesPi(numba){
    const pi = 3.14; //const varible in the equation
    answer = numba * 3.14; //calculating the area for that radius
    piArr.push(answer); //adding it into the array
    return answer; //this has to be last, returns the area of that radius
}

console.log(timesPi(4));
console.log(piArr);

console.log(timesPi(9));
console.log(timesPi(8));
console.log(timesPi(1000));

console.log(piArr);