//VARIABLE DECLARATIONS
var submitBtn = document.getElementById("submitBtn");
var initialInput = document.querySelector("#initials-text");
var initialsForm = document.querySelector("#initials-form");
var initialsList = document.querySelector("#initials-list");
var initials = [];

//Beginning function to enter and user initials on the page
function renderInitials() {
  initialsList.textContent = "";

  for (var i = 0; i < initials.length; i++) {
    var initial = initials[i];

    //Creating li elements to be appended to the page with a button to remove them
    var li = document.createElement("li");
    li.textContent = initial;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Remove";

    li.appendChild(button);
    initialsList.appendChild(li);
  }
}

function init() {
  var storedInitials = JSON.parse(localStorage.getItem("initials"));
  if (storedInitials !== null) {
    initials = storedInitials;
  }
  renderInitials();
}

//Storing the initials in localStorage from the input
function storeInitials() {
  localStorage.setItem("initials", JSON.stringify(initials));
}

initialsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var initialText = initialInput.value.trim();
  if (initialText === "") {
    return;
  }
  initials.push(initialText);
  initialInput.value = "";

  storeInitials();
  renderInitials();
});

//Click function to enable the remove button functionality
initialsList.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    initials.splice(index, 1);

    storeInitials();
    renderInitials();
  }
});

init();
