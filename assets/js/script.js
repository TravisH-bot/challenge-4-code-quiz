// VARIABLE DECLARATIONS
var startContainer = document.getElementById("start");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var startButton = document.getElementById("startBtn");
var endResults = document.getElementById("results");
var questionTitle = document.getElementById("question-title");
var answerButtons = document.getElementById("answer-buttons");
var questionIndex = 0;
var userScore = 0;
var highScores = document.getElementById("scores");

var questions = [
  {
    question: "What color is the sky?",
    answers: [
      { text: "blue", correct: true },
      { text: "green", correct: false },
      { text: "gray", correct: false },
      { text: "white", correct: false },
    ],
  },
  {
    question: "What shape is planet Earth?",
    answers: [
      { text: "flat", correct: false },
      { text: "sphere", correct: true },
      { text: "square", correct: false },
      { text: "cylinder", correct: false },
    ],
  },
  {
    question: "What is the best pet",
    answers: [
      { text: "cat", correct: false },
      { text: "bird", correct: false },
      { text: "dog", correct: true },
      { text: "fish", correct: false },
    ],
  },
  {
    question: "Which is the best food?",
    answers: [
      { text: "blue", correct: false },
      { text: "green", correct: false },
      { text: "gray", correct: false },
      { text: "white", correct: true },
    ],
  },
];

startButton.addEventListener("click", startGame);

function startGame() {
  startContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
  questionIndex;
  displayQuestion();
}

function displayQuestion(questionIndex) {
  questionTitle.innerText = questionIndex.question;
}

//TIMER STARTER CODE

var timeEl = document.querySelector(".time");
var secondsLeft = 75;

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
  //This function will display the resultsContainer
}

// function buildQuiz() {
//   var output = [];

//   questions.forEach((currentQuestion, questionNumber) => {});
// }

// quizContainer.addEventListener("click", function (event) {
//   var element = event.target;
// });
