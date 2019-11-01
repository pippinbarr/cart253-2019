# Arrays of Images

One thing that can be nice to store in an array is a bunch of images. Either because you want to use them sequentially as an animation, or perhaps because you want to be able to choose one randomly to display.

## Loading images into an array

```javascript
// Declare an empty array to store the images
let images = [];

function preload() {
  // We know loadImage loads an image file and then returns the image,
  // so we can push() that returned image into the array
  images.push(loadImage("assets/images/image1.png"));
  images.push(loadImage("assets/images/image2.png"));
  images.push(loadImage("assets/images/image3.png"));
  images.push(loadImage("assets/images/image4.png"));
  images.push(loadImage("assets/images/image5.png"));
  // When we're here, our array has the five images loaded into it
}
```

And even more efficient way to do this if our images are named consistently, like they are above, would be to use a loop to construct the path to the files.

```javascript
// Declare an empty array to store the images
let images = [];
let numImages = 5;

function preload() {
  // We run our for loop once per image
  for (let i = 1; i <= numImages; i++) {
    // Each time i has a number in it, going 1 -> 2 -> 3 -> 4 -> 5
    // So we can use that fact to make a string with the next filename:
    let filePath = "assets/images/image" + i + ".png";
    // Or: let filePath = `assets/images/image${i}.png`
    // And then we can load that image into our array
    images.push(loadImage(filePath));
  }
  // Again, when we're here, our array has the five images loaded into it
}
```

## Choosing and displaying a random image

If we imaging our `images` array above has a bunch of background images, we could, for example, choose a random background image to use when we start our program.

```javascript
let images = [];
let numImages = 5;
let backgroundImage; // This variable will store the chosen background

function preload() {
  for (let i = 1; i <= numImages; i++) {
    let filePath = "assets/images/image" + i + ".png";
    images.push(loadImage(filePath));
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Choose a random index into the array (e.g. pick one of the images)
  let imageIndex = floor(random() * images.length);
  // Store the chosen image in our backgroundImage variable for use later
  backgroundImage = images[imageIndex];
  // Now backgroundImage will be a randomly chosen image from the array
}

function draw() {
  // Display the randomly chosen image
  image(backgroundImage,0,0);
}
```

## Animating an array of images

We might want to store a sequence of images in our array and then animate it! If we're okay with the animation playing at the same speed as the program's framerate (60fps), we could do something like this:

```javascript
let animationFrames = []; // To store the animation sequence
let numberAnimationFrames = 10; // How many frames (images) are there
let currentAnimationFrame = 0; // To track which frame to display

function preload() {
  for (let i = 1; i <= numberAnimationFrames; i++) {
    let filePath = "assets/images/animation" + i + ".png";
    animationFrames.push(loadImage(filePath));
  }
  // By here we have stored our 10 animation frames in the array
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  // Display our current frame by asking for the current frame in the array
  image(animationFrames[currentAnimationFrame],0,0);
  // Move to the next frame
  currentAnimationFrame++;
  // Check if we've reached the end of the array (the end of the animation frames)
  if (currentAnimationFrame >= animationFrames.length) {
    currentAnimationFrame = 0;
  }
}
```

If you're not wanting every animation to run at 60 frames per second, you'll need to define a framerate specifically for the animation, and then apply it. For which we could do something like this:

```javascript
let animationFrames = []; // To store the animation sequence
let numberAnimationFrames = 5; // How many frames (images) are there
let animationFrameRate = 10; // How many frames per second
let currentAnimationFrame = 0; // To track which frame to display
let programFrameRate = 60; // Remember this because the actual frame rate can vary

function preload() {
  for (let i = 1; i <= numberAnimationFrames; i++) {
    let filePath = "assets/images/animation" + i + ".png";
    animationFrames.push(loadImage(filePath));
  }
  // By here we have stored our 10 animation frames in the array
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(programFrameRate); // Set the frame rate for our program
}

function draw() {
  background(0);
  // Display our current frame by asking for the current frame in the array
  image(animationFrames[currentAnimationFrame], 0, 0);
  // We need to check whether we should display the next frame based on our
  // animation's frame rate. Luckily, we have access to both
  // - frameCount - which tells us how many frames have passed in our program
  // - programFrameRate - which tells us the frame rate of our program
  // We can calculate how many frames of program animation equals one frame
  // of our animation like so:
  let programFramesPerAnimationFrame = floor(programFrameRate / animationFrameRate);
  // And we can check whether this many frames have passed in the program
  // using modulo, which tells us the remainder after division (if it's zero
  // the current frame count is a perfect multiple of our animation's frame rate
  // and we can advance the frame)
  if (frameCount % programFramesPerAnimationFrame === 0) {
    // Move to the next frame
    currentAnimationFrame++;
    // Check if we've reached the end of the array (the end of the animation frames)
    if (currentAnimationFrame >= animationFrames.length) {
      currentAnimationFrame = 0;
    }
  }
}
```

Definitely a bit more complex!

Even better would be to implement your animation in a `class` so that you can generalize it and create multiple animations with different frame rates!
