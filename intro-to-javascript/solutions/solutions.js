// 1.
var game = "Mario";
// 2.
game = false;
console.log(game);

game = "Splatoon";
console.log(game);

// 3.
var myVariable; // undefined
var age = 2; // number
var word = "Goodbye"; //string
var trueOrFalse = true; // boolean

console.log(myVariable, age, word, trueOrFalse);

// 4.

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

console.log(evenOrOdd(numOfContestants));

// 5.

var numZero = 0;
var zero = "0";
console.log(zero == numZero); // true -- checks for value (0 == 0)
console.log(zero === numZero); // false -- checks for type and value (string 0 != number 0)

// 6.
var genres = ["romance", "pop", "country", "rock", "r&b"];

// 6a.
genres.push("k-pop");
console.log(genres);
// 6b.
var romAndPop = genres.slice(0, 2);
console.log(romAndPop);
// 6c.
var upperCaseGenres = genres.map(function (genre) {});

// 7
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
// 7a.
console.log(johnsBirthday.birthYear);
// 7b.
console.log(johnsBirthday.guests[0].broughtGift);
// 7c.
console.log(johnsBirthday.birthDay + ", " + johnsBirthday.birthYear);
// 7d.
var sammy = johnsBirthday.guests[2].broughtGift;

if (sammy) {
  johnsBirthday.greet();
}
// Bonus #1
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

// Coding Challenge Solution pending...
