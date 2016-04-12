
var $canvas = $('canvas');
var $context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
var color = $(".selected").css("background-color");
console.log(color);

//Interaction to color list
$(".controls").on("click", "li", function(){
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(".selected").css("background-color");
  });

$('#revealColorSelect').click(function() {
  $("#colorSelect").show();

});

$('input[type = range]').change(changeColor);

function changeColor() {
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();
  $("#newColor").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
}

$('#addNewColor').click(function(){
  var $newli = $("<li></li>");
  $('.controls ul').append($newli);
  $newli.css("background-color", $("#newColor").css("background-color"));
});


$canvas.mousedown(function(event) {
  lastEvent = event;
  mouseDown = true;
}).mousemove(function(event){
  if(mouseDown) {
  $context.beginPath();
  $context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  $context.lineTo(event.offsetX, event.offsetY);
  $context.strokeStyle = color;
  console.log(color);
  $context.stroke();
  lastEvent = event;
}
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function() {
  $canvas.mouseup();
});
