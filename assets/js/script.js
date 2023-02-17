var questions = [
  {
    question: "Commonly used data types DO Not Include?",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: "alerts",
  },
  {
    question:
      "String values must not be enclosed within ____ when being assigned to variables?",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parenthesis",
    answer: "quotes",
  },
  {
    question: "The condition an if / else statement is enclosed with _______.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parenthesis",
    choice4: "square brackets",
    answer: "curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: "all of the above",
  },
];

// VARIABLE DECLARATIONS
var startContainer = document.getElementById("start");
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("startBtn");
var endResults = document.getElementById("results");
var questionTitle = document.getElementById("question");
var userScore = 0;
var highScores = document.getElementById("scores");
// var answerButtons = document.getElementById("answer-buttons");
var answerButtons = document.getElementById("btn");
var choices = Array.from(document.getElementsByClassName("btn"));
var currentQuestion = 0;
var acceptingAnswers = false;
var availableQuestions = [];
var questionCounter;
var maxQuestions = 4;

startButton.addEventListener("click", startGame);

function startGame() {
  startContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
  questionCounter = 0;
  availableQuestions = [...questions];
  displayQuestion();
  setTime();
}

displayQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    return window.location.assign("./scores.html");
  }
  currentQuestion = availableQuestions[questionCounter];
  questionTitle.textContent = currentQuestion.question;

  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.textContent = currentQuestion["choice" + number];
  });
  // availableQuestions.splice(currentQuestion, 1);
  acceptingAnswers = true;
  console.log(acceptingAnswers);
};

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    console.log(event.target);
    questionCounter++;
    displayQuestion();
  });
});

//TIMER STARTER CODE

var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var setToZero = 0;

function setTime() {
  // Sets interval in variable
  if (setToZero === 0) {
    setToZero = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;

      if (secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(setToZero);
        // Calls function to display end quiz page
      }
    }, 1000);
  }
}
