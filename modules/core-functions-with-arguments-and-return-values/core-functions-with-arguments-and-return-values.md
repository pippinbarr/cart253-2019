### Core / CART 253 / Fall 2018 / Pippin Barr

# Functions with arguments and return values

---

## In this module

- Giving functions arguments
- Returning values from functions

---

## Basic functions are great

- Last we we saw the idea of creating a function as a way to abstract away an idea in our code and give it a name, such as the idea of a `reset()` function

```javascript
function reset() {
  enemyX = 0;
  enemyY = random(0,height);
  avatarX = width/2;
  avatarY = height/2;
  dodges = 0;
}
```

- This allows us to call `reset()` anywhere its relevant in our code but only __change__ what it means to reset in __one place__
- It also allows us to __hide the details__ of resetting the game inside the function, so we don't always have to see it

---

## Drawing a caterpillar is so great!

```javascript
var startX;
var startY;
var segmentRadius = 20;
var numSegments = 10;

function setup() {
  createCanvas(640,480);
  noStroke();
  fill(80,200,80);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  var segmentsDrawn = 0;
  var x = startX;
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
var startX;
var startY;
var segmentRadius = 20;
var numSegments = 10;

function setup() {
  createCanvas(640,480);
  noStroke();
  fill(80,200,80);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  drawCaterpillar();
}

function drawCaterpillar() {
  var segmentsDrawn = 0;
  var x = startX;
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
var startX;
var startY;
var segmentRadius = 20;
var numSegments = 10;

function setup() {
  createCanvas(640,480);
  noStroke();
  fill(80,200,80);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  drawCaterpillar();
  drawCaterpillar();
}

...
```
--

- Oh no.

---

## What happened?

--
- That classic problem: drawing the same thing in the same place.

--
- The caterpillar function only knows how to draw the caterpillar according to a set of values we define __outside the function__
- `startX`, `startY`, `segmentRadius`, `numSegments` are all defined at the top of the code
- It would be nice to be able to tell `drawCaterpillar()` how to draw each caterpillar differently

---

## Arguments

- Lots of functions only make sense if you can give them __arguments__
- We don't get a rectangle if we just call `rect();` because it doesn't make sense
- We call `rect(0,0,100,100);` and specify __where__ the rectangle should be and what __dimensions__ it should have
- We want something like that for `drawCaterpillar()`

---

## Defining functions with information

```javascript
function drawCaterpillar(x,y) {
  var segmentsDrawn = 0;
  var nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- Here is `drawCaterpillar()` again, this time with two basic pieces of information

---

## Defining functions with information

```javascript
function drawCaterpillar(x,y) {
  var segmentsDrawn = 0;
  var nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- It's exactly the same syntax, but now we have something __inside the parentheses__: the information this function takes in order to do its job, basically a set of variables we can specify
- And the code in the function has changed a bit too to accommodate the information, since now we need to draw our ellipses based on the `x` and `y` specified

---

## Defining functions with arguments

```javascript
function drawCaterpillar(x,y) {
  var segmentsDrawn = 0;
  var nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- Inside the parentheses we have a __comma-separated list of the arguments this function takes__
- These are called the __parameters__ when we're defining a function
- We can see that this function expects some parameters called `x` and a `y`
- Because they're well-named, they're pretty self-explanatory, right?
- They refer to the position and size of the avatar to be drawn

???

- Note that other languages (like Java, C#, C++, and more) require that you specifies what __type__ of parameter the function takes - whether it's a number, a string, a truth value, etc.
- But because JavaScript doesn't explicitly keep track of types in variables, it doesn't keep track here either - it's up to us to get it right

---

## Defining functions with arguments

```javascript
function drawCaterpillar(x,y) {
  var segmentsDrawn = 0;
  var nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- After the parameters are defined inside the parentheses, we have the usual curly brackets containing the code of the function
- There we can see that we are __using the parameters just like variables__
- When the function is __called__ with actual values, the parameters will contain those values
- But when we're __defining__ the function, we don't know ahead of time what the values could be, so we write the function in terms of the parameters, using them like variables

---

## Calling a function with arguments

```javascript
function draw() {
  background(200,250,200);
  drawCaterpillar();
}
```

- If we try to call our function like this now, what will happen?
--

- Yep. Doesn't work.
- Unfortunately it doesn't __crash__ our program, it just doesn't do what we want
- That's because in JavaScript if we don't include a argument in a function call, it will just get set to `undefined`
- And if a argument for `ellipse()` is undefined, it just doesn't draw the ellipse (and doesn't complain!)

--

__So we need to put arguments into our function call__

---

## Calling a function with arguments

```javascript
function draw() {
  background(200,250,200);
  drawCaterpillar(100,100);
}
```

- Voilà! Now we can draw a caterpillar at that location!

---

## The order matters

```javascript
function draw() {
  background(200,250,200);
  drawCaterpillar(100,100);
}

function drawCaterpillar(x,y) {
  var segmentsDrawn = 0;
  var nextX = x;
  while (segmentsDrawn < numSegments) {
    ellipse(nextX,y,segmentRadius*2);
    nextX += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

- When you call a function you've defined, make sure you put your arguments in the __same order as the parameters in the definition__
- This is actually the only way JavaScript knows which argument is intended for which parameter

???

- It's actually possible to omit arguments and still have a function work
- When you call a function with too few arguments, the remaining parameters the function expects will be `undefined` and the function will run that way
- So if we call

```javascript
drawCaterpillar(100);
```

- Then the function will be called with `x` as `100` (because `x` is the first parameter) and with `y` as `undefined`
- This will mean the caterpillar won't appear on the screen, because you can't draw ellipses with an `undefined` position coordinate
- If you __wanted__ to be able to omit the `y` perhaps because you'll just have a default value for it, you have to write that into the function:

```javascript
function drawCaterpillar(x,y) {
  if (y === undefined) {
    y = 100; // Set y to the default of 100 if it's not specified
  }
  var segmentsDrawn = 0;
  var nextX = x;
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

- The function will run with `x` as `100` and `y` as `undefined`, but the `if` statement will catch the fact that no `y` was specified and set it to a default value of `100`
- Again, note that we have to do this ourselves in the code, it doesn't happen automatically

---

## Calling a function with arguments

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

## Calling a function with arguments

```javascript
function draw() {
  background(200,250,200);
  for (var i = 0; i < 10; i++) {
    var x = random(0,width);
    var y = random(0,height);
    drawCaterpillar(x,y);
  }
  noLoop();
}
```

- This works in all kinds of different situations
- We can call functions in loops, in conditionals, from inside other functions, and so on
- Whenever we want to draw a caterpillar, it's just `drawCaterpillar(x,y)`

???

- See that `noLoop()` thing at the end of `draw()`?
- If you call the `noLoop()` function it means that `draw()` will stop being called!
- Can be useful if you want to just halt your program and stop it animating
- If you want `draw()` to start up again, you can call... `loop()`
---

## As many parameters as you want!

- Currently there are other aspects of drawing a caterpillar we probably want to control
- Like how many segments it is, maybe what size the segments should be, ...
- So we could add further parameters to the function definition for those...

```javascript
function drawCaterpillar(x,y,segments,radius) {
  var segmentsDrawn = 0;
  var nextX = x;
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
  var segmentsDrawn = 0;
  var nextX = x;
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
  for (var i = 0; i < 10; i++) {
    var x = random(0,width);
    var y = random(0,height);
    var segments = random(1,20);
    var radius = random(10,20);
    var fillColor = color(random(255),random(255),random(255));
    drawCaterpillar(x,y,segments,radius,fillColor);
  }
}
```

---

## Functions with __results__

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- Sometimes we want functions that __calculate__ something
- What will this do?

???

- Not what we want!
- Even though we __seem__ to be converting `temperature` to its fahrenheit equivalent, when we print it out on the canvas, it hasn't changed...

---

## Functions with __results__

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- The `temperature` we declared inside `draw()` is __not the same__ as the `temperature` in `convertFahrenheitToCelcius()`!
- In fact the function __does__ does convert a variable called `temperature` to fahrenheit, just __not the one we wanted__

???

- That is, it's converting the __argument__ `temperature` that only exists in the function definition, not outside it
- This is that idea of __scope__ we talked about with variables
- If you declare a variable with `var` it will only exist inside any surrounding curly brackets
- Because `var temperature = 23;` is inside the curly brackets of `draw()` it doesn't exist for `convertFahrenheitToCelcius()`

---

## Functions with __results__

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- That's because when we call `convertFahrenheitToCelcius(temperature)` we are passing through the __value inside__ `temperature`
- Not the variable itself, just the number `23` in this case

---

## Many happy returns...

- But if we can send things into a function (as parameters), surely we can get things out?
- Yes. We. Can.
- This is most often helpful if we have a function that __calculates__ something
- Or sometimes a function that can __check__ something for us and report back

---

## `convertFahrenheitToCelcius()` sucks right now

```javascript
function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- It __does__ convert the value passed into fahrenheit
- And it __does__ store the result in a variable (the parameter variable)
- But it doesn't __give it back__ after it is calculated
- Pointless!

---

## `convertFahrenheitToCelcius()` sucks less...

```javascript
function convertFahrenheitToCelcius(temperature) {
  var result = (temperature - 32) / 1.8;
  return result;
}
```

- In order to give something back we need to `return` it inside the function
- We do this by writing `return` and then the thing we want to return, like the resulting variable called `result`
- The thing we `return` should be the __type__ of value appropriate to the function (since this one calculates a number, we should make sure we're returning a number)

---

## Damn it `convertFahrenheitToCelcius()`!!!

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  var result = (temperature - 32) / 1.8;
  return result;
}
```


- This still doesn't work. Why?
--

- It's because we don't actually __use__ the value `convertFahrenheitToCelcius` is giving back
- We don't "receive" it

---

## `convertFahrenheitToCelcius()` you beautiful function you!

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  var temperatureInFahrenheit = convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperatureInFahrenheit,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  var result = (temperature - 32) / 1.8;
  return result;
}
```

- We need to __receive__ the value calculated by `convertFahrenheitToCelcius`
- We can put it into an appropriately named variable, for instance!

---

## `convertFahrenheitToCelcius()` you beautiful function you!

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + convertFahrenheitToCelcius(temperature),width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  var result = (temperature - 32) / 1.8;
  return result;
}
```

- Or we can use it directly wherever we want to use the __value it calculates__
- Essentially we can imagine that function call is __replaced with the value it returns__

---

## Modularity and reuse!

Again, are two main reasons why functions are so great, and they have special names!

Functions are ___modular___. We can tidy our code into separate, self-contained blocks that make sense as a unit. Our code becomes more organised, more readable, easier to fix. (Often we also talk about this as __encapsulation__.)

Functions are ___reusable___. We can use a function over and over again without writing out all the code in it. This makes our programming more efficient and less lengthy. It's like free code!

---

## Food for thought

- With functions it's like we suddenly have this team of different workers who we can ask to do specific things for us whenever we want
- Sometimes we give them some information so they can do their job (parameters / arguments)
- Sometimes they come back and give us some information that they worked out (return values)

The weird thing is that these workers are all also... __us__.

???

- Because we write those functions, right? Get it? Deep.


---

# Fin.
