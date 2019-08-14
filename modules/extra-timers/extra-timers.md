### Extra / CART 253 / Fall 2018 / Pippin Barr

# Timers

---

## In this module

- It would be nice to keep track of time
- A timer using `setTimeout()`
- (More complicated) Writing our own timer using `millis()`

---

## Time

- It's often very helpful for a program to have a sense of time
- Maybe it needs to wait for some number of seconds before switching to a new screen
- Maybe you want to create pressure on a player by giving them a time limit
- Maybe you want to do something else!

---

## A timer using `setTimeout()`

- JavaScript in browsers has a special function called `setTimeout` that allows us to wait for a specified period of time and then call a specific function
- It looks like this

```javascript
setTimeout(timerFinished,1000);

function timerFinished() {
  console.log("The timer finished!")
}
```

- `setTimeout()` expects times in milliseconds
- So the first parameter is the __function to call when the timer finishes__
- And the second parameter is the __number of milliseconds__ the timer runs for

---

## A timer using `setTimeout()`

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {

}

// mousePressed()
//
// When the user clicked, we start the timer, and will display a message in draw()
// when it finishes
function mousePressed() {
  setTimeout(timerFinished,1000);
}

// timerFinished()
//
// The function that is called when the timer finished
// It just draws a rectangle to prove something happened
function timerFinished() {
  rect(random(width),random(height),50,50);
}
```

---

## `setTimeout()` returns a timer object

- We can actually store the timer `setTimeout()` creates in a variable
- And with that variable we can also __cancel__ a timer with `clearTimeout()`
- To use `clearTimeout()` we provide it with the variable holding the timer we want to stop

---

## `clearTimeout()`

```javascript
let timer;

function setup() {
  createCanvas(500,500);
}

function draw() {
}

// Start the timer when the mouse is clicked
function mousePressed() {
  timer = setTimeout(timerFinished,1000);
}

// Draw a rectangle when the timer finishes
function timerFinished() {
  rect(random(width),random(height),50,50);
}

// Cancel the timer if a key is pressed
function keyPressed() {
  clearTimeout(timer);
}
```

---

## A disadvantage of `setTimeout()`

- One thing that `setTimeout()` does allow us to do easily is check how much time __remains__ in the timer
- Clearly that's a problem if we want to display a timer on the screen while it's running

---

## (More complicated) A timer with `millis()`

- p5 provides a function called `millis()` that always returns the number of milliseconds that have passed __since the program started__
- This is clearly a representation of time
- If we really want to, we can therefore create a timer by keeping track of when the timer started and checking whether enough time has elapsed for it to stop
- This is __not as easy as `setTimeout()`__
- It's here so we can see a basic example of implementing this idea

---

## A timer with `millis()`

- See notes

???

```javascript
// A timer object that contains the information it needs to run
let timer = {
  startTime: 0,
  running: false,
  duration: 1000,
  finished: false
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  // Check if the timer is running
  if (timer.running) {
    // If so, check if it has finished by working out how many
    // milliseconds have elapsed since it started
    if (millis() - timer.startTime >= timer.duration) {
      // If the number of milliseconds elapsed is greater than
      // the timer's duration, then it's done!
      timer.finished = true;
    }
    // Check if the timer has finished
    if (timer.finished) {
      // React in some way... like drawing a square (boring)
      rect(random(width),random(height),50,50);
      // Set the timer to not running so we stop checking it
      timer.running = false;
    }
  }
}

// mousePressed()
//
// When the user clicked, we start the timer, and will display a message in draw()
// when it finishes
function mousePressed() {
  // Set the start time based on millis()
  timer.startTime = millis();
  // Set running true and finished false so that the timer is running
  timer.running = true;
  timer.finished = false;
}
```

---

# Fin.
