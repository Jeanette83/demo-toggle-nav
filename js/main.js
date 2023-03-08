/* STEP 1 Select the element that will be clicked on to show or hide the nav. In our 
case it will be the button. It will always be the button  */
const btn = document.querySelector('.toggle-btn');

/* STEP 2 add a click event to that button icon */
btn.addEventListener('click', function() {
    // when the button is clicked, show the nav element by adding the class name 
    // .show-nav to it 
    document.querySelector('nav').classList.toggle('show-nav');
});

// STEP 3 Link to the js file in your html. Note: the js must be loaded last
// so use a defer attribute 
