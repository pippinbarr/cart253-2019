### Input / CART 253 / Fall 2018 / Pippin Barr

# Keyboard input

---

## In this module

- `keyIsPressed`
- `keyPressed()`, `key`, and `keyCode`
- `keyReleased()` and `keyTyped()`

---


## p5 knows the keyboard!

- p5 has a number of special functions and variables that let us react to the keys on the keyboard
- They are quite similar to the functions for reacting to the mouse buttons
- Because... keys are just buttons

---

## `keyIsPressed`

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  console.log(keyIsPressed);
}
```

- The variable `keyIsPressed` is `true` when any key is pressed down and `false` otherwise
- It gives us a simple way of checking the keyboard

---

## `keyIsPressed` example

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  if (keyIsPressed) {
    background(255);
  }
  else {
    background(0);
  }
}
```

---

## `keyPressed()`

```javascript
function keyPressed() {
  // A key was pressed...
}
```

- If we include the function `keyPressed()` in our code then we can react when a key is pressed down
- This function is __called__ at the moment the user pressed a key down

---

## `keyPressed()` example

```javascript
function setup() {
  createCanvas(640,480);
  rectMode(CENTER);
  fill(0);
  noStroke();
}

function draw() {

}

function keyPressed() {
  rect(random(width),random(height),10,10);
}
```

- What will this do?
--

- When we press down a key, a little rectangle gets drawn in a random location on the canvas

---

## But...

- With `mousePressed()` we used `mouseX` and `mouseY` to get important information about the mouse press
- So with `keyPressed()` what do we probably want to know?
--

- __Which key__ was pressed?
--

- There are a couple of variables that help with this, called `keyCode` and `key`

---

## `keyCode` and `key`

- The variable `keyCode` always stores the __ASCII code__ of the most recently pressed key on the keyboard. It's a __number__
- The variable `key` always stores the __character__ of the most recently pressed key on the keyboard. It's a __string__.
- Let's try this...

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {

}

function keyPressed() {
  console.log("keyCode=" + keyCode + ", key=" + key);
}
```

???

- Note how this simple program is actually a pretty useful way to find out the keycodes of the various keys on the keyboard!

---

## `keyCode` for special keys

- The p5 Reference advises you to check `keyCode` when you're checking for a special key like alt, control, escape, return, an arrow key, etc.
- That's because those keys don't have an obvious symbol associated with them
- Helpfully, p5 provides a bunch of variables you can use to check `keyCode` against like `CONTROL`, `ALT`, `ESCAPE`, `RETURN`, `LEFT_ARROW`, `RIGHT_ARROW` and so on, e.g.

```javascript
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // Move the avatar left!
  }
  else if (keyCode === RIGHT_ARROW) {
    // Move the avatar right!
  }
}
```

???

- You can see at least on a Mac that the `key` variable does a pretty great job of tracking keys like control etc., it just stores "control", "alt", etc.
- However that's not guaranteed on different platforms
- Whereas the ASCII code we find in `keyCode` __is guaranteed__ to be the same across platforms, and so it's safer

---

## `keyCode` and arrow keys

```javascript
var x;
var y;
var vx = 0;
var vy = 0;
var speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
}

function draw() {
  x = x + vx;
  rect(x,y,20,20);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    vx = -speed;
  }
  else if (keyCode === RIGHT_ARROW) {
    vx = speed;
  }
}
```

---

## `keyReleased()`

```javascript
function keyReleased() {
  // A key was released...
}
```

- The obvious counterpart to `keyPressed()` is `keyReleased()`
- It gets called whenever p5 detects a key being released!
- Again, `keyCode` and `key` will contain the key in question

---

## `keyTyped()`

```javascript
function keyTyped() {
  // A key was types...
}
```

- `keyTyped()` is called when a key is actually typed that would appear in a text editor
- That is it __doesn't get called for special keys__
- But it does __take special keys into account__
- So if you type `shift + p` `key` will be `P` (a __capital__ P)
- This is obviously most helpful if you're interested in __text the user is typing in__

---

```javascript
var typedText = "";

function setup() {
  createCanvas(500,500);
  textSize(24);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(255);
  text(typedText,width/2,height/2);
}

function keyTyped() {
  typedText += key;
}
```

???

- Wow, displaying keys as they are typed!
- We've practically programmed Microsoft Word!
- Notice how "return" doesn't work though... what would we need?
- We'd need to use `keyPressed()` and check for `RETURN` in there in order to make our program respond to it properly
- Specifically we'd need to add

```javascript
function keyPressed() {
  if (keyCode === RETURN) {
    typedText += "\n";
  }
}
```

---

## `keyIsDown()`

```javascript
if (keyIsDown(LEFT_ARROW)) {
  // Move the avatar left
}
```

- We can use `keyIsDown()` to __check whether a specific key is down right now__
- The __parameter__ we give `keyIsDown()` is the __keyCode__ of the key we want to check
- So we can use all those special variables like `LEFT_ARROW`, `RIGHT_ARROW`, `CONTROL`, `SHIFT`, etc. with this one
- But it's hard to check letter keys without looking up their ASCII code

---

```javascript
var x;
var y;
var vx = 0;
var vy = 0;
var speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    vx = -speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    vx = speed;
  }
  else {
    vx = 0;
  }

  x = x + vx;
  rect(x,y,20,20);
}
```

???

- So we can handle this idea of moving an avatar around using `keyIsDown()` in `draw()` instead of using `keyPressed()` for example...
- Note how this makes it easy for us to stop our avatar when a movement key __is not down__
- Quite often programming for this style of controls uses something like `keyIsDown()` instead of event handlers
- What would we add to be able to control our avatar up and down?

```javascript
if (keyIsDown(UP_ARROW)) {
  vy = -speed;
}
else if (keyIsDown(DOWN_ARROW)) {
  vy = speed;
}
else {
  vy = 0;
}

y += vy;
```

---

# Fin.
