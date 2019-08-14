### Graphics / CART 253 / Fall 2018 / Pippin Barr

# The webpage

---

## In this module

- Full window canvas
- Fullscreen webpage
- Integrating the canvas and HTML

---

## Full window canvas

- Have you noticed how when you create a project that uses `createCanvas(windowWidth,windowHeight)` it always has a small amount of scrollable area?
- The solution is to add this to your CSS

```css
canvas {
  display: block;
}
```

---

## Fullscreen webpage

- One thing we might want is to be able to display our project in full screen, rather than just in the browser window with all the interface elements
- In p5 we can use the function `fullscreen()`

```javascript
var isFullscreen = fullscreen(); // On its own, it returns whether or not the project is fullscreen

fullscreen(true); // If passed true as an argument, it puts the project into fullscreen

fullscreen(false); // If passed false as an argument, it takes the project out of fullscreen
```

---

## Fullscreen webpage

`script.js`
```javascript
var isFullScreen = false;

function setup() {
  createCanvas(displayWidth,displayHeight);
  background(255,0,0);
  for (var i = 0; i < 1000; i++) {
    line(0,random(height),width,random(height));
  }
}

function mousePressed() {
  isFullScreen = fullscreen();
  fullscreen(!isFullScreen);
}
```

`style.css` (add this)
```css
canvas {
  display: block;
}
```

---

## Fullscreen webpage with scaling

- You might not want to create programs that dynamically adjust to always being `displayWidth` width and `displayHeight` high
- With a little bit more work we can scale any sized canvas to fit in our fullscreen view
- We'll can use the p5.dom library to more easily "talk to" the canvas element on the page
- See presenter notes

???

```javascript
// Track whether we're in fullscreen
var isFullScreen = false;
// Track the ratio of width to height for the canvas
var canvasRatio;
// Track the canvas element
var canvas;

function setup() {
  // When we create our canvas we'll store a reference to it in a cariable
  canvas = createCanvas(640,480);
  // Using p5.dom we set the canvas element's style to block, like we did in CSS earlier
  canvas.style('display:block');
  // We calculate the display ratio of width to height for later
  canvasRatio = width/height;

  // Now we just display some stuff so there's something to see
  background(255,0,0);
  for (var i = 0; i < 1000; i++) {
    line(0,random(height),width,random(height));
  }
}

function mousePressed() {
  // When the mouse is pressed we toggle the variable tracking fullscreen
  isFullScreen = !isFullScreen;
  // And set fullscreen to the result
  fullscreen(isFullScreen);
  // Now we calculate the desired height of the canvas based on whether we're
  // in fullscreen (and want displayHeight) or not (and want the regular height)
  var newHeight = 0;
  if (isFullScreen) {
    newHeight = displayHeight;
  }
  else {
    newHeight = height;
  }
  // Finally, using p5.dom's style() method we set the height and width of the
  // canvas element to the new height
  canvas.style("height:" + newHeight + "px");
  // And we calculate and set the width based on the ratio
  canvas.style("width:" + newHeight * canvasRatio + "px");
}
```

---

## Displaying the canvas with other HTML

- We can of course write actual HTML in our `index.html`...

`index.html` (adding to `<body></body>`)
```html
<h1>This is my amazing webpage!</h1>
<h2>Hope you like it?</h2>
<p>I have so much to say!</p>
```

- But note that the canvas with our program is display __after__ all the HTML we enter
- Which could be what we wanted, but also might not be

---

## Displaying the canvas as a background

- If we want a dynamic and interactive background to our webpage (like on https://www.p5js.org/) we'd need to
  - Give our canvas a size of windowWidth and windowHeight so it takes up the full page
  - Give our canvas a CSS `position` of `fixed` so it doesn't scroll with the page
  - Give our canvas a CSS `top` and `left` of `0` so it positions at the top left of the page
  - Give our canvas a CSS `z-index` that makes it appear behind the other HTML
- Example in the presenter notes

???

```javascript
var canvas;

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth,windowHeight);
  // Style it so that it sits behind the main HTML in a fixed position that ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");
}

// Draw something so we can see it in the background
function draw() {
  background(255);
  for (var i = 0; i < 1000; i++) {
    line(0,random(height),width,random(height));
  }
}
```

## Resizing the canvas as a background

- The previous example will work nicely until someone resizes their browser window
- Then the canvas might be smaller or larger than the window size
- And we might want to react to that using the function `windowResized()` from p5
- Example in presenter notes

???

```javascript
var canvas;

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth,windowHeight);
  // Style it so that it sits behind the main HTML in a fixed position that ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");
}

// Draw something so we can see it in the background
function draw() {
  background(255);
  for (var i = 0; i < 1000; i++) {
    line(0,random(height),width,random(height));
  }
}

// windowResized() is called by p5 whenever the window is resized!
function windowResized() {
  // We can use the resizeCanvas() function to resize our canvas to the new window dimensions
  resizeCanvas(windowWidth,windowHeight);
}
```

---

## Summary

- We can make our program fill the window!
- We can make our program work in fullscreen!
- We can make our program with a fixed ratio work in fullscreen!
- We can make our program display behind HTML content!
- We can make our program resize when the window resizes!

???

- Note that there are comparable explanations of these ideas on the p5 github here: https://github.com/processing/p5.js/wiki/Positioning-your-canvas

---

# Fin.
