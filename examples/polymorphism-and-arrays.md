# Polymorphism and Arrays

One of the neat things we can do with polymorphism is use it as a way to deal with many similar objects stored in a single array. This is most obviously useful when we want to update the objects in an array every frame. If the objects are from different classes, but they all share a parent class, we can just treat them all the same using polymorphism.

Consider the following classes...

First we have a generic Shape class. This is a parent for our other classes and, most importantly, guarantees that the other classes have an `update()` and `display()` method that we can rely on when we treat them all as a group...

`Shape.js`
```javascript
class Shape {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x += random(-2,2); // Every Shape jiggles horizontally
  }

  display() {
    console.log("ERROR: A generic Shape cannot be displayed.");
  }
}
```

Our Square class extends the Shape class and just adds a `display()` method that displays a square shape in red.

`Square.js`
```javascript
class Square extends Shape {
  constructor(x,y,size) {
    super(x,y,size);
  }

  display() {
    push();
    rectMode(CENTER);
    fill(255,0,0);
    noStroke();
    rect(this.x,this.y,this.size,this.size);
    pop();
  }
}
```

Our Circle class also extends the Shape class, but adds the ability to pass a fill color in the constructor, adds the behavior of jiggling vertically in update, and displays a circle in `display()`.

`Circle.js`
```javascript
class Circle extends Shape {
  constructor(x,y,size,fillColor) {
    super(x,y,size);
    this.fillColor = fillColor;
  }

  update() {
    super.update();
    this.y += random(-2,2);
  }

  display() {
    push();
    fill(this.fillColor);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
```

Finally, to get really fancy we could have another class that extends one of the above __children__, in this case a GrowingCircle that extends the Circle class to add increasing in size to its `update()`.

`GrowingCircle.js`
```javascript
class GrowingCircle extends Circle {
  constructor(x,y,size,fillColor) {
    super(x,y,size,fillColor); // Calls the Circle constructor
  }

  update() {
    super.update(); // Calls the Circle update (which calls the Shape update)
    this.size += 1;
  }

  // No display method because it displays in the same way a Circle does
  // so we just let it inherit the Circle version of display from its parent
}
```

At this point we have one overall Shape class, and then three separate classes that are all __children__ of the Shape class (Square and Circle directly, GrowingCircle via Circle, making it a grandchild of Shape!). Because they are all still Shapes, we can put them all in the same array as a group, and treat them as shapes to update and display them.

`script.js`
```javascript
let shapes = [];
let numSquares = 10;
let numCircles = 20;
let numGrowingCircles = 15;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Create the squares
  for (let i = 0; i < numSquares; i++) {
    // Position the new square randomly and give it a random size
    let newSquare = new Square(random(0,width),random(0,height),random(50,100));
    // Add the new square to the shapes array
    shapes.push(newSquare);
  }
  // Create the circles
  for (let i = 0; i < numCircles; i++) {
    // Position the new circle randomly and give it a random size and fill
    let newCircle = new Circle(random(0,width),random(0,height),random(50,100),color(random(255,random(255),random(255))));
    // Add the new circle to the shapes array
    shapes.push(newCircle);
  }
  // Create the growing circles
  for (let i = 0; i < numGrowingCircles; i++) {
    // Position the new growing circle randomly and give it a random size and fill
    let newGrowingCircle = new GrowingCircle(random(0,width),random(0,height),random(50,100),color(random(255,random(255),random(255))));
    // Add the new growing circle to the shapes array
    shapes.push(newGrowingCircle);
  }

  // By this point we have 10 squares, 20 circles, and 15 growing circles in our shapes array.
  // That is, we have 45 SHAPES in that array, and we can treat it as an array of shapes,
  // knowing that each shape will respond appropriate to the basic shape methods of
  // update and draw with its own version.
}

function draw() {
  background(255);
  // Go through every shape in the array...
  for (let i = 0; i < shapes.length; i++) {
    // ... and update and display it
    shapes[i].update();
    shapes[i].display();
  }
}
```

As always with arrays, it doesn't matter whether we have 45 different kinds of shapes in this array or 4500, it will work the same way with the same for-loop. (With the caveat that the more shapes there are, the more likely we are to see performance issues in our program like a slow frame rate.)
