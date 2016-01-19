window.onload = drawCanvas;

var canvasWidth = 100;
var canvasHeight = 30;
function drawCanvas() {
  var html = '';
  for (j = 0; j < canvasHeight; j++) {
    for (i = 0; i < canvasWidth; i++) {
      html += '<span onmouseover="paintChar(event)" onmousedown="setChar(event)"> </span>';
    }
    html += "\n";
  }
  var element = document.getElementById('canvas');
  element.innerHTML = html;
}

document.onkeypress = function(evt) {
  if (!selectable) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    document.getElementById("brushChar").value = (charStr + " ").substring(0, 1);
  }
}

var selectable = false;
function selectAll(canSelect) {
  if (canSelect != selectable) {
    selectable = !selectable;

    // MAKE A SELECTABLE CANVAS BEHIND THE UNSELECTABLE ONE, TOGGLE THE VISIBLE ONE

    var text = document.getElementById("canvas");
    var range, selection;
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
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
  event.target.innerHTML = (document.getElementById("brushChar").value + " ").substring(0, 1);
}
