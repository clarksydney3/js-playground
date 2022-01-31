//other events
// click = fires after full action occurs
//mousedown, mouseup, mouseenter, mouseleave

const btn = document.querySelector('.btn');
const heading = document.querySelector('h1');

// function say () {
//     console.log('you clicked me!');
// }

// btn.addEventListener('mousedown', function(){
//     console.log('down');
// });

// btn.addEventListener('mouseup', function(){
//     console.log('up');
// })

// btn.addEventListener('mouseenter', function(){
//     heading.classList.add('bruh');
// })

heading.addEventListener('mouseenter', ()=>{
    heading.classList.add('red');
});

heading.addEventListener('mouseleave', ()=> {
    heading.classList.remove('red');
});

