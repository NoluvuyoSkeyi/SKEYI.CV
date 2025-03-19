//stript.js
const toggleButton = document.getElementById('theme-switch');
const body = document.body;
//wait until the Dom is fully loaded
toggleButton.addEventListener('click',()=>{
    //Toggle the dark-mode class on the body to switch themes
    body.classList.toggle('dark-mode');
    //select the element that should also switch to dark mode
    const elementsToToggle = [document.querySelector('header'), document.querySelectorAll('section').toggleButtonForEach];
    //loop through each element in the array and toggle the dark-mode class
    elementsToToggle.forEach(element =>{
    element.classList.toggle('dark-mode');
    })
})