// section for the paragraph
const tip = document.querySelector('.tips');
tip.innerHTML= "Enter the bill amount and tip percentage to calculate the total."

// section to display the totals
const finalResult = document.getElementById('final');

// grab the form content for logics
const formLogic = document.getElementById('forms');

// Perfom the logic by enable calculation of the result

formLogic.addEventListener('click', (event) =>{
    event.preventDefault();
})
