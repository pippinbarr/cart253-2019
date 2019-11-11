"use strict";

/******************************************************************************

Where's Invisible Sausage Dog?
Pippin Barr

A game of finding an invisible dog only by spatially tracking its
incessant barking. Move the mouse around the screen and listen to the
barking's distance (volume) and horizontal position (pan) to figure out where the
invisible sausage dog is. You will know it when you don't see him.

******************************************************************************/

// Create an object to store information about the dog
// notably its position, the image, and the sound it makes.
let dog = {
  x: 0,
  y: 0,
  image: undefined,
  sound: undefined
}

// The distance on x after which the pan is absolutely to one side or the other
let maxPanDistance = 100;

// preload()
//
// Load dog image and sound
function preload() {
  dog.image = loadImage("assets/images/dog.png");
  dog.sound = loadSound("assets/sounds/bark.wav");
}

// setup()
//
// Put the dog in a random location and set up its sound
function setup() {
  createCanvas(windowWidth, windowHeight);

  // We'll draw from the center
  imageMode(CENTER);
  // Choose a random location for the dog, use offsets to avoid having it
  // appear half off-screen
  dog.x = random(0 + dog.image.width / 2, width - dog.image.width / 2);
  dog.y = random(0 + dog.image.height / 2, height - dog.image.height / 2);

  // Start playing the barking sound, then mute it and pan to centre initially
  dog.sound.loop();
  dog.sound.setVolume(0);
  dog.sound.pan(0);
}

// draw()
//
// Tracks distance of mouse from the dog and alters its barking volume and pan
// to indicate its location. Displays a circle around the invisible dog if you find it.
function draw() {
  // A nice green background
  background(100, 200, 100);

  // Calculate the distance to the dog from the mouse
  let d = dist(mouseX, mouseY, dog.x, dog.y);

  // If the mouse is over the dog, we found it
  if (d < dog.image.height / 2) {
    // Display the invisible dog (tinted to transparent because it's invisible, ha ha)
    push();
    tint(255, 0);
    image(dog.image, dog.x, dog.y);
    pop();
    // And display a nice yellow circle around it so you know where it is
    push();
    strokeWeight(0.5);
    stroke(255, 255, 0);
    noFill();
    ellipse(dog.x, dog.y, dog.image.width, dog.image.height);
    pop();
  }

  // Calculate and set volume of barking sound based on distance
  let newVolume = map(d, 0, width / 2, 1, 0);
  dog.sound.setVolume(newVolume);

  // Calculate and set pan of barking sound based on distance
  let dx = dog.x - mouseX; // The distance on x axis between mouse and dog
  let newPan = map(dx, -maxPanDistance, maxPanDistance, -1, 1);
  dog.sound.pan(newPan);
}