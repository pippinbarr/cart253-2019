### Core / CART 253 / Pippin Barr

# Arrays

---

## In this module

- Numbered boxes with stuff in them

---

## Arrays!

- An array is basically __set of numbered boxes__ that you can store values in
- And we can __store an entire array inside a single variable__ (it's another kind of value)
- So a variable with an array in it can store __multiple values__
- This is mostly useful when all the values are __related to each other__

???

- You could use all sorts of metaphors to think about arrays:
  - They're like parking spaces for values!
  - They're like post-office boxes!
  - They're like numbered page s in a book!
  - They're like...

("Secretly" an array in JavaScript is an __Object__, it just has some special syntax because it's so fundamental to programming in many, many programming languages.)

---

## An array of numbers

- Arrays are identifiable by their use of the square brackets
- To create a new array, we can put a list of values inside square brackets, and store that whole set of values in a variable:

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
```

- We could imagine that inside `primeNumbers` is something like this:

![](images/newFilledArray.png)

- Notice how the __order__ of numbers we started the array with __matters__
- (They don't have to be in numeric order, rather they get stored in order in the array from "left" to "right".)

???

`let`
- Because we store arrays in __variables__ like any other value, we declare a variable first

`primeNumbers`
- We give the array a sensible name, like `primeNumbers` to describe what's in it
- It often makes sense to use a __plural noun__ for array variables, since they're designed to hold multiple values

`=`
- Again like any variable we use `=` to __assign__ the array into the variable

`[ ... ]`
- We show we're creating an __array__ specifically by surrounding its contents with __square brackets__
- The stuff inside the square brackets will be the contents of our array
- The individual __elements__ in the array are separated by commas (it's a __list__)
- In this case it's a list of __prime numbers__

`;`
- It's just the right thing to do.

---

## For the record: an empty array

```javascript
let emptyArray = [];
```

- We can create an array with __nothing in it__ if we want to
- This can be useful if we want to put stuff in it __later on__

---

## How do I refer to the things in the array?

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
```

- Each "place" or "box" or "slot" in the array is called an __element__
- Each place/box/slot is numbered (starting at `0`) with an __index__

![](images/numberedArray.png)

- So the element `11` is at index...?
- And the element `23` is at index...?
- And at index `3` we find the element...?
- And at index `0` we find the element...?

???

- The `11` is at index `5`
- The `23` is at index `9`
- Index `3` contains the element `5`
- Index `0` contains the element `1`

---

## We can refer to specific elements using their index

- We can get an element in an array using those square brackets again
- So if I want the __element at index__ `5` I would write:

```javascript
primeNumbers[5]
```

- Which is which one?

![](images/numberedArray.png)

???

- It's `11`

---

## Individual array elements are variables

- We can use these references to array elements like any other variable
- So `primeNumbers[5]` means "the value at index 5", which is a number, and we can use it like any number
- We can __use it__ in conditionals, or as an argument, or anything else...
- And we can also __assign__ an number to it, which might be the results of a calculation...
- So `numbers[5]` is a __variable__

---

## Array elements are variables

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

console.log(numbers[5]); // Prints 11 to the JavaScript Console
```

---

## Array elements are variables

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

if (primeNumbers[2] < primeNumbers[3]) {
  console.log(primeNumbers[2] + " is less than " + primeNumbers[3]);
}
else {
  console.log(primeNumbers[2] + " is greater than " + primeNumbers[3]);
}
```

- So we will see...
--
 `3 is less than 5`

---

## Setting specific elements of an array

- We can also __assign__ values to a specific element in the array

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

// primeNumbers is [1, 2, 3, 5, 7, 11, 13, 17, 19, 23]

primeNumbers[9] = 100;

// primeNumbers is [1, 2, 3, 5, 7, 11, 13, 17, 19, 100]

primeNumbers[0] = 0;

// primeNumbers is [0, 2, 3, 5, 7, 11, 13, 17, 19, 100]
```

---

## `push()` and arrays

- Another way to add new elements to arrays is to add them to the __end__ of the array with `push()`

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

// primeNumbers is [1, 2, 3, 5, 7, 11, 13, 17, 19, 23]

primeNumbers.push(29); // Add 29 to the END of the primeNumbers array

// Now primeNumbers is [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

---

## `unshift()` and arrays

- We can also add new elements to the __start__ of an array with `unshift()`

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

// primeNumbers is [1, 2, 3, 5, 7, 11, 13, 17, 19, 23]

primeNumbers.unshift(0); // Add 0 to the START of the primeNumbers array

// Now primeNumbers is [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23]
```

---

## Arrays can store any kind of value in them!

```javascript
// Floating point numbers
let arrayOfFloats = [3.14159, 1.222222, 1.01];

// Strings
let songLyrics = ["This", "is", "the", "song", "that", "doesn't", "end"];

// p5 Color objects
// Note how we can separate each element onto a new line if it help legibility
let backgroundColors = [
  color(255,0,0),
  color(0,255,0),
  color(0,0,255)
];

// p5 image objects loaded with loadImage()
let images = []; // Starting with an empty array
let tempImage1 = loadImage("image1.png"); // Loading an image
images.push(tempImage1); // Now images has that image in it at index 0
```

---

## .length tells you the length of an array

- Arrays have a property called `length` that contains their current __length__ in elements

```javascript
let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

console.log(primeNumbers.length); // Prints out 10

primeNumbers.push(29); // Adds 29 to the end of the array

console.log(primeNumbers.length); // Prints out 11 because there's one more element
```

- Knowing the length of an array is useful in a number of specific situations, a couple of which we'll see next

---

## Three uses of arrays

- Arrays are one of the most common "data structures" you'll see in programming
- Given their conceptual simplicity (a series of numbered boxes), they're very flexible
- Three common uses, however, are:
  - Using arrays for random values
  - Using arrays for sequential values
  - Using arrays for grouped values

---

## Random values

```javascript
let catchPhrases = [
  "I'll be back.",
  "It's not a tumor!",
  "Let off some steam, Bennett.",
  "Get to the chopper!"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Choose a random index ("box number") in the array
  let randomPhraseIndex = floor(random(0, 1) * catchPhrases.length);
  // Get the catch phrase at that position in the array
  let phrase = catchPhrases[randomPhraseIndex];
  // Display the catch-phrase on the canvas
  textAlign(CENTER, CENTER);
  textSize(64);
  text(phrase, width / 2, height / 2);
}
```

???

- This idea of choosing a random array element could be applied to many ideas, from choosing random (but curated) colors, to dialog as above, to picking a lucky number, or picking a random day of the week, etc.
- In p5 it's actually possible to get a random element from an array just using the `random()` function, so we could write the above like this:

```javascript
let catchPhrases = [
  "I'll be back.",
  "It's not a tumor!",
  "Let off some steam, Bennett.",
  "Get to the chopper!"
];

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Get a random catch phrase
  let phrase = random(catchPhrases);
  // Display the catch-phrase on the canvas
  textAlign(CENTER,CENTER);
  textSize(64);
  text(phrase,width/2,height/2);
}
```

---

## Sequential values

```javascript
let catchPhrases = [
  "I'll be back.",
  "It's not a tumor!",
  "Let off some steam, Bennett.",
  "Get to the chopper!"
];
let currentPhraseIndex = 0; // Track the current phrase to display (the first)

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // Get the current phrase from the array and display it
  let phrase = catchPhrases[currentPhraseIndex];
  textSize(64);
  text(phrase, 50, height / 2);
}

function keyPressed() { // Each time a key is pressed
  currentPhraseIndex += 1; // Go to the next phrase
  if (currentPhraseIndex >= catchPhrases.length) {
    currentPhraseIndex = 0; // But reset back to the first if we reach the end of the array
  }
}
```

---

## Grouped values

```javascript
let catchPhrases = [
  "I'll be back.",
  "It's not a tumor!",
  "Let off some steam, Bennett.",
  "Get to the chopper!"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Go through all the phrases in the array one by one
  // and print them somewhere random
  // Each time through the loop i will have the index
  // for one of the catch phrases
  for (let i = 0; i < catchPhrases.length; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let phrase = catchPhrases[i];
    textSize(64);
    textAlign(CENTER, CENTER);
    text(phrase, x, y);
  }
}
```

---

## Prey are a kind of group!

```javascript
let numPrey = 100; // How many Prey to simulate
let prey = []; // An empty array to store them in (we'll create them in setup())

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Run a for loop numPrey times to generate each Prey and put it in the array
  for (let i = 0; i < numPrey; i++) {
    // Generate (mostly) random values for the arguments of the Prey constructor
    let preyX = random(0, width);
    let preyY = random(0, height);
    let preySpeed = random(2, 10);
    let preyColor = color(100, 100, 100);
    let preyRadius = random(3, 50);
    // Create a new Prey objects with the random values
    let newPrey = new Prey(preyX, preyY, preySpeed, preyColor, preyRadius);
    // Add the new Prey object to the END of our array using push()
    prey.push(newPrey);
  }
}
```

- After `setup()` there will be 100 randomized Prey objects inside the `prey` array, one for each loop through the `for` loop

---

## Moving and displaying 100 Prey!

```javascript
function draw() {
  background(0);
  // Go through every prey element in the array in order by index
  // Note it's better to use prey.length instead of numPrey here
  // since it's automatically updated whenever the array changes length
  for (let i = 0; i < prey.length; i++) {
    // And for each one, move it and display it
    prey[i].move();
    prey[i].display();
  }
}
```

- If we added a Predator to this simulation it would be __very happy__

---

## Addendum: `console.log()` and arrays

- `console.log()` is excellent for printing out the values in an array, which is very helpful for debugging
- As in:

```javascript
let array = [1,2,9,2,5,7,4,23,2];
console.log(array);
```

- If you look at the output in the JavaScript console, you'll see the values in the array nicely printed out
- If you click the little arrow next to the array name in the console, you can display the whole array element by element, too
- If you have more complex elements in the array (like objects), clicking the arrow will show much more detailed views of the objects

---

# Fin.
