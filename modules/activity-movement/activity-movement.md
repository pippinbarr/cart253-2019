### Activity / CART 253 / Pippin Barr

# Movement

---

## Challenge

- Create a 500x500 canvas
- Make the background an appealing color
- Declare variables to represent the position and size of a circle
- Start the circle in position 0,0 and with a size of 1 pixel
- Make the circle an appealing color
- Make the circle move toward the bottom-left corner, five pixels per frame
- Make the circle simultaneous grow by two pixels per frame

---

## Solution

See presenter notes.

???

```javascript
let x = 0; // All the way to the left
let y = 0; // All the way at the top
let size = 1; // One pixel diameter

// setup()
//
// Create the canvas and set up the colors

function setup() {
  // Create the canvas to the required size
  createCanvas(500,500);

  // Colors
  background(0);
  fill(255,0,0);
  noStroke();
}

// draw()
//
// Move and grow the circle, then draw it

function draw() {
  // Move the circle
  x += 5;
  y += 5;
  // Increase its size
  size += 2;
  // Draw it
  ellipse(x,y,size,size);
}
```
