### Libraries / CART 253 / Pippin Barr

# Introducing libraries

---

## In this module

- Syntax is kind of sterile
- How does code do more?
- Built-in objects
- Libraries

---

## Syntax on its own is limited

- We know a lot of syntax and structure now
- We know variables, conditionals, loops, functions, arrays, and objects
- These can powerfully represent ideas in code
- But they can't really reach beyond that abstract representation
- On its own, JavaScript syntax doesn't know about browsers, keyboards, shapes, sounds, etc.

---

## Hello, Browser? It's me, JavaScript

- We've been running all our JavaScript code in a __browser__
- A browser is a piece of software that runs on our computer
- The browser knows about keyboard input, mouse input, displaying HTML (including with the canvas and with CSS), executing JavaScript, and more
- In other words, the browser is a bridge to the human using our program
- We want to be able to __use__ the things the browser can do in our program

---

## The Browser Object Model (BOM)

- Fortunately, when we run JavaScript in a browser we have access to a special thing called the Browser Object Model
- This is a representation of the browser __inside a JavaScript object__ that just magically exists whenever we run our code in a browser
- It is accessed through an object called `window`

???

- Basic introduction here: https://www.w3schools.com/js/js_window.asp

---

## Power of the BOM

- The `window` object gives us access to a bunch of properties and functions that apply to the __browser window our code is running in__
- For example `setTimeout()` is actually a method of the `window` object
- So we could write it like this

```javascript
window.setTimeout(function() {
  console.log("Ten seconds later...");
},10000);
```

- (We can and often do omit the `window` at the start because it is __assumed__ to apply to the current window)
- We can also scroll the window, move the window, open a new window, resize the window, close the window, and more... all using its methods

???

- Here is full a list of properties and methods from the `window` object: https://www.w3schools.com/jsref/obj_window.asp

---

## Document Object Model (DOM)

- One of the properties of the `window` is called `document`
- `document` is an object that represents the __current HTML document being displayed on the webpage__
- This therefore gives us access to things like all the HTML elements on the page
- The `document` object can do things like return a specific element by its CSS `id` or `class`, set or tell us the title of the page, write data into the document, and so on

???

- Here is a list of the methods and properties of the `document` object: https://www.w3schools.com/jsref/dom_obj_document.asp

---

## Document Element Object

- It keeps going...
- If we ask the `document` object for a specific __element__ on the current page, we get back a Document Element Object

```javascript
let element = document.getElementById("myDiv");
```

- This, in turn, has its own methods and properties, such as finding out its attributes, retrieving its children or parent or siblings, getting its size on screen, adding and removing sub-elements, and on and on
- That is, we have a representation in JavaScript objects of the document being displayed, element by element
- And this is how we can use JavaScript to directly manipulate the contents of a webpage

???

- The example here assumes the webpage our JavaScript is running on has a div with an id of "myDiv", e.g.

```html
<div id="myDiv">This is my div. There are many like it. But this one is mine.</div>
```

- Here is a list of the methods and properties of a Document Element Object: https://www.w3schools.com/jsref/dom_obj_all.asp

---

## Power!

- So this is very powerful
- When we run JavaScript in a browser, we have automatic access to some predefined objects that give us a huge amount of access and control over the window and the webpage being displayed in it
- We do things to the window via the `window` object, we do things to the webpage via the `document` object, and often we do things to the webpage more specifically by manipulating Document Element Objects
- Based on the way the magical people behind the scenes wrote properties and methods on these objects, we can accomplish all kinds of things!
- (We just have to read a lot of documentation to find out what the properties and methods are!)

---

## Oh God That Is So Complicated

- It really is!
- Writing all your code using only JavaScript syntax and the built in objects provided by the browser is challenging and complex
- Which, as programmers, we should be a little suspicious of...
- Surely somebody has figured out a way to make things easier?
- Yes, they have

---

## Libraries

- A library is a collection of pre-made code designed to facilitate some specific task or set of tasks you want to do in your own programming
- In essence, a library hides a bunch of more complicated code behind simpler functions and properties so that you don't have to worry about them
- p5 is a (big) example of this - it provides many, many functions and properties that (largely) deal with drawing things on an HTML5 `canvas` element

---

## Rectangles

- In p5 we draw a rectangle like this:

```javascript
function draw() {
  rect(0,0,100,100);
}
```

- But if we wanted to use the browser level objects to achieve this, it would be

```javascript
function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.strokeRect(0, 0, 100, 100);
  }
}
```

- The p5 library is making it __easier to do what we want__

???

- For one thing, p5 __assumes__ we're drawing things on the canvas, so we don't have to directly deal with the canvas context as above
- Under the hood, the p5 library is basically ending up running the more complicated code, but it __hides it from us__ so we don't need to worry about it as part of our program

---

## Thanks, libraries!

- That's what libraries are for: they make it easier to do what we want
- They make it possible for us to achieve more complicated tasks like loading an image, or drawing a shape, or synthesizing a sound, without needing to know how to do it from the ground up
- They hide scary things from us, and we love them for it

---

## What libraries are out there?

- So many!
- For now, we can stick with just thinking about libraries that are "endorsed" by p5
- There's a list here: https://p5js.org/libraries/
- Even this small set of libraries is quite exciting
- And this is perhaps the greatest thing about libraries: it's not just that they support what you want to do, they can __inspire you to think of new ideas__
- "Oh, there's a geolocation library, maybe I can make a program that only works in Zimbabwe..."

---

## Summary

- JavaScript syntax on its own doesn't do so much...
- JavaScript code in collaboration with default browser objects can do a lot more!
- JavaScript code in collaboration with libraries can do a lot more, more easily!!

---

# Fin.
