### Core / CART 253 / Pippin Barr

# Variables and scope

---

## In this module

- Where to declare variables in your program
- When to assign values to variables

---

## Where to declare variables?

- __Where__ we declare our variables matters
- For now we will focus on __two__ places we can use:
  - At the __top of the script__ outside all the curly brackets
  - Or __inside__ curly brackets

---

```javascript
let x;
let y;
let speed;
let circleSize = 50;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  speed = random(1,10);
  let circleColor = random(255);
  fill(circleColor);
}

function draw() {
  x += speed;
  ellipse(x,y,circleSize,circleSize);
}
```

---

## At the top

- In the previous script we see there are three variables declared at the __top of the script__, which are `x`, `y`, and `circleSize`
- This is a standard place to put variables you're going to use __everywhere__ in your program
- Variables declared __outside any curly brackets__ are called __global variables__ because they can be used or "seen" __anywhere__
- We needed to do this in part because __both__ `setup()` and `draw()` use `x` and `y`
- But we also put `circleSize` up there because it's something about the circle we want to remember and be able to change
- Note how much easier it is to change the circle's size when it's declared at the top!

---

## Inside curly brackets

- In the script we see that `circleColor` is declared __inside `setup()`'s curly brackets__
- Variables declared inside a curly brackets __can only be used inside those curly brackets__
- If we try to use `circleColor` inside `draw()`, for example, it won't exist!
- When you declare a variable inside curly brackets you should imagine it popping out of existence when the program reaches the closing curly
- So after `setup()` finishes at its final curly, `circleColor` is gone forever
- We do it this way because we only need to calculate `circleColor` right at the beginning, we don't need it again in this program

---

## Declared at the top, assigned later

- Notice how both `x` and `y` are __declared__ at the top of the program with no value
- We __wait__ to assign their values until `setup()` - why?
--

- Because it's only in `setup()` that `width` and `height` actually have values (thanks to `createCanvas()` which specifies them)
--

- It's common to __declare__ variables at the top of the program but only assign values later on

???

- The same thing goes for `speed` - we wait until `setup()` to calculate its __random__ value

---

## Declaring variables without `let`

- Very unfortunately, JavaScript lets us declare variables __without__ using `let`

```javascript
function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  circleColor = random(255);
  fill(circleColor);
}

function draw() {
  x = x + 1;
  ellipse(x,y,50,50);
}
```

- That's because if you don't use `let` to create a new variable, JavaScript creates it as a __global variable__ (like the ones declared at the top of the script)
- __Don't do this__, it can lead to a lot of confusion

## Being strict

- In fact, we can prevent ourselves from accidentally declaring global variables by including the code `"use strict";` at the top of our script file(s)
- This will force us to explicitly declare our variables (with `let`) before using them
- From now on our template will include this, and you should probably try to include it in your other files moving forward

---

# Fin.
