// button 1
var button = document.getElementById('change-background'); 

// listen for a click, then perform a function
button.addEventListener('click', function() {
    //action goes here
    document.body.style.backgroundColor = "tomato";
})

// button 2
var button2 = document.getElementById('change-background2'); 

// listen for a double click, then perform a function
button2.addEventListener('dblclick', function() {
    //action goes here
    document.body.style.backgroundColor = "blue";
})

// button 3
var button3 = document.getElementById('change-background3'); 

// listen for a mouse enter, then perform a function
button3.addEventListener('mouseenter', function() {
    //action goes here
    document.body.style.backgroundColor = "yellow";
})

// button 4
var button4 = document.getElementById('change-background4'); 

// listen for a mouseout, then perform a function
button4.addEventListener('mouseout', function() {
    //action goes here
    document.body.style.backgroundColor = "orange";
})

// Navigation link

// access element and assign to a var
var navigationLink = document.getElementById('navigation');

// using the var modify properties and values
navigationLink.href="http://bbc.co.uk";
navigationLink.textContent="BBC News";

// Page Header

var header = document.getElementById('page-header');

header.textContent = "Hello World";