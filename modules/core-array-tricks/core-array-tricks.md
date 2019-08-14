

### Core / CART 253 / Fall 2018 / Pippin Barr

# Array tricks

---

## In this module

- Choosing a random element in an array
- Cycling through an array
- Pushing, popping, shifting, and unshifting


---

## Choosing a random element

- It can be really helpful to be able to choose from an array __randomly__
- Again, this is hugely about the power of random effects
- Consider an array of dialog lines for a character in a game

```javascript
var dialog = [
  "I took an arrow to the knee.",
  "I've never been the same since the apocalypse.",
  "Sure is nice to see a friendly face out here.",
  "I think there's something stuck in your teeth..."
];
```

- To have a more "natural" seeming character, we might want to have them randomly say one of these things when we approach them

---

## Choosing a random element

```javascript
var dialog = [
  "I took an arrow to the knee.",
  "I've never been the same since the apocalypse.",
  "Sure is nice to see a friendly face out here.",
  "I think there's something stuck in your teeth..."
];

function setup() {
  createCanvas(500,500);
  textAlign(CENTER,CENTER);
}

function mousePressed() {
  background(255);
  var randomIndex = floor(random(0,dialog.length));
  var randomLine = dialog[randomIndex];
  text(randomLine,width/2,height/2);
}
```

---

## Choosing a random element - `random()`

- The key here is to use `random()` to get a random number between `0` and the number of elements in the array

```javascript
random(0,dialog.length);
```

- But this number won't work as an array index, though, it will have numbers after the point, e.g. `1.2987234`, and we want integers only, e.g. `1`

---

## Choosing a random element - `floor()`

- To change the random floating point number to an integer we want to __floor__ it, basically chop off everything after the point

```javascript
floor(random(0,dialog.length));
```

- Thus `1.234789` would become `1` and `3.000001` would become `3` and so on
- We use __floor__ because we know the number from `random()` is between `0` and the array length __not including the array length__
- So if the array is four elements long, `random(0,dialog.length)` will never return `4.0` or higher
- When we `floor()` such a number, we're guaranteed to get a valid array index

???

- (If we __rounded__ it, for instance, we could get `4`, which isn't a valid index)


---

## Choosing a random element - all together

```javascript
dialog[floor(random(0,dialog.length))]
```

- So this specifies a random element in the array

---

## Cycling through an array

- One nice trick to know with an array is being able to cycle through it over time
- And then wrap back around when you hit the end
- For example...

---

## The Song that Doesn't End (Array Mix)

```javascript
var lyrics = [
  "This is the song that doesn't end",
  "Yes it goes on and on my friend",
  "Some people started singing it,\nnot knowing what it was",
  "And they'll continue singing it forever,\njust because:"
];
var lyricIndex = 0;

function setup() {
  createCanvas(640,480);
  textSize(24);
  textAlign(CENTER,CENTER);
}

function mousePressed() {
  background(255);
  text(lyrics[lyricIndex],width/2,height/2);
  lyricIndex++;
  if (lyricIndex >= lyrics.length) {
    lyricIndex = 0;
  }
}
```

---

## The Song that Doesn't End (Slightly Advanced Modulo Mix)

```javascript
var lyrics = [
  "This is the song that doesn't end",
  "Yes it goes on and on my friend",
  "Some people started singing it,\nnot knowing what it was",
  "And they'll continue singing it forever,\njust because:"
];
var lyricIndex = 0;

function setup() {
  createCanvas(640,480);
  textSize(24);
  textAlign(CENTER,CENTER);
}

function mousePressed() {
  background(255);
  text(lyrics[lyricIndex],width/2,height/2);
  lyricIndex = (lyricIndex + 1) % lyrics.length;
}
```

???

- Module, or `%`, returns the remainder after division
- `10 % 1 === 0` because there is no remainder when you divide `10` by `1`
- `10 % 3 === 1` because `3` divides into `10` three times with `1` left over
- `10 % 7 === 3` because `7` divides into `10` once with `3` left over
- `7 % 10 === 7` because `10` divides into `7` zero times with `7` left over

---

## We're not just `push()`ing anymore

- We've seen we can use `push()` with an array to add an element to the end

```javascript
var numbers = [1,2,3,4,5];
numbers.push(6);
// numbers === [1,2,3,4,5,6]
```

- This is a handy way to dynamically add things onto the array
- And there are three related functions that it's worth knowing about

---

## `pop()`

- The corollary of `push()` is `pop()`
- It __removes__ the last element in an array and returns is

```javascript
var numbers = [1,2,3,4,5];
var last = numbers.pop();
// last === 5
// numbers === [1,2,3,4]
```

- It's important to note that `pop()` both __returns__ the value at the end of the array, and __removes__ that value from the array
- It __changes__ the array

???

- Together, `push()` and `pop()` allow us to treat an array as a __stack__
- A stack is an important data-type in computer science
- It operates according to LIFO - "last in, first out"
- That is, when you add stuff it goes to the top of the pile, so when you remove something, it'll be the most recently added thing

---

## `unshift()` and `shift()`

- `push()` and `pop()` do their thing at the __end__ of an array
- `unshift()` and `shift()` do their thing at the __start__ of an array

```javascript
var numbers = [1,2,3,4,5];
numbers.unshift(0);
// numbers === [0,1,2,3,4,5]

var first = numbers.shift();
// first === 0
// numbers === [1,2,3,4,5]
```

???

- Assuming we imagine the priority of the elements in an array to move from right to left (e.g. the elements at the start of the array are at the "head of the queue") we can use these functions to implement queuing
- When we add something, we should add it to the __end__ of the array because it should be last in the queue, so we use `push()`
- When we take something off, we should remove it from the __front__ of the array, because it is first in the queue, so we use `shift()`
- (If you wanted the front of the queue to be at the end of the array you'd use `unshift()` and `pop()` instead.)

---

## There are more

- Other very helpful array methods include
  - `indexOf()`
  - `slice()`
  - `concat()`
  - `every()`
  - `map()`
  - `splice()`
  - `join()` (and `split()` for strings)
  - ... and more!


---

# Fin.
