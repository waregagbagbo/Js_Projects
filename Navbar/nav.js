// fetch html elements via document elements for links class
const link = document.querySelector('links');
const toggle = document.querySelector('nav-toggle');
//const spanning = document.querySelector('spans')

// add it to the eventListener

link.addEventListener('click', function(){
    link.classList.toggle('toggle');    
})

