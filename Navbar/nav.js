// fetch html elements via document elements for links class
const links = document.querySelector('.menu');
const toggle = document.querySelector('.fa-bars');

const image = document.getElementsByTagName('img');
image.appendChild = "https://www.100jsprojects.com/project/navbar"

// add it to the eventListener
toggle.addEventListener('click', function() {
    if (links.classList.contains('show-menu'))
        links.classList.toggle('show-menu')
    else {
        links.classList.add('show-menu')
    }
})