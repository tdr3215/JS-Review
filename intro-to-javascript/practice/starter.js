// -- LOG EACH ANSWER TO THE CONSOLE --

// 1) Declare a variable named game with the value Mario

// 2) Change the value of game to a different type
// i.e. String --> Boolean

// 3) Create a variable for each primitive type below

// 4) Modulus(%) Demo: Is it even or odd?

// Write a function to determine if a number is even or odd
// i.e. evenOrOdd(4) --> "Even!"

// 5) Predict the outcomes of line 20 and line 21

var zero = "0";
var numZero = 0;
console.log(zero == numZero);
console.log(zero === numZero);

// ARRAYS

// 6) Change the array according to the specifications
var genres = ["romance", "pop", "country", "rock", "r&b"];

// 6a. Add a new genre to the end of the array

// 6b. Use an array method to create a new array with romance and pop

// 6c. Create a new array where each genre is uppercased

// 6d. What is the index of "rock"?

// OBJECTS

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

// 7) ** Log the values to the console **

//  7a. What year was John born in?

//  7b. Julie brought a birthday gift. True or False

//  7c. What is John's birthdate? ex: May 2nd, 2005

//  7d. If Sammy brought a present, greet John with Happy birthday

// BONUS #1
// Which one of John's friends brought the most gifts?

// 8) Coding Challenge - Should we have a sale?

/* Bob is performing his monthly inventory check at the
   car dealership. He wants to run a sale to increase 
   revanue. If there are more new cars than used cars, 
   he'll start the sale at 15% off. If there are more 
   than 6 new cars, he'll raise the discount to 20% off. 
   If the # of new cars and used cars are equal, he'll 
   cancel the sale. 

   Given the inventory, the program should calculate the following:
   * # of used cars
   * # of new cars
   * status of the sale (i.e. 15% off, 20% off, or canceled)

Log the results to the console using the following format:
"There are ___ new cars and ____ used cars. 
The status of our sale is _____."


**********
Bonus #2

Using the discount chosen in our first solution, log the original and discounted
prices for each car. If the sale was canceled, log only the original prices.

**********
*/

var inventory = [
  { name: "Toyota Corolla", usage: "new", price: 100 },
  { name: "Honda Accord", usage: "new", price: 100 },
  { name: "Ford Fusion", usage: "used",price: 100},
  { name: "Volkswagen Jetta", usage: "new",price: 100},
  { name: "Lincoln Navigator", usage: "new",price: 100},
  { name: "Hyundai Sonata", usage: "used",price: 100},
  { name: "Kia Optima", usage: "new",price: 100},
  { name: "Aston Martin", usage: "new",price: 100},
  { name: "Nissan Rogue", usage: "used",price: 100},
  { name: "Volvo XC90", usage: "new",price: 100}
];


