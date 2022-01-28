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
const bodyDiv = document.createElement('div');

//createTextNode('text content');
const text = document.createTextNode("a simple body div");

//element.appendChild(childElement);
bodyDiv.appendChild(text);

//now we just need to show them on the document
document.body.appendChild(bodyDiv);

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


const heading1 = document.createElement('h2');
const heading = document.createTextNode('Dynamic Heading');
heading1.appendChild(heading);
document.body.appendChild(heading1);

heading1.classList.add('blue');
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

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

// console.log(list.innerHTML);

const ul = document.createElement("ul");
const randomVal = "random value";

ul.innerHTML = 
`<li>${randomVal}<li>
<li>List Item<li>
<li>List Item<li>`

document.body.appendChild(ul);