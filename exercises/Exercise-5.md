# Exercise 5 - Predators-Preys

__Grade__: 1.25% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 21 October 2018.

## Brief

Modify the Predator-Prey simulation game to improve it

## Learning objectives

- Understanding JavaScript Object-Oriented Programming
- Changing a `class`
- Working with multiple objects

## Challenges

As always, begin by downloading the starter code ([game-oop-predator-prey.zip](../games/game-oop-predator-prey.zip)). Add it to your repository and commit it as "__Ex5: Started exercise 5__". Then complete and commit each challenge below separately with a descriptive commit messages (__including the exercise prefix "Ex5:"__). Remember to comment your work.

1. Alter the `Predator` class to take direction key codes as arguments and create __two__ (or more) predators with different control keys in the world so that two (or more) people can play as predators
1. Add a property to the `Predator` that keeps track of how many `Prey` it has eaten
1. Alter the `handleEating()` method in `Predator` to increase the number of `Prey` eaten each time a `Prey` is fully consumed
1. Add the idea of sprinting to the `Predator`, including a key you hold down to activate it
1. Alter the `display()` method in `Predator` to show how many prey it has eaten (could be text, could be some other approach like a strokeWeight?)
1. Alter both `Predator` and `Prey` further to make them look more interesting visually (images or shapes are both fine)

__Optional__ challenges:
- What if eating prey permanently changes a Predator's maximum size? Or maximum speed?
- What if a Prey moves away from a Predator if it gets too close? (You could change the values in the `map()` function for determining the Prey's velocity)
- What if you played as the Prey instead and the Predators have some "AI" to chase you around?
- What if you played the game with touch controls/the mouse instead, dragging the Predator around the screen?


## Starter Code

[game-oop-predator-prey.zip](../games/game-oop-predator-prey.zip)

## Submission

You will submit this exercise as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart253-2019/issues

(Click on the Issue with the name of the exercise and your section letter and follow the instructions.)


## Grading

Grading for exercises is pass/fail and will consider the following categories:

- __Runs__ and __implements the challenges required__
- Has __suitable commenting for all added/changed code, functions and classes__
- Includes a minimum of one initial commit of the starting code, and at least __one commit message per challenge addressed__, all commits must have a __descriptive message__ prefixed with "Ex5:"
- Uses __good naming__ for added variables, functions, classes, properties, and methods
- Is __well structured__, with new code added in sensible places in sensible orders
