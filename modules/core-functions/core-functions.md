### Core / CART 253 / Pippin Barr

# Functions

---

## In this module

- Basic functions
- Functions with parameters
- Functions that return values

---

## Basic functions are great!

- Last we we saw the idea of creating a function as a way to abstract away an idea in our code and give it a name, such as the idea of a `resetGame()` function

```javascript
function resetGame() {
  // Reset the enemy's position
  enemyX = 0;
  enemyY = random(0,height);
  // Reset the avatar's position
  avatarX = width/2;
  avatarY = height/2;
  // Reset the dodge counter
  dodges = 0;
}
```

- This allows us to call `resetGame()` anywhere its relevant in our code but only __change__ what it means to reset the game in __one place__
- It also allows us to __hide the details__ of resetting the game inside the function, so we don't always have to see it

---

## Drawing a caterpillar is so great!

```javascript
let startX;
let startY;
let segmentRadius = 20;
let numSegments = 10;

function setup() {
  createCanvas(640,480);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  noStroke();
  fill(80,200,80);
  let segmentsDrawn = 0;
  let x = startX;
  while (segmentsDrawn < numSegments) {
    ellipse(x,startY,segmentRadius*2);
    x += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

---

## We should make it a function!

```javascript
function drawCaterpillar() {
  noStroke();
  fill(80,200,80);
  let segmentsDrawn = 0;
  let x = startX;
  while (segmentsDrawn < numSegments) {
    ellipse(x,startY,segmentRadius*2);
    x += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

---

## We should draw more than one caterpillar!

```javascript
let startX;
let startY;
let segmentRadius = 20;
let numSegments = 10;

function setup() {
  createCanvas(640,480);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  drawCaterpillar();
  drawCaterpillar();
}

// Function definition omitted for space
```
--

Oh no. What went wrong?

---

## What went wrong?

- The caterpillar function only knows how to draw the caterpillar according to a set of values we define __outside the function__
- `startX`, `startY`, `segmentRadius`, `numSegments` are all defined at the top of the code
- It would be nice to be able to tell `drawCaterpillar()` how to draw each caterpillar differently

???

- Note that you _could_ change the values in those variables __before__ calling `drawCaterpillar()`, but this is frowned upon - it breaks the __modularity__ of the function as now it depends on you taking another action before even calling it.

---

## Arguments

- Lots of functions only make sense if you can give them __information__
- We don't get a rectangle if we just call `rect();` because the computer wouldn't know where to draw it, or at what size
- Instead, we call `rect(0,0,100,100);` to specify __where__ the rectangle should be and what __dimensions__ it should have
- Those numbers we "give" to `rect()` are called __arguments__
- We want something like that for `drawCaterpillar()`

---

## Defining functions to take arguments

```javascript
function drawCaterpillar(x,y) {
  noStroke();
  fill(80,200,80);
  let segmentsDrawn = 0;
  let nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- Inside the parentheses we have a __comma-separated list of the information this function needs__
- These are called the __parameters__ when we're defining a function
- We can see that this function expects to be given two arguments, an `x` and a `y`
- Because they're well-named, they're pretty self-explanatory, right?

---

## Defining functions with arguments

```javascript
function drawCaterpillar(x,y) {
  noStroke();
  fill(80,200,80);
  let segmentsDrawn = 0;
  let nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- After the parameters are defined inside the parentheses, we have the usual curly brackets containing the code of the function
- Inside, we can see that we can __use the parameters like variables__
- When the function is __called__ with actual values, the parameters will contain those values

---

## Calling a function with arguments

```javascript
function draw() {
  background(200,250,200);
  drawCaterpillar(100,200);
}
```

- Voilà! Now we can draw a caterpillar at that location!

---

## The order matters

```javascript
function draw() {
  background(200,250,200);
  drawCaterpillar(100,200);
}

function drawCaterpillar(x,y) {
  let segmentsDrawn = 0;
  let nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- When you call a function you've defined, you put your arguments in the __same order as the parameters in the definition__
- This is actually the only way JavaScript knows which argument is intended for which parameter

---

## `undefined` parameters

- It's actually possible to omit arguments and still have a function work
- When you call a function with too few arguments, the remaining parameters are set to `undefined`
- So if we call

```javascript
drawCaterpillar(100);
```

- Then the function will be called with `x` as `100` (because `x` is the first parameter) and with `y` as `undefined`
- This will mean the caterpillar won't appear on the screen, because you can't draw ellipses with an `undefined` position coordinate
- So make sure you provide all the required parameters!

???

- If you __wanted__ to be able to omit the `y` perhaps because you'll just have a default value for it, you have to write that into the function:

```javascript
function drawCaterpillar(x, y = 100) {
  let segmentsDrawn = 0;
  let nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- Now if we call

```javascript
drawCaterpillar(100);
```

- The function will run with `x` as `100` and `y` as `100` (because it wasn't provided)

---

## Calling a function more than once with different arguments

```javascript
function draw() {
  background(200,250,200);
  drawCaterpillar(100,100);
  drawCaterpillar(100,200);
}
```

- Even better! We can draw __two__ caterpillars in different places using arguments!
- Notice, too, how we don't need to be able to __see__ the `drawCaterpillar()` function definition itself to use it
- So long as we __know how it works__, and we know the arguments it expects!
- This is a strong case for __good documentation__ like sensible comments that explain your functions!

---

## As many parameters as you want!

- Currently there are other aspects of drawing a caterpillar we probably want to control
- Like how many segments it is, maybe what size the segments should be, ...
- So we could add further parameters to the function definition for those...

```javascript
function drawCaterpillar(x,y,segments,radius) {
  let segmentsDrawn = 0;
  let nextX = x;
  while (segmentsDrawn < segments) {
    ellipse(nextX,y,radius*2);
    nextX += radius * 1.5;
    segmentsDrawn++;
  }
}
```

???

- We could include the color too:

```javascript
function drawCaterpillar(x,y,segments,radius,fillColor) {
  fill(fillColor);
  let segmentsDrawn = 0;
  let nextX = x;
  while (segmentsDrawn < segments) {
    ellipse(nextX,y,radius*2);
    nextX += radius * 1.5;
    segmentsDrawn++;
  }
}
```

- But now we need to be able to store a color as a single value
- We could use a number between 0 and 255 to have greyscale caterpillars
- But if we want colors we could either use hexadecimal colors (e.g. `"#aabbcc"`)
- Or we could use p5's `color` function

```javascript
function draw() {
  background(200,250,200);
  for (let i = 0; i < 10; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let segments = random(1,20);
    let radius = random(10,20);
    let fillColor = color(random(255),random(255),random(255));
    drawCaterpillar(x,y,segments,radius,fillColor);
  }
}
```

---

## "Pass by value"

- Something to remember is that when we provide arguments to a function __as variables__ it passes the __value__ through, not the variable
- The variable is replaced by its value __before__ the function is executed

```javascript
let myNumber = 10;

function setup() {
  console.log(`Before: ${myNumber}`); // 10
  addTenTo(myNumber); // This is really like saying addTenTo(10);
  console.log(`After: ${myNumber}`); // Still 10
}

function addTenTo(number) {
  number = number + 10; // This does NOT add 10 to myNumber
}
```

---

## Functions with __results__

- Sometimes we want to __calculate__ something with a function
- In that case we want to give the function the information it needs, as __arguments__
- But we also need the function to give information __back__

---

## Fahrenheit to Centigrade

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  let tempF = 23;
  let tempC = convertFahrenheitToCelcius(tempF);
  textAlign(CENTER,CENTER);
  textSize(24);
  text(`Today's temperature is ${tempC} degrees centigrade`,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  let result = (temperature - 32) / 1.8;
  return result;
}
```

- To send information back __out__ of a function we use `return` followed by the value we want to send out
- It often makes sense to __assign__ the value returned by the function to a variable so we can use it later

???

- We can also just call the function directly wherever we want to use the __value it calculates__

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  let tempF = 23;
  textAlign(CENTER,CENTER);
  textSize(24);
  text(`Today's temperature is ${convertFahrenheitToCelcius(tempF)} degrees centigrade`,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  let result = (temperature - 32) / 1.8;
  return result;
}
```

- Essentially we can imagine that function call is __replaced with the value it returns__

---

## Function that check things

- It can be really helpful to write functions that check particular situations of interest in your program
- You could check whether a specific position is off the canvas/screen for instance

```javascript
function isOffscreen(x,y) {
  if (x < 0 || x > width || y < 0 || y > height) {
    return true;
  }
  else {
    return false;
  }
}
```

- This saves you from writing that full `if` statement every time you want to check this quality

???

- In fact this can be abbreviated to:

```javascript
function isOffscreen(x,y) {
  return (x < 0 || x > width || y < 0 || y > height);
}
```

- The conditional expression will be evaluated and then the resulting truth value will be returned

---

## Modularity and reuse!

Again, are two main reasons why functions are so great, and they have special names!

Functions are ___modular___. We can tidy our code into separate, self-contained blocks that make sense as a unit. Our code becomes more organized, more readable, easier to fix. (Often we also talk about this as __encapsulation__.)

Functions are ___reusable___. We can use a function over and over again without writing out all the code in it. This makes our programming more efficient and less lengthy. It's like free code!

---

# Fin.
