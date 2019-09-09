### Graphics / CART 253 / Pippin Barr

# Displaying images

---

## In this module

- Why images?
- `loadImage()`
- `preload()`
- `image()`
- `.width` and `.height`
- `imageMode()`

---

## Why images?

- Drawing things made out of primitive geometry yields nice, clean shapes
- But it's incredibly time consuming to write all the commands
- If you want to display a complex image, it would take a long time to make it out of shapes
- Not to mention if you want, say, a photo
--

- As Freud said, __sometimes an image of a cigar should just be an image of a cigar.__

???

- (Freud didn't say that.)
- Note that using primitive shapes __can__ be really interesting especially as we learn more programming skills (drawing a cigar out of shapes would teach us things about geometry)
- We can use things like loops and conditionals to create __generative art__ out of primitive shapes
- We can use code to create __fractals__ out of primitive geometry
- And of course there are some graphical styles where we might __want__ to use primitive shapes (as a kind of minimalism, for example)

---

## `loadImage()`

- To display an image we need to load it and store it in a variable
- It is mercifully simple:

```javascript
let exampleImage = loadImage("assets/images/exampleImage.png");
```
--

- Now the variable `exampleImage` has our image stored inside it
- This is __another__ kind of value that can go inside a variable, an image
- Note that in this example our image file is stored in the `assets/images` folder to keep everything nicely organised
- Note that when we specify where the image is we're using a __relative path__ that gives the folders __relative to the project folder__ (where `index.html` is)

???

- Actually when we store the image in our variable what we are really storing is a __JavaScript Object__ and we will talk more about these later

---

## `preload()`

- But wait, it's not quite as simple as we thought
- When we load from files, there's a __delay__ while the file loads
- This could ruin our program if it is running before the file is ready!
- So it's good to __load files inside a special function called `preload()`__

```javascript
let exampleImage;

function preload() {
  exampleImage = loadImage("assets/images/exampleImage.png");
}
```

- This is another one of those special functions p5 already knows about, like `setup()` and `draw()`
- It gets run at the start of our program __before anything else happens__
- And __nothing happens until it finishes__

---

## `image(img, x, y)`

- The `image()` function allows us to display an image stored in a variable

```javascript
let exampleImage;

function preload() {
  exampleImage = loadImage("assets/images/exampleImage.png");
}

function setup() {
  image(exampleImage, 0, 0);
}
```

- The first parameter is the __variable__ the image is stored in
- The second two parameters are the __(x,y) coordinates__ we want the image to display at
- Like a `rect()`, by default the image will display with its __top left corner__ at that (x,y) coordinate

---

## `image(img, x, y, w, h)`

```javascript
let exampleImage;

function preload() {
  exampleImage = loadImage("assets/images/exampleImage.png");
}

function setup() {
  image(exampleImage, 0, 0, 50, 50);
}
```

- We can add two more parameters to the `image()` function to specify the __width__ and __height__ we want to display the image at
- Note that depending on the values we use, we can __stretch__ the image out of its original aspect ratio

---

## `.width` and `.height`

- If we want to know what the __original__ width and height of the a loaded image are, we can use `.width` and `.height` to "ask" the image itself

```javascript
console.log("The width of the image is " + exampleImage.width);
console.log("The height of the image is " + exampleImage.height);
```

---

## Proportional scaling with `.width` and `.height`

- With access to the original width and height of an image, we could scale it and maintain its proportions

```javascript
let exampleImage;
let scale = 0.5;

function preload() {
  exampleImage = loadImage("assets/images/exampleImage.png");
}

function setup() {
  image(exampleImage, 0, 0, exampleImage.width * scale, exampleImage.height * scale);
}
```

- Now the image is displayed at half its original size

---

## imageMode(CENTER)

```javascript
imageMode(CENTER);
image(exampleImage, width/2, height/2);
```

- As with `rect()` and `rectMode()` we can use `imageMode(CENTER)` to specify we want the (x,y) coordinates in `image()` to refer to the `CENTER` of our image when positioning it
- The default, which is the top left corner, is `imageMode(CORNER)`

---

## imageMode(CORNERS)

- As with `rect()` there is also `imageMode(CORNERS)`

```javascript
imageMode(CORNERS);
image(exampleImage, 0, 0, width, height);
```

- Here the image will be drawn so that its top left corner is at the first (x,y) coordinate, which are (0,0) in this case...
- ... and with its bottom right corner at the second (x,y) coordinates, which are (width,height) in this case
- ... so what does this do?
--

- It __stretches__ the image to fill the whole canvas, ignoring the image's aspect ratio
- Crude but effective

---

# Fin.
