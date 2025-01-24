// fetch html elements via document elements for links class
const link = document.querySelector('.links');
const toggle = document.querySelector('.nav-toggle');
//const spanning = document.querySelector('spans')

// add it to the eventListener

link.addEventListener('click', function() {
    link.classList.toggle('toggle');
})

/*async function bakeCake() {
    console.log("Starting to bake a ceke...");

    // simulate a task that takes time, like baking a cake.
    await new Promise(resolve => setTimeout(resolve, 300)); // 3sec to bake 
    console.log('Cake is ready');

}
bakeCake()*/

async function testFood() {
    console.log('Testing if somethin will be fetched');

    // fetch data
    let result = await fetch('https://world.openfoodfacts.org/api/v0/product/3017620422003.json')
    console.log('Cocktail Served', result)
}
testFood()