/************************************************************************

Letter

A class for representing a single character as text on the screen that
reacts to mouse movement over it and moves and bounces around.

************************************************************************/

class Letter {
  // constructor(letter,x,y,size)
  //
  // Construct the letter according to the argument
  // Include various physical properties for moving around
  constructor(letter, x, y, fontSize) {
    // The character this object represents
    this.letter = letter;
    // Position, velocity, acceleration
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    // Deceleration per frame
    this.drag = 0.01;
    // Font size
    this.fontSize = size;
    // Dimensions
    textSize(this.fontSize);
    this.width = textWidth(this.letter);
    this.height = textAscent() + textDescent();
    // Angle for rotation
    this.angle = 0;
    // How much the angle should change per update
    this.angleChange = 0;
    // Time for Perlin noise
    this.t = random(1000);
  }

  // display()
  //
  // Draw the letter on screen based on position and rotation
  display() {
    push();
    // Set the fontSize
    textSize(this.fontSize);
    // Translate to the position of the letter, but add half width and height
    // so that we account for kerning
    translate(this.x + this.width / 2, this.y + this.height / 2);
    // Rotate
    rotate(this.angle);
    // Set a stroke based on Perlin noise to create a nice visual effect as
    // letters move around
    stroke(map(noise(this.t), 0, 1, 100, 255));
    // Set a stroke weight to make the letters more visible
    strokeWeight(3);
    // White fill, why not
    fill(255);
    // Update the time parameters for the noise
    this.t += 0.01;
    // Draw the text
    text(this.letter, 0, 0);
    pop();
  }

  // update()
  //
  // Update movement
  update() {
    // Use p5.collide2d to check whether the line between the previous mouse position
    // (pmouseX,pmouseY) and the current mouse position (mouseX,mouseY) intersects the
    // bounding rectangle of this letter (based on its position and dimensions)
    // This allows us to check for "collisions" including frames where the mouse moves through the
    // letter without every explicitly overlapping it in any one frame
    if (
      collideLineRect(
        pmouseX,
        pmouseY,
        mouseX,
        mouseY,
        this.x,
        this.y,
        this.width,
        this.height
      )
    ) {
      // If so, set the acceleration to be equivalent to the mouse movement
      // so it conveys a relative force to the speed of movement
      this.ax += mouseX - pmouseX;
      this.ay += mouseY - pmouseY;
      // And set the letter spinning based on the acceleration too
      // (The 2000 here is just a tested out value)
      this.angleChange = (this.ax + this.ay) / 2000;
    }

    // Apply drag to the acceleration so it rapidly approaches 0
    this.ax = constrain(this.ax * this.drag, -5, 5);
    this.ay = constrain(this.ay * this.drag, -5, 5);

    // Apply acceleration to velocity
    this.vx += this.ax;
    this.vy += this.ay;

    // Set position based on velocity
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off the walls and by reversing velocity and rotation direction
    if (this.x < 0 || this.x > width) {
      this.vx = -this.vx;
      this.angleChange = -this.angleChange;
    }
    if (this.y < 0 || this.y > height) {
      this.vy = -this.vy;
      this.angleChange = -this.angleChange;
    }

    // Increase the angle of rotation
    this.angle += this.angleChange;
  }
}