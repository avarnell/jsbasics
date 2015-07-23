// Use var, prompt, string literals, the+ operator, and alert such that when the user opens the page, 
// it will ask them for their name, and then respond with "Hello [NAME_GOES_HERE]!"

$(document).ready(function(){
var name = prompt("Who goes there?");
  alert ("Oh, why hello, " + name+"!");
})