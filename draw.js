window.onload = drawCanvas;

var canvasWidth = 100;
var canvasHeight = 30;
function drawCanvas() {
  var html = '';
  for (j = 0; j < canvasHeight; j++) {
    for (i = 0; i < canvasWidth; i++) {
      html += '<span onmouseover="paintChar(event)" onmousedown="setChar(event)"> </span>';
    }
    html += "<br />";
  }
  var element = document.getElementById('canvas');
  element.innerHTML = html;
}

// ------------- drawing stuff ------------- //

var mouseDown = 0;
function mouseVal(val) {
  mouseDown = val;
}

function paintChar(event) {
  if (mouseDown) {
    setChar(event);
  }
}
function setChar(event) {
  event.target.innerHTML = (document.getElementById("brushChar").value + " ").substring(0,1);
}
