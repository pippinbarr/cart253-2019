### Core / CART 253 / Fall 2018 / Pippin Barr

# Time part II

---

## In this module

- Set up, update, handle events
- Seeing time

---

## Time again

- It's time to revisit this question of how time operates in a program
- We've now seen four key ways in which time works

  - `preload()` happens at the very beginning of the program, before anything runs
  - `setup()` happens after `preload()` and before `draw()`
  - `draw()` runs once every frame
  - Event handlers like `mousePressed()` and `keyTyped()` run when the associated event occurs

---

## Looking at time

```javascript
function preload() {
  console.log("preload()");
}

function setup() {
  console.log("setup()");
  frameRate(1);
}

function draw() {
  console.log("draw()");
}

function mousePressed() {
  console.log("mousePressed()");
}

function keyTyped() {
  console.log("keyTyped()");
}
```

???

- Using this code we can watch time happening in our program
- We can see in the console the order in which these functions are called
- And thus get more of a sense of how time is working

---

## Actually using time

```javascript
let myImage;

function preload() {
  myImage = loadImage("assets/images/myImage.png");
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  noStroke();
  fill(255);
  let x = random(0,width);
  let y = random(0,height);
  rect(x,y,50,50);
}

function mousePressed() {
  image(myImage,mouseX,mouseY);
}

function keyTyped() {
  fill(0);
  text(key,mouseX,mouseY);
}
```

???

- Obviously this is a very contrived example, but we can see the ways the time affects interaction and experience here
- The `preload()` is needed to make sure the image is available before the program run
- `setup()` is used to specify the various qualities of the program, in this case just the canvas size
- `draw()` is used to have something happening all the time - in this case white squares drawn onto the canvas which interact with the display of the image and text in the event handlers
- `mousePressed()` (an event handler, remember) is used to have an action performed when the user clicks (the image is displayed there)
- `keyTyped()` (also an event handler) is used to have an action performed when the user types a key on the keyboard (that character is displayed at the location of the mouse)
- Clearly we will want to do more meaningful things than this, having the different elements of time work together to create something cohesive and interesting
- But we can already see how they interact even here - the squares in `draw()` gradually erase the actions performed in the event handlers, the text event could be used to write on top of the image in the mouse event, etc.

---

# Fin.
