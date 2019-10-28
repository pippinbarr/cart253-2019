// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

class Paddle {

  // Paddle constructor
  //
  // Sets the properties with the provided arguments or defaults
  constructor(x, y, w, h, speed, downKey, upKey) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.downKey = downKey;
    this.upKey = upKey;
  }

  // handleInput()
  //
  // Check if the up or down keys are pressed and update velocity
  // appropriately
  handleInput() {
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  // update()
  // Update y position based on velocity
  // Constrain the resulting position to be within the canvas
  update() {
    this.y += this.vy;
    this.y = constrain(this.y, 0, height - this.h);
  }

  // display()
  //
  // Draw the paddle as a rectangle on the screen
  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

}