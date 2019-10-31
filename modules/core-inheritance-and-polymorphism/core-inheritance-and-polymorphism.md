### CART 253 / Pippin Barr

# Inheritance and Polymorphism

---

## Contents

- Inheritance
- Polymorphism

---

## Inheritance

- One thing that happens when writing classes is that we can often end up writing classes very similar to each other
- For example you might be making a fancy version of Pong which has different kinds of balls, and you end up making a separate class for each type of ball, repeating lots of the same code
- This is clearly inefficient, and __inheritance__ is the solution
- Let's look at a simple example first

???

- Examples are taken from Daniel Shiffman's book _Learning Processing_

---

## Dog

```javascript
class Dog {
  constructor(age) {
    this.age = age;
  }

  eat() {
    console.log("Nom nom nom");
  }

  sleep() {
    console.log("Zzz");
  }

  bark() {
    console.log("Woof!");
  }
}
```

- A perfectly reasonable class structure for a dog
- A basic constructor, and some fundamental methods

---

## Cat

```javascript
class Cat {
  constructor(age) {
    this.age = age;
  }

  eat() {
    console.log("Nom nom nom");
  }

  sleep() {
    console.log("Zzz");
  }

  meow() {
    console.log("Meow!");
  }
}
```

- Also perfectly reasonable, but __almost exactly the same as Dog__
- It just has a different name and `meow()` instead of `bark()`
- If we want even more animals, this is going to get tedious

---

## Animals...

- If we think about it, both cats and dogs are kinds of __animals__
- A cat is a kind of animal that does various animal things (like have an age, eat, and sleep) and also makes a particular sound (it meows)
- A dog is also a kind of animal and does all those same animal things (age, eat, sleep), and makes a different sound (it barks)
- __Inheritance__ will let us create a __parent__ `Animal` class that takes care of the common stuff, and then create __child classes__ that extend on that with specifics!

---

## Animal

```javascript
class Animal {
  constructor(age) {
    this.age = age;
  }

  eat() {
    console.log("Nom nom nom");
  }

  sleep() {
    console.log("Zzz");
  }
}
```

- The `Animal` class takes care of the fundamentals!

---

## Children

```javascript
class Dog extends Animal {
  constructor(age) {
    super(age);
  }

  bark() {
    console.log("Woof!");
  }
}
```

```javascript
class Cat extends Animal {
  constructor(age) {
    super(age);
  }

  meow() {
    console.log("Meow!");
  }
}
```

- Note the use of `extends` with the parent name in the class declaration
- Note the use of `super(age)` to call the __parent__ constructor

---

## Cat and Dog children

- So we can create a child class that __extends__ or __inherits from__ a parent class
- This means the child (Dog and Cat) will have all the properties and methods of the parent, plus whatever they add to it (`bark()` for `Dog` and `meow()` for `Cat`)

```javascript
let fluffy = new Cat(10);
fluffy.eat(); // "Nom nom nom" (inherited from Animal parent)
fluffy.sleep(); // "Zzz" (inherited from Animal parent)
fluffy.meow(); // "Meow!" (directly from Cat)

let fido = new Dog(11);
fido.eat(); // "Nom nom nom" (inherited from Animal parent)
fido.sleep(); // "Zzz" (inherited from Animal parent)
fido.bark(); // "Woof!" (directly from Dog)
```

- Pretty convenient!

---

## Getting more specific

- If we want to, we can also make certain Animal methods more in a child class, while also including the parent's behavior using `super`

```javascript
class Dog extends Animal {
  constructor(age) {
    super(age);
  }

  eat() {
    super.eat(); // super refers to the PARENT class
    console.log("*makes a huge mess*");
  }

  bark() {
    console.log("Woof!");
  }
}
```

```javascript
let fluffy = new Cat(10);
fluffy.eat(); // "Nom nom nom"
let fido = new Dog(11);
fido.eat(); // "Nom nom nom" "*makes a huge mess*"
```

---

## A working example in p5

- We will define a parent `Shape` class and then create child classes to extend it

```javascript
class Shape {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x += random(-1,1);
    this.y += random(-1,1);
  }

  display() {
    // A generic shape cannot be displayed
    // But it makes sense to tell anyone extending this class to include one!
  }
}
```

- Remember we put this code in a new file called `Shape.js` and include it in our `index.html`

---

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

- Remember we put this code in a new file called `Square.js` and include it in our `index.html`
- Note there is no need to write the `update()` function for `Square` because it is inherited
- We __do__ write `display()` so it __overrides__ the empty `Shape` `display()`
- And we have to write the `constructor()` for Square, though in this case it only calls the parent constructor using `super()`

---

## A note on ordering

- Note that when we're working with inheritance it __matters what order we include our files__ in `index.html`
- We need to __include the parent class first__, then the children, so:

```html
<script src="js/Shape.js"></script>
<script src="js/Square.js"></script>
<script src="js/script.js"></script>
```

- This is because the definition of `Square` __uses__ `Shape`, so our program needs to know what a `Shape` is before we use it to define a `Square`
- It also makes sense (though is not required) to include our main script last, since it uses all the things that precede it

---

```javascript
let mySquare1;
let mySquare2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mySquare1 = new Square(random(0,width),random(0,height),100);
  mySquare2 = new Square(random(0,width),random(0,height),100);
}

function draw() {
  background(255);

  mySquare1.update();
  mySquare2.update();

  mySquare1.display();
  mySquare2.display();
}
```

- Note that our square's `update()` is being handled by the `Shape` class (the parent) while its `display()` is being handled by the `Square` class (which is more specific)

---

## Activity: `Circle`

1. Create a new file called `Circle.js` and save it in your `js/` folder
2. Add `Circle.js` to your `index.html` using a `<script>` tag (remember to include it __after__ `Shape.js`)
3. Define the `Circle` class to extend `Shape`
4. Add a `constructor` that calls the `super` constructor, just like `Square`
5. Add an `update` that calls `super.update()` __and__ causes `this.size` to jiggle too (by adding a random number between `-5` and `5` let's say)
6. Add a `display` method like `Square`'s, but that draws an circle instead (choose a different `fill` color)
7. Create at least one new `Circle` in the main script and `update` and `display` it

???

`Circle.js`
```javascript
class Circle extends Shape {
  constructor(x,y,size) {
    super(x,y,size);
  }

  update() {
    super.update(); // Do the generic Shape update()
    this.size += random(-1,1); // Also jiggle in size
    // Note how we can refer to the size property even though it's
    // only defined and stored in Shape
  }

  display() {
    push();
    ellipseMode(CENTER);
    fill(0,255,0);
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
```

`script.js`
```javascript
let mySquare1;
let mySquare2;
let myCircle1;
let myCircle2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mySquare1 = new Square(random(0,width),random(0,height),100);
  mySquare2 = new Square(random(0,width),random(0,height),100);
  myCircle1 = new Circle(random(0,width),random(0,height),100);
  myCircle2 = new Circle(random(0,width),random(0,height),100);
}

function draw() {
  background(255);

  mySquare1.update();
  mySquare2.update();
  myCircle1.update();
  myCircle2.update();

  mySquare1.display();
  mySquare2.display();
  myCircle1.display();
  myCircle2.display();
}
```

---

## Activity: Extra parameter for `Circle`

1. Add another parameter to the `Circle` `constructor` so you can give it a `fillColor`
2. In the `constructor` store the `fillColor` in a `this.fillColor` property
3. In the `display` method, set the `fill` to `this.fillColor`
4. In the main program, remember to add another parameter to your new Circles that specifies their color

???

`Circle.js`
```javascript
class Circle extends Shape {
  constructor(x,y,size,fillColor) { // NEW
    super(x,y,size);
    this.fillColor = fillColor; // NEW
  }

  update() {
    super.update();
    this.size += random(-1,1);
  }

  display() {
    push();
    ellipseMode(CENTER);
    fill(this.fillColor); // NEW
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
```

`script.js`
```javascript
let mySquare1;
let mySquare2;
let myCircle1;
let myCircle2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mySquare1 = new Square(random(0,width),random(0,height),100);
  mySquare2 = new Square(random(0,width),random(0,height),100);
  myCircle1 = new Circle(random(0,width),random(0,height),100,color(0,0,255));
  myCircle2 = new Circle(random(0,width),random(0,height),100,color(255,255,0));
}

function draw() {
  background(255);

  mySquare1.update();
  mySquare2.update();
  myCircle1.update();
  myCircle2.update();

  mySquare1.display();
  mySquare2.display();
  myCircle1.display();
  myCircle2.display();
}
```

---

## Optional Activity: `Line`

- Write a `Line` class that extends `Shape`
- The constructor should take as parameters the (x,y) coordinates of each end of the line, `x`, `y`, `x2`, `y2` - it doesn't need a `size` parameter
- The constructor should call the `super` version of the constructor and pass through the first coordinate and `undefined` for the size parameter, then it should store the second coordinate in properties.
- The `update()` method should call the `super` class's update, and then it should make the second set of coordinates jiggle in the same way.
- `display()` should draw the line on screen between the two sets of points.
- You should update the main script to create one of these lines and `update()` and `display()` it in `draw()`
- (__Warning__: Don't call the variable you store your `Line` object `line` or it will interfere with p5's own `line()` function!)

???

`Line.js`
```javascript
class Line extends Shape {
  constructor(x,y,x2,y2) {
    super(x,y,undefined);
    this.x2 = x2;
    this.y2 = y2;
  }

  update() {
    super.update(); // Do the generic Shape update()
    this.x2 += random(-1,1);
    this.y2 += random(-1,1);
  }

  display() {
    push();
    stroke(0);
    line(this.x,this.y,this.x2,this.y2);
    pop();
  }
}
```

`script.js`
```javascript
let mySquare;
let myCircle;
let myOtherCircle;
let myLine;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mySquare = new Square(random(0,width),random(0,height),100);
  myCircle = new Circle(random(0,width),random(0,height),200,color(100,100,200));
  myOtherCircle = new Circle(random(0,width),random(0,height),200,color(200,100,200));
  myLine = new Line(random(0,width),random(0,height),random(0,width),random(0,height));
}

function draw() {
  background(255);

  mySquare.update();
  myCircle.update();
  myOtherCircle.update();
  myLine.update();

  mySquare.display();
  myCircle.display();
  myOtherCircle.display();
  myLine.display();
}
```

---

## Inheritance!

- So inheritance is pretty great!
- It allows us to define higher level classes that take care of common elements, and then to define child classes that add specifics without having to also define the generic stuff again
- This would make the job of having different kinds of Prey in a Predator-Prey simuliation easier, for example - we would define one base `Prey` class that handles all the default behaviors of a prey, and then `extend` that class into child classes that add different behaviors, appearance, etc...

---

## Polymorphism

- Inheritance is great, but... you may have noticed an inefficiency in the previous program?
--

- All the various children of `Shape` use both `update()` and `display()` to do their shapely things...
--

- Given that they're all a kind of `Shape`, it would make sense if we could group them together in an array
- We could then think about that array as an __array of Shapes__ and so only call the `Shape` level methods
- And indeed we __can__ do this!
- This property of objects inheriting from the same parent class to be used as if they "are" that parent class is called __polymorphism__

---

```javascript
let shapes = [];


function setup() {
  createCanvas(windowWidth,windowHeight);
  let mySquare1 = new Square(random(0,width),random(0,height),100);
  shapes.push(mySquare1);
  let mySquare2 = new Square(random(0,width),random(0,height),200);
  shapes.push(mySquare2);
  let myCircle1 = new Circle(random(0,width),random(0,height),200,color(0,0,255));
  shapes.push(myCircle1);
  let myCircle2 = new Circle(random(0,width),random(0,height),200,color(255,255,0));
  shapes.push(myCircle2);
}

function draw() {
  background(255);

  for (let i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].display();
  }
}
```

- This works because we know that `Square` and `Circle` both __extend__ the `Shape` class, they are children of that class and therefore can be relied on to have its methods and properties - __they are Shapes__!

???

- As such, we can always use any methods (and properties) in `Shape` on all of them - e.g. a child class like `Circle` can be treated as a `Circle` __or__ it can be treated as a `Shape`, __it is both__!
- This therefore allows us to work with them collectively like this

---

## Summary

- At heart, __Object-Oriented Programming__ is great because it allows us to keep related code together, and because it allows us to reuse that code by creating multiple objects from a single class
- __Inheritance__ adds to this power by allowing us to create related/similar classes without rewriting higher-level code
- __Polymorphism__ then makes our lives easier by allowing us to treat child classes as their parent class in situations where that benefits us (like collecting them together in an array)

---

# Fin.
