// var config = {
//   API_KEY: [replace_with_API_Key],
//   BASE_URL: "https://api.unsplash.com/photos/random/?client_id=",
// };
import test from "../test";
// jQuery

// Create a Card with info from the form

// What components does a Bootstrap card have?
/* 
    * image
    * card body
    * card title 
    * button

*/

// Same steps as when we used DOM Traversal

// 1. Create the element
// 2. Add attributes
// 3. Add content
// 4. Append

// Select and already existing element

// Variables

var picturesDiv = $("#pictures-div");

// CARD CREATION
// var cardDiv = $("<div>").addClass("card mt-3").css("width", "18rem");
// var cardImg = $("<img>")
//   .addClass("card-img-top")
//   .attr(
//     "src",
//     "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26cs%3Dtinysrgb%26fit%3Dcrop%26h%3D32%26w%3D32%26s%3D7cfe3b93750cb0c93e2f7caec08b5a41&sa=X&ved=2ahUKEwii3tHdmsP-AhWElGoFHaG4BsUQgwN6BAgJEAE&biw=1440&bih=789&dpr=2"
//   );
// var cardBody = $("<div>").addClass("card-body");
// var cardtext = $("<p>").addClass("card-text").text("This is some card text!");
// var cardTitle = $("<h5>").addClass("card-title").text("Card Title");
// var cardBtn = $("<a>").addClass("btn btn-info").text("Click Me!");
// cardBody.append(cardTitle, cardtext, cardBtn);
// cardDiv.append(cardImg, cardBody);

// mainDiv.append(cardDiv);

var inputEl = $("#inputEl");
var formDiv = $("#form-div");
var posts = [
  // {
  //   title: "default",
  //   description: "Description",
  //   img: "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26cs%3Dtinysrgb%26fit%3Dcrop%26h%3D32%26w%3D32%26s%3D7cfe3b93750cb0c93e2f7caec08b5a41&sa=X&ved=2ahUKEwii3tHdmsP-AhWElGoFHaG4BsUQgwN6BAgJEAE&biw=1440&bih=789&dpr=2",
  // },
];

// explain how to use bootstrap to reference html structure
function createPost(postObj) {
  var cardDiv = $("<div>").addClass("card mt-3 mx-2").css("width", "12rem");
  var cardImg = $("<img>").addClass("card-img-top").attr("src", postObj.img);
  var cardBody = $("<div>").addClass("card-body");
  var cardText = $("<p>").addClass("card-text").text(postObj.description);
  var cardTitle = $("<h5>").addClass("card-title").text(postObj.title);

  cardBody.append(cardTitle, cardText);
  cardDiv.append(cardImg, cardBody);

  picturesDiv.append(cardDiv);
  // posts.push(postObj);
}

function renderPosts() {
  picturesDiv.html("");

  for (var i = 0; i < posts.length; i++) {
    createPost(posts[i]);
  }

  inputEl.val("");
  console.log();
}

// AJAX calls

// format the url using the info we recieved from the user

function handleSubmit(e) {
  e.preventDefault();

  var queryTerm = inputEl.val();
  var count = 1;
  var orientation = "squarish";

  $.ajax({
    url:
      config.BASE_URL +
      config.API_KEY +
      "&query=" +
      queryTerm +
      "&count=" +
      count +
      "&orientation=" +
      orientation,
    method: "GET",
  }).then(function (response) {
    var post = response[0];
    // console.log(post.alt_description, post.urls.regular, queryTerm);
    var newPost = {
      description: post.alt_description,
      img: post.urls.small,
      title: queryTerm,
    };

    posts.push(newPost);
    renderPosts();
  });
}
// Submit event
formDiv.on("submit", handleSubmit);
