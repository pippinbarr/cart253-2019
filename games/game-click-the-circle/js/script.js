/******************************************************

Game - Click the Circle
Pippin Barr

A game of clicking a moving circle before it
goes off screen.

Uses basic movement physics and the idea of tracking
a simple score.

******************************************************/

// The position and size of our circle
let x;
let y;
let circleSize = 100;

// The speed and velocity of our circle
let speed = 1;
let vx;
let vy;

// How many times has the player clicked the circle this round?
let clicks = 0;

// setup()
//
// Initialise the location of the circle, set a random velocity,
// set the fill.
function setup() {
  // Create our playing area
  createCanvas(500,500);
  // Place the circle in the centre of the canvas
  x = width/2;
  y = height/2;
  // Set the velocity randomly between negative and positive speed
  // so the circle moves in a random direction at a random speed
  vx = random(-speed,speed);
  vy = random(-speed, speed);
  // Just say no to stroke
  noStroke();
}

// draw()
//
// Move the circle and draw it.
// Check if the circle has gone off screen and reset the game if so.
function draw() {
  // Fill the background in yellow
  background(255,255,0);
  // Display the number of successful clicks (the score)
  textAlign(RIGHT,TOP);
  textSize(64);
  fill(0);
  text(clicks,width,0);
  // Add the velocity to the position to move the circle
  x = x + vx;
  y = y + vy;

  // Draw the circle on screen at its position
  fill(255,0,0);
  ellipse(x,y,circleSize,circleSize);

  // Check if the circle has gone off the screen...
  if (x > width || x < 0 || y > height || y < 0) {
    // If it went off screen then the player lost this round
    // Reset all the circle's properties (size, speed, position, velocity)
    circleSize = 100;
    speed = 1;
    x = width/2;
    y = height/2;
    vx = random(-speed,speed);
    vy = random(-speed, speed);
    // Reset the clicks letiable to zero to start counting again
    clicks = 0;
  }
}

// mouseClicked()
//
// When the mouse is clicked, check if it was in the circle
// if it was then make the game harder and reset the circle
// and take note that they succeeded
function mouseClicked() {
  // Check if the distance between the mouse and the centre of the circle
  // is less than the circle's radius
  if (dist(mouseX,mouseY,x,y) < circleSize/2) {
    // If it is, then the click was inside the circle
    // Make the circle smaller (harder to click)
    circleSize = circleSize - 5;
    // Make the circle faster
    speed = speed + 0.25;
    // Move it back to the centre
    x = width/2;
    y = height/2;
    // Give it a new random velocity
    vx = random(-speed,speed);
    vy = random(-speed, speed);
    // Increase the successful clicks
    clicks = clicks + 1;
  }
}
