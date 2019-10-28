// InvisiBall
//
// Extends the Ball. Same behavior except only visible briefly when it
// bounces off something.

class InvisiBall extends Ball {

  // Ball constructor
  //
  // Sets the properties with the provided arguments
  constructor(x, y, vx, vy, size, speed) {
    super(x, y, vx, vy, size, speed);

    this.visibleTimer = 0; // Number of frames of visibility remaining
    this.visibleDuration = 45; // Number of frames the ball is visible after bouncing
  }

  // handleWallBounce
  //
  // Uses the parent's version, but also shows this ball if it boucnes
  handleWallBounce() {
    // Use the parent method to actually handle bouncing off the wall
    let bounced = super.handleWallBounce();

    // Become visible if we bounced
    if (bounced) {
      this.startVisibilityTimer();
    }
  }

  // handleCollision(paddle)
  //
  // Uses the parent's version, but also shows this ball if it bounces
  handleCollision(paddle) {
    // Use the parent method to actually handle bouncing off the paddle
    let bounced = super.handleCollision(paddle);

    // Become visible if we bounced
    if (bounced) {
      this.startVisibilityTimer();
    }
  }

  // startVisibilityTimer()
  //
  // Sets the timer in motion so the ball will show up
  startVisibilityTimer() {
    this.visibleTimer = this.visibleDuration;
  }

  // update()
  //
  // Uses the default update, but also moves the visibility timer
  // and updates the fill color based on the timer
  update() {
    super.update();

    // Reduce the visible timer and contrain it
    this.visibleTimer -= 1;
    this.visibleTimer = constrain(this.visibleTimer, 0, this.visibleDuration);

    // Set our fill color to be based on how long the visible timer has left
    // We'll be invisible (black) if it's at 0, and white if it's at maximum
    this.fillColor = map(this.visibleTimer, 0, this.visibleDuration, 0, 255);
  }
}