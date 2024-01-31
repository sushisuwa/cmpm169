//Author: Jalen Suwa
//Date: 1/29/24
//Experiment 3: Generative sunset + mountain range

//This program will randomly generate a mountain range and a sky. Either sunset or not.

//click to change the randomly generated image
var someRandomSeed = 67;
var sunPos = 0;
var sunColor = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(128,128,128);
  strokeWeight(3);
  strokeJoin(BEVEL);
  noStroke();
  sunPos = random(0,300);
  //based on pos of the sun determine whether its a sunset or not
  if(sunPos >= 180){
    sunColor = 170;
    let skyColor1 = color(255,165,0);
    let skyColor2 = color(255, 69, 0);
    
    setGradient(0,0,width, height, skyColor1, skyColor2);
  }else{
    sunColor = 225
    let skyColor1 = color(135,206,250);
    let skyColor2 = color(0, 102, 204);
    
    setGradient(0,0,width, height, skyColor1, skyColor2);
  }
  
  noStroke();
  fill(255,sunColor,0);
  ellipse(random(50,350),sunPos,100);
  
  //draw lines
  randomSeed(someRandomSeed);
  beginShape();
  for(var x = 0; x < width+50; x += random(10,50)){
    var y = random(250,height-100);
    vertex(x,y);
  }
  vertex(400,400);
  vertex(0,400);
  fill(128,128,128);
  endShape(CLOSE);
  
}

mousePressed = function() {
  someRandomSeed = random(100000);
}

// Custom function to set a gradient background
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = x; i <= x + w; i++) {
    // Calculate the interpolation factor (0 to 1)
    let inter = map(i, x, x + w, 0, 1);
    // Use lerpColor() to get a color between c1 and c2
    let col = lerpColor(c1, c2, inter);
    // Set the stroke with the calculated color
    stroke(col);
    // Draw a line across the width of the canvas
    line(i, y, i, y + h);
  }
}