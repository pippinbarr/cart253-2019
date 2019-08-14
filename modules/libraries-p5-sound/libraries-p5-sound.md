### Libraries / CART 253 / Fall 2018 / Pippin Barr

# p5.sound

---

## In this module

- Choosing a library
- Investigating a library
- Adding a library to your project
- Playing with a library

???

- This module on p5.sound is meant to serve more generally as an example of using a specific library and exploring its capacities

---

## Choosing a library

- There are many ways you might end up choosing a library to use...
--

- You already know and love it
--

- You were told to use it
--

- It's part of a suite of libraries associated with a library you already use
--

- You heard about it from a friend
--

- You saw it being used on a cool webpage and want to try it yourself
--

- The code you are appropriating from someone else uses it
--

- You did a Google search (say for "javascript sound libraries")
--

- You found it under a stack of magazines (probably not)

---

## `p5.sound`

- As per the title of this module, we're going to "choose" the library `p5.sound`
- As per the title of the library, it's a p5-oriented library for sound
- This falls under "You were told to use it" and "It's part of a suite of libraries associated with a library you already use"

---

## Investigating a library

- In deciding to use a library, we want to learn about it first
- Generally speaking, we do this by going to the website/webpage for the library
- So we find `p5.sound` on the p5 libraries page: https://p5js.org/libraries/
- We read its description, which is

>>> _p5.sound extends p5 with Web Audio functionality including audio input, playback, analysis and synthesis._

- We think that sounds pretty impressive, so we click through to its homepage: https://p5js.org/reference/#/libraries/p5.sound

---

## Library homepages

- There is a lot of variance in how the homepage of a library can look
- In the case of `p5.sound`, we get a listing of all the objects it provides, along with their properties and functions
- Somewhat helpfully, we get short descriptions of each object the library provides, so we know that `p5.Oscillator` lets us "Generate Sine, Triangle, Square and Sawtooth waveforms" and `p5.Delay` gives us "A delay effect with parameters for feedback, delayTime, and lowpass filter" and `p5.SoundFile` allows us to "Load and play sound files"
- So this is not a _bad_ library homepage, but it's not the most friendly either
- Many library homepages will show you how to get the library installed and a basic example of its usage right away so you see the big picture
- `p5.sound` is quite complex, so maybe this just wasn't seen as possible

---

## Further investigation

- At this point it's worth exploring in the library's homepage to investigate in more depth what kinds of things it is proposing to help you with
- If we click through to `p5.SoundFile` we __do__ get a helpful information:
  - A __snippet__ of code that shows the most basic usage
  - A __description__ of what this part of the library is for, including how to include it in your project
  - Information about the basic __syntax__ and __parameters__ of creating this object
  - And a list of the __methods__ we can call on this kind of object, each of which we can click through on

---

## Futher investigation

- All this enabled us to get a __deeper picture__ of this aspect of the `p5.sound` library...
- ... and to start to __envisage how we might use it__ (we see we can play sounds, pause them, loop them, reverse them, use beat detection on them, pan them, change their playback rate, etc.)

---

## Adding a library to your project

- If we want to investigate further, we probably want to actually add the library to our project so we can experiment with it
- The key point to know here is that a library is (generally) just another __JavaScript file__ with the extension `.js`
- Most libraries provide some kind of __download link__ to the library file on their homepage, but `p5.sound` __doesn't__, which is annoying
- In fact, `p5.sound` is "built in" to the default p5 library distribution, so to get it we need to download p5
- So we go to the __Download__ page on the p5 website
- And we download `p5.js complete` because we can see in its notes that it includes `p5.sound`

---

## Adding a library to your project

- Once we've downloaded `p5.zip` (which is the full `p5.js` distribution) we unzip it...
- ... and inside the folder we find the `addons/` folder...
- ... and inside that folder we find the files `p5.sound.js` and `p5.sound.min.js`
--

- (Remember that these are the __same library__, but the `min` version is a smaller file size.)

---

## Adding a library to your project

- To add `p5.sound` to a project we need to

1. Set up a basic project by __downloading our p5 template project__
2. Copy `p5.sound.min.js` into our `libraries/` folder (since it's a library)
3. Add a `<script>` tag in `index.html` that points to the `p5.sound.min.js` file, so it's part of our program (an obvious place is just under the p5 library itself)

```html
<!-- Library script(s) -->
<script src="js/libraries/p5.min.js"></script>
<script src="js/libraries/p5.sound.min.js"></script>
```

- And now we're ready to __use__ the `p5.sound` library in our `script.js` (or other script files)

---

## Obtaining a library: Recap

- We find a library of interest (`p5.sound` in this case)
- We go to its homepage and find out more generally about it
- We learn about specific possibilities it facilitaties
- We download the library file
- We copy the library file into our project (in the `libraries/` folder)
- We add a `<script>` tag to `index.html` to include the library in our project

---

## Playing around with a library

- At this point, we most likely just want to get some of the basic functions of the library working so we can see what they're like
- Partly to make sure we can get it working at all
- Possibly to make sure it can do the specific thing we want it to do
- Possibly to get inspired by the options it gives us for design
- This step is quite free-form, but most obviously involves clicking through to different sections on the library's documentation and trying out example code!

---

## Playing a sound...

- On the `p5.SoundFile` page we see this basic code

```javascript
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/doorbell.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}
```

- We have a default sound file in the template project at `assets/sounds/bark.wav` so we can replace that
- And `soundFormats()` isn't relevant for us right now
- See notes for explanations and resulting code

???

- `soundFormats()` is used here, so we might investigate it on the main library page to find its [information page](https://p5js.org/reference/#/p5/soundFormats) which explains it is used for cross-browser compatibility (it will choose the right kind of sound file for the browser)
- In our case, we'll delete it, since we only have a `.wav` right now (see notes for altered code)
- I've also added `var mySound;` to the top to explicitly declare the sound variable

```javascript
var mySound;

function preload() {
  mySound = loadSound('assets/sounds/bark.wav');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}
```

---

## Small victories

- Even though it's pretty banal to just use the library to play a sound file, it's an important step because it proves the library is working!
- From here we can be (more) confident that all the other stuff should work too
- (If it doesn't work, we obviously need to figure out why.)

---

## Changing rate

- One of the functions available for `p5.SoundFile` was `rate()` which sounds pretty fun...
- Let's also loop the sound by using `mySound.loop()` instead of `mySound.play()`...

```javascript
var mySound;

function preload() {
  mySound = loadSound('assets/sounds/bark.wav');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.rate(0.5);
  mySound.loop();
}
```

---

## Changing rate interactively

- Let's use `map()` to connect `rate()` to the position of the mouse for some interactivity!

```javascript
var mySound;

function preload() {
  mySound = loadSound('assets/sounds/bark.wav');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.loop();
}

function draw() {
  mySound.rate(map(mouseX,0,width,-1,1));
}
```

---

## Bigger victories

- That is already surprisingly evocative and fun to play around with!
- Crucially this involves the combination of the __power of the library__ (to loop a sound and change its rate dynamically while it plays) with the __power of our programming__ (our knowledge of the `map()` function and how we can use it to convert from one kind of number to another)
- `rate()` is just __fun__

---

## Oscillator base sample code

- Another of the objects provided by `p5.sound` is `p5.Oscillator`
- The [page for that object](https://p5js.org/reference/#/p5.Oscillator) has a pretty complicated amount of example code
- So to start with we might just paste that in to see what happens...
--

- Not bad, not great
- Having witnessed the behaviour, we can return to the code and examine how this seems to work...

???

- So it does some visual stuff just for its UI
- It creates a new `p5.Oscillator()` object
- It sets the new oscillator object with default settings, including a waveform type of `"sine"`, a frequency of `240` Hz, an amplitude of `0` (so it's silent)
- Then it calls `osc.start()` which (if we look at the page) is how you start an oscillator playing
- In the `mouseClicked()` function we see that clicking either turns the amplitude up or down
- We also learn that the amplitude can take a second parameter that tells it to change to the target amplitude __over time__ which is cool!

---

## Oscillator play

- If we read the syntax for creating an oscillator we see that we can specify the kind of waveform to be sine, triangle, sawtooth, or square, which gives us access to different sounds (we could try that in the previous code with `setType()`)
- And reading further we see the (fairly small) set of methods we can use
- Or we might want to do some `map()`ing in the `draw()` loop again and change the frequency based on the mouse position?

---

## Theramin!

```javascript
var osc;

function setup() {
  createCanvas(500,500);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(110);
  osc.amp(1);
  osc.start();
}

function draw() {
  background(0);
  osc.freq(constrain(map(mouseY,0,height,440,110),110,440));
}
```

- This is officially an instrument!

???

- Actually a theramin also lets you control volume, so we'd need to add code to map the mouseX to the amplitude?
- And we should probably draw a theramin?
- Why did I use `constrain()`? Because `mouseY` can be higher than `height` for a small canvas size, and this will cause the output of `map()` to be higher than the specified range - `constrain()` makes sure it stays within the specified range

---

## Hearing test!

- Just for fun

```javascript
var osc;
var frequency = 440;

function setup() {
  createCanvas(500,500);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(frequency);
  osc.amp(1);
  osc.start();
}

function draw() {
  background(0);
}

function keyPressed() {
  frequency += 20;
  osc.freq(frequency);
}
```

---

## Oscillators within oscillators

- We could drive the frequency of an audio oscillator with the output of an oscillating function like `sin()`!

```javascript
var osc;
var freqBase = 440;
var freqRange = 110;
var freqChangeRate = 0.1;
var theta = 0;

function setup() {
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(freqBase);
  osc.amp(1);
  osc.start();
}

function draw() {
  var newFreq = freqBase + (sin(theta) * freqRange);
  osc.freq(newFreq);
  theta += freqChangeRate;
}
```

???

- Here we create a standard sine-wave oscillator and set it up to play a tone of the base frequency of 440Hz
- In the draw loop we calculate a new frequency each time by using the `sin()` function with an increase angle `theta`
- Because `sin()` oscillates between `-1` and `1`, calculating `(sin(theta) * freqRange)` returns numbers oscillating between `-freqRange` and `freqRange`
- If we add that to the base frequency `freqBase` we get a sound that goes below and above the base frequency by the range, over time
- It sounds like a siren!
- Changing the base, range, and rate, all affect what the resulting sound is - play around!
- You could map all these things to interactions!

---

## There is a lot more

- If you look again at the `p5.sound` homepage, you can see there are a __lot__ of possibilities here
- There are objects for creating synthesizers, for recording audio input, for composing music... yikes.
- The best way to learn more is to __read and play in equal measure__!

---

# Fin.
