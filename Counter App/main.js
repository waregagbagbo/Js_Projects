// grab the button IDs with
// create a function to the specifib buttons when clicked
// Add eventListeners
// we will use appendChild to add the values from the button to the paragraph tag

const previous =  document.querySelector('.pre')
const addValue = document.getElementById('btn1');
const resetValue = document.getElementById('btn2');
const decreaseValue = document.getElementById('btn3');
let count =1
let result = 0

// for paragragraph section
const para = document.getElementById('counter')

//work with the increment first
addValue.addEventListener("click", function(){
    result += count
    if(result > 0){
        para.style.color = "darkgreen"
    }
    para.textContent = result
})

// decrease count mechanism
decreaseValue.addEventListener("click",() =>{
    result -= count
    if(result < 0){
        para.style.color = "blue"
    }
    para.textContent = result
})

// reset count mechanism
resetValue.addEventListener("click", function(){
    result = 0
    para.textContent = `${result}`
})

