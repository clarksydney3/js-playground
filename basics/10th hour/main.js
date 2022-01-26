// DOM -Document object model
//you can always look at elvis's github for notes!
//css on steroids? 
//you can add function AND style objects

// document.body.style.backgroundColor = "magenta";
// document.body.style.color = "lavender";

// document.getElementById('btn').style.color = 'red';

// let button = document.getElementById('btn');
//create a new varible, then use it in the reference
//button.style.color = "red";
// button.style.color = "yellow";

//window object - this is where we are getting stuff from 'document'
// console.log(window);

//return a node object or a node list, which is an array like object (some methods we can use like on array)

//  const btn = document.getElementById('btn');
// const fname = btn.nodeName;
// const css = btn.style;

// console.log(btn);
// console.log(css);
// console.log(fname);


//select the element r group of elements that we want
//decide the effects we want to apply to the selection

//getElementById('element') css id from html
// let header1 = document.getElementbeID('title');
// header1.style.color = 'red';

//idk why everything is show up as an error in my google inspect!
//but it isnt flagging any issues in this edittor

// btn.style.backgroundColor = "orange";

//getElementByTagName('tag name')
//returns a node list , array like object
//index, lenth, property but not array methods

// let tit = document.getElementsByTagName("H1");
// console.log(tit);
// tit[0].style.color = 'orange';

const items = document.getElementsByTagName('li');

console.log(items);

// items.forEach(function(item){
//     console.log(items); //can NOT use this bc ite array like
// });

const betterItems = [...items]
//the "..." copies something, spread operator
betterItems.forEach(function(i){
    console.log(i);
});