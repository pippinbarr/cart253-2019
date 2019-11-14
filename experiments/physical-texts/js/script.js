/************************************************************************

Physical Texts
Pippin Barr

A small example of giving a text a kind of physical nature by combining p5's
text functions with the basic understandsing of physics we already have.

************************************************************************/


// The string of text to display
let string = "This is the time, and this is the record of the time."
// The starting x and y location of the text
let startX;
let startY;
// An array to hold each letter of the string (represented as an object)
let letters = [];
let FONT_SIZE = 25;

// setup()
//
// Create the basic program, setup starting variables, create the letter objects
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Where to display the string on the screen
  startX = 100;
  startY = height / 2;
  // Basic text setup
  textSize(FONT_SIZE);
  textAlign(CENTER, CENTER);
  fill(255);

  // Create our letter objects by looping through the string and creating new letters
  // Note that we can treat a string like an array here, with individual characters being
  // the array elements
  let x = startX;
  let y = startY;
  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    // Create a new letter
    letters.push(new Letter(string[i], x, y, FONT_SIZE));
    // Shift the location of the next letter
    x += textWidth(string[i]);
  }
  // Fill the background one time so we get a nice trail effect
  background(255);
}

// draw()
//
// Go through all the letters and update and display them
function draw() {
  for (let i = 0; i < letters.length; i++) {
    letters[i].update();
    letters[i].display();
  }
}