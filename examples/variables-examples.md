# Variables

- [Numbers](#numbers)

## Numbers

A key point of interest of variables is that they can __change__. If they change over __time__ we get a dynamic program.

So one great way to play with variables is to ask ourselves what __numbers__ are available in our program and how we could change them if they were represented as variables.

### Changing parameters

Perhaps the most obvious place we use number is as __parameters__ for our functions. Those parameters determine how the function executes, which means they control things like size, position, and color.

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,255,0);
  fill(0);
  stroke(255);
  strokeWeight(5);
  ellipse(250,250,200,200);
}
```

This program contains a lot of numbers. Right now they're hard coded, but we could replace __every single number with a variable__, making the program more readable, and opening up the ability to __change__ those numbers.

```javascript
let fillColor = 0;
let strokeColor = 255;
let lineThickness = 5;
let circleX = 250;
let circleY = 250;
let circleSize = 200;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,255,0);
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(lineThickness);
  ellipse(circleX,circleY,circleSize,circleSize);
}
```

Now that every __use__ of a number (as parameters for a function) is a variable, we can __change__ those numbers over time. This means we can __control those properties__. As such we can control:

- The fill color (via `fillColor`)
- The stroke color (via `strokeColor`)
- The stroke weight (via `lineThickness`)
- The circle's position (via `circleX` and `circleY`)
- The circle's size (via `circleSize`)

Changing the value in any of these variables will cause the corresponding property of the circle (its colors, position, or size). Thus:

- We could make the circle get bigger over time by adding to the value in `circleSize`
- We could make the circle's fill change to white by adding to the value in `fillColor`
- We could make the circle's stroke change to black by subtracting from the value in `strokeColor`
- We could make the circle move left by subtracting from the value in `circleX`
- We could make the circle move down by adding to the value in `circleY`
- We could make the circle's outline get bigger by adding to the value in `lineThickness`

Obviously we don't need to do all of these at once, but we could!

```javascript
let fillColor = 0;
let strokeColor = 255;
let lineThickness = 5;
let circleX = 250;
let circleY = 250;
let circleSize = 200;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,255,0);
  // Change all the variables to change the circle!
  circleSize = circleSize + 1;
  fillColor = fillColor + 1;
  strokeColor = stroke Color - 1;
  circleX = circleX - 1;
  circleY = circleY + 1;
  lineThickness = lineThickness + 1;
  // Now all the values in the variables have changed, we can draw the circle
  // with its new properties!
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(lineThickness);
  ellipse(circleX,circleY,circleSize,circleSize);
}
```

### Changing the rate of change

We still have hardcoded numbers in the previous program because all the amounts we were adding and subtracting were just written as numbers. It would be better if those numbers were variables too!

```javascript
let fillColor = 0;
let strokeColor = 255;
let lineThickness = 5;
let circleX = 250;
let circleY = 250;
let circleSize = 200;

let sizeChange = 1;
let fillChange = 1;
let strokeChange = -1;
let vx = -1;
let vy = 1;
let thicknessChange = 1;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,255,0);
  // Change all the variables to change the circle!
  circleSize = circleSize + sizeChange;
  fillColor = fillColor + fillChange;
  strokeColor = strokeColor - strokeChange;
  circleX = circleX + vx;
  circleY = circleY + vy;
  lineThickness = lineThickness + thicknessChange;
  // Now all the values in the variables have changed, we can draw the circle
  // with its new properties!
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(lineThickness);
  ellipse(circleX,circleY,circleSize,circleSize);
}
```

This program behaves the same way, but now we have __names__ for the amounts of change we're applying. Notice:

- that we can call the change in x position `vx` because it is quite literally the x velocity of the circle, same for `vy`.
- that we can move the idea of negative change into the value in the variables, so that we always just __add__ the value of the variable to its corresponding variable to change it (adding a negative is the same as subtraction)

The real beauty of this, though, is that now we can __change the variables that contain the amount of change__! This allows for "acceleration" and "deceleration" of the rate of change. That is, the circle could move progressively faster to the left, say, or it could change color toward white progressively faster.

So, if we wanted the circle to accelerate to the left, we'd increase `vx` over time! If we wanted the circle to change to white faster over time, we'd increase `fillChange` over time!

```javascript
let fillColor = 0;
let strokeColor = 255;
let lineThickness = 5;
let circleX = 250;
let circleY = 250;
let circleSize = 200;

let sizeChange = 1;
let fillChange = 1;
let strokeChange = -1;
let vx = -1;
let vy = 1;
let thicknessChange = 1;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,255,0);
  // Change the "change" variables
  vx = vx + 1;
  fillChange = fillChange + 1;
  // Change all the variables to change the circle!
  circleSize = circleSize + sizeChange;
  fillColor = fillColor + fillChange;
  strokeColor = strokeColor - strokeChange;
  circleX = circleX + vx;
  circleY = circleY + vy;
  lineThickness = lineThickness + thicknessChange;
  // Now all the values in the variables have changed, we can draw the circle
  // with its new properties!
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(lineThickness);
  ellipse(circleX,circleY,circleSize,circleSize);
}
```

### Naming the rate of change

And really, it would be better to give __those__ numbers names too. The name for the value that changes velocity over time is acceleration, for instance.

```javascript
let fillColor = 0;
let strokeColor = 255;
let lineThickness = 5;
let circleX = 250;
let circleY = 250;
let circleSize = 200;

let sizeChange = 1;
let fillChange = 1;
let fillChangeRate = 1;
let strokeChange = -1;
let vx = -1;
let vy = 1;
let ax = -1;
let thicknessChange = 1;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,255,0);
  // Change the "change" variables
  vx = vx + ax;
  fillChange = fillChange + fillChangeRate;
  // Change all the variables to change the circle!
  circleSize = circleSize + sizeChange;
  fillColor = fillColor + fillChange;
  strokeColor = strokeColor - strokeChange;
  circleX = circleX + vx;
  circleY = circleY + vy;
  lineThickness = lineThickness + thicknessChange;
  // Now all the values in the variables have changed, we can draw the circle
  // with its new properties!
  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(lineThickness);
  ellipse(circleX,circleY,circleSize,circleSize);
}
```

### And more!

These principles apply to __any number parameters of a function__. It just so happens that the number we've used apply to things like position, size, and color, but the same idea of change applies to anything else you encounter: you use __variables__ as parameters instead of numbers, and then you __change__ the values in the variables to __change the outcome of the function__.

The actual ways you change the variables is, of course, dependent on the kinds of effects you want to achieve.
