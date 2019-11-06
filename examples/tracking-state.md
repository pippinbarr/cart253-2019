# Tracking State

As we make more complex programs, it's often the case that we want to be able to present multiple different "screens", each that runs its own set of instructions/code, and that we can switch between depending on what the user does. Most obviously, for a game we might want a "title screen", an "instructions screen", a "play screen" (the game itself), and a "game over" screen.

There are different ways to go about this, of varying levels of complexity and robustness. Here we'll look at three example approaches.

## Using Booleans

The simplest (but least flexible and scalable) approach would be to have variables that track which state/screen we're current on, and to display the appropriate stuff in draw() based on these variables.

```javascript
let titleScreen = true; // True because we start on the title screen
let instructionsScreen = false;
let playScreen = false;
let gameOverScreen = false;

function setup() {
  // Do setup stuff
}

function draw() {
  if (titleScreen) {
    displayTitleScreen(); // We will imagine we have a function to show the title stuff
  }
  else if (instructionsScreen) {
    displayInstructionsScreen();
  }
  else if (playScreen) {
    displayPlayScreen();
  }
  else if (gameOverScreen) {
    displayGameOverScreen();
  }
}

// Let's imagine that for the title screen and instructions screen, we move to the
// next screen when the user clicks the mouse. To change between the screens, we need
// to change the true/false values in our variables.
function mousePressed() {
  if (titleScreen) {
    // If we were on the title we need to switch to instructions
    titleScreen = false;
    instructionsScreen = true;
  }
  else if (instructionsScreen) {
    // If we were on the instructions we need to switch to the game itself
    instructionsScreen = false;
    playScreen = true;
  }
}
```

This works fine, but can be painful the more different screens/states you want to add to your program, with more and more variables necessary to track what's going on.

## Using a `state` variable

A common way to avoid the difficulties of booleans is to use a __single__ variable to track which state (or screen) the program is currently in. There are different ways to use the variable, but perhaps the simplest is just to use strings.

```javascript
let state = "TITLE"; // This variable tells us what state the program is in

function setup() {
  // Do setup stuff
}

function draw() {
  if (state === "TITLE") {
    displayTitleScreen(); // We will imagine we have a function to show the title stuff
  }
  else if (state === "INSTRUCTIONS") {
    displayInstructionsScreen();
  }
  else if (state === "PLAY") {
    displayPlayScreen();
  }
  else if (state === "GAMEOVER") {
    displayGameOverScreen();
  }
}

// Let's imagine that for the title screen and instructions screen, we move to the
// next screen when the user clicks the mouse. To change between the screens, we need
// to change the state variable.
function mousePressed() {
  if (state === "TITLE") {
    // If we were on the title we need to switch to instructions
    state = "INSTRUCTIONS";
  }
  else if (state === "INSTRUCTIONS") {
    // If we were on the instructions we need to switch to the game itself
    state = "PLAY";
  }
}
```

This works in the exact same way as the booleans, but now we only have one variable to keep track of, which makes our life a bit easier.

### Using `switch`

As we have more states, we end up with longer and longer sets of `if` and `else if` statements in our draw. One alternative structure for this kind of situation is to use a `switch` statement instead, which operates in much the same way, just with a different syntax

```javascript
let state = "TITLE"; // This variable tells us what state the program is in

function setup() {
  // Do setup stuff
}

function draw() {
  //. A switch statement checks the value inside the variable you provide it and
  // sees if it matches any of the "cases" listed. If it matches one, it executes
  // the instructions under that case up to the "break" instruction.
  switch (state) {
    case "TITLE":
    displayTitleScreen(); // We will imagine we have a function to show the title stuff
    break;

    case "INSTRUCTIONS":
    displayInstructionsScreen();
    break;

    case "PLAY":
    displayPlayScreen();
    break;

    case "GAMEOVER":
    displayGameOverScreen();
    break;
  }
}

// Let's imagine that for the title screen and instructions screen, we move to the
// next screen when the user clicks the mouse. To change between the screens, we need
// to change the state variable.
function mousePressed() {
  if (state === "TITLE") {
    // If we were on the title we need to switch to instructions
    state = "INSTRUCTIONS";
  }
  else if (state === "INSTRUCTIONS") {
    // If we were on the instructions we need to switch to the game itself
    state = "PLAY";
  }
}
```

### Using object properties instead of strings

We can still get into some trouble with the above approach if we misspell a string, which is potentially quite easy to do. One way programmers avoid this is to create a specific data structure that represents the different options as the properties of a single object.

```javascript
// We create a JavaScript object with a property for each potential state of our
// program, making sure each one has a different value in it (just an ordered set
// of numbers probably makes the most sense)
let State = {
  TITLE: 0,
  INSTRUCTIONS: 1,
  PLAY: 2,
  GAMEOVER: 3
};

// Then we can set our state to one of these properties in order to track state
let state = State.TITLE; // This variable tells us what state the program is in

function setup() {
  // Do setup stuff
}

function draw() {
  //. A switch statement checks the value inside the variable you provide it and
  // sees if it matches any of the "cases" listed. If it matches one, it executes
  // the instructions under that case up to the "break" instruction.
  switch (state) {
    case State.TITLE:
    displayTitleScreen(); // We will imagine we have a function to show the title stuff
    break;

    case State.INSTRUCTIONS:
    displayInstructionsScreen();
    break;

    case State.PLAY:
    displayPlayScreen();
    break;

    case State.GAMEOVER:
    displayGameOverScreen();
    break;
  }
}

// Let's imagine that for the title screen and instructions screen, we move to the
// next screen when the user clicks the mouse. To change between the screens, we need
// to change the state variable.
function mousePressed() {
  if (state === State.TITLE) {
    // If we were on the title we need to switch to instructions
    state = State.INSTRUCTIONS;
  }
  else if (state === State.INSTRUCTIONS) {
    // If we were on the instructions we need to switch to the game itself
    state = State.PLAY;
  }
}
```

The advantage here is that we will (usually) get autocomplete when we try to write the name of a specific state (starting with `State.`), and we are able to explicitly list the different states in the object, rather than remembering a bunch of strings.

## Using Object Oriented Programming

Perhaps the most sophisticated approach we could apply here is to actually think of each screen or perhaps "scene" in our program as an individual class that describes what happens in that scene. That way we could divide the different scenes up into separate classes in separate files and switch between which scene is currently active depending on what is happening.

This is a more complex approach, involving a parent `Scene` class that defines the basic behaviour of a scene, and then child classes that extend that `Scene` class in order to define specific scenes.

`Scene.js`
```javascript
class Scene {
  constructor() {

  }

  draw() {
    // This should be defined in child classes for their draw
  }

  mousePressed() {
    // This will be called by the main program when it detects a mouse press
  }

  // We could define more methods, depending on what we want our scenes to be able to do
  // including more input events that could be called from the main script
}
```

`TitleState.js`
```javascript
class TitleScene extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the title on the screen
    text("My amazing game",0,0);
    text("Click for instructions",0,20);

  }

  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    state = instructionsScene;
  }
}
```

`InstructionsState.js`
```javascript
class InstructionsState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the instructions on the screen
    text("There is nothing to do because this is just an example!",0,0);
    text("Click to play",0,20);

  }

  mousePressed() {
    state = playScene;
  }
}
```

`PlayState.js`
```javascript
class PlayState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the game on the screen
    text("THE GAME IS ON!",0,0);
    text("IF YOU CLICK THE GAME IS OVER!",0,0);
  }

  mousePressed() {
    state = gameOverScene;
  }
}
```

`GameOverState.js`
```javascript
class GameOverState extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the game over on the screen
    text("GAME OVER!",0,0);
  }

  mousePressed() {
    // Nothing, because the game is over
  }
}
```

`script.js`
```javascript
let currentScene; // To store the current scene;
let titleScene;
let instructionsScene;
let playScene;
let gameOverScene;

function setup() {
  // Create the four scenes
  titleScene = new TitleScene();
  instructionsScene = new InstructionsScene();
  playScene = new PlayScene();
  gameOverScene = new GameOverScene();

  currentScene = titleScene; // Because we start on the title
}

function draw() {
  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  currentScene.draw();
}

function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}
```

Clearly this is much more overhead in terms of code and using more sophisticated programming approaches, but the benefit is fairly significant too. Our main script is now extremely simple - just creating each of the scene and then using polymorphism to display them and have them respond to input. Each separate class nicely encapsulates all the behavior of each scene, making it all significantly more easy to edit and work with.
