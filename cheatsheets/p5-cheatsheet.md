# p5 Cheatsheet

- [The Reference](#the-reference)
- [`preload()`](#setup)
- [`setup()`](#setup)
- [`draw()`](#setup)
- [The mouse](#the-mouse)
- [The keyboard](#the-keyboard)

## The Reference

Your most important ally in working with p5 is its website, and most especially the reference, which can be found either by Googling "p5 reference" or by going to http://www.p5js.org/reference

The reference provides information about __every variable and function in p5__. The main page is a list of all the available variables and functions, and clicking through will take you to extensive information about them.

You can use this both to
- Look up functions/variables you already know to remember how they work
- Browse through the lists to discover new possibilities within p5

## `preload()`

The very first function p5 runs when your program starts is `preload()`. The function definition is written as follows:

```javascript
function preload() {
  // Preloading instructions
}
```

Inside the function you write any instructions that __load__ files, such as using `loadImage()` to load images. By placing those instructions here, the files are guaranteed to be loaded __before your main program begins running__.

## `setup()`

After any loading in `preload()` the next function that will automatically run is `setup()`. It is run exactly __once__ at the start of your program, and is used to set up any variables or other settings that you want to apply when the program begins. It is written as follows:

```javascript
function setup() {
  // Setup instructions
}
```

Most commonly you will want to use `createCanvas()` to set your canvas size, set up the initial values of variables, perhaps set `fill()` and `stroke()` if they will be consistent for your whole program, etc.

## `draw()`

Once `setup()` finishes, p5 then executes the instructions in `draw()` 60 times per second (by default). Thus the instructions in `draw()` happen __repeatedly over time__ and help to define the idea of your program as a series of __frames__ (most obviously in order to animate visuals). It is written as follows:

```javascript
function draw() {
  // Instructions to be run once per frame
}
```

You can __change the framerate__ with the function `frameRate(n)`, where `n` is the number of times per second you want your program to run the `draw()` function.


## The mouse

p5 provides a number of ways to detect mouse input so that you can react to it in real time. There are __variables__ that contain information about the state of the mouse, and __event handlers__ that allow you to react to mouse events as they happen

### `mouseX` and `mouseY`

The variables `mouseX` and `mouseY` always contain the __last known position of the mouse__ in pixels, relative to the top-left of your canvas.

### `mouseButton`

The variable `mouseButton` contains the name of the __most recently used button on the mouse__. If you are checking this value you can compare it with `LEFT`, `RIGHT` or `CENTER` to distinguish between the typical buttons.

### `mousePressed()`

The `mousePressed()` function is an event handler that is called whenever a mouse button is __pressed down__. It is called __once__ when this happens, and is written as follows:

```javascript
function mousePressed() {
  // If we are here, the mouse button was just pressed down
}
```

The code inside the function can rely on the fact that a mouse button was just pressed and react accordingly.

### `mouseReleased()`

The `mouseReleased()` function is an event handler that is called whenever a mouse button is __released__. It is called __once__ when this happens, and is written as follows:

```javascript
function mouseReleased() {
  // If we are here, the mouse button was just released
}
```

The code inside the function can rely on the fact that a mouse button was just released and react accordingly.

### `mouseMoved()`

The `mouseMoved()` function is an event handler that is called whenever the mouse is moved by the user. It is called every frame that this happens, and is written as follows:

```javascript
function mouseMoved() {
  // If we are here, the mouse just moved
}
```

The code inside the function can rely on the fact that a mouse was just moved and react accordingly.

### `mouseDragged()`

The `mouseDragged()` function is an event handler that is called whenever the mouse is moved by the user while holding a button down. It is called every frame that this happens, and is written as follows:

```javascript
function mouseDragged() {
  // If we are here, the mouse just moved with a button held down
}
```

The code inside the function can rely on the fact that a mouse was just moved with a button held down and react accordingly.

### `mouseWheel(event)`

The `mouseWheel()` function is called whenever the user moves the mouse wheel (or uses two finger scrolling on a touch pad). It is written as follows:

```javascript
function mouseWheel(event) {
  // If we are here, the mouse wheel was just moved
  // event.delta is a variable telling you how many pixels it moved
}
```

Unlike the previous event handlers, this function will receive a __parameter__ which we will call `event` which has extra information about the wheel movement. In this case `event.delta` tells us how many pixels the wheel was moved this frame.


## The keyboard

p5 provides a number of ways to detect keyboard input so that you can react to it in real time. There are __variables__ that contain information about the state of the keyboard, and __event handlers__ that allow you to react to keyboard events as they happen

### `keyIsPressed`

The variable `keyIsPressed` contains `true` if one or more keys are currently pressed down on the keyboard. It contains `false` if no keys are currently pressed down on the keyboard.

### `key`

The variable `key` always contains the most recently pressed key on the keyboard (even if it was pressed a long time ago). The value in the variable is a __string__ representing the key. So if the "a" key was pressed the variable will contain the string `"a"` for instance.

### `keyCode`

The variable `keyCode` always contains the most recently pressed key code on the keyboard (even if it was pressed a long time ago). The value in the variable is a __number__ representing the ASCII key code. So if the "a" key was pressed the variable will contain the number `97` for instance. You can find listings of the [ASCII key codes](http://www.asciitable.com) online or use an interactive look-up system like [keycode.info](http://keycode.info/).

For special keys like control, alt, etc., you can compare with p5's built in values `SHIFT`, `TAB`, `BACKSPACE`, etc.

### `keyIsDown(key)`

The `keyIsDown()` function can be called to check whether a __specific key is pressed down__. It takes one parameter, which is the __key code__ of the key to check.

```javascript
if (keyIsDown(97)) {
  // If we get to here, we know the "a" key is pressed
  // because it has a key code of 97
}

if (keyIsDown(LEFT_ARROW)) {
  // If we get to here, we know the left arrow key is pressed
  // because we are checking against p5's built in variable
  // containing the left arrow's key code (which is 37)
}
```

### `keyPressed()`

The `keyPressed()` function is an event handler that is called whenever a key is __pressed down__. It is called __once__ when this happens, and is written as follows:

```javascript
function keyPressed() {
  // If we are here, a key was just pressed down
}
```

The code inside the function can rely on the fact that a key was just pressed and react accordingly.

### `keyReleased()`

The `keyReleased()` function is an event handler that is called whenever a key is __released__. It is called __once__ when this happens, and is written as follows:

```javascript
function keyReleased() {
  // If we are here, a key was just released
}
```

The code inside the function can rely on the fact that a key was just released and react accordingly.

### `keyTyped()`

The `keyTyped()` function is an event handler that is called whenever a key is __typed__. It is called __once__ when this happens. It is distinct from `keyPressed()` in that it is only called when a key or combination of keys is pressed that would lead to text input (e.g. pressing a letter key for that letter, shift plus a letter key for that letter capitalized, etc.), and is written as follows:

```javascript
function keyTyped() {
  // If we are here, a key was just typed
}
```

The code inside the function can rely on the fact that a key was just typed and react accordingly.
