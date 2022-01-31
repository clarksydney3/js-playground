// getAttribute
    //returns the value of a specified attriabue on the element
// setAtttribute
    //sets the vale of an attribute on the specified element. if the attirbute
    //already exsits, the value is updated; other a new attribute is added witht he specified name 
    //and value

// const first = document.querySelector(first);

// const classValue = first.getAttribute('href');

// console.log(classValue);

// const href = first.setAttribute ('href', './')
//look at the github

//ok back into it, this is actually the 



//how to create an empty element

//createElement('element');
// const bodyDiv = document.createElement('div');

//createTextNode('text content');
// const text = document.createTextNode("a simple body div");

//element.appendChild(childElement);
// bodyDiv.appendChild(text);

//now we just need to show them on the document
// document.body.appendChild(bodyDiv);

//practice but with something silly

// const urMom = document.createElement('section');
// const text1 = document.createTextNode('i know all of the FNAF lore');
// urMom.appendChild(text1);
// document.body.appendChild(urMom)

// const result = document.getElementById('result');

// const first = document.querySelector('.red')

//adding it to results

//add h2
//make it blue
//make it say dynamic heading


// const heading1 = document.createElement('h2');
// const heading = document.createTextNode('Dynamic Heading');
// heading1.appendChild(heading);
// document.body.appendChild(heading1);

// heading1.classList.add('blue');
//mf you can apply a class from styles to a thing in js


// insertBefore('element', 'location')
// insertAfter ('element', 'location')
//li.1

//l1.1
//li.3

//replaceChild('new', 'old')

// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode(`I am baby!`);
// smallHeading.appendChild(smallText);
// document.body.appendChild(smallHeading);

// smallHeading.classList.add('red');

// document.body.replaceChild(smallHeading, result);
//magic :D
//removeChild will work the same way
//takes only one argument tho

//innerHtml
//textContent

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// console.log(list.innerHTML);

// const ul = document.createElement("ul");
// const randomVal = "random value";

// ul.innerHTML = 
// `<li>${randomVal}<li>
// <li>List Item<li>
// <li>List Item<li>`

// document.body.appendChild(ul);

// const random = document.querySelector('.random');

// random.classList.add('red');
// // random.classList.remove('red');
// random.classList.contains('red');
// console.log(random);

//events
//select element
//addEventListener()
//what event, what to do('click', callback function)

// const button = document.querySelector('.btn');
// const heading = document.querySelector('h5');

// button.addEventListener('click', function(){
//     const hClass = heading.classList.contains('red');
//     if(hClass) {
//         heading.classList.remove('red');
//     }else{
//         heading.classList.add('red');
//     }
// });

//key up and key down

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', () => {
//     console.log('you pressed a key');
// });

// nameInput.addEventListener('keyup' () =>{
//     console.log(nameInput.value);
// })

//event object argument
//info about triggerd event
//event.type
//event.currentTarget
//"this" keyword
//preventByDefault()

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener('click', (e) => {
//     console.log(e.currentTarget);
//     //this keyword
//     console.log(this);
// });

// btn.addEventListener('click', function(evt){
//     evt.currentTarget.classList.add('blue');
//     console.log(evt.type);
// });

// link.addEventListener('click', function(e){
//     e.preventDefault();
// });

// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         console.log(e.currentTarget);
//         e.currentTarget.style.color = 'orange';
//         console.log(e.target);
//         e.target.style.color = 'green';
//     });
// });

//adding an event listener to each button



//form submit

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
    console.log('form submitted');
    console.log(name.value);
    console.log(password.value);
    let name = name.value;
});

//web storage API - provided by browser
//session storage and local storage
//setItem, getItem, removeItem, and clear

// localStorage.setItem('name','elvis');
// sessionStorage.setItem('name1', 'alex'); //while the tab is open

// //preferred method is local storage
// const fname = localStorage.getItem('name');
// localStorage.clear();

// console.log(fname);

//JSON.stringify() and JSON.parse()

const friends = ['alex', 'elvis', 'el'];

let fri = localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));

console.log(values[2]);