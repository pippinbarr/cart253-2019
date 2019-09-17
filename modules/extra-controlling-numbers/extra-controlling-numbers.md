### Extra / CART 253 / Pippin Barr

# Controlling Numbers

---

## In this module

- Numbers change
- Constraining numbers
- Mapping numbers

---

## Numbers change

```javascript
let x = 250;
let y = 250;

function setup() {
  createCanvas(500,500);
}

function draw() {
  x = x + 1;
  ellipse(x,y,100,100);
}
```

- We know that we can change the numbers in variables
- And that this produces specific kinds of behaviors
- Like movement

---

## `constrain()`ing numbers

- Sometimes we want to be able to change numbers, but keep them within a specific sensible range
- Maybe we want that ellipse to only be able to move on the visible screen
- So we want to __constrain__ its `x` value to be between `0` (the left) and `width` (the right)

```javascript
x = x + 1;
x = constrain(x,0,width); // Now x is guaranteed to be between 0 and width
```

- `constrain()` takes three parameters
  - The __value__ to constrain (`x` above)
  - The __minimum value__ it should constrain to (`0` above)
  - The __maximum value__ it should constrain to (`width` above)

???

- So after the line with `constrain()` `x` will always be between `0` and `width`
- Consider if `x` reaches the value of `width`, say it's `500`
- The first line makes `x` increase by `1`, so it becomes `501`
- The second line constrains `x` to be between `0` and `500`, so it becomes `500`
- So in the above case, `x` will increase to `500` and then stay at `500`
- The effect of which is that our ellipse would move to the right until it reached the righthand side, and then stop

---

## `map()`ping numbers

- We often deal with numbers that only make sense in specific ranges
  - A color variable should be between `0` and `255` for example
  - A relevant `mouseX` variable will be between `0` and the `width` of the canvas (the usable area of your canvas)
- Those two ranges are __different__, but if we want to make a color depend on the mouse position, we need to __convert__ or __map__ between them
- We can use the `map()` function for this, best seen in an example

---

## Mapping mouse position to a color

```javascript
let shade = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  shade = map(mouseX,0,width,0,255);
  background(shade);
}
```

- `map()` takes __five parameters__
  - The value to map (`mouseX` here)
  - Two values defining the range the value is __from__ (here we're mapping from the range `0` to `width`, the horizontal range)
  - Two values defining the range the value should map __to__ (here we're mapping to the range `0` to `255`, the color range)

---

## Order matters

```javascript
let shade = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  shade = map(mouseX,width,0,0,255);
  background(shade);
}
```

- The end points of the range don't have to be in numerical order
- We can map the mouse position "backwards" so that the further to the right you go, the more white the background becomes, for example

---

# Fin
