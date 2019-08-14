### Extra / CART 253 / Fall 2018 / Pippin Barr

# `push()` and `pop()`

---

## In this module

- Style settings hell
- `push()` and `pop()`

---

## Style settings hell

- We've now seen a large number of functions we can use in our programs that influence how certain things get displayed on screen, including shapes, images, and text.
- For shapes we have functions like `rectMode()`, `ellipseMode()`, `fill()`, `stroke()`, ...
- For images we have `imageMode()`
- For text we have functions like `textSize()`, `textAlign()`, `textFont()`, ...
- These are all great, but they can get out of control
- Leading to style settings hell...

---

## Consider

```javascript
function setup() {
  createCanvas(500,500);
  textSize(32);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  fill(255,0,0);
  noStroke();
}

function draw() {
  background(255);
  rect(width/2,height/2,100,100);
  fill(0);
  text("This is nice!",width/2,height/2);

  if (mouseIsPressed) {
    textSize(200);
    textAlign(LEFT,CENTER);
    text("!!!!!!!!!!!!",0,height/2);
  }
}
```

---

## Style settings hell

- The problem here is that any style you set will be applied to __everything__ after it
- This includes in the __next__ `draw()` loop
- We wanted the `rect()` to be the red we set in `setup()` but it turns black because of the `fill(0)` on the line after the `rect()`
  - In fact it is red in the __first frame__, but then it's always black
- We wanted the `"This is nice!"` to be size `32` and aligned `CENTER,CENTER` but as soon as we press the mouse, those settings are replaced by the settings in the `if` statement
- Bad.

---

## `push()` and `pop()`

- What we need is a way to limit the area of effect of styling commands
- And for this we can use `push()` and `pop()`
- When we call `push()` it __saves__ the current style settings
- When we call `pop()` it __restores__ those settings

---

```javascript
function setup() {
  createCanvas(500,500);
  // Default style settings for text, shape, and color
  textSize(32);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  fill(255,0,0);
  noStroke();
}

function draw() {
  background(255);
  rect(width/2,height/2,100,100);
  push(); // Save the current settings (the defaults in this case)
  fill(0); // Make a change for this specific case
  text("This is nice!",width/2,height/2);
  pop(); // Restore the settings (the defaults)
  // fill() goes back to red)

  if (mouseIsPressed) {
    push(); // Save the current settings (still the defaults)
    textSize(200);
    textAlign(LEFT,CENTER);
    text("!!!!!!!!!!!!",0,height/2);
    pop(); // Restore the settings (the defaults)
    // textSize() goes back to 32
    // textAlign() goes back to CENTER, CENTER
  }
}
```

---

## Being really sure

- If you want to be really sure and have total control...
- ... you should never set any style properties in `setup()`
- ... and always set __every style property you want just before you use it__
- ... inside a `push()` and `pop()` to make sure it does affect anything else

```javascript
push();
rectMode(CENTER);
fill(255,0,0);
noStroke();
rect(width/2,height/2,100,100);
pop():
```

- Now those style settings will __only__ apply to the `rect()` and to nothing else in the program

---

# Fin.
