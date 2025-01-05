// declare the array of the colors
const colors = ['green','red','blue','yellow','purple',
    'red','beige','maroon','skyblue','blue','darkgreen',
    'pink','brown']

// fetch the HTML button class using DOM
const btn =  document.getElementById('btns');

// fetch the color dispaly section
const colorFlavor = document.getElementById('colors');

btn.addEventListener('click', function(){
    // generate a random index from 0 to colors.length - 1
    const randomColor = Math.floor(Math.random() * colors.length-1);
    
    // change the body background color
    document.body.style.backgroundColor = colors[randomColor];

    // display the color used
    /*if(colorFlavor){
        colorFlavor.textContent = `${colors[randomColor]}`
        
    }*/
})