### Debugging / CART 253 / Fall 2018 / Pippin Barr

# Functions

---

## Functions are a double-edged sword

- Functions are amazing because they allow us to split our code up into meaningful sections
- Functions are a problem because they allow us to get confused about what is happening when and where

---

## `console.log()` and functions

- The simplest debugging technique with functions is to use `console.log()` to at least keep track of which functions are being called when
- This gives us a visual representation of the structure of time in our program
- We already talked about this in Time Part II earlier

---

## Seeing function calls

```javascript
function setup() {
  console.log("setup()");
  frameRate(1);
}

function draw() {
  console.log("draw()");
  moveAvatar();
}

function mousePressed() {
  console.log("mousePressed()");
  swingSword();
}

function moveAvatar() {
  console.log("moveAvatar()");
  // Do stuff that moves the avatar
}

function swingSword() {
  console.log("swingSword()");
}
```

---

## (Advanced) The debugger

- See the discussion in Debugging Time for a discussion of using the debugger for this
- Applying those ideas to functions is exactly the same - set breakpoints inside functions you want to check up on

---

## Debugging functions!

- In short, a lot of the work of debugging functions is just in making sure they're being called in the first place
- And then, if they are, working out if they're doing the right thing
- `console.log()` is your first line of defense here, since it can tell you when a function is called, and it can tell your what it's doing when it's called

---

# Fin
