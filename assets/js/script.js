//VARIABLE DECLARATIONS

var questions = [
  {
    title: "What color is the sky?",
    choices: ["blue", "gray", "green", "white"],
    answer: 0,
  },
  {
    title: "What shape is the planet?",
    choices: ["square", "flat", "cylinder", "sphere"],
    answer: 3,
  },
  {
    title: "What is the best animal?",
    choices: ["cat", "dog", "bird", "rodent"],
    answer: 1,
  },
  {
    title: "What is the best food",
    choices: ["asian", "mexican", "italian", "american"],
    answer: 2,
  },
];

quizContainer.addEventListener("click", function (event) {
  var element = event.target;
});

//TIMER STARTER CODE
var mainEl = document.getElementById("main");

var timeEl = document.querySelector(".time");
var secondsLeft = 6;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to display end quiz page
      quizOver();
    }
  }, 1000);
}
setTime();

function quizOver() {
  //The quiz is over if all questions are answered or the timer = 0
  //I know I want to stop the timer when the quiz is over and their is time remaining.
  //The time remaining is the score to be logged.
  //If there is 0 time remaining, that is a 0 score but can still be logged.
}
