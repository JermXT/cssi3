/* global createCanvas, colorMode, HSB, noStroke, color, background, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, color3, color4, textColor, globalS, globalB;

function setup() {
  // Canvas & color settings
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  globalS = 40;
  globalB = 100;

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(44, 100, 100);
  color2 = color(199, 100, 94);
  color3 = color(79, 100, 73);
  color4 = color(13, 86, 95);
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  drawCenterLine();
  
  if (mouseX > width/2 && mouseY > width/2){
    mode1();
  } else if(mouseX < width/2 && mouseY > width/2) {
    mode2();
  }else if(mouseX > width/2 && mouseY < width/2){
    mode3();
  }else{
    mode4();
  }

  // The red and blue circles:
  fill(color4);
  ellipse(width/4, height/4, 50);
  fill(color3);
  ellipse(3*width/4, height/4, 50);
  fill(color2);
  ellipse(width/4,3*height/4,50);
  fill(color1);
  ellipse(3*width/4,3*height/4,50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch (" + mouseX +", " + mouseY + ")", 20, 20);
  
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2)
  noStroke();
}

function nightMode(){
  backgroundColor = color(20);
  textColor = color(95)
  color1 = color(200, globalS, globalB);
  color2 = color(0, globalS, globalB);
}

function dayMode(){
  backgroundColor = color(95);
  textColor = color(20)
  color2 = color(200, globalS, globalB);
  color1 = color(0, globalS, globalB);
  
}
function mode1(){
  backgroundColor = color1;
}
function mode2(){
  backgroundColor = color2;
}
function mode3(){
  backgroundColor = color3;
}
function mode4(){
  backgroundColor = color4;
}
