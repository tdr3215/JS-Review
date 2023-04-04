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
var empty = ""; // null

console.log(myVariable);

// Logical Operators

// They typically return boolean values
console.log(true && true); //true
console.log(true != false); //true
console.log(true && false); //false
console.log(true || false); //true

// Comparison Operators

// == vs ===

var zero = "0";
var numZero = 0;
console.log(zero == numZero); // true -- checks for value (0 == 0)
console.log(zero === numZero); // false -- checks for type and value (string 0 != number 0)

// Arithmetic Operators (+,-,/,*)

var a = 1;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

// Modulus(%) Demo: Is it even or odd?

// Real World Example

/* Write a function to determine if a number is even or odd*/

function evenOrOdd(num) {
  // for the case that the num is even

  if (num % 2 === 0) {
    console.log("This is an even number!");
  } else {
    console.log("This is an odd number!");
  }
}

// Example: Can the prize money be split evenly amongst the contestants?
var numOfContestants = 14;

evenOrOdd(numOfContestants);
// Objects

var johnsBirthday = {
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

// ** Print the values to the console **

// What year was John born in?
console.log(johnsBirthday.birthYear);
// Julie brought a birthday gift. True or False
console.log(johnsBirthday.guests[0].broughtGift);
// What is John's birthdate? ex: May 2nd, 2005
console.log(johnsBirthday.birthDay + ", " + johnsBirthday.birthYear);
// If Sammy brought a present, greet John with Happy birthday
var sammy = johnsBirthday.guests[2].broughtGift;

if (sammy) {
  johnsBirthday.greet();
}
// Bonus
// Which one of John's friends brought the most gifts?

function mostGifts(guestsArr) {
  var mostGifts = guestsArr[0].numOfPres;

  for (var i = 0; i < guestsArr.length; i++) {
    if (guestsArr[i].numOfPres > mostGifts) {
      mostGifts = guestsArr[i].numOfPres;
    }
  }

  console.log(mostGifts);
}

mostGifts(johnsBirthday.guests);
