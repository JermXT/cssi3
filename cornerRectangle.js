/* global createCanvas, colorMode, HSB, noStroke, color, background, rect, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

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
  
  if (mouseX < 200 && mouseY < 100 ){
    backgroundColor = color4
  } else if(mouseX > width-200 && mouseY > height-100 ){
    backgroundColor = color1
  } else if(mouseX < 200 && mouseY > height-100){
    backgroundColor = color2
  }else if(mouseX > width-200 && mouseY < 100){
    backgroundColor = color3
  }else{
    backgroundColor = color(95)
  }

  // rectangles
  fill(color4);
  rect(0, 0, 200,100);
  fill(color3);
  rect(width-200, 0, 200, 100);
  fill(color2);
  rect(0,height-100,200,100);
  fill(color1);
  rect(width-200,height-100,200, 100);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 20);
  text("Flip the switch (" + mouseX +", " + mouseY + ")", 20, 20);
  
}

