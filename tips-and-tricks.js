// Variable Declaration

// How do we declare a variable?
// keyword varName = value;
var game = "Mario";

// What if I want to change the variable?
game = true;
console.log(game);

game = "Call of Duty";
console.log(game);

// Primitive Data Types

var myVariable; // undefined
var age = 2; // number
var word = "Hello World"; //string
var trueOrFalse = false; // boolean

console.log(myVariable, age, word, trueOrFalse);

// Logical Operators

// They typically return boolean values
console.log(true && true); //true
console.log(true != false); //true
console.log(true && false); //false
console.log(true || false); //true

// COMPARISON OPERATORS

// == vs ===

var zero = "0";
var numZero = 0;
console.log(zero == numZero); // true -- checks for value (0 == 0)
console.log(zero === numZero); // false -- checks for type and value (string 0 != number 0)

// ARITHMETIC OPERATORS (+,-,/,*)

var a = 1;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

// Modulus(%) Demo: Is it even or odd?

// This is a common way to use Modulos(%).
// If there is a remainder of 0 when dividing by 2(num % 2)
// then the result will be 0. It will be 1 with an odd number
console.log("Six is an even number: ", 6 % 2 === 0);

// ARRAYS

var shoes = ["heels", 4, true, "sandals"];

// Accessing Values

console.log(shoes.indexOf("heels")); // --> logs index of specific value
// returns -1 if value does not exist

console.log(shoes[3]); // --> logs "sandals" because arrays are zero-indexed (starts @ 0)

/* Common Array Methods -- MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * .push()
 * .forEach()
 * .pop()
 * .slice()
 * .map()
 */

// OBJECTS

// Objects are made of key-value pairs

var johnsBirthday = {
  // name is the key and "John" is the value
  name: "John",
  birthYear: 2005,
  birthDay: "May 2nd",
  guests: [
    { name: "Julie", broughtGift: true, numOfPres: 2 },
    { name: "Patricia", broughtGift: false, numOfPres: 0 },
    { name: "Sammy", broughtGift: true, numOfPres: 3 },
  ],
  greet: function () {
    console.log("Happy Birthday!");
  },
};

// If you know the key, you can find the value
console.log(johnsBirthday["guests"]);

// The name of John's second guest
console.log(johnsBirthday.guests[1].name);

// You can also set functions as object values
// Tell john happy birthday
johnsBirthday.greet();
