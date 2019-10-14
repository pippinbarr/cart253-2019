# Project 2 - Enhancing Predator-Prey

__Grade__: 20% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 4 November 2019. (Three weeks.)

## Brief

Modify the Predator-Prey simulation to make it a better and more interesting and meaningful game, especially by introducing new classes of objects into the gameplay.

## Learning objectives

- Using Object-Oriented Programming to extend the way a game works
- Continuing to explore how code and experience are connected

## Challenges

As always, begin by downloading the start code ([game-oop-predator-prey.zip](https://github.com/pippinbarr/cart253-2019/raw/master/games/game-oop-predator-prey.zip)). Add it to your repository and commit it as "P2: Started project 2". Unlike in an exercise you should commit __each time you do a unit of work__ that makes sense to you as a step to getting your whole project done.

### Improve the game
Add a more sophisticated audio-visual experience. Use images or create more interesting abstract representations. Use audio. Improve the background. Consider a foreground? Add some more information about the state of play than just the predators' and prey's sizes.

### Add a title/start screen
It should display before the game starts. Let the player start the game by clicking the mouse (make a button if you want). Consider having an instructions screen too? A backstory screen perhaps?

### Add an ending screen
This could be when the player (or a player) dies, but it could be some other scenario. Consider having different ending screens depending on the results of the experience. Show some information about how they did and what happened. Give the option to reset the game and play again.

### Add two new classes
They should create two __new kinds of things__. These new thing should look different, should move differently (if they move), and if the players overlap them they should create some new effect for them. Maybe they slow down or speed up. Maybe they become tiny or huge. Maybe they become hard to see. Maybe it teleports them. Maybe it reverses their controls to confuse them. Maybe it makes them invincible if they're overlapping it. Make sure you have at least one of each of these objects in the playable game, ideally more.

### Use arrays
You should __many__ instances of some objects in the game at the same time. At minimum have either multiple Prey, multiple Predators, or multiples of your new classes - potentially all of these! Use this to explore the overall "ecosystem" created and see if you can find an interesting setup.

---

Remember that these challenges represent the __minimum__ changes to put into the game. As you work on it, allow yourself think about other things that would be fun and interesting to include in the game and implement them to get a high grade. As always, seek help to get these things done when you need it.

Remember the __Style Guide__ and make sure you code looks nice! (`atom-beautify` remains your best friend)


## Starter Code

[game-oop-predator-prey.zip](https://github.com/pippinbarr/cart253-2019/raw/master/games/game-oop-predator-prey.zip)


## Submission

You will submit this project as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart253-2019/issues

(Click on the Issue with the name of the project and your section letter and follow the instructions.


## Grading

Grading for projects will consider the following categories:

- __Implementation__ (40%)- the code runs, meets the challenges set, includes any further changes, has no errors, is interesting/creative, etc.,
- __Creativity__ (30%) - Uses code to create an interesting and expressive interpretation of the brief for the user. Has a clear point of view and conveys it consistently. Uses code in surprising ways to create new experiences.
- __Style__ (30%) - the code is well-commented, well-formatted and indented, uses good names for variables, functions, classes, etc., and has a good number of commits with well-written commit messages (commits include the prefix "P2:")

Each category for the project will be graded as follows:

- __Excellent__ (A-range) - Meets requirements perfectly
- __Good__ (B-range) - Meets requirements with some minor issues
- __Adequate__ (C-range) - Meets requirements but with clear issues
- __Poor__ (D-range) - Barely meets requirements
- __Non-submission / Unacceptable__ (F)
