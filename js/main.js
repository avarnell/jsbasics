// Use var, prompt, string literals, the+ operator, and alert such that when the user opens the page, 
// it will ask them for their name, and then respond with "Hello [NAME_GOES_HERE]!"

$(document).ready(function(){
  var name = prompt("Who goes there?");
  alert ("Oh, why hello, " + name+"! We are going to try and do some stuff like push your name to elements on the page.");
  $('.name').text(name);

  var button = document.getElementById('ready');
  function onClick(event) {
    var verbing = document.getElementById("verbing").value;
    var place = document.getElementById("place").value;
    var adj = document.getElementById("adj").value;
  
    $('.verbing').text(verbing);
    $('.place').text(place);
    $('.adj').text(adj);
  }
  button.addEventListener('click', onClick);





// var verbing

// var place

// var adj

});