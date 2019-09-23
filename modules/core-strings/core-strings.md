### Core / CART 253 / Pippin Barr

# Strings

---

## A word is worth one thousandth of a picture!

- We often want to display text in our programs
- It can be the most efficient way to communicate an idea
- It can be an interestingly expressive part of any medium
- Typography is pretty fun to play around with
- __Strings__ are how we store text in code

---

## Strings

- A string is a __type__ of __value__
- As such we can store it in variables

```javascript
let myName = "Pippin"; // Now "Pippin" is inside the variable myName
console.log(name); // Prints "Pippin" to the JavaScript Console
text(myName,100,100); // Displays "Pippin" on the canvas at position 100,100
```

- We make strings by putting text inside quote marks

---

## Which quote marks?

- You will see strings created with different kinds of quote marks

```javascript
let myName = "Pippin";
let mySon = 'Felix';
let myCat = `Kasper`;
```

- All of these create strings (double quotes, single quotes, and back-ticks)
- Why use one or the other?

---

## Different quotes for different boats

- The most obvious reason to use different kinds of quote marks is if you need to have quote marks __in the string you're creating__

```
let quote = "He said, "How are you?""; // This doesn't work!
```

- You can't have quotes of the same kind you're using to __define__ the string __in__ the string
- So you would use different quotes in this case:

```javascript
let quote = 'He said, "How are you?"'; // This works
```

- Likewise:

```javascript
let contraction = "I ain't going nowhere!"; // We can use a single inside doubles
```

---

## "Adding" things to strings

- We can do a simple kind of "arithmetic" with strings by "adding" things to them
- JavaScript will convert (if necessary) whatever we want to add to a string

```javascript
let introduction = "Hi! My name is ";
let name = "Pippin";
let sayHello = introduction + name; // "Hi! My name is Pippin"
```

- This works with things other than strings

```javascript
let age = 101;
let sayAge = "I am " + age + " years old!"; // "I am 101 years old!"
```

- Note the need to include __spaces__ in the right places so the string displays nicely

---

## Template strings

- There's a kind of cool "new" way to do this if we use the back-tick version of strings!

```javascript
let name = "Pippin";
let sayHello = `Hi, my name is ${name}!`; // "Hi, my name is Pippin!"
```

- These are called "template strings", they allow us to insert the value of a variable using the special `${...}` notation inside the string, but __only__ with the back-tick style

```javascript
let age = 101;
let units = "years";
let sayAge = `I am ${age} ${units} old!`; // "I am 101 years old!";
```

- Arguably a little tidier and easier to read?

---

## Strings!

- So, any time we want to store or display text, we use strings
- We can create them using quotes of different kinds (double, single, back-tick)
- We can "add" values to a string to create a new string with that information added to it
- And template strings (back-ticks) can insert variables in a special way

---

# Fin
