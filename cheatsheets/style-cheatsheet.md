# Style Cheatsheet

- [Style Rules](#style-rules)
- [Commenting](#commenting)
- [Naming](#naming)

## Style Rules

### Formatting

- Use a considerate amount of white-space in the code
  - No huge gaps
  - But add space between different "ideas" in the code
- Respect the indentation rules (lines of code are progressively indented when inside curly brackets)
  - Consider installing the `atom-beautify` package to make this automated
- Care about what you code looks like

### Commenting

- Always comment:
  - at the top of script files to explain the overall program
  - before each function to explain its purpose and use
  - before any moderately complex code to explain what it does
- Comments should __explain__ code, not just restate the code

### Naming

- When naming variables, functions, properties, and classes
  - Follow the basic rules (e.g. generally letters only, numbers if absolutely necessary)
  - Choose a name that explains the purpose/meaning
  - Use `camelCase` (variables, functions, properties) or `FirstLetterCapitalization` (classes) as appropriate

### Committing

- Always include a prefix for the current exercise or project before your commit message (e.g. `Ex1:` or `P1:`)
- Always explain the changes made for the current commit in the summary field (and use the description field if you need to write a longer message)
- Commit often, each time you get something significant working
- Ideally commit only working code when possible

### File management

- Put your files in the appropriate location
  - Script files go in the `js/` folder
  - Images go in the `assets/images/` folder
  - Sounds go in the `assets/sounds/` folder
  - Etc.

---

## Commenting

### Commenting syntax

We can write text in our program that will _not_ be part of the program, this is called a comment. The simplest comment style uses two forward slashes.

```javascript
// Draw a rectangle
rect(0,0,100,100);
```

Some people prefer to write their comments next to the code it applies to.

```javascript
rect(0,0,100,100); // Draw a rectangle
```

There is another style of comment called a "multiline comment" which allows you to write comments over more than one line. They start with a `/*` and end with a `*/`.

```javascript
/*
We are about to draw a rectangle with the following parameters:
- Top left corner at 0,0
- Height and width of 100 pixels
*/
rect(0,0,100,100);
```

It's quite popular to use this style to create big blocks of text at the beginning of a file for instance. People often use more asterisks for decorative purposes.

```javascript
/**************************
The Perfect Program
by Pippin Barr

This program is perfect,
because it does nothing,
and therefore cannot break.
**************************/
```

### Commenting rules

You should include comments

1. __At the top of every file__ - Write a comment at the top of every file that gives its title, your name, and a summary of what the code in the file is for.
1. __Before function declarations__ - Write a comment just before you declare a function that explains how what the function does and what parameters it takes.
1. __Before or beside complex lines of code__ - Write a comment to explain any line or lines of code that are slightly complicated and might confuse someone else (or a future you).

When you write comments __don't just restate the code itself__. Your objective should always be to _explain_ what the code is for, not just say exactly what it does in a technical sense.

## Naming

### Variables

Variable names should

Describe the __meaning__ or __purpose__ of the value inside them...

```javascript
let myName = "Pippin"; // Good
let blurgh = "Pippin"; // Bad
```

Use __camelCase__

```javascript
let myName = "Pippin"; // Good
let myname = "Pippin"; // Bad
```

Only consist of letters and numbers (but not begin with numbers)

```javascript
let myName = "Pippin"; // Good
let ##myName## = "Pippin"; // Bad

let my1stName = "Pippin"; // Good (but kind of gross)
let 1stName = "Pippin"; // Bad
```
