let heart
function preload(){
  heart = loadModel('Love.obj',true);
  font = loadFont('heartfont.ttf');
  //pic = loadImage('question.jpg');
}

function setup() {
  createCanvas(500, 500, WEBGL);
  capture = createCapture(VIDEO);
  capture.hide();
  background(255,209,220);
  textFont(font);

  for(let x = 0; x < 100; x++){
    push();
    noStroke();
    fill(255, 0, 0);
    pointLight(232,142,2, -500, -100, 250);
    ambientLight(221,225,236,0);
    translate(random(-width,width),random(0,height), random(-500,100));
    rotateX(185);
    model(heart);
    pop();
  }
}

function draw() {
  push();
  scale(-1, 1);
  texture(capture);
  textureMode(NORMAL);
  translate(100,0,0);
  rotateY(20);
  rotateZ(-5);
  box(100,100,100);
  pop();
  
  push();
  let pgtext = '❓';
  let pg = createGraphics(200,200);
  pg.background(255);
  pg.textSize(100);
  pg.text(pgtext,35,125);
  translate(100,0,0);
  rotateY(20);
  rotateZ(-5);
  texture(pg);
  box(100,100,100);
  pop();
  
  push();
  translate(0,-150,-100);
  box(400,100,100);
  pop();
  
  push();
  textSize(50);
  fill(0);
  text("Will you be my valentine?", -170, -130);
  pop();
  
  push();
  //noStroke();
  let yes = 'Yes❤️ or No😭';
  let yesTexture = createGraphics(200,200);
  yesTexture.background(255);
  yesTexture.textSize(27);
  yesTexture.text(yes,0,100);
  
  translate(0, 150, 0);
  rotateY(-(frameCount * 0.03));
  texture(yesTexture);
  noStroke();
  sphere(50);
  pop();
}