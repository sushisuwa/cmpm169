let ellipses = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
}

function draw() {
  background(0);

  // Create fading ellipses continuously
  if (frameCount % 30 === 0) {
    ellipses.push(new FadingEllipse(random(width), random(height)));
  }

  for (let i = 0; i < ellipses.length; i++) {
    ellipses[i].update();
    ellipses[i].display();
  }

  // Remove ellipses that have faded out
  ellipses = ellipses.filter(ellipse => ellipse.alpha > 0);
}

class FadingEllipse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 50);
    this.alpha = 255; // Initial alpha value (fully opaque)
  }

  update() {
    this.alpha -= 2; // Adjust the fade-out speed
  }

  display() {
    fill(0, 0, 255, this.alpha); // Blue color with variable alpha
    ellipse(this.x, this.y, this.size, this.size);
  }
}
