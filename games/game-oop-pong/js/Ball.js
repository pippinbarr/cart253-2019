// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

class Ball {

  // Ball constructor
  //
  // Sets the properties with the provided arguments
  constructor(x, y, vx, vy, size, speed) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.speed = speed;
  }

  // update()
  //
  // Moves according to velocity, constrains y to be on screen,
  // checks for bouncing on upper or lower edgs, checks for going
  // off left or right side.
  update() {
    // Update position with velocity
    this.x += this.vx;
    this.y += this.vy;

    // Constrain y position to be on screen
    this.y = constrain(this.y, 0, height - this.size);

    // Check for touching upper or lower edge and reverse velocity if so
    if (this.y === 0 || this.y + this.size === height) {
      this.vy = -this.vy;
    }
  }

  // isOffScreen()
  //
  // Checks if the ball has moved off the screen and, if so, returns true.
  // Otherwise it returns false.
  isOffScreen() {
    // Check for going off screen and reset if so
    if (this.x + this.size < 0 || this.x > width) {
      return true;
    }
    else {
      return false;
    }
  }

  // display()
  //
  // Draw the ball as a rectangle on the screen
  display() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
  }

  // handleCollision(paddle)
  //
  // Check if this ball overlaps the paddle passed as an argument
  // and if so reverse x velocity to bounce
  handleCollision(paddle) {
    // Check if the ball overlaps the paddle on x axis
    if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
      // Check if the ball overlaps the paddle on y axis
      if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
        // If so, move ball back to previous position (by subtracting current velocity)
        this.x -= this.vx;
        this.y -= this.vy;
        // Reverse x velocity to bounce
        this.vx = -this.vx;
      }
    }
  }

  // reset()
  //
  // Set position back to the middle of the screen
  reset() {
    this.x = width / 2;
    this.y = height / 2;
  }

}