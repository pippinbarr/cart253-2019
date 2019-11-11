/************************************************************************

Ship

A class to represent a spaceship that can be controlled with the keyboard.
Movement is based on turning and acceleration model. The ship can also shoot
bullets and can be hit by bullets.

************************************************************************/

class Ship {

  // constructor()
  //
  // The constructor takes the many parameters and stores them in properties
  // These refer to
  // - movement
  // - input
  // - images for the ship and bullets
  // - how quickly the ship shrinks to nothing
  constructor(config) {
    this.x = config.x;
    this.y = config.y;
    this.angle = config.angle;
    this.speed = 0;
    this.size = config.shipImage.width;
    this.minSize = 1;
    this.maxSize = config.shipImage.width;
    this.shrinkPerFrame = 0.1;
    this.acceleration = 0.1;
    this.maxSpeed = 5;
    this.turningSpeed = 0.1;
    this.leftKey = config.leftKey;
    this.rightKey = config.rightKey;
    this.accelerateKey = config.accelerateKey;
    this.shootKey = config.shootKey;
    this.brakeKey = config.brakeKey;
    this.bullets = [];
    this.shipImage = config.shipImage;
    this.bulletImage = config.bulletImage;

    // Here are some properties that are hard coded
    // There is no special reason for this
    this.maxBullets = 10;
    this.bulletCoolDown = 0;
    this.bulletCoolDownMax = 10;
    this.growPerBullet = 2;
    this.alive = true;
  }

  // handleInput()
  //
  // Handles turning and accelerating/decelerating the ship as well as firing bullets
  handleInput() {

    // No point in handling input if the ship is dead
    if (!this.alive) {
      return;
    }

    // Check for turning keys and change the angle if they are pressed
    if (keyIsDown(this.leftKey)) {
      this.angle -= this.turningSpeed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.angle += this.turningSpeed;
    }

    // Check for accelerating or braking and adjust the speed if they are pressed
    if (keyIsDown(this.accelerateKey)) {
      this.speed += this.acceleration;
    }
    else if (keyIsDown(this.brakeKey)) {
      this.speed -= this.acceleration;
    }

    // Constrain the speed so it doesn't get out of hand
    this.speed = constrain(this.speed, 0, this.maxSpeed);

    // The bullet cooldown determines when you can fire again (when it's at 0)
    // So count down
    this.bulletCoolDown -= 1;
    // Constrain the bullet cooldown to avoid weird numbers
    this.bulletCoolDown = constrain(this.bulletCoolDown - 1, 0, this.bulletCoolDownMax)
    // Check if the shoot key is pressed and the cooldown is at 0 so you can fire
    if (keyIsDown(this.shootKey) && this.bulletCoolDown === 0) {
      // Create a bullet as an object with position and velocity
      var newBullet = {
        // Bullets should start at the location of the ship firing
        x: this.x,
        y: this.y,
        // And they should have a velocity matching the ships' angle
        // but should travel at maximum speed
        vx: this.maxSpeed * cos(this.angle),
        vy: this.maxSpeed * sin(this.angle)
      }
      // Add the bullet to the bullets array of the ship
      this.bullets.push(newBullet);
      // Set the cooldown to max so it can start counting down
      this.bulletCoolDown = this.bulletCoolDownMax;
    }
  }

  // update()
  //
  // Shrinks the ship over time.
  // Updates the ship's position based on velocity.
  // Wraps at screen edges as needed.
  update() {
    // Don't move if you're dead
    if (!this.alive) {
      return;
    }

    // Shrink the ship (constrained)
    this.size -= this.shrinkPerFrame;
    this.size = constrain(this.size, this.minSize, this.maxSize);

    // If the ship reaches its minimum size, it's dead
    if (this.size === this.minSize) {
      this.alive = false;
      return;
    }

    // Calculate velocity based on speed and trig (e.g. polar coordinates)
    var vx = this.speed * cos(this.angle);
    var vy = this.speed * sin(this.angle);

    // Update position
    this.x += vx;
    this.y += vy;

    // Wrap at screen edges
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }

    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }

  // updateBullets()
  //
  // Move all the bullets fired by this ship
  // Check if they hit the other ship and update its size
  // Note that in this simple version we never actually delete bullets from the
  // array. For that we'd need to use either pop() or splice().
  updateBullets(otherShip) {
    // Go through all the bullets of this ship
    // (Note this is hugely inefficient since it still looks at bullets that were fired long ago,
    // we should really remove those from the array!)
    for (var i = 0; i < this.bullets.length; i++) {
      // Get the bullet based on its index
      var bullet = this.bullets[i];

      // Update its position based on velocity
      bullet.x += bullet.vx;
      bullet.y += bullet.vy;

      // Check if this bullet overlaps the other ship
      if (bullet.x > otherShip.x - otherShip.size / 2 && bullet.x < otherShip.x + otherShip.size / 2) {
        if (bullet.y > otherShip.y - otherShip.size / 2 && bullet.y < otherShip.y + otherShip.size / 2) {
          // If so, make the other ship grow (constrained)
          otherShip.size += otherShip.growPerBullet;
          otherShip.size = constrain(otherShip.size, otherShip.minSize, otherShip.maxSize);
        }
      }
    }
  }

  // display()
  //
  // Display the ship and its bullets on the screen
  display() {
    // Don't display if dead
    if (!this.alive) {
      return;
    }

    // Translate and rotate based on position and angle
    // draw the ship image
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.shipImage, 0, 0, this.size, this.size);
    pop();

    // Go through all the bullets and display the image for each one
    for (var i = 0; i < this.bullets.length; i++) {
      push();
      image(bulletImage, this.bullets[i].x, this.bullets[i].y, 10, 10);
      pop();
    }
  }

}