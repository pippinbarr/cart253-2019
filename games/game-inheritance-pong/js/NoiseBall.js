// NoiseBall
//
// Extends the WrapBall. Behaves in the same way except it moves
// according to Perlin Noise on the y axis

class NoiseBall extends WrapBall {

  // Ball constructor
  //
  // Sets the properties with the provided arguments
  constructor(x, y, vx, vy, size, speed) {
    super(x, y, vx, vy, size, speed);

    // We need to add a ty so the ball can move with noise
    this.ty = random(0, 1000);
  }

  // update()
  //
  // Moves according to velocity, constrains y to be on screen,
  // checks for bouncing on upper or lower edgs, checks for going
  // off left or right side.
  update() {
    // Update y velocity based on noise for jiggling organic movement
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    this.ty += 0.05;

    // Update position with velocity
    this.x += this.vx;
    this.y += this.vy;


    // Call the parent WrapBall's handleWrapping method
    this.handleWrapping();
  }
}