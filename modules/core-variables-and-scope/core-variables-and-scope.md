### Core / CART 253 / Pippin Barr

# Variables and scope

---

## In this module

- Where to declare variables in your program
- When to assign values to variables

---

## Where to declare variables?

- __Where__ we declare our variables matters
- There are really just __two__ places we can use:
  - At the __top of the script__ outside all the curly brackets
  - Or __inside__ a set of curly brackets

---

```javascript
let x;
let y;
let speed;

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
  let circleSize = 50;
  ellipse(x,y,circleSize,circleSize);
}
```

---

## 1. At the top

- In the previous script we see there are three variables declared at the __top of the script__, which are `x`, `y`, and `circleSize`
- This is a standard place to put variables you're going to use __everywhere__ in your program
- Variables declared __outside any curly brackets__ are called __global variables__ because they can be used or "seen" __anywhere__
- We needed to do this in part because __both__ `setup()` and `draw()` use `x` and `y`
- What if we also wanted to make the circle change size?

???

- If we wanted to also be able to change `circleSize` over time we should __move the declaration to the top__ and then change the value in `draw()`

---

## 2. Inside curly brackets

- In the script we see that `circleColor` is declared __inside `setup()`'s curly brackets__
- Variables declared inside a curly brackets __can only be used inside those curly brackets__
- If we try to use `circleColor` inside `draw()`, for example, it won't work!
- When you declare a variable inside curly brackets you should imagine it __only exists inside those brackets and nowhere else__
- So after `setup()` finishes at its final curly, `circleColor` is gone
- We only need to calculate `circleColor` once at the beginning and don't plan to change it, so there's no need for it to be at the top, cluttering things up

---

## Declared at the top, assigned later

- Notice how both `x` and `y` are __declared__ at the top of the program with no value
- We __wait__ to assign their values until `setup()` - why?
--

- Because it's only in `setup()` that `width` and `height` actually have values (thanks to `createCanvas()` which specifies them)
--

- It's not uncommon to __declare__ variables at the top of the program but only assign values later on
- It's still probably better to put in default values anyway, though, to avoid the dreaded `undefined`

???

- The same thing goes for `speed` - we wait until `setup()` to calculate its __random__ value

---

## Uh-oh: Declaring variables without `let`

- Very unfortunately, by default JavaScript lets us declare variables __without__ using `let`

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

---

## Being strict

- We can prevent ourselves from accidentally declaring global variables by including the code `"use strict";` at the top of our script file(s)
- This will force us to explicitly declare our variables (with `let`) before using them
- From now on our template will include this, and you should probably try to include it in your other files moving forward, it will save many headaches

---

# Fin.
