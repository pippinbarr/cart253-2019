### Input / CART 253 / Pippin Barr

# Touch input

---

## In this module

- `mouseX` and `mouseY` for touch
- Mouse functions in general for touch
- Specialized touch functions

---


## p5 knows about touch!

- It turns out that p5 can also react to touches on relevant devices
- Which is handy when we want our work to run on mobile
- As you might imagine, touch is __very similar to the mouse__...

---

## `mouseX` and `mouseY` work for touches!

- If you're using a mobile device or tablet with a touch screen then `mouseX` and `mouseY` still work
- They just indicate the last location of a touch on the screen instead of the current location of the mouse

---

## All the mouse functions work for touches too!

You can use the same set of mouse functions and they will respond to touches:

- `mousePressed()` will be called when a finger is touched onto the screen
- `mouseReleased()` will be called when a finger is lifted off the screen
- `mouseMoved()` will be called when a finger is dragged on the screen

---

## There are also specific functions

- If you need to separate the idea of mouse and touch then there are specific touch-based functions you can use:

- `touchStarted()` will be called when a finger is touched onto the screen
- `mouseEnded()` will be called when a finger is lifted off the screen
- `touchMovement()` will be called while a finger is dragged along

---

## There is also multitouch

- We're not going to address this explicitly here
- But just so you know, it's possible to track __multiple touches__
- Check out the [`touches`](https://p5js.org/reference/#/p5/touches) entry in the Reference if you want to know more
- But be aware we haven't learnt some important stuff that you need to understand it yet (notably arrays)

---

# Fin.
