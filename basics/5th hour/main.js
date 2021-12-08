// ==, or ===
// = is for assigning the value
//== checks only, if  the value is equal
//=== checks if the value equal and type is the same

const num1 = 10;
const num2 = "10";

const result = num1 * num2;
console.log(result);
//result would be 100 since its using implicit writing, and overrides the string

const value = num1 != num2;
const value2 = num1 !== num2;

console.log(value);
console.log(value2);

// != is not equal and !== not equal type nor value.

// Logical Operators

// || OR -&& AND -! NOT

// with ||, you only need one condition to be true
// with && you need both conditions to be true

let fname = "sydney";
let age = 18;

if (fname === 'manny' || age === 18){
    console.log('hello manny');
}
else{
    console.log("bruh");
}

//switch statments
//dice value 1-6

const dice = 0;

// if (dice === 1) {
//     console.log("you rolled 1");
// }
// else if (dice === 2){
//     console.log("you rolled 2");
// }
// else {
//     .console.log("you need to roll again");
// }
//swtich cases
switch(dice) {
    case 1:
        console.log('you rolled one');
        break;
    case 2:
        console.log('you rolled two');
        break;
    case 3:
        console.log('you rolled three');
        break;
    default:
        console.log('you need to roll again');
}

//loops

//while loop

let amount = 10;

while(amount > 0){
    console.log('I have ' + amount  + ' moneys');
    amount --;
}

//do while loop
// code block first and condiiton second
//runs at least once

let money = 12;

do{
    console.log('you have ' + money + ' dollars');
    money ++;
}
while (money <= 10);

// for loops

let i;

for(i=0; i <10; i++){
    console.log('da number is ' + i);
}

for(let number = 11; number >=0; number--){
    console.log('and number is '+ number);
}