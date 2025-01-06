// fetch html elements via document elements for links class
const link = document.querySelector('.links');
const toggle = document.querySelector('.nav-toggle');
//const spanning = document.querySelector('spans')

// add it to the eventListener
toggle.addEventListener('click', function() {
    link.classList.toggle('show-links')
})