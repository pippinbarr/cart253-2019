### Sound / CART 253 / Fall 2018 / Pippin Barr

# Basic sound

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

## `var mySound = new Audio('path/to/audio');`

- To play a sound we need to load it and store it in a variable
- It is mercifully simple:

```javascript
var exampleSound = new Audio("assets/sounds/exampleSound.mp3");
```
--

- Now the variable `exampleSound` has our sound stored inside it
- Note that in this example our sound file is stored in the `assets/sounds` folder to keep everything nicely organised
- For now just use this syntax and don't worry about the `new` etc.
- We will talk about that soon

???

- Actually when we store the sound in our variable what we are really storing is an __object__

---

## `preload()`

- As with images, it's a good idea to __load our files inside `preload()`__

```javascript
var exampleSound;

function preload() {
  exampleSound = new Audio("assets/sounds/exampleSound.mp3");
}
```

---

## `.play()`

- The `.play()` function for audio allows us to play a sound file stored in a variable

```javascript
var exampleSound;

function preload() {
  exampleSound = new Audio("assets/sounds/exampleSound.mp3");
}

function setup() {
  exampleSound.play();
}
```

- As we now know, `exampleSound` must be an __object__
- And `play()` is a __function defined in that object__
- So we can call its `play()` function using dot notation

---

## `.play()` and the "autoplay" restriction in Browser

- Many browsers restrict the playing of sounds (and videos) on webpages by requiring that the user of the page __interact__ (press a key, click the mouse) with it before a sound can be played
- This means, for instance, that playing a sound in `setup()` won't work, because the user hasn't interacted with the page yet
- The __solution__ to this is often to require some kind of interaction from the user before your program starts playing sounds
- Something like a "Click to Start" screen at the beginning of the program could work this way. The user clicks, the program starts, and any soundfiles can now be played.

---

## `.pause()`

- To __pause__ a playing sound we use... `pause()`
- So with the `exampleSound` that would be

```javascript
exampleSound.pause();
```

- The sound pauses and when you next call `play()` it will resume from where it was

---

## `.currentTime`

- To __rewind__ your sound so it plays from the beginning when you call `play()` use

```javascript
exampleSound.currentTime = 0;
```

- This will reset it so that the next time `play()` is called it plays from the start
- (You can also set `.currentTime` to other numbers - it represents the position in the sound file in __seconds__ to jump to.)

???

- This is notably useful if you want to force the sound to play from the start even if it's already playing
- Otherwise if you call `play()` when a sound is already playing, it will have no effect

---

## `.loop`

- To __loop__ your sound so it plays over and over when you call `play()` use

```javascript
exampleSound.loop = true;
```

- Now when you play the sound, it will loop forever

---

## The JavaScript Audio Object

- There are various other functions and properties available
- We'll leave it at that for now and come back to more sophisticated audio later in the course

---

# Fin.
