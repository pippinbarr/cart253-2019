# Exercise 0 - Spiritual Self-Portrait

## Brief

Starting from scratch or with the starter code provided, create a "spiritual self-portrait" using p5's various drawing functions such as `ellipse()`, `rect()`, `line()` and so on. Don't forget to [read the p5 reference](https://p5js.org/reference/) to discover more drawing possibilities! (By "spiritual self-portrait" I just mean that the face you draw should somehow "feel like" it's you, even though it obviously will be hard to make it look exactly like you!)

This exercise is not going to be submitted or graded but __it is not optional__!

## Learning objectives

- Writing JavaScript in Atom
- Testing your work with atom-live-server
- Writing instructions in a program that lead to visual results
- Using numbers to specify positions, sizes, and colors
- Using comments to explain your code
- Figuring out how to be create and interesting with primitive shapes

## Challenges

1. __Create a face__ (and body if desired) that is clearly distinct from the starter code and that spiritually resembles you.
1. __Use at least one drawing function not used in the starter code__ (it already uses `ellipse()`, `rect()`, and `line()` so you could use `triangle()`, `curve()`, `point()`, and so on).
1. Make sure you __change/add/subtract comments__ to make your program clear and easy for someone else to understand

## Starter Code

You can download a JavaScript p5 project with the starter code already in it here:  
https://pippinbarr.github.io/cart253-2018/exercises/exercise0.zip

Here is the script file, for your references.

`script.js`:
```javascript
// Exercise 0 - Spiritual Self-Portrait
// Pippin Barr
//
// Uses p5's set of shape and colour functions to draw a head
// wearing a hat that Pippin claims is spiritually just like him.


// setup()
//
// Draws a beautiful face on the canvas and puts a hat on it!

function setup() {

  // Set up the canvas and give it a nice pink colour

  createCanvas(500,500);
  background(255,220,220);

  // Draw the head and body (or is it a chin?) in pink as well

  // No stroke because shapes look nicer without it I think
  noStroke();
  // Set the nice pink
  fill(255,190,190);
  // The ellipse mode will make it easier to align everything
  ellipseMode(CENTER);
  // Draw the head
  ellipse(250,250,200,200);
  // Draw the body
  ellipse(250,400,300,400);

  // Draw the googly eyes

  // Draw the white backgrounds of the eyes
  fill(255);
  ellipse(200,225,50,50);
  ellipse(300,225,50,50);

  // Draw the black pupils
  fill(0);
  ellipse(200,225,20,20);
  ellipse(300,225,20,20);

  // Draw the nose

  // Nose colour
  fill(255,150,150);
  // Main nose part
  ellipse(250,250,50,100);
  // The two nostril areas
  ellipse(235,275,50,50);
  ellipse(265,275,50,50);

  // Draw the mouth our of an ellipse and a dividing line

  // Lip colour
  fill(255,150,150);
  // Lips
  ellipse(250,320,100,25);
  // Lip divider colour and size
  stroke(255,120,120);
  strokeWeight(4);
  // Lip divider
  line(200,320,300,320);

  // Draw the hat as a main part, brim, and hat band

  noStroke();
  // Hat colour
  fill(200,255,200);
  // Hat brim
  rect(100,175,300,10);
  // Main part of hat
  rect(160,100,180,80);
  // Band colour
  fill(100,100,100);
  // Hat band
  rect(160,165,180,10);
}

// draw()
//
// Does nothing.

function draw() {
  // Nothing here for now.
}
```

## Submission

This exercise does not need to be submitted, it's just for practice!

## Grading

This exercise is not graded, it's just for practice!
