// Create variable for container div
// *must have something on the page to append new el to*
// var containerUl = document.querySelector("#ul-container");

//  ** Steps in creating a new HTML element **

// - Create new element
// var newCard = document.createElement("li");

// -If there are attributes associated with this element, add them here
// newCard.setAttribute("class", "card");

// - Add content to the new element
// newCard.textContent = "Card 4"; // - good for unknown values

// optional alternative --> newCard.innerHTML("<span>Card 4</span>")

// - Append new element to something that already exists on the page
// containerUl.append(newCard);

// -----------------------------------------------------------------------------------

// CODING CHALLENGE - Create a form that adds a new card based on user input

// What do we need to do?
// - Create a button and append to page
// - Create an button and append to page
// - Create function(s) to execute on click
// - Create a 'click' event listener

// Variables
var containerUl = document.querySelector("#container-ul");
var formDiv = document.querySelector("#form-div");
var inputEl = document.querySelector("#user-input");
var cardDeck = ["King", "Queen", "Joker", "Jack"];

// 1st Step: Create and append button element
var submitBtn = document.createElement("button"); // --> <button></button>
submitBtn.setAttribute("class", "submitBtn"); // --> <button class="submitBtn"></button>
submitBtn.textContent = "Add a card!"; // --> <button class = "submitBtn">Add a card!</button>
formDiv.append(submitBtn);

// 2nd Step: Create functions for click event
function renderCards() {
  containerUl.innerHTML = "";

  for (var i = 0; i < cardDeck.length; i++) {
    var card = cardDeck[i];
    var li = document.createElement("li");
    li.setAttribute("class", "card");
    li.textContent = card;

    containerUl.appendChild(li);
  }
  inputEl.value = "";
}

function handleInput(e) {
  e.preventDefault();
  var cardText = inputEl.value;
  if (cardText !== "") {
    cardDeck.push(cardText);
  }
  renderCards();
}

renderCards();

// 3rd Step: Add event listener
formDiv.addEventListener("submit", handleInput);
