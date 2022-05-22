var Btn_doodle = document.querySelector("#doodle_btn");
var Btn_line = document.querySelector("#line_btn");
var Btn_rect = document.querySelector("#rect_btn");
var Btn_circle = document.querySelector("#circle_btn");
var Btn_erase = document.querySelector("#erase_btn");

///////////////////////////////////////////////CANVAS/////////////////////////////////////////
var canvas = document.getElementById("myCanvas");
var artArea = canvas.getContext("2d");

var circle_flag = false;
var rect_flag = false;
var line_flag = false;
var doodle_flag = false;
var erase_flag = false;
var rect_startX;
var rect_startY;
var rect_endX;
var rect_endY;
var circle_startX;
var circle_startY;
var circle_endX;
var circle_endY;
var myColor;
var drawFlag = false;
var eraseFlag = false;

function colorSelected(element) {
  myColor = document.body.style = element.value;
}

//////////////////////////////////CIRCLE///////////////////////////////
Btn_circle.addEventListener("click", () => {
  circle_flag = true;
  rect_flag = false;
  line_flag = false;
  doodle_flag = false;
  erase_flag = false;
});

////////////////////////////////RECTANGLE///////////////////////////////
Btn_rect.addEventListener("click", () => {
  circle_flag = false;
  rect_flag = true;
  line_flag = false;
  doodle_flag = false;
  erase_flag = false;
});

//////////////////////////////Draw Line///////////////////////
Btn_line.addEventListener("click", () => {
  circle_flag = false;
  rect_flag = false;
  line_flag = true;
  doodle_flag = false;
  erase_flag = false;
});

///////////////////////////////Doodle////////////////////////////
Btn_doodle.addEventListener("click", () => {
  circle_flag = false;
  rect_flag = false;
  line_flag = false;
  doodle_flag = true;
  erase_flag = false;
});

///////////////////////////////ERASE///////////////////////////////
Btn_erase.addEventListener("click", () => {
  circle_flag = false;
  rect_flag = false;
  line_flag = false;
  doodle_flag = false;
  erase_flag = true;
});

///////////////////////////////          MOUSE DOWN           ///////////////////////////////

canvas.addEventListener("mousedown", (e) => {
  if (circle_flag == true) {
    circle_startX = e.offsetX;
    circle_startY = e.offsetY;
  } else if (rect_flag == true) {
    rect_startX = e.offsetX;
    rect_startY = e.offsetY;
  } else if (line_flag == true) {
    artArea.beginPath();
    artArea.moveTo(e.offsetX, e.offsetY);
  } else if (doodle_flag == true) {
    artArea.strokeStyle = myColor;
    artArea.beginPath();
    artArea.moveTo(e.offsetX, e.offsetY);
    drawFlag = true;
  } else if (erase_flag == true) {
    eraseFlag = true;
    artArea.beginPath();
    artArea.moveTo(e.offsetX, e.offsetY);
  }
});

///////////////////////////////          MOUSE MOVE           ///////////////////////////////

canvas.addEventListener("mousemove", function (e) {
    if (doodle_flag == true) {
      artArea.lineTo(e.offsetX, e.offsetY);
      artArea.strokeStyle = myColor;
      artArea.stroke();
      drawFlag=true;
    } else if (erase_flag == true) {
      artArea.strokeStyle = "white";
      artArea.lineTo(e.offsetX, e.offsetY);
      artArea.stroke();
      erase_flag=true;
    }
  });

///////////////////////////////          MOUSE UP           ///////////////////////////////

canvas.addEventListener("mouseup", (e) => {
  if (circle_flag == true) {
    circle_endX = e.offsetX;
    circle_endY = e.offsetY;
    artArea.beginPath();
    artArea.arc(circle_startX, circle_startY, Math.sqrt(Math.pow((circle_endX-circle_startX),2) + Math.pow((circle_endY-circle_startY),2)), 0, 2 * Math.PI);
    artArea.strokeStyle = myColor;
    artArea.stroke();
  } else if (rect_flag == true) {
    rect_endX = e.offsetX;
    rect_endY = e.offsetY;
    artArea.fillStyle = myColor;
    artArea.strokeStyle = myColor;
    artArea.fillRect(
      rect_startX,
      rect_startY,
      rect_endX - rect_startX,
      rect_endY - rect_startY
    );
    // artArea.fillStyle = myColor;
    // artArea.strokeStyle = myColor;
    artArea.stroke();
  } else if (line_flag == true) {
    artArea.lineTo(e.offsetX, e.offsetY);
    artArea.strokeStyle = myColor;
    artArea.stroke();
  } else if (doodle_flag == true) {
    drawFlag = false;
  } else if (erase_flag == true) {
    eraseFlag = false;
  }
});

