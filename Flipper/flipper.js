// Declare the set of color array
// We will use random method to select the colors randomly

// grab the color display upon change
const colorChange =  document.getElementById('colorId');

// initialize the set of color array
const colors = ['beige','green','purple','blue','skyblue',
    'maroon','pink','brown','darkgreen','cream','yellow']

// grab the button iteme
const ChangeBtn =  document.getElementById('changeColor')

// We will use EventListener to achieve logics in with respect to button
ChangeBtn.addEventListener('click', function(){
    // let us randomly check for the color but let us loop through the color array
    for(let i=0; i < colors.length; i++){
        let randomColor= Math.floor(Math.random() * i);
        colorChange.textContent = `Color Present is ${randomColor}`
    } 
    document.body.style.backgroundColor = 'pink'   
})
