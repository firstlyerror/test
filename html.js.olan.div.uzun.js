var widthInput = document.getElementById("widthInput");
var lengthInput = document.getElementById("lengthInput");
var colorInput = document.getElementById("colorInput");
var applyButton = document.getElementById("applyButton");
var myDiv = document.getElementById("myDiv");

applyButton.addEventListener("click", function() {
  var width = widthInput.value + "px";
  var length = lengthInput.value + "px";
  var color = colorInput.value;
  
  myDiv.style.width = width;
  myDiv.style.height = length;
  myDiv.style.backgroundColor = color;
});
