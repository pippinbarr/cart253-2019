### Input / CART 253 / Fall 2018 / Pippin Barr

# Mouse input

---

## In this module

- `mouseX` and `mouseY`
- `mouseIsPressed`
- `mousePressed()` and friends

---


## p5 knows the mouse!

- We've already seen that p5 always knows __where the mouse is__
- We can use `mouseX` and `mouseY` any time to get the mouse location
- But p5 has some special functions and variables that let us react to the __mouse button__ too

---

## `mouseIsPressed`

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  if (mouseIsPressed) {
    background(0);
  }
  else {
    background(255);
  }
}
```

- The variable `mouseIsPressed` is `true` when a mouse button is pressed down and `false` otherwise
- It gives us a simple way of checking the mouse

---

## `mousePressed()`

```javascript
function mousePressed() {
  // A mouse button was pressed...
}
```

- If we include the function `mousePressed()` in our code then we can react __when__ a mouse button is pressed down
- This function is __called once__ at the __moment__ the user clicks a mouse button down
- This kind of function is called an __event handler__ because it is called automatically when a particular event (like a mouse press) happens
- Notice this is __different__ from `mouseIsPressed`, which is `true` or `false` at any moment
- `mousePressed()` is only called __at the moment the press happens__...

---

## `mousePressed()` example

```javascript
function setup() {
  createCanvas(640,480);
  rectMode(CENTER);
  fill(255,0,0);
  noStroke();
}

function draw() {
  // Nothing...
}

function mousePressed() {
  rect(mouseX,mouseY,10,10);
}
```

- What will this do?

--
- When we click the mouse in our window, a little rectangle gets drawn at the click location
--

- Notice how mouse-based event handlers like `mousePressed()` often use `mouseX` and `mouseY`
- Because __when__ the mouse is clicked we very often want to know __where__ it was

---

## `mouseReleased()`

```javascript
function mouseReleased() {
  // A mouse button was released...
}
```

- The obvious counterpart to `mousePressed()` is `mouseReleased()`
- Same kind of thing, but it gets called whenever p5 detects the mouse button being released!

---

## `mouseReleased()` example

```javascript
let on = false;

function setup() {
  createCanvas(640,480);
}

function draw() {
  if (on) {
    background(255);
  }
  else {
    background(0);
  }
}

function mouseReleased() {
  on = !on; // Flips the value of on!
}
```

- What will this do?
--

- When we click and release the "light" will go on or off

???

- Consider programming a button for example
- You might want it to highlight in a new colour when the mouse is pressed down on it
- But you might only want it to perform its action when the mouse is released on it

---

## `mouseButton`

- We've been talking about "a button" being pressed and released, but how do you know which one?
- The variable `mouseButton` has a string in it which indicates __which button was most recently pressed__
- So when `mousePressed()` and `mouseReleased()` are called, `mouseButton` will tell you which mouse button is was
- It will be one of `LEFT`, `RIGHT` or `CENTER`...

---

## Checking for a left click specifically...

```javascript
let on = false;

function setup() {
  createCanvas(640,480);
}

function draw() {
  if (on) {
    background(255);
  }
  else {
    background(0);
  }
}

function mouseReleased() {
  if (mouseButton === LEFT) {
    on = !on; // Flips the value of on!
  }
}
```

---

## mouseMoved()

```javascript
function mouseMoved() {
  // The mouse moved!
}
```

- `mouseMoved()` is called whenever the mouse moves... surprise!
- Note that it is only called when the mouse moves __inside the canvas of your program__

---

## mouseDragged()

```javascript
function mouseDragged() {
  // The mouse was dragged!
}
```

- `mouseDragged()` is called whenever the mouse moves with a button held down
- We can imagine how we could program that ourselves using `mouseMoved()` right?

???

- Inside `mouseMoved()` we would check to make sure `mouseIsDown` is true using...
- ... an `if` statement

---

## mouseWheel()

```javascript
function mouseWheel(event) {
  // The mouse wheel was moved!
  console.log("Mouse moved by " + event.delta + " pixels.");
}
```

- `mouseWheel()` is called whenever the mouse wheel is moved
- This __includes touch-based scrolling on a trackpad__
- Notice that this function takes a __parameter__ called `event`
- Inside the function, we can use `event.delta` tells us __how much the wheel moved in this frame__
- It's positive if it scrolled down and negative if it scrolled up

???

- `delta` comes from physics, where that Greek symbol (Δ) is used to represent change over time
- You'll see if often in programming for the same reason

---

# Fin.
