// fetch html elements via document elements for links class
const link = document.querySelector('.links');
const toggle = document.querySelector('.nav-toggle');
//const spanning = document.querySelector('spans')

toggle.addEventListener('click',function(){
    toggle.classList.toggtle(link)
})