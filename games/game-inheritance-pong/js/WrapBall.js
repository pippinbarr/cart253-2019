// WrapBall
//
// Extends the traditional Ball. Behaves in the same way except it ignores
// the upper and lower walls and wraps around them instead! It's a small
// change, so we only need a new update() method in here.

class WrapBall extends Ball {

  // Ball constructor
  //
  // Sets the properties with the provided arguments
  constructor(x, y, vx, vy, size, speed) {
    super(x, y, vx, vy, size, speed);
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

    this.handleWrapping();
  }

  // handleWrapping()
  //
  // Checks if the ball has gone off the top or bottom of the screen
  // and wraps it around if so.
  handleWrapping() {
    // Check if we've gone off the top
    if (this.y < 0) {
      // If so, wrap to the bottom
      this.y += height;
    }
    // Otherwise check if we've gone off the bottom
    else if (this.y > height) {
      // If so, wrap to the top
      this.y -= height;
    }
  }
}