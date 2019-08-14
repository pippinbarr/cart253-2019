### Debugging / CART 253 / Fall 2018 / Pippin Barr

# Time

---

## In this module

- Debugging time with `console.log()`
- Advanced time debugging with breakpoints and stepping

---

## The problem with time

- The problem with time is that it keeps happening
- It can be hard to hold the whole program in your head and understand in what order things will happen and how they can affect each other
- This is especially true of the parts of your program that aren't directly visible in the running version itself (e.g. as images, text, sounds, etc.)

---

## `console.log()`

- One simple and effective way to stay on top of things is to use `console.log()` to keep you updated on what's going on
- While you're still getting used to it, for example, it can be a good idea to have a `console.log()` at the top of each function that just announces that the function has been called
- This way you can look at the JavaScript console and at least know which functions are happening
- Over time you'll get more and more of a feel for it and trust your programming more and won't need to do this as much (though I still do it!)

---

```javascript
function preload() {
  console.log("preload()");
}

function setup() {
  console.log("setup()");
  frameRate(1);
}

function draw() {
  console.log("draw()");
}

function mousePressed() {
  console.log("mousePressed()");
}

function keyTyped() {
  console.log("keyTyped()");
}
```

???

- We already saw this in the module on time itself
- Because it's really helpful!

---

## Did that thing happen or not?

- Using `console.log()` to announce when things happen is especially useful when you can't tell from looking at the program
- What if you use a random number to decide whether to change a variable like this:

```javascript
function mousePressed() {
  // Increase x by 1 half the time
  if (random() < 0.5) {
    x = x + 1;
  }
}
```

- You won't know on which clicks `x` goes up and on which it doesn't
- Unless you use `console.log()`

---

```javascript
var x = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {

}

function mousePressed() {
  // Increase x by 1 half the time
  if (random() < 0.5) {
    x = x + 1;
    console.log("x increased to " + x + "!");
  }
}
```

---

## `console.log()`!

- Basically `console.log()` is a really great way to notify yourself of what's going on in your program
- And it's excellent at this when _time_ is involved too
- It can tell you what's happening on each `draw()` frame, or when an event handler like `mousePressed()` got called, or when one part of your `if`-statement was executed, and so on
- Use it often!

---

## (Advanced) Breakpoints

- The developer tools in Chrome include a special debugging concept called _breakpoints_
- Setting a breakpoint in our code _pauses the program_ when the it hits that line of code
- Once the program is paused we can check things like the values in variables knowing the program isn't in the process of changing them
- To set a breakpoint we in the developer tools view we
  - go to __Sources__ (which is right next to __Console__)
  - __select our script__ from the file explorer on the left
  - __select the line number__ we want the program to pause at
- Now the program will pause at that moment

---

## Placing a breakpoint

- Let's try this with the previous code!
- __Run it__ in your browser if you aren't already
- __Open the JavaScript console__
- __Select Sources__
- __Select line 14__ (the line `x = x + 1;`)
- __Click in the canvas__ and see if the breakpoint triggers...
- ... it might not! Keep clicking until it does.
- Why doesn't it always trigger?

---

## A paused program

- Now our program is __paused__
- You can see in the browser window it says "Paused in debugger"
- With the program paused we can examine variables and expressions at our leisure!
- If we switch back to the __Console__ we can type things in to check out the state of the program
- If we type in `x` and hit return, for example, the console will tell us the _value_ of `x` right now!
- (We can also use the __Watch__ option we talked about earlier)

---

## Advancing time

- Once we're satisfied with the state of the program and have solved any problems we can solve, there are two main ways to advance time
- One is to set the program running again
- The other is to "step" through it

---

## Play

- One is to press the __Resume script execution__ button (the play/pause button) - this will start the program running and it won't pause until our breakpoint gets hit again (when we click)
- This is useful if we're wanting to see this same breakpoint multiple times, but we don't care about going in slow motion through the whole program
- This is especially true if it might behave differently at different times, for example

---

## Step

- The other is to press the __Step over next function call__ button (the arrow jumping over a dot) which will go to the __next line of code__ in the program and then pause
- This allows us to very slowly creep through the code in the program line by line
- It sounds tedious (and it can be!) but it's a really great way to understand __exactly__ what is happening in the code
- __Note that if you keep stepping at some point you will end up in the p5 library file!__
- This is not very pleasant and I don't advise spending your time there

---

## Stepping in style

- If you really want to follow your program line by line you should set breakpoints:
  - At the top of `preload()`
  - At the top of `setup()`
  - At the top of `draw()`
  - At the top of each __event handler__ (e.g. `mousePressed()`)
- Then when a breakpoint is hit you should __step__ until the bottom of the function and then hit __play__ to avoid the p5 library code
- Let's try that now...

---

## Debugging time!

- We now have some seriously powerful tools for examining the state of our program through time
- We can use `console.log()` to constantly keep us up to date with what's going on via the console
- We can use __breakpoints__ to pause our program at specific lines of code so we can see what's happening
- We can use __stepping__ to move line by line through our program to get really detailed about what's going on as it runs (in slow motion)

---

# Fin
