### Sound / CART 253 / Pippin Barr

# Basic p5 sound

---

## In this module

- Sound!
- Loading sounds
- Playing sounds

---

## Sound!

- So far our programs have been purely visual
- It would be nice if they made sounds
- The simplest way to do that is just to be able to play sound files when we want to
--

- As Freud said, __sometimes the sound of a cigar is more evocative than the cigar itself.__

???

- (Freud didn't say that.)

---

## p5 Sound

- p5 has a specific way of handling sound via another __library__
- Just like we have the file `p5.min.js` that provides all our main p5 functions etc. there is also `p5.sound.min.js` which provides sound-specific stuff

---

## Using p5 Sound

- The easiest way to have p5's sound stuff is to use the __template__ for the course, which includes it by default
- But if you want to include it in a project that doesn't have it you will need to:

1. Get hold of the file `p5.sound.min.js` (You can find it in the template's `js/libraries`, or you can download it as part of the p5 "Complete Library" here: https://p5js.org/download/)
1. Put `p5.sound.min.js` into your project's `js/libraries` folder
1. In your `index.html` write the following line __underneath__ the line that includes `p5.min.js`

```html
<script src="js/libraries/p5.sound.min.js"></script>
```

That's it, p5's sound stuff is now part of your project

---

## Loading a sound file

- To play a sound we need to load it and store it in a variable, ideally in `preload()`
- It is mercifully simple (and pretty similar to images):

```javascript
let exampleSound;

function preload() {
  exampleSound = loadSound("assets/sounds/bark.wav");
}
```
--

- Now the variable `exampleSound` has our sound stored inside it
- Note that in this example our sound file is stored in the `assets/sounds` folder to keep everything nicely organized

---

## `.play()`

- The `.play()` function for audio allows us to play a sound file stored in a variable

```javascript
let bark;

function preload() {
  bark = loadSound("assets/sounds/bark.wav");
}

function setup() {
  bark.play();
}
```

???

- As we know because of the use of dot notation, `bark` must be an __object__
- And `play()` is a __function defined in that object__
- So we can call its `play()` function using dot notation

---

## `.play()` and the "autoplay" restriction in Browser

- Many browsers restrict the playing of sounds (and videos) on webpages by requiring that the user of the page __interact__ (press a key, click the mouse) with it before a sound can be played
- This means, for instance, that playing a sound in `setup()` won't work, because the user hasn't interacted with the page yet
- The __solution__ to this is often to require some kind of interaction from the user before your program starts playing sounds
- Something like a "Click to Start" screen at the beginning of the program could work this way. The user clicks, the program starts, and any sound files can be played from now on.

---

## :(

```javascript
let bark;
let started = false;

function preload() {
  bark = loadSound("assets/sounds/bark.wav");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  text("ARF! ARF! ARF!", 250, 250);
  // Randomly bark with a 1% chance
  if (random(0, 1) < 0.01) {
    bark.play();
  }
}
```

???

- This most likely won't work if the user doesn't click on the page at all
- There's no required "user interaction" here, so sound won't be allowed to play

---

```javascript
let bark;
let started = false;

function preload() {
  bark = loadSound("assets/sounds/bark.wav");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  if (!started) {
    text("CLICK TO BARK", 250, 250);
  }
  else {
    text("ARF! ARF! ARF!", 250, 250);
    // Randomly bark with a 1% chance
    if (random(0, 1) < 0.01) {
      bark.play();
    }
  }
}

function mousePressed() {
  started = true;
}
```

???

- This guarantees we can play sound because the program doesn't do anything until the user has clicked on it, ensuring a "user interaction" that unlocks sound

---

## `.pause()`

- To __pause__ a playing sound we use `pause()`
- So with the `bark` that would be

```javascript
bark.pause();
```

- The sound pauses and when you next call `play()` it will resume from where it was

---

## `.stop()`

- To __stop__ a playing sound we use `stop()`
- So with the `bark` that would be

```javascript
bark.stop();
```

- The sound stop and when you next call `play()` it will resume from the start

---

## `.loop()`

- To __loop__ your sound so it plays over and over when you call `loop()` instead of `play()`:

```javascript
bark.loop();
```

- Now it will loop forever

---

## p5 Sound

- There are other functions and properties available for use with sounds, such as `setVolume()`, `pan()`, and `rate()`
- And even more impressive stuff around sound synthesis, 3D sound, audio input, and more
- But for now this will get us started with simple tasks like playing music of sound effects
- We'll leave it at that for now and might come back to more sophisticated audio later in the course

---

# Fin.
