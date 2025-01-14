// section for the paragraph
const tip = document.querySelector('.tips');
tip.innerHTML= "Enter the bill amount and tip percentage to calculate the total."

// section to display the totals
const finalResult = document.getElementById('final');

// grab the form content for logics
const formLogic = document.getElementById('forms');

// Perfom the logic by enable calculation of the result

formLogic.addEventListener('submit', (event) =>{
    event.preventDefault(); // prevents default form submission

    // grab the bill logics
    const getBill = document.getElementById('bill').value;
    
    // grab the percent logics
    const tipPercent = document.getElementById('tipId').value;
     
    // find the percent
    let percenResult = getBill *(tipPercent/100);

    // find the actualResult
    let actualResult = Number(percenResult) + Number(getBill);

    // display the result
   finalResult.innerHTML = `The tip to pay is ${actualResult}`;
})

// create a function that handles this calculation
// Inputs: Bill amount
// let percent be any value
// final result is: anyvalue multiplied by bill
// add final result to actual output + bill amount
// display the result.