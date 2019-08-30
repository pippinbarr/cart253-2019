### Graphics / CART 253 / Pippin Barr

# Displaying text

---

## In this module

- Why text?
- Displaying and formatting text
- Loading and using fonts

---

## Why text?

- They say a thousand words is worth a picture...
- Also being able to display text means we can display __language__
- Which can be a pretty important way to convey information in a program
--

- As Freud said, __sometimes a cigar is just the word "cigar".__

???

- Freud didn't say that

---

## `text()`

- Most fundamentally, to display text on screen we use the `text()` command

```javascript
let helloWorld = "Hello, Word!";
text(helloWorld, width/2, height/2);
```
--

- `text()` takes __three parameters__:
- The __string__ of text to display
- The __x coordinate__ to display it at
- The __y coordinate__ to display it at

---

## `textSize()`

- We probably want to be able to control how big the text we're displaying is
- And for this we use `textSize()`

```javascript
let helloWorld = "Hello, Word!";
textSize(64);
text(helloWorld, width/2, height/2);
```
--

- `textSize()` takes __one argument__, the size of the text to display
- The number you use here reflects the __height in pixels__ of the text
- As with colours for shapes, you put the size _before_ the `text` instruction

---

## `textAlign()`

- By default, text is displays with its __bottom left corner__ at the position we specify
- But we probably want to be able to change this, and we can

```javascript
textAlign(LEFT);
textAlign(CENTER);
textAlign(RIGHT);
```
--

- As you can see, the parameter is the __name of the horizontal alignment__ we want
- It can be `LEFT`, `CENTER`, or `RIGHT` (the default is `LEFT`)

---

## `textAlign()`

- We can also choose to __vertically align__ text by adding a second parameter to `textAlign`

```javascript
textAlign(LEFT,TOP);
textAlign(LEFT,CENTER);
textAlign(LEFT,BOTTOM);
```
--

- Again, we have special names for the vertical alignment, `TOP`, `CENTER`, and `BOTTOM`

---

## Quiz...

- So how would we align some text exactly in the centre of the canvas?
--

```javascript
textAlign(CENTER,CENTER);
let appropriateText = "Stuck in the middle with you.";
text(appropriateText, width/2, height/2);
```
--

- And how would we align some text against the bottom right of the canvas?
--

```javascript
textAlign(RIGHT, BOTTOM);
let appropriateText = "Stuck in the bottom-right with you.";
text(appropriateText, width, height);
```

---

## `textLeading()`

- We can control line height with `textLeading()`
- We use it to specify how many pixels there should be between lines of text

```javascript
textSize(24);
textLeading(24);
textAlign(LEFT,CENTER);
text("Line 1\nLine 2\nLine 3", width/2, height/2);
```
--

- Naturally it's related to the setting we use in `textSize()`
- So if we wanted 1.5 line-heights we'd use...
--
`textLeading(32)`
--

- Or perhaps more conveniently `textLeading(24 * 1.5)`

???

- Notice how the string of text has those `\n` characters in it?
- `\n` is a special code for "carriage return"
- There are other special codes - feel free to look them up
- This is called "character escaping"
https://stackoverflow.com/questions/21672334/javascript-how-to-show-escape-characters-in-a-string

---

## `textFont()`

- By default `text()` will use a sans-serif font
- But we can use other fonts using `textFont()`
- The easiest way is just to use the name of a websafe font, in which case we just use its name in `textFont()`

```javascript
textFont("Courier");
textSize(32);
text("Hello, Courier!", 0, height/2);
```

???

- The default font looks like it's Helvetica, at least on my computer
- You can find lists of websafe fonts by searching on Google
- e.g. https://www.w3schools.com/cssref/css_websafe_fonts.asp

---

## `loadFont()`

- We can also load fonts from font files in our project if we have them
- The formats accepted are `.ttf` and `.otf`

```javascript
let myFont;

function preload() {
  myFont = loadFont("assets/fonts/myCoolFont.ttf");
}
```

- As with images, when we're loading something from a file, it's best to do so inside the `preload()` function so it is loaded before our program runs

---

## `textFont()` with a loaded font

- Once we've loaded our font, we can use the variable we saved it in with `textFont()`

```javascript
let myFont;

function preload() {
  myFont = loadFont("assets/fonts/myCoolFont.ttf");
}

function setup() {
  createCanvas(500,500);
  textFont(myFont);
  textSize(32);
  textAlign(CENTER,CENTER);
}

function draw() {
  text("Hello, My Cool Font!", width/2, height/2);
}
```

---

## Text!

- So now we can display text
- We can control how it gets positioned
- And we can control what it looks like!

---

# Fin.
