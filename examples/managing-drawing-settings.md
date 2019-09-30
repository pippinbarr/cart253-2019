# Managing Drawing Settings

## The problem

You may have noticed it's irritatingly easy to have the drawing settings for one part of your program affect other parts

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  rectMode(CENTER);
  fill(255,0,0);
  rect(width/2,height/2,200,200);

  textAlign(CENTER,CENTER);
  textSize(32);
  strokeWeight(3);
  stroke(0,255,0);
  text("Hello!",width/2,height/2);
}
```

In the above, it's likely I didn't want my text to have a red fill, and I didn't want the stroke color and weight applied to my rectangle.

## The solution

To avoid having to specify every single separate setting for every shape or text, we can instead save and restore the current drawing settings using `push()` ("save") and `pop()` ("restore").

```javascript
function setup() {
  createCanvas(500, 500);
}

function draw() {
  push();
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(width / 2, height / 2, 200, 200);
  pop();

  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  strokeWeight(3);
  stroke(0, 255, 0);
  text("Hello!", width / 2, height / 2);
  pop();
}
```

Now the square and the text are completely isolated from each other in terms of drawing settings. In effect, both use the default settings for everything except what they explicitly change, making it much, much easier to keep control over what's happening.

## The moral

Generally speaking, it's a __great__ idea to __always__ `push()` before you draw any shapes or text that __share the same drawing settings__, and to `pop()` afterwards.

This way, the settings in one part of your program will __never__ affect the settings in another part.
