### Graphics / CART 253 / Pippin Barr

# Transformations

---

## In this module

- Radians
- Oscillators
- Transformations

---

## Remember angles?

- You know, like 90º and 180º and so on?
- Those are angles in __degrees__

---

## Meet radians...

- Radians are a different way of measuring an angle
- They represent the ratio of the arc made by the angle to its radius

- All of p5's functions that deal with angles use __radians__, ___not___ degrees

---

## Meet `radians()`

- Fortunately, if you prefer to think in degrees, you can
- Because p5 can convert for you

```javascript
let rightAngleInRadians = radians(90);
// rightAngleInRadians === π / 2 === 1.5708
let rightAngleInDegrees = degrees(rightAngleInRadians);
// rightAngleInDegrees === 90
```

- Or you can even use `angleMode(DEGREES)` to make p5 use degrees in all its functions

```javascript
sin(90); // This will use 90 radians - bad!
angleMode(DEGREES);
sin(90); // This will now correctly use 90 degrees
```

---

## Better keep it oscillated

- A great feature of trigonometric functions is __oscillation__
- Functions like __sine__ and __cosine__ oscillate between `-1` and `1` as the angle you give them increases (or decreases)

```javascript
let angle = 0;
let x = 0;

function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
}

function draw() {
  let y = height/2 + (sin(angle) * height/2);
  ellipse(x,y,10,10);
  x++; // Move to the right
  angle += 0.05; // Increase the angle, causing the sine function to oscillate
}
```

???

- Now we can look at what `cos()` and `tan()` look like too...

---

## Oscillating size...

- The numbers that come out of `sin()` as you increase the angle are just more numbers (between `-1` and `1` this time)
- You can apply these numbers to something else...

```javascript
let angle = 0;
let radius = 100;

function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
}

function draw() {
  let growth = sin(angle) * (radius/2);
  ellipse(width/2,height/2,radius*2 + growth);
  angle += 0.05;
}
```

---

## Oscillating color...

- If we use the `map()` function, we can convert from the -1..1 range into any other range that suits us
- Like colours...

```javascript
let angle = 0;
let radius = 200;

function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
}

function draw() {
  let fillColor = color(map(sin(angle),-1,1,0,255),map(cos(angle),-1,1,0,255,0),200);
  fill(fillColor);
  ellipse(width/2,height/2,radius*2);
  angle += 0.05;
}
```

---

## Oscillating text size...

- Or like text sizes...

```javascript
let angle = 0;
let string = "Trick or treat?";
let minTextSize = 24;
let maxTextSize = 100;

function setup() {
  createCanvas(600,600);
  background(0);
  stroke(0);
  textAlign(CENTER,CENTER);
}

function draw() {
  let fillColor = color(map(sin(angle),-1,1,0,255),map(cos(angle),-1,1,0,255,0),200);
  fill(fillColor);
  textSize(map(sin(angle),-1,1,minTextSize,maxTextSize));
  text(string,width/2,height/2);
  angle += 0.05;
}
```

---

## Origin story

- Remember the origin?
- That's where `0,0` is in the window
- Which is where?
--
 Yeah, the __top left__ of the window

--
- But it doesn't have to be there!
--

- And it could be useful to put it somewhere else, depending on what you're doing

---

## Move it

Compare

```javascript
function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  rect(0,0,100,100);
}
```

with

```javascript
function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  translate(width/2,height/2);
  rect(0,0,100,100);
}
```
--

- So `translate(x,y)` __moves__ the origin.
- It kind of seems like it moves the origin __to__ the coordinates specified... but...

---

## `translate(x,y)` is cumulative

- Compare:

```javascript
function draw() {
  translate(40,40); // Origin now at 40,40
  rect(0,0,10,10);
}
```

```javascript
function draw() {
  translate(40,40); // Origin now at 40,40
  translate(40,40); // Origin now at 80,80
  rect(0,0,10,10);
}
```

- So `translate()` moves the origin __by the amount specified__ from where it is at that time
- Note: `translate()` gets reset at the start of `draw()` each time


---

## You spin me right round...

- Being able to control where the origin is notably useful for __rotation__
- Using a function called `rotate()`

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  rotate(radians(45));
  rectMode(CENTER);
  rect(width/2,height/2,100,100);
}
```
--

- We probably thought this would rotate the rectangle around __its own centre__
- But... no.
- In p5 things rotate __around the origin__

---

## You spin me right round the origin

- We need to remember that `rotate()` will rotate around the __origin__
- So if we want to rotate our rectangle around its centre we need to...
--

- `translate()` the origin to the centre of the rectangle and __then__ rotate it
--


```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  translate(width/2,height/2);
  rotate(radians(45));
  rectMode(CENTER);
  rect(width/2,height/2,100,100);
}
```
--
- Wait, what?

---

## You spin me right round the origin and the origin is at `0,0`

- When we `translate()` the origin, we need to remember that `0,0` is now in a new location
- In fact `0,0` is exactly in the location we want to draw our square, so...

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  translate(width/2,height/2);
  rotate(radians(45));
  rectMode(CENTER);
  rect(0,0,100,100);
}
```

---

## One more time with feeling...

```javascript
let angle = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,100,100);
  angle += 0.01;
}
```

---

## Scaling

- Along with `rotate()` we get `scale()`
- `scale()` does what you might expect: it scales things by the amount you tell it to
- `scale(2)` scales things up by 2 times
- `scale(0.5)` scales things down to half their size
--

- But, like `rotate()`, it works based on __the origin__
- So, same rules apply

---

## Scaling as we go

```javascript
let theScale = 1;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  scale(theScale);
  rectMode(CENTER);
  rect(0,0,100,100);
  theScale += 0.01;
}
```

---

## Didn't I hear something about a 3rd dimension?

- p5 can do things in 3D as well as in 2D
- We won't go too deep into this here, but let's at least test the waters...
- First, you need to tell p5 to use 3D specifically in the `createCanvas()` function:

```javascript
createCanvas(640,480,WEBGL);
```

- __Really important__: When you're using `WEBGL` the __origin starts in the CENTRE of the canvas by default__

---

## What can I do?

- You can use `translate()`, `rotate()`, and `scale()` in all three dimensions...

```javascript
translate(x,y,z); // move the origin in three dimensions
rotateX(angle); // rotate around the x-axis
rotateY(angle); // rotate around the y-axis
rotateZ(angle); // rotate around the z-axis (the one pointing out of the screen)
scale(xScale,yScale,zScale); // scale around the origin
```

- Note that rotation has __three separate functions__, one for each axis
- Whereas translation and scaling just take up to __three parameters__, one for each axis

---

## What can I draw?

- There are 3D primitives like boxes...

```javascript
box(100,100,100); // Draw a box with sides of size 100 at the origin
```

- And spheres...

```javascript
sphere(100); // Draw a sphere with a radius of 100 at the origin
```

- And cylinders and cones and tori, oh my!
- Again, most of the time you'll want to __translate__ the origin, apply rotation and scale, then draw your thing...
- __Refer to the reference for details__

---

## Whoa, I know 3D...

```javascript
let angle = 0;
let scaleFactor = 1;

function setup() {
  createCanvas(640,480,WEBGL);
}

function draw() {
  background(0);
  rotateX(radians(45));
  rotateY(angle);
  scale(scaleFactor);
  box(50,50,50);
  angle += 0.01;
  scaleFactor += 0.01;
}
```

---

## How about...

```javascript
let angleX = 0.0;
let angleY = 0.0;

function setup() {
  createCanvas(500,500,WEBGL);
}

function draw() {
  background(0);
  rotateY(angleY);
  box(60);
  translate(50,0,50); // Translation in 3D!
  rotateX(angleX);
  box(30);
  angleX += 0.01;
  angleY -= 0.01;
}
```
--

- Cool, but what if I wanted those two boxes to rotate __separately__!

---

## Cumulative effects again

- Notice how that first `rotateY()` is being applied to the __second__ box as well
- It's cool because it's like the second box orbits the first (planet simulator here we come!)
- But you might want to be able to do rotations etc. completely separately

---

## Return of the `push()` and `pop()`

- Just as we can keep __styles__ from affecting the rest of the program by keeping them inside a `push()` and a `pop()`...
- It turns out we can do the same for all these __transformations__
- So if we surround a set of transformations and the drawing instruction they apply to with `push()` and `pop()` the transformations will __only__ apply to that drawing instruction...

---

## Separate rotations

```javascript
let angleX = 0.0;
let angleY = 0.0;

function setup() {
  createCanvas(500,500,WEBGL);
}

function draw() {
  background(0);
  push();
  rotateY(angleY);
  box(60);
  pop();
  push();
  translate(50,0,50);
  rotateX(angleX);
  box(30);
  pop();
  angleX += 0.01;
  angleY -= 0.01;
}
```

---

## Problem solved

- So, if you want to keep effects separate...
- Put them in between a `push()` and a `pop()`
- And all will be well!
- (Note that any transformations applied __before__ your `push()` will still be active, unless they were inside a `push()`/`pop()` pair)

---

## Activity: That's no cubic moon...

Write a script that draws
- A "sun cube" in the centre of the screen (make it yellow)
- A "planet cube" that rotates around the sun cube (maybe make it blue)
- A "moon cube" that rotates around the planet cube (maybe that can be grey)

Possible solution in slide notes.

???

```javascript
let sunAngle = 0.0;
let planetAngle = 0.0;
let moonAngle = 0.0;

function setup() {
  createCanvas(500,500,WEBGL);
}

function draw() {
  background(0);
  push();
  rotateY(sunAngle);
  fill(255,255,0);
  box(100);
  translate(150,0,0);
  rotateY(planetAngle);
  fill(0,0,255);
  box(50);
  translate(75,0,0);
  rotateY(moonAngle);
  fill(200,200,200);
  box(25);
  sunAngle += 0.01;
  planetAngle -= 0.05;
  moonAngle -= 0.005;
}
```

---

## Generative Art for Cheap!

- What if you were to draw this little planet system so the rotation happened on the z-axis?
- What if you deleted the `background()` instruction?
- What if you only drew the moon?
- What if you introduced some extra `translate()` commands on the `x` and `y` axes that use `random()` or even trigonometry to destabilize the orbits?
- What if you randomized the fill of the moon?
- What if it was a sphere instead?
- What if you added an extra rotation command on the `x` or `y` axes?
- Etsy Store Here We Come!
- (Example in slide notes.)

???

```javascript
let sunAngle = 0.0;
let planetAngle = 0.0;
let moonAngle = 0.0;
let planetWaveAngle = 0.0;
let moonWaveAngle = 0.0;
let totalAngle = 0;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  rotateX(totalAngle);
  rotateZ(sunAngle);
  fill(255,255,0);
  translate(150 + random(-10,10),sin(planetWaveAngle) * 50,0);
  rotateZ(planetAngle);
  fill(0,0,255);
  translate(75 + random(-5,5),random(-5,5),0);
  rotateZ(moonAngle);
  noStroke();
  fill(random(100,255),random(100,200),0);
  translate(sin(moonWaveAngle) * 40,0,0);
  sphere(20);
  sunAngle += 0.01;
  planetAngle -= 0.06;
  moonAngle -= 0.05;

  planetWaveAngle += 0.1;
  moonWaveAngle += 0.05;
  totalAngle += random(0.01,0.1);
}
```

---

## (Advanced) Nested pushing and popping...

- Here's an amazing example from the book __Learning Processing__ (which is about Processing, the Java-based programming environment that p5 is based on) that mesmerizes me
- On a good day I even understand it
- (See notes.)

???

```javascript
// Global angle for rotation
let angle = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(100);
  stroke(255);
  // Translate to center of window
  translate(width/2, height/2);
  // Loop from 0 to 360 degrees (2*PI radians)
  for (let i = 0; i < TWO_PI; i += 0.2) {
    // Push, rotate and draw a line!
    push();
    rotate(angle + i);
    line(0, 0, width/4, 0);
    // From 0 to 360 degrees (2*PI radians)
    for (let j = 0; j < TWO_PI; j += 0.5) {
      // Push, translate, rotate!
      push();
      translate(width/4, 0);
      rotate(-angle - j);
      line(0, 0, 50, 0);
      // Done with the inside loop, pop!
      pop();
    }
    // Done with the outside loop, pop!
    pop();
  }
  endShape();
  // Increment angle
  angle += 0.01;
}
```

---

# Fin.
