### Core / CART 253 / Fall 2018 / Pippin Barr

# While loops

---

## In this module

- Repetition
- Repetition
- Repetition

---

## Repetition

- We've seen how useful repetition is in __time__ to create a dynamic program using the `draw()` loop
- But repetition can also be useful when we just need to do the 'same kind of thing' over and over in our code

---

## Drawing a caterpillar...

```javascript
let startX;
let startY;
let segmentRadius = 20;

function setup() {
  createCanvas(640,480);
  noStroke();
  fill(80,200,80);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  ellipse(startX,startY,segmentRadius*2);
  ellipse(startX + segmentRadius*1.5,startY,segmentRadius*2);
  ellipse(startX + segmentRadius*3,startY,segmentRadius*2);
  ellipse(startX + segmentRadius*4.5,startY,segmentRadius*2);
  ellipse(startX + segmentRadius*6,startY,segmentRadius*2);
  ...
}
```
--
And then you die of boredom.

---

## But I don't _want_ to die of boredom...

- This feels too much like work, and computers are meant to do that!
- Can't we just tell JavaScript how to draw __one__ segment of the caterpillar, and have it understand how to draw __all__ of them?
- Yes, we can do that
- And it's called a __loop__

---

## `while`ing away the time...

```javascript
while (condition) {
  // Do something, like draw a caterpillar segment!
}
```

- This will execute the code inside the curly brackets __over and over__ while the __condition is true__
- It checks the condition, if it's true it runs the code, then it checks the condition again, if it's true it runs the code, and so on until the condition is __false__, then it's over.
- It's a lot like an `if` statement that runs its code over and over until the condition becomes false

---

## Drawing that caterpillar...

```javascript
while (theCaterpillarIsNotFinished) {
  // Add a segment
}
```

- This is theoretically what we need, but obviously it won't work
- We need some specific elements...

---

## In the loop

- There are three main things we need to know when we write a loop:

- A ___starting condition___ that defines the way things are before the loop starts. (The caterpillar is not drawn.)
- A ___stopping condition___ that defines when we should stop our loop. (The caterpillar is drawn.)
- One or more ___actions___ that are carried out inside the loop that eventually cause it to stop. (Draw one segment.)

---

## Caterpillar with a loop

```javascript
let startX;
let startY;
let segmentRadius = 20;
let numSegments = 10;

function setup() {
  createCanvas(640,480);
  noStroke();
  fill(80,200,80);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  let segmentsDrawn = 0;
  let x = startX;
  while (segmentsDrawn < numSegments) {
    ellipse(x,startY,segmentRadius*2);
    x += segmentRadius * 1.5;
    segmentsDrawn++;
  }
}
```

???

- Here we have a loop version of drawing the caterpillar!
- The start conditions are the variables along with the size of the window
- The stopping condition is when `segmentsDrawn` is equal to `numSegments` (e.g. we've drawn the caterpillar)
- The actions are to draw a segment in the current location, and then __move__ the location to the right

---

## The loop

```javascript
while (segmentsDrawn < numSegments) {
  ellipse(x,startY,segmentRadius*2);
  x += segmentRadius * 1.5;
  segmentsDrawn++;
}
```

- The loop __ends__ when `segmentsDrawn` is equal to `numSegments` (e.g. all the segments have been drawn)
- Notice that we need to __change__ `segmentsDrawn` in the loop or it would __never end__
- Because we need the condition to become __false__ at some point
- Note we also change `x` each time through to move the drawing position of the segments

---

## Cutening step

- See slide notes for adding a face to the caterpillar

???

- Code below
- Note how we have the go __back__ by one step for `x` in order to get the right position

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
  fill(80,200,80);
  noStroke();
  let segmentsDrawn = 0;
  let x = startX;
  while (segmentsDrawn < numSegments) {
    ellipse(x,startY,segmentRadius*2);
    x += segmentRadius * 1.5;
    segmentsDrawn++;
  }
  x -= segmentRadius * 1.5;
  fill(0);
  stroke(0);
  ellipse(x - segmentRadius/2,startY,5);
  ellipse(x + segmentRadius/2,startY,5);
  line(x - segmentRadius/2,startY + segmentRadius/4,x + segmentRadius/2,startY + segmentRadius/4)
}
```

---

## So what does this do?

```javascript
let x;
let y;
let startRadius = 100;
let startFill = 0;

function setup() {
  createCanvas(500,500);
  noStroke();
  x = width/2;
  y = height/2;
}

function draw() {
  background(255);
  let radius = startRadius;
  let currentFill = startFill;
  while (radius > 0) {
    fill(currentFill);
    ellipse(x,y,radius);
    radius--;
    currentFill = map(radius,0,startRadius,255,0);
  }
}
```

???

- It draws a sphere!
- Kind of.
- It drawns diminishing circles that also change their fill color relative to their size (using `map`)
- The result looks uncannily like a sphere, but we know better!
- But when is a sphere a sphere, anyway?

---

_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  

???

- The song that doesn't end from Lamb Chop Play-Along:
- https://www.youtube.com/watch?v=HNTxr2NJHa0
- You're welcome.

---

```javascript
while (true) {
  console.log("♬ This is the song that doesn't end... ♬");
}
```

- This is an infinite loop
- It is evil, because will never end, which is a really long time
- It will crash the program
- And sadly not all infinite loops are as obvious as this one

---

## Is this... okay?

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  let x = 0;
  while (mouseX < 50) {
    rect(x,mouseY,10,10);
    x += 20;
  }
}
```

???

- What happens here?
- It kind of looks like it should be okay... like it should draw circles to the mouse location if the mouse is to the left of the canvas...
- But there's a trap here, which is that `mouseX` will __never change__
- `mouseX` will always be `0`, and so the `while` condition will always be `true`
- `mouseX` never changes, because we __never escape from that `while` loop__... it goes on forever
- It's called an __infinite loop__

---

## This is what infinite loops looks like

```javascript
let x;
let y;

function setup() {
  createCanvas(500,500);
  x = 0;
  y = height/2;
}

function draw() {
  while (x > width/2) {
    rect(random(width),random(height),40,40);
  }

  stroke(random(255));
  fill(random(255));
  ellipse(x,y,100,100);
  x++;
}

function mousePressed() {
  ellipse(random(width),random(height),40,40);
}
```

???

- Importantly, notice that `x > width/2` starts out false, because `x` starts at `0`
- So the program runs
- But `x` goes up by one per frame, which means that at some point it's going to end up being `250` and `250` is __not less than__ `width/2` (which is also `250`)
- On the frame that happens, the while loop becomes an __infinite loop__
- We can tell while watching the program run that something has gone wrong because
  - We see the ellipse stop moving across the screen
  - The `mousePressed()` function no longer responds to our mouse
- Importantly we __won't__ see anything wrong in the JavaScript console
- To the program nothing is "wrong", it's just busy going through that `while` loop... forever
- But for us, the program has effectively crashed

---

## Star field

```javascript
let numStars = 1000;

function setup() {
  createCanvas(500,500);
  background(0);

  let starsDrawn = 0;
  while (starsDrawn < numStars) {
    let x = random(0,width);
    let y = random(0,height);
    let starSize = random(1,2);
    stroke(random(100,255));
    rect(x,y,starSize,starSize);
    starsDrawn += 1;
  }
}

function draw() {
}
```

???

- Much easier than drawing each of 1000 stars individually right?
- What happens if you move the while loop (including the starting condition) into the `draw()` loop?
- Yeah, we get TV static!
- Kind of a bummer if you wanted to maintain that same star-field
- We'll see ways to maintain it in code later, but really you should likely just use a background image if you want a fixed star field (or similar randomly generated image)

---

## Bonus wiggling

- See slide notes

???

- Here we're using `sin()` to calculate a `y` value for each segment based on a sine function
- Because we incrementally change the angle (`theta`) going into the sine function per segment, we get a wave effect
- Don't worry if this is a bit much right now, keep it in your back pocket

```javascript
let startX;
let startY;
let segmentRadius = 20;
let numSegments = 10;
let wiggleRange = 20;

function setup() {
  createCanvas(640,480);
  startX = width/5;
  startY = height/2;
}

function draw() {
  background(200,250,200);
  fill(80,200,80);
  noStroke();
  let segmentsDrawn = 0;
  let x = startX;
  // See in the loop for an explanation of this line - we're doing it here
  // to calculate the starting position of the caterpillar based on sine
  let y = startY + (sin(theta) * wiggleRange);
  let theta = 0;
  while (segmentsDrawn < numSegments) {
    // Calculate y based on a sine wave
    // Remember that sin() gives back a number between -1 and 1
    // So we'll be adding a number between -wiggleRange and wiggleRange to the base startY position
    ellipse(x,y,segmentRadius*2);
    x += segmentRadius * 1.5;
    y = startY + (sin(theta) * wiggleRange);
    // By incrementing theta we're changing the angle we're calculating the sine of
    // that will change the output, and we'll see a sine wave
    theta += 1;
    segmentsDrawn++;
  }
  x -= segmentRadius * 1.5;
  fill(0);
  stroke(0);
  ellipse(x - segmentRadius/2,y,5);
  ellipse(x + segmentRadius/2,y,5);
  line(x - segmentRadius/2,y + segmentRadius/4,x + segmentRadius/2,y + segmentRadius/4)
}
```

---

## Loops!

- So loops exist to make repetitive actions easier
- We're leveraging one of the great powers of computers: they don't get bored, they don't give up
- This allows us to play with amazing scales of repetition!

---

# Fin.
