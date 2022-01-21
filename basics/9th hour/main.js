//powerful array methods

//forEach, map, filter, find, reduce

//forEach iterates over the array - no for loop is required
// returns the same array

const people = [
    {
        name: 'sydney',
        age: 18,
        position: 'developer'
    },
    {
        name: 'abby',
        age: 19,
        position: 'developer'
    },
    {
        name: 'hanah',
        age: 16,
        position: 'developer'
    }

]

function showPerson (person){
    console.log(person);
}

people.forEach(showPerson); //dont invoke function
//map
//most popular and powerful
//does return a new array
//does not change the size of the array
//uses values from the orginal array

const products = [
    {
        id: 1, product: 'shoes', make: 'nike', price: 22.95
    },
    {
        id: 2,product: 'pants', make: 'walmart', price: 75.95
    },
    {
       id: 3, product: 'hoodie', make: 'adidas', price: 50.95
    }
]

const singleProduct = products.map( function(item) {
    return item.price;
});

console.log(singleProduct);

const newProducts = products.map((p)=>{
    return{
        // productMake: p.make = 'disney',
        productPrice: p.price + .01
    }
});
//you can reassing and change the values of the things in the array for the new array

console.log(newProducts);

const makes = products.map((hs)=>{
    return `<div>Make: ${hs.make}</div>
    <div>Price: ${hs.price}</div>`;
});

console.log(makes);

document.body.innerHTML = makes.join('');

//filter method
//does return a new array
//can change the size of the new array
//returns based on conditions

const cheapShoes = products.filter(function(shoes){
    return shoes.price <= 25;
})

console.log(cheapShoes);

const adidas = products.filter(function(a){
    return a.make === 'adidas';
})

console.log(adidas);

//find
//returns object
//returns first match, if no match undefined
//great for getting unique value

// const productID = products.find(function(p){
//     return p.id === 2;

//     //make sure you have IDs for everything :D
// });

// console.log(productID);
// console.log(productID.price);

//reduce
//iterates, callback function
//reduces to a single value - number, array, object
//has two parameters, 
// 1st one('acc' - accumlator) total of all calculation
//2nd one('curr' current) current iteration value

const cost = products.reduce(function(acc, currItem){
    console.log(`total: ${acc}`);
    console.log(`Cost Current item ${currItem.price}`);
    acc += currItem.price;
    return acc;
}, 0);

console.log(`Cost of everything is ${cost}`);

//math object
//standard built-in objects

//rounding up
const num1 = 4.56789;
const result = Math.ceil(num1);
console.log(result);

const result2 = Math.floor(num1);
console.log(result2);

//square root
const num3 = 4;
const result3 = Math.sqrt(num3);
console.log(result3);

//youcan also do math.PI

const res5 = Math.min(3,4,5,6);
console.log(res5);

const res6 = Math.ceil(Math.random() * 10);
console.log(res6);

//date global object

const months = [
    'Jan',
    'Feb'
]

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday'
]

const date = new Date();
const month = date.getMonth();
let day = date.getDay();
console.log(months[month]);
console.log(days[day]);
console.log(date.getFullYear());

let numba = date.getDate();

const webDate = `Hello everyone, welcome! Today is ${days[day]} ${months[month]} ${numba}, ${date.getFullYear()}`;
console.log(webDate);

document.body.innerHTML = webDate;
