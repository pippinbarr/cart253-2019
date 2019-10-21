// Predator-Preys Simulation
// by Pippin Barr
//
// Creates a predator and many prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;

// The number of Prey to put into the simulation
let numPrey = 100;

// The prey array to contain all the Prey objects
// It starts out empty because we're going to add all the new Prey objects
// using a loop in our setup function.
let prey = [];

// setup()
//
// Sets up a canvas
// Creates objects for the predator and the array of prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  // The tiger is a predator
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40);

  // We use a for loop going from 0 up to the number of prey
  // and each time through the loop we create a new prey and
  // add it to our array
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

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the tiger
  tiger.handleInput();

  // Move the tiger
  tiger.move();

  // For the prey we need to use a loop to go through each
  // Prey object in the array (note the use of prey.length to automatically
  // get the length of the array, so we only count through exactly what's there)
  for (let i = 0; i < prey.length; i++) {
    // ... and tell it to move. Note the use of "i" to give the address/location
    // in the array of the specific Prey element we want to "talk to"
    prey[i].move();
  }

  // Because the tiger could eat any Prey object in the array, we need to do the same kind of
  // loop again for handleEating...
  for (let i = 0; i < prey.length; i++) {
    // Again, we refer to prey[i] to get the current Prey object as we
    // count through the array one by one
    tiger.handleEating(prey[i]);
  }

  // Display the tiger
  tiger.display();

  // And again we need to use the loop to go through the entire prey array
  // and tell each one in there to display itself
  for (let i = 0; i < prey.length; i++) {
    // And again we ask prey[i] to display itself because i gives us the current
    // element we are counting through in the loop
    prey[i].display();
  }
}


///////////////////////////////////////////////////////////////////
// Yes you could actually combine those three loops into one...
//
// function draw() {
//   // Clear the background to black
//   background(0);
//
//   // Handle input for the tiger
//   tiger.handleInput();
//
//   // Move the tiger
//   tiger.move();
//
//   // Move, handle eating, and display for each Prey in the array
//   for (let i = 0; i < prey.length; i++) {
//     prey[i].move();
//     tiger.handleEating(prey[i]);
//     prey[i].display();
//   }
//
//   // Display the tiger
//   tiger.display();
// }